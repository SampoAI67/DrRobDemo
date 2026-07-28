import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { statement } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/** S2 — una sola frase, nessuna immagine, molta aria. */
export function Statement({ locale }: { locale: Locale }) {
  return (
    <section className="section bg-ground" aria-labelledby="approccio">
      <div className="wrap grid min-h-[24rem] grid-cols-12 items-center">
        <Reveal className="col-span-12 md:col-span-9 md:col-start-3 lg:col-span-8 lg:col-start-4">
          <h2 id="approccio" className="u-label text-ink-soft" data-reveal>
            {statement.kicker[locale]}
          </h2>

          <blockquote className="mt-10 md:mt-14" data-reveal>
            <p className="u-title max-w-[19ch] text-balance">
              {statement.quote[locale]}
            </p>
          </blockquote>

          <p className="u-label mt-8 text-ink-soft" data-reveal>
            {statement.attribution[locale]}
          </p>

          <div className="mt-12 md:mt-16" data-reveal>
            <Link href={href("biography", locale)} className="link-rule u-label">
              <span aria-hidden="true" className="rule" />
              {statement.link[locale]}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
