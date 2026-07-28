import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { RegMark } from "@/components/reg-mark";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CARD_GRID, TreatmentCard } from "@/components/treatment-card";
import { navLabel, studio, ui } from "@/content/site";
import {
  OPENING_WITHHELD,
  treatmentPage as copy,
} from "@/content/treatment-pages";
import { AREA_LABEL, byArea, type Treatment } from "@/content/treatments";
import { otherLocale, type Locale } from "@/lib/i18n";
import { media } from "@/lib/media";
import { href } from "@/lib/routes";
import { breadcrumbList, medicalProcedure } from "@/lib/structured-data";

/** Quanti correlati mostrare: gli altri dell'area, non tutti. */
const RELATED = 3;

/**
 * Scheda di un trattamento, condivisa fra le due lingue.
 *
 * L'apertura è 3:2 e si ferma a 40rem — le aperture del cliente arrivano a 960 px
 * e oltre i ~640 px di resa si vedrebbero ingrandite. Il corpo sta quindi in una
 * colonna accanto, non sotto: è il layout ad adattarsi all'immagine.
 */
export function TreatmentPage({
  locale,
  treatment: t,
}: {
  locale: Locale;
  treatment: Treatment;
}) {
  const siblings = byArea(t.area);
  const self = siblings.findIndex((s) => s.slug.it === t.slug.it);
  // Scorre l'area a partire dal trattamento corrente e riparte da capo: sempre
  // voci distinte, e ognuno dei fratelli compare su qualche scheda.
  const related = [...siblings.slice(self + 1), ...siblings.slice(0, self)].slice(
    0,
    RELATED,
  );

  const withheld = t.slug.it in OPENING_WITHHELD;
  const link =
    "u-label flex min-h-11 items-center text-ink-soft transition-colors hover:text-accent";

  return (
    <>
      {/* Lo slug intero, non quello di questa lingua: lo switch costruisce il
          percorso nell'altra, dove lo slug è diverso. */}
      <SiteHeader
        locale={locale}
        routeKey="treatment"
        slug={t.slug}
        variant="solid"
      />

      <main id="contenuto">
        <nav aria-label={copy.breadcrumb[locale]} className="wrap pt-6">
          <ol className="flex flex-wrap items-center gap-x-3">
            <li>
              <Link href={href("home", locale)} className={link}>
                {navLabel.home[locale]}
              </Link>
            </li>
            <li aria-hidden="true" className="u-label text-ink-soft">
              /
            </li>
            <li>
              <Link href={href("treatments", locale)} className={link}>
                {navLabel.treatments[locale]}
              </Link>
            </li>
            <li aria-hidden="true" className="u-label text-ink-soft">
              /
            </li>
            <li
              aria-current="page"
              className="u-label flex min-h-11 items-center text-ink"
            >
              <RegMark>{t.title[locale]}</RegMark>
            </li>
          </ol>
        </nav>

        <article>
          <Reveal className="wrap mt-6 md:mt-10">
            <p className="u-label text-ink-soft" data-reveal>
              <RegMark>{AREA_LABEL[t.area][locale]}</RegMark>
            </p>
            <h1 className="u-title mt-8 max-w-[20ch]" data-reveal>
              <RegMark>{t.title[locale]}</RegMark>
            </h1>
            <p className="u-lead mt-6 max-w-[46ch] text-ink" data-reveal>
              <RegMark>{t.summary[locale]}</RegMark>
            </p>
          </Reveal>

          <Reveal className="wrap mt-14 md:mt-20">
            <div className="grid grid-cols-12 gap-x-8 gap-y-12">
              {withheld ? null : (
                <figure
                  className="col-span-12 max-w-[40rem] md:col-span-6"
                  data-reveal
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-line">
                    <Image
                      src={media(t.open)}
                      alt={t.alt[locale]}
                      fill
                      sizes="(min-width: 640px) 640px, 92vw"
                      priority
                      className="object-cover"
                    />
                  </div>
                </figure>
              )}

              <div
                className={
                  withheld
                    ? "col-span-12 max-w-[62ch] space-y-5 md:col-span-7"
                    : "col-span-12 max-w-[62ch] space-y-5 md:col-span-5 md:col-start-8"
                }
                data-reveal
              >
                {t.body[locale].map((paragraph, i) => (
                  <p key={i} className="u-body text-ink">
                    <RegMark>{paragraph}</RegMark>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </article>

        <section
          aria-labelledby="correlati"
          className="wrap mt-24 md:mt-32"
        >
          <Reveal>
            <h2
              id="correlati"
              className="u-label border-b border-line pb-5 text-ink-soft"
              data-reveal
            >
              {copy.related[locale]}
            </h2>
            <ul className={`${CARD_GRID} mt-10 md:mt-14`}>
              {related.map((sibling) => (
                <li key={sibling.slug.it} data-reveal>
                  <TreatmentCard treatment={sibling} locale={locale} />
                </li>
              ))}
            </ul>
            <div className="mt-14" data-reveal>
              <Link
                href={href("treatments", locale)}
                className="link-rule u-label"
              >
                <span aria-hidden="true" className="rule" />
                {copy.allTreatments[locale]}
              </Link>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="prenota"
          className="on-dark mt-24 bg-dark md:mt-32"
        >
          <Reveal className="section wrap">
            <h2 id="prenota" className="u-label text-invert-soft" data-reveal>
              {copy.bookingKicker[locale]}
            </h2>
            <p className="u-lead mt-6 max-w-[34ch] text-invert" data-reveal>
              {copy.bookingLead[locale]}
            </p>
            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-12"
              data-reveal
            >
              <Link
                href={href("contact", locale)}
                className="btn btn-outline-invert u-label"
              >
                {ui.book[locale]}
              </Link>
              <a
                href={`tel:${studio.phoneHref}`}
                className="u-label flex min-h-11 items-center text-invert-soft transition-colors hover:text-accent-bright"
              >
                {studio.phone}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter locale={locale} />

      <JsonLd data={medicalProcedure(t, locale)} />
      <JsonLd
        data={breadcrumbList([
          { name: navLabel.home[locale], path: href("home", locale) },
          {
            name: navLabel.treatments[locale],
            path: href("treatments", locale),
          },
          { name: t.title[locale] },
        ])}
      />
    </>
  );
}
