export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

/** Testo disponibile nelle due lingue del sito. */
export type L10n = Record<Locale, string>;
/** Liste parallele nelle due lingue. */
export type L10nList = Record<Locale, string[]>;

export function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

/**
 * Prefisso di rotta: l'italiano vive sulla root, l'inglese sotto /en.
 * `href("/contatti", "en")` → "/en/contact"
 */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}
