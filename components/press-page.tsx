import { BookingCta } from "@/components/booking-cta";
import { JsonLd } from "@/components/json-ld";
import { RegMark } from "@/components/reg-mark";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pressContent as copy } from "@/content/press";
import { navLabel } from "@/content/site";
import { asset } from "@/lib/asset";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { breadcrumbList } from "@/lib/structured-data";

/**
 * Rassegna stampa: i sette articoli pubblicati, con il PDF di ciascuno.
 *
 * Non è più un client component. Prima teneva uno stato per cinque filtri —
 * «Stampa & Riviste», «Interviste & Media», «Congressi & Atti», «Studi Clinici»
 * — costruiti su categorie che erano state inventate insieme al resto del
 * contenuto. Sette voci omogenee non hanno bisogno di essere filtrate: la
 * pulsantiera aggiungeva cinque bersagli da 32px e un motivo per sbagliare.
 *
 * I titoli vanno in tondo, non in `u-label`: sono citazioni lunghe fino a tre
 * righe, e in maiuscolo spaziato diventano paragrafi da decifrare.
 */
export function PressPage({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} routeKey="press" variant="solid" />

      <main id="contenuto">
        <section className="wrap pt-14 md:pt-20">
          <Reveal>
            <p className="u-label text-ink-soft" data-reveal>
              {copy.hero.eyebrow[locale]}
            </p>
            <h1 className="u-title mt-6 max-w-[20ch]" data-reveal>
              {copy.hero.title[locale]}
            </h1>
            <p className="u-lead mt-6 max-w-[50ch] text-ink" data-reveal>
              {copy.hero.subtitle[locale]}
            </p>
            {/* In italiano la nota è vuota: i documenti sono già nella lingua
                del lettore, e dirlo sarebbe rumore. */}
            {copy.languageNote[locale] ? (
              <p className="u-body mt-4 text-ink-soft" data-reveal>
                {copy.languageNote[locale]}
              </p>
            ) : null}
          </Reveal>
        </section>

        <section className="wrap mt-16 md:mt-20">
          <Reveal>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-12 border-t border-line pt-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
              {copy.items.map((item) => (
                <li key={item.id} data-reveal>
                  <article className="flex h-full flex-col">
                    {/* `lang="it"`: i titoli restano nella lingua del documento
                        anche nella versione inglese — sono citazioni, non copy —
                        e la sintesi vocale deve pronunciarli in italiano. */}
                    <h2
                      lang="it"
                      className="u-statement text-ink"
                      id={`art-${item.id}`}
                    >
                      <RegMark>{item.title}</RegMark>
                    </h2>

                    <p className="u-body mt-4 grow text-ink-soft">
                      <RegMark>{item.standfirst[locale]}</RegMark>
                    </p>

                    <p className="mt-6 border-t border-line pt-4">
                      <a
                        href={asset(`/stampa/${item.file}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        // L'etichetta è la stessa su sette schede: senza
                        // `aria-labelledby` un elenco di link estratto da uno
                        // screen reader direbbe sette volte «Leggi l'articolo».
                        aria-labelledby={`art-${item.id} leggi-${item.id}`}
                        id={`leggi-${item.id}`}
                        className="link-rule u-label"
                      >
                        <span aria-hidden="true" className="rule" />
                        {copy.actions.readPdf[locale]}
                        <span className="text-ink-soft">
                          ({copy.actions.pdfMeta[locale]})
                        </span>
                      </a>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* La pagina finiva qui, senza nessuna via d'uscita se non il footer. */}
        <BookingCta locale={locale} />
      </main>

      <SiteFooter locale={locale} />

      <JsonLd
        data={breadcrumbList([
          { name: navLabel.home[locale], path: href("home", locale) },
          { name: navLabel.press[locale] },
        ])}
      />
    </>
  );
}
