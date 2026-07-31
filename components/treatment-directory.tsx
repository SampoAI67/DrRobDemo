import Link from "next/link";
import { RegMark } from "@/components/reg-mark";
import { Reveal } from "@/components/reveal";
import {
  DIRECTORY,
  PROCEDURES,
  directoryCopy as copy,
  type ProcedureKey,
} from "@/content/directory";
import { bySlug } from "@/content/treatments";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/**
 * Elenco completo per zona del corpo, in coda all'indice trattamenti.
 *
 * Le 19 schede sono i trattamenti che il cliente racconta per esteso; queste
 * sono le 233 voci del suo listino, che sul sito attuale stanno in coda alle
 * pagine medicina e chirurgia e che il redesign aveva perso per strada. Servono
 * a due cose: dare una risposta a chi cerca «laser smagliature» o «capillari
 * gambe», e non far sembrare lo studio più piccolo di quello che è.
 *
 * Voci con `card` → link alla scheda. Le altre restano testo: sono righe di
 * listino, e scrivere una descrizione clinica per ognuna vorrebbe dire inventare
 * contenuto che il cliente non ha mai scritto.
 */
function Entry({ k, locale }: { k: ProcedureKey; locale: Locale }) {
  const procedure = PROCEDURES[k];
  const label = <RegMark>{procedure.label[locale]}</RegMark>;

  if (!procedure.card) {
    return <span className="u-body block py-1 text-ink-soft">{label}</span>;
  }

  // Lo slug in `content/directory.ts` è quello italiano, che è l'identificativo
  // stabile del trattamento; `bySlug` risale alla scheda e da lì si prende lo
  // slug della lingua in corso — in inglese `filler` diventa `dermal-fillers`.
  const treatment = bySlug(procedure.card);
  if (!treatment) return <span className="u-body block py-1 text-ink-soft">{label}</span>;

  return (
    <Link
      href={href("treatment", locale, treatment.slug[locale])}
      className="u-body flex min-h-8 items-center py-1 text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
    >
      {label}
    </Link>
  );
}

export function TreatmentDirectory({ locale }: { locale: Locale }) {
  return (
    <section
      aria-labelledby="elenco"
      className="wrap mt-24 border-t border-line pt-12 md:mt-32"
    >
      <Reveal>
        <p className="u-label text-ink-soft" data-reveal>
          {copy.kicker[locale]}
        </p>
        <h2 id="elenco" className="u-title mt-6 max-w-[24ch]" data-reveal>
          {copy.title[locale]}
        </h2>
        <p className="u-lead mt-6 max-w-[52ch] text-ink" data-reveal>
          {copy.lead[locale]}
        </p>
      </Reveal>

      {DIRECTORY.map((group) => (
        <Reveal key={group.id} className="mt-16 md:mt-20">
          <h3
            id={`elenco-${group.id}`}
            className="u-label border-b border-line pb-5 text-ink-soft"
            data-reveal
          >
            {group.title[locale]}
          </h3>

          {/* Le zone hanno lunghezze molto diverse — «Volto e collo» ha 32 voci,
              «Chirurgia dei capelli» tre — quindi griglia con celle allineate in
              alto, non colonne CSS che spezzerebbero una zona a metà. */}
          <div className="mt-10 grid grid-cols-1 items-start gap-x-4 gap-y-3 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
            {group.zones.map((zone) => (
              <details
                key={zone.id}
                className="zone-accordion border-t border-line"
                data-reveal
              >
                {/* `<details>` e non un accordion in JavaScript: si apre senza
                    script — quindi anche nell'export statico e con JS spento —
                    è già raggiungibile da tastiera e annunciato come
                    espandibile, e il contenuto resta nel markup, quindi i
                    crawler lo leggono anche da chiuso.

                    Serve perché srotolate tutte insieme le 231 voci fanno
                    11.300 px di scroll a 320px: la pagina diventa il muro che
                    questo elenco doveva sostituire. Chiuse, le 17 zone sono un
                    indice che si scorre in una schermata. */}
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 py-2 [&::-webkit-details-marker]:hidden">
                  <span className="u-label text-xs text-accent">
                    {zone.title[locale]}
                  </span>
                  <span
                    aria-hidden="true"
                    className="u-label shrink-0 text-xs text-ink-soft"
                  >
                    {zone.keys.length}
                    <span className="zone-mark ml-2">+</span>
                  </span>
                </summary>

                {/* `pt-1`: `::details-content` ritaglia con `overflow: hidden`
                    per poter animare l'altezza, e senza questo margine l'anello
                    di focus della prima voce — 2px con 3px di distacco — verrebbe
                    tagliato di sopra. */}
                <ul className="pt-1 pb-4">
                  {zone.keys.map((k) => (
                    <li key={k}>
                      <Entry k={k} locale={locale} />
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
