import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { href, NAV_KEYS } from "@/lib/routes";
import { navLabel, ui } from "@/content/site";

type Props = {
  locale: Locale;
  /**
   * `inline` — barra in coda alla sezione «Studio e credenziali» della home, dove
   *   sta gia' dentro il contenitore `wrap` di quella sezione.
   * `standalone` — blocco a sé nelle pagine interne, con padding e contenitore propri.
   */
  variant?: "inline" | "standalone";
};

/** Navigazione di chiusura e richiamo alla prenotazione, uguale su ogni pagina. */
export function SiteFooter({ locale, variant = "standalone" }: Props) {
  const bar = (
    <div className="flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
      <nav aria-label={ui.siteNav[locale]}>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {NAV_KEYS.map((key) => (
            <li key={key}>
              <Link
                href={href(key, locale)}
                className="u-label flex min-h-11 items-center text-ink transition-colors hover:text-accent"
              >
                {navLabel[key][locale]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href={href("contact", locale)} className="btn btn-solid u-label self-start">
        {ui.book[locale]}
      </Link>
    </div>
  );

  // Sulla home la barra eredita margine e contenitore dalla sezione che la ospita:
  // estrarla in un <footer> proprio ne cambierebbe la spaziatura. `data-reveal` va
  // mantenuto o la barra comparirebbe subito invece di entrare con le altre.
  if (variant === "inline") {
    return (
      <footer className="mt-16 md:mt-20" data-reveal>
        {bar}
      </footer>
    );
  }

  return (
    <footer className="wrap pt-16 pb-16 md:pt-20 md:pb-20">{bar}</footer>
  );
}
