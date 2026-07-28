import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { RegMark } from "@/components/reg-mark";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CARD_GRID, TreatmentCard } from "@/components/treatment-card";
import { CONCERNS } from "@/content/concerns";
import { concerns as concernsCopy } from "@/content/home";
import { navLabel } from "@/content/site";
import { treatmentsIndex as copy } from "@/content/treatment-pages";
import { AREA_LABEL, AREAS, byArea, bySlug } from "@/content/treatments";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { breadcrumbList } from "@/lib/structured-data";

/**
 * Indice dei trattamenti, condiviso fra le due lingue.
 *
 * Le otto zone stanno in cima come scorciatoie: sono i link che dalla home
 * portavano qui in attesa delle schede, e adesso puntano ognuno alla sua. Sotto,
 * i diciannove trattamenti raggruppati per area, nell'ordine di
 * `content/treatments.ts`.
 */
export function TreatmentsIndex({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} routeKey="treatments" variant="solid" />

      <main id="contenuto">
        <Reveal className="wrap pt-14 md:pt-20">
          <p className="u-label text-ink-soft" data-reveal>
            {copy.kicker[locale]}
          </p>
          <h1 className="u-title mt-8 max-w-[18ch]" data-reveal>
            {copy.title[locale]}
          </h1>
          <p className="u-lead mt-6 max-w-[46ch] text-ink" data-reveal>
            {copy.lead[locale]}
          </p>

          <nav
            aria-labelledby="zone"
            className="mt-14 border-t border-line pt-8 md:mt-20"
            data-reveal
          >
            <h2 id="zone" className="u-label text-ink-soft">
              {concernsCopy.kicker[locale]}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-1">
              {CONCERNS.map((concern) => {
                // `treatmentSlug` è quello italiano: bySlug accetta entrambi, e da
                // lì si ricava lo slug della lingua corrente.
                const target = bySlug(concern.treatmentSlug);

                return (
                  <li key={concern.n}>
                    <Link
                      href={
                        target
                          ? href("treatment", locale, target.slug[locale])
                          : href("treatments", locale)
                      }
                      className="group flex min-h-11 items-baseline gap-3"
                    >
                      <span className="u-label text-accent">{concern.n}</span>
                      <span className="u-label border-b border-transparent text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                        {concern.label[locale]}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Reveal>

        <div className="wrap pb-4">
          {AREAS.map((area, i) => (
            <section
              key={area}
              id={area}
              aria-labelledby={`area-${area}`}
              className={i === 0 ? "mt-20 md:mt-28" : "mt-24 md:mt-32"}
            >
              <Reveal>
                <h2
                  id={`area-${area}`}
                  className="u-label border-b border-line pb-5 text-ink-soft"
                  data-reveal
                >
                  <RegMark>{AREA_LABEL[area][locale]}</RegMark>
                </h2>
                <ul className={`${CARD_GRID} mt-10 md:mt-14`}>
                  {byArea(area).map((treatment) => (
                    <li key={treatment.slug.it} data-reveal>
                      <TreatmentCard treatment={treatment} locale={locale} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter locale={locale} />

      <JsonLd
        data={breadcrumbList([
          { name: navLabel.home[locale], path: href("home", locale) },
          { name: navLabel.treatments[locale] },
        ])}
      />
    </>
  );
}
