import Link from "next/link";
import { LOCALE_LABEL, otherLocale, type Locale } from "@/lib/i18n";
import { href, NAV_KEYS, type RouteKey } from "@/lib/routes";
import { navLabel, ui } from "@/content/site";

type Props = {
  locale: Locale;
  /** Rotta corrente: serve allo switch di lingua per restare sulla stessa pagina. */
  routeKey: RouteKey;
  slug?: string;
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
    <header
      className={
        over
          ? "wrap relative z-10 flex items-center justify-between gap-6 pt-6 md:pt-8"
          : "wrap flex items-center justify-between gap-6 border-b border-line bg-ground py-5"
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
        <ul className="flex items-center gap-5 md:gap-8">
          {NAV_KEYS.map((key) => (
            <li key={key} className={key === "biography" ? "hidden sm:block" : undefined}>
              <Link href={href(key, locale)} className={link}>
                {navLabel[key][locale]}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={href(routeKey, other, slug)}
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
