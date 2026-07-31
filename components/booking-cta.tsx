import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { studio, ui } from "@/content/site";
import { treatmentPage as copy } from "@/content/treatment-pages";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/**
 * Chiusura di pagina: prenotazione e numero di telefono, su fondo scuro.
 *
 * Viveva dentro `treatment-page.tsx` ed era l'unico punto del sito, insieme alla
 * pagina contatti, in cui comparisse un `tel:`. Biografia e rassegna stampa —
 * cioè le due pagine su cui si arriva già convinti, visto che in questo settore
 * recensioni, prezzi e prima/dopo sono vietati e la fiducia la costruiscono il
 * curriculum e le pubblicazioni — finivano invece nel nulla, con un link di
 * testo o niente affatto. Ora la chiusura è la stessa ovunque.
 *
 * Il numero è un link, non testo: su telefono è l'azione che converte, e
 * lasciarla da copiare a mano è il modo più semplice di perderla.
 */
export function BookingCta({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="prenota" className="on-dark mt-24 bg-dark md:mt-32">
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
  );
}
