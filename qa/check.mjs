#!/usr/bin/env node
/**
 * QA locale: apre l'export statico, scatta gli screenshot delle rotte principali
 * a desktop e mobile, passa axe-core e verifica che nessuna pagina scrolli in
 * orizzontale o abbia immagini rotte.
 *
 *   npx serve out -p 4173 &   (oppure qualunque server statico)
 *   node qa/check.mjs http://localhost:4173
 */
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync } from "node:fs";

const BASE = process.argv[2] ?? "http://localhost:4173";
const OUT = new URL("./screenshots/", import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const routes = [
  ["home", "/"],
  ["chi-sono", "/its-me/"],
  ["medicina", "/medicina-estetica/"],
  ["chirurgia", "/chirurgia-estetica/"],
  ["technology", "/advanced-beauty-technology/"],
  ["endolift", "/trattamenti/endolift/"],
  ["riconoscimenti", "/rassegna-stampa/"],
  ["formazione", "/corsi-di-formazione/"],
  ["contatti", "/contatti/"],
  ["en-home", "/en/"],
  ["en-medicina", "/en/aesthetic-medicine/"],
  ["en-contact", "/en/contact/"],
];

const viewports = [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
];

const axeOn = ["/", "/medicina-estetica/", "/contatti/", "/en/"];

const problems = [];

// il Chromium preinstallato può non combaciare con la build attesa da playwright
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);

for (const [vpName, viewport] of viewports) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await context.newPage();

  for (const [name, path] of routes) {
    const failed = [];
    // le prefetch di next/link vengono annullate di continuo: non sono guasti
    page.on("requestfailed", (r) => {
      if (r.failure()?.errorText !== "net::ERR_ABORTED") failed.push(`${r.url()} (${r.failure()?.errorText})`);
    });

    const res = await page.goto(BASE + path, { waitUntil: "networkidle" });
    if (!res || res.status() >= 400) problems.push(`${path} → HTTP ${res?.status()}`);

    // niente scroll orizzontale
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    if (overflow > 1) problems.push(`${path} @${vpName}: overflow orizzontale di ${overflow}px`);

    // immagini effettivamente caricate
    // solo le immagini che il browser ha davvero chiesto: quelle lazy fuori
    // schermo risultano "incomplete" per definizione e non sono un errore
    const broken = await page.evaluate(() =>
      [...document.images]
        .filter((i) => i.loading !== "lazy" || i.getBoundingClientRect().top < window.innerHeight * 1.5)
        .filter((i) => !i.complete || i.naturalWidth === 0)
        .map((i) => i.currentSrc || i.src)
    );
    if (broken.length) problems.push(`${path} @${vpName}: ${broken.length} immagini non caricate — ${broken[0]}`);
    if (failed.length) problems.push(`${path} @${vpName}: richieste fallite — ${failed[0]}`);

    // i blocchi con reveal compaiono allo scroll: senza scorrere, la cattura
    // a pagina intera li fotograferebbe ancora invisibili
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      // lo scroll programmatico è troppo rapido perché l'IntersectionObserver
      // registri ogni sezione: per la cattura si forza lo stato finale
      document.querySelectorAll(".reveal").forEach((el) => (el.dataset.visible = "true"));
      // in una cattura a pagina intera le lazy non entrano mai in viewport
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = "eager"));
    });
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}${name}-${vpName}.png`, fullPage: vpName === "desktop" });

    if (vpName === "desktop" && axeOn.includes(path)) {
      const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
        .analyze();
      for (const v of violations) {
        problems.push(`${path} axe [${v.impact}] ${v.id}: ${v.nodes.length} nodi — ${v.help}`);
      }
    }
    page.removeAllListeners("requestfailed");
  }
  await context.close();
}

await browser.close();

if (problems.length === 0) {
  console.log(`✓ ${routes.length} rotte × ${viewports.length} viewport: nessun problema.`);
} else {
  console.log(`${problems.length} problemi:\n` + problems.map((p) => "  · " + p).join("\n"));
  process.exitCode = 1;
}
