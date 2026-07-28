import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { RegMark } from "@/components/reg-mark";
import { SiteHeader } from "@/components/site-header";
import { hero } from "@/content/home";
import { ui } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { mediaFile } from "@/lib/media";
import { href } from "@/lib/routes";

/**
 * S1 — Hero full-screen.
 *
 * Due inquadrature diverse, non due misure della stessa: desktop 16:9 ancorato in alto,
 * mobile 9:16 centrato. È art direction, quindi `<picture>` + `media` — next/image non
 * sa cambiare crop al breakpoint. Le sorgenti sono già alle dimensioni giuste
 * (public/media/MANIFEST.md), niente upscale.
 */
export function Hero({ locale }: { locale: Locale }) {
  const desktop1280 = mediaFile("hero-desktop", 1280);
  const desktop1920 = mediaFile("hero-desktop", 1920);
  const desktop3200 = mediaFile("hero-desktop", 3200);
  const mobile828 = mediaFile("hero-mobile", 828);
  const mobile1500 = mediaFile("hero-mobile", 1500);

  return (
    <section className="on-dark relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-dark">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${desktop1280} 1280w, ${desktop1920} 1920w, ${desktop3200} 3200w`}
          sizes="100vw"
        />
        <img
          src={mobile1500}
          srcSet={`${mobile828} 828w, ${mobile1500} 1500w`}
          sizes="100vw"
          alt={hero.imageAlt[locale]}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Scrim in due strati.
          1. Da sinistra: il blocco di testo cade sul viso della paziente, che nella
             foto sta a sinistra. Un gradiente direzionale lo stacca a qualunque
             rapporto d'aspetto — object-position non basterebbe, perché il crop
             cambia da 16:9 a 16:10 e sposterebbe la paziente fuori inquadratura.
          2. Dal basso: leggibilità del blocco e della testata in alto. Rinforzato
             nella fascia 26-52%, dove poggia il wordmark. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to right, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.46) 28%, rgba(10,10,10,0) 58%)",
            "linear-gradient(to top, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.80) 26%, rgba(10,10,10,0.45) 52%, rgba(10,10,10,0.12) 72%, rgba(10,10,10,0.50) 100%)",
          ].join(", "),
        }}
      />
      <div aria-hidden="true" className="grain absolute inset-0" />

      <SiteHeader locale={locale} routeKey="home" variant="over" />

      <Reveal className="wrap relative z-10 mt-auto pb-[clamp(2.5rem,5vw,4.5rem)] pt-24">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1" data-reveal>
          {hero.kickers.map((kicker, i) => (
            <li key={kicker.it} className="flex items-center gap-4">
              {i > 0 ? (
                <span
                  aria-hidden="true"
                  className="block h-3 w-px bg-invert-soft"
                />
              ) : null}
              <span
                className={
                  i === hero.kickers.length - 1
                    ? "u-label text-accent-bright"
                    : "u-label text-invert"
                }
              >
                {kicker[locale]}
              </span>
            </li>
          ))}
        </ul>

        <h1 className="u-wordmark mt-5 text-invert" data-reveal>
          {hero.wordmark.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="u-statement mt-6 max-w-[46ch] text-invert" data-reveal>
          <RegMark>{hero.statement[locale]}</RegMark>
        </p>

        <div className="mt-8" data-reveal>
          <Link href={href("contact", locale)} className="btn btn-outline-invert u-label">
            {ui.book[locale]}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
