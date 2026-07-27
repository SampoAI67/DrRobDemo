import Link from "next/link";
import { Reveal } from "@/components/reveal";

/** S2 — una sola frase, nessuna immagine, molta aria. */
export function Statement() {
  return (
    <section className="section bg-ground" aria-labelledby="approccio">
      <div className="wrap grid min-h-[24rem] grid-cols-12 items-center">
        <Reveal className="col-span-12 md:col-span-9 md:col-start-3 lg:col-span-8 lg:col-start-4">
          <h2 id="approccio" className="u-label text-ink-soft" data-reveal>
            Il mio approccio
          </h2>

          <blockquote className="mt-10 md:mt-14" data-reveal>
            <p className="u-title max-w-[19ch] text-balance">
              «Il mio lavoro è rispettare e far emergere la tua identità.»
            </p>
          </blockquote>

          <p className="u-label mt-8 text-ink-soft" data-reveal>
            Roberto Dell&rsquo;Avanzato
          </p>

          <div className="mt-12 md:mt-16" data-reveal>
            <Link href="/biografia" className="link-rule u-label">
              <span aria-hidden="true" className="rule" />
              La biografia
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
