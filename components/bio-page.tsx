import Image from "next/image";
import { BookingCta } from "@/components/booking-cta";
import { JsonLd } from "@/components/json-ld";
import { RegMark } from "@/components/reg-mark";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bioContent as copy } from "@/content/bio";
import { navLabel } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { media } from "@/lib/media";
import { href } from "@/lib/routes";
import { breadcrumbList } from "@/lib/structured-data";

/**
 * Biografia.
 *
 * In un settore in cui recensioni, prezzi, prima/dopo e percentuali di risultato
 * sono vietati, questa è la pagina che regge la fiducia: è la prova sociale
 * ammessa. Chiude quindi come le schede trattamento, con prenotazione e numero
 * di telefono, non con un link di testo.
 *
 * Le quattro icone stroke che aprivano le sezioni sono state tolte: il resto del
 * sito non ne usa nessuna, e le gerarchie qui le fanno filetto e occhiello.
 */
export function BioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} routeKey="biography" variant="solid" />

      <main id="contenuto">
        <section className="wrap pt-14 md:pt-20">
          <Reveal>
            <div className="grid grid-cols-1 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="u-label text-ink-soft" data-reveal>
                  {copy.hero.eyebrow[locale]}
                </p>
                <h1 className="u-title mt-6 max-w-[20ch]" data-reveal>
                  {copy.hero.title[locale]}
                </h1>
                <p className="u-lead mt-6 max-w-[50ch] text-ink" data-reveal>
                  {copy.hero.subtitle[locale]}
                </p>
              </div>

              <div className="lg:col-span-5" data-reveal>
                <div className="relative aspect-[3/4] overflow-hidden bg-line">
                  <Image
                    src={media(copy.hero.image)}
                    alt={copy.hero.alt[locale]}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="percorso" className="wrap mt-20 md:mt-32">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="percorso" className="u-label text-ink-soft" data-reveal>
                {copy.overview.title[locale]}
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 md:gap-x-8 lg:grid-cols-12">
                <div className="max-w-[65ch] space-y-6 lg:col-span-7" data-reveal>
                  {copy.overview.paragraphs.map((p, i) => (
                    <p key={i} className="u-body text-ink">
                      <RegMark>{p[locale]}</RegMark>
                    </p>
                  ))}
                </div>

                <div className="lg:col-span-5" data-reveal>
                  <div className="relative aspect-[3/2] overflow-hidden bg-line">
                    <Image
                      src={media(copy.overview.image)}
                      alt={copy.overview.alt[locale]}
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="didattica" className="wrap mt-20 md:mt-28">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="didattica" className="u-label text-ink-soft" data-reveal>
                {copy.teaching.title[locale]}
              </h2>

              <ul
                className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-8"
                data-reveal
              >
                {copy.teaching.items.map((item, index) => (
                  <li key={index} className="border-t border-line pt-5">
                    <p className="u-body max-w-[46ch] text-ink">
                      <RegMark>{item[locale]}</RegMark>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="societa" className="wrap mt-20 md:mt-28">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="societa" className="u-label text-ink-soft" data-reveal>
                {copy.affiliations.title[locale]}
              </h2>

              <ul
                className="mt-8 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3"
                data-reveal
              >
                {copy.affiliations.items.map((aff, idx) => (
                  <li key={idx} className="border-t border-line pt-4">
                    <p className="u-body text-ink">{aff[locale]}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Senza immagine, per il motivo spiegato in `content/bio.ts`. */}
        <section aria-labelledby="missioni" className="wrap mt-20 md:mt-32">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="missioni" className="u-label text-ink-soft" data-reveal>
                {copy.humanitarian.title[locale]}
              </h2>

              <div className="mt-8 max-w-[65ch] space-y-6" data-reveal>
                {copy.humanitarian.paragraphs.map((p, i) => (
                  <p key={i} className="u-body text-ink">
                    {p[locale]}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="etica" className="wrap mt-20 md:mt-32">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 id="etica" className="u-label text-ink-soft" data-reveal>
                {copy.ethics.title[locale]}
              </h2>

              <blockquote
                className="u-statement mt-8 max-w-[55ch] text-ink"
                data-reveal
              >
                {copy.ethics.quote[locale]}
              </blockquote>

              <div className="mt-8 max-w-[60ch] space-y-6" data-reveal>
                {copy.ethics.paragraphs.map((p, i) => (
                  <p key={i} className="u-body text-ink-soft">
                    {p[locale]}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <BookingCta locale={locale} />
      </main>

      <SiteFooter locale={locale} />

      <JsonLd
        data={breadcrumbList([
          { name: navLabel.home[locale], path: href("home", locale) },
          { name: navLabel.biography[locale] },
        ])}
      />
    </>
  );
}
