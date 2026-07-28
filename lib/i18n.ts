/**
 * Due lingue, italiano alla radice e inglese sotto /en.
 *
 * Ogni stringa visibile vive nei moduli di `content/` come `Localized<string>`, con
 * le due lingue affiancate: se si aggiunge una riga in italiano e si dimentica
 * l'inglese, TypeScript se ne accorge subito invece di lasciare un buco in pagina.
 */

export const LOCALES = ["it", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "it";

/** Un valore per lingua. Entrambe obbligatorie: niente traduzioni dimenticate. */
export type Localized<T> = Record<Locale, T>;

/** Codice per l'attributo `lang` e per gli `hreflang`. */
export const HTML_LANG: Localized<string> = {
  it: "it-IT",
  en: "en",
};

/** L'altra lingua: serve allo switch nell'header. */
export function otherLocale(locale: Locale): Locale {
  return locale === "it" ? "en" : "it";
}

/** Etichetta dello switch — mostra la lingua verso cui si va, non quella corrente. */
export const LOCALE_LABEL: Localized<string> = {
  it: "IT",
  en: "EN",
};
