import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { credentials } from "@/content/site";
import { proof } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/** S7 — prova e contatto. Denso, si legge come un curriculum. */
export function Proof({ locale }: { locale: Locale }) {
  return (
    <section className="section bg-ground" aria-labelledby="studio">
      <Reveal className="wrap">
        <h2 id="studio" className="u-label text-ink-soft" data-reveal>
          {proof.kicker[locale]}
        </h2>

        <div
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3"
          data-reveal
        >
          {credentials.map((column, i) => (
            <dl key={i} className="flex flex-col gap-8">
              {column.map((block) => (
                <div key={block.label.it}>
                  <dt className="u-label text-ink-soft">{block.label[locale]}</dt>
                  {block.lines.map((line) => (
                    <dd key={line.it} className="u-meta mt-2 text-ink">
                      {line[locale]}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          ))}
        </div>

        <SiteFooter locale={locale} variant="inline" />
      </Reveal>
    </section>
  );
}
