import Link from "next/link";
import { LOCALE_LABEL, otherLocale, type Locale } from "@/lib/i18n";
import {
  href,
  NAV_KEYS,
  slugFor,
  type RouteKey,
  type SlugArg,
} from "@/lib/routes";
import { navLabel, ui } from "@/content/site";

type Props = {
  locale: Locale;
  /** Rotta corrente: serve allo switch di lingua per restare sulla stessa pagina. */
  routeKey: RouteKey;
  /**
   * Slug della pagina corrente. Per le schede trattamento va passato il
   * `Localized<string>` intero, non lo slug di questa lingua: lo switch deve
   * costruire il percorso nell'altra, dove lo slug è diverso.
   */
  slug?: SlugArg;
  /**
   * `over` — trasparente sopra l'immagine dell'hero, testo chiaro.
   * `solid` — su fondo bone nelle pagine interne, testo scuro.
   */
  variant?: "over" | "solid";
};

/**
 * Testata condivisa.
 *
 * Prima viveva dentro `hero.tsx`, riscritta a mano, mentre il footer aveva una sua
 * costante `NAV` diversa: due liste di link da tenere allineate a memoria. Ora la
 * fonte è una sola, `NAV_KEYS` in lib/routes.ts.
 *
 * Nella variante `over` il wordmark è testo semplice — sulla home il link a sé stessi
 * non serve; nelle pagine interne diventa il link di ritorno.
 */
export function SiteHeader({ locale, routeKey, slug, variant = "solid" }: Props) {
  const over = variant === "over";
  const other = otherLocale(locale);

  const link = over
    ? "u-label flex min-h-11 items-center text-invert transition-colors hover:text-accent-bright"
    : "u-label flex min-h-11 items-center text-ink transition-colors hover:text-accent";

  return (
    // `flex-wrap` non è cosmetico: sotto i 400 px wordmark e nav insieme superano la
    // larghezza dello schermo. Sulla home il difetto era invisibile perché l'hero ha
    // `overflow-hidden` e tagliava fuori le ultime due voci — «Contatti» e lo switch
    // di lingua restavano irraggiungibili da telefono senza che nessuna misura di
    // scrollWidth se ne accorgesse. Meglio una testata su due righe che due link persi.
    <header
      className={
        over
          ? "wrap relative z-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pt-6 md:pt-8"
          : "wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line bg-ground py-5"
      }
    >
      {over ? (
        <span className="u-label text-invert">{ui.wordmark[locale]}</span>
      ) : (
        <Link href={href("home", locale)} className="u-label text-ink transition-colors hover:text-accent">
          {ui.wordmark[locale]}
        </Link>
      )}

      <nav aria-label={ui.mainNav[locale]}>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 md:gap-x-8">
          {NAV_KEYS.map((key) => (
            <li key={key} className={key === "biography" ? "hidden sm:block" : undefined}>
              <Link href={href(key, locale)} className={link}>
                {navLabel[key][locale]}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={href(routeKey, other, slugFor(slug, other))}
              hrefLang={other}
              aria-label={ui.switchLanguageAria[locale]}
              className={`${link} ${over ? "text-invert-soft" : "text-ink-soft"}`}
            >
              {LOCALE_LABEL[other]}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
