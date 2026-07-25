#!/usr/bin/env node
/**
 * Scarica le immagini originali di dellavanzatoroberto.it elencate in
 * content/images.json e ne genera le varianti responsive in public/media/.
 *
 * Gira sul runner GitHub (vedi .github/workflows/fetch-assets.yml) perché
 * l'ambiente di sviluppo dell'agente non ha egress verso il dominio.
 *
 *   node tools/fetch-images.mjs            scarica solo ciò che manca
 *   node tools/fetch-images.mjs --force    riscarica tutto
 */
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "media");
const LOCK = path.join(ROOT, "content", "images.lock.json");
const FORCE = process.argv.includes("--force");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

const exists = (p) =>
  access(p).then(
    () => true,
    () => false
  );

async function download(url, attempt = 1) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "image/*,*/*", Referer: "https://www.dellavanzatoroberto.it/" },
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  } catch (err) {
    if (attempt >= 4) throw err;
    const wait = 2 ** attempt * 1000;
    console.warn(`  ritento tra ${wait / 1000}s (${err.message})`);
    await new Promise((r) => setTimeout(r, wait));
    return download(url, attempt + 1);
  }
}

async function main() {
  const manifest = JSON.parse(await readFile(path.join(ROOT, "content", "images.json"), "utf8"));
  const { source, widths, images } = manifest;
  await mkdir(OUT_DIR, { recursive: true });

  const lock = {};
  let downloaded = 0;
  let skipped = 0;

  for (const img of images) {
    const url = source + img.path;
    const largest = path.join(OUT_DIR, `${img.id}-${widths[widths.length - 1]}.webp`);

    if (!FORCE && (await exists(largest))) {
      const meta = await sharp(largest).metadata();
      lock[img.id] = { width: meta.width, height: meta.height, widths, ratio: +(meta.width / meta.height).toFixed(4) };
      skipped++;
      continue;
    }

    console.log(`↓ ${img.id}  ${img.path}`);
    const buf = await download(url);
    const meta = await sharp(buf).metadata();
    const usable = widths.filter((w) => w <= meta.width);
    if (usable.length === 0) usable.push(meta.width);

    for (const w of usable) {
      const pipeline = sharp(buf).resize({ width: w, withoutEnlargement: true });
      await pipeline.webp({ quality: 78, effort: 5 }).toFile(path.join(OUT_DIR, `${img.id}-${w}.webp`));
    }
    // la variante più grande definisce le proporzioni usate nel markup
    const biggest = await sharp(path.join(OUT_DIR, `${img.id}-${usable[usable.length - 1]}.webp`)).metadata();
    lock[img.id] = {
      width: biggest.width,
      height: biggest.height,
      widths: usable,
      ratio: +(biggest.width / biggest.height).toFixed(4),
    };
    downloaded++;
  }

  await writeFile(LOCK, JSON.stringify(lock, null, 2) + "\n");
  console.log(`\n${downloaded} scaricate, ${skipped} già presenti — lock aggiornato (${Object.keys(lock).length} voci).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
