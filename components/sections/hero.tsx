import Link from "next/link";
import { Reveal } from "@/components/reveal";

const KICKERS = ["Chirurgia estetica", "Medicina estetica", "Milano"];

/**
 * S1 — Hero full-screen.
 *
 * Due inquadrature diverse, non due misure della stessa: desktop 16:9 ancorato in alto,
 * mobile 9:16 centrato. È art direction, quindi `<picture>` + `media` — next/image non
 * sa cambiare crop al breakpoint. Le sorgenti sono già alle dimensioni giuste
 * (public/media/MANIFEST.md), niente upscale.
 */
export function Hero() {
  return (
    <section className="on-dark relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-dark">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/media/hero-desktop-1280.webp 1280w, /media/hero-desktop-1920.webp 1920w, /media/hero-desktop-3200.webp 3200w"
          sizes="100vw"
        />
        <img
          src="/media/hero-mobile-1500.webp"
          srcSet="/media/hero-mobile-828.webp 828w, /media/hero-mobile-1500.webp 1500w"
          sizes="100vw"
          alt="Il dott. Roberto Dell'Avanzato esegue un trattamento iniettivo nel suo studio di Milano."
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Scrim: serve alla leggibilità del blocco in basso e alla testata in alto. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.74) 18%, rgba(10,10,10,0.34) 44%, rgba(10,10,10,0.08) 66%, rgba(10,10,10,0.46) 100%)",
        }}
      />
      <div aria-hidden="true" className="grain absolute inset-0" />

      <header className="wrap relative z-10 flex items-center justify-between gap-6 pt-6 md:pt-8">
        <span className="u-label text-invert">Dott. Dell&rsquo;Avanzato</span>
        <nav aria-label="Principale">
          <ul className="flex items-center gap-5 md:gap-8">
            <li>
              <Link
                href="/trattamenti"
                className="u-label flex min-h-11 items-center text-invert transition-colors hover:text-accent-bright"
              >
                Trattamenti
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="/biografia"
                className="u-label flex min-h-11 items-center text-invert transition-colors hover:text-accent-bright"
              >
                Biografia
              </Link>
            </li>
            <li>
              <Link
                href="/contatti"
                className="u-label flex min-h-11 items-center text-invert transition-colors hover:text-accent-bright"
              >
                Contatti
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Reveal className="wrap relative z-10 mt-auto pb-[clamp(2.5rem,5vw,4.5rem)] pt-24">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1" data-reveal>
          {KICKERS.map((label, i) => (
            <li key={label} className="flex items-center gap-4">
              {i > 0 ? (
                <span
                  aria-hidden="true"
                  className="block h-3 w-px bg-invert-soft"
                />
              ) : null}
              <span
                className={
                  i === KICKERS.length - 1
                    ? "u-label text-accent-bright"
                    : "u-label text-invert"
                }
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        <h1 className="u-wordmark mt-5 text-invert" data-reveal>
          <span className="block">Dr. Roberto</span>
          <span className="block">Dell&rsquo;Avanzato</span>
        </h1>

        <p className="u-statement mt-6 max-w-[46ch] text-invert" data-reveal>
          Chirurgia e medicina estetica mini-invasiva. Dal 2005 sviluppo e insegno
          la metodica Endolift<sup className="text-[0.6em]">®</sup>.
        </p>

        <div className="mt-8" data-reveal>
          <Link href="/contatti" className="btn btn-outline-invert u-label">
            Prenota una visita
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
