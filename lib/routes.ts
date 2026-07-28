/**
 * Mappa delle rotte, unica fonte di verità per nav, footer, switch di lingua e
 * `alternates.languages` nei metadata.
 *
 * Gli slug sono tradotti: `/trattamenti` in italiano, `/en/treatments` in inglese.
 * Quelli dei marchi restano identici nelle due lingue (Endolift è Endolift ovunque);
 * divergono solo i descrittivi, tipo `liposcultura-laser` / `laser-liposculpture`.
 */

import type { Locale, Localized } from "@/lib/i18n";

export type RouteKey =
  | "home"
  | "treatments"
  | "treatment"
  | "biography"
  | "contact"
  | "press";

/** Segmento di percorso per lingua. `treatment` è il genitore delle schede. */
const SEGMENTS: Record<RouteKey, Localized<string>> = {
  home: { it: "", en: "" },
  treatments: { it: "trattamenti", en: "treatments" },
  treatment: { it: "trattamenti", en: "treatments" },
  biography: { it: "biografia", en: "biography" },
  contact: { it: "contatti", en: "contact" },
  press: { it: "rassegna-stampa", en: "press" },
};

/**
 * Percorso assoluto di una rotta.
 *
 * L'italiano sta alla radice, l'inglese sotto `/en`: `href("contact", "it")` dà
 * `/contatti`, `href("contact", "en")` dà `/en/contact`.
 */
export function href(key: RouteKey, locale: Locale, slug?: string): string {
  const prefix = locale === "it" ? "" : "/en";
  const segment = SEGMENTS[key][locale];
  const tail = slug ? `/${slug}` : "";
  const path = `${prefix}${segment ? `/${segment}` : ""}${tail}`;
  return path || "/";
}

/** Voci della navigazione principale, nell'ordine in cui compaiono. */
export const NAV_KEYS: RouteKey[] = ["treatments", "biography", "contact"];

/**
 * Mappa per `alternates.languages`: dato un percorso in una lingua, i corrispondenti
 * nelle altre. Lo switch deve portare alla pagina equivalente, non alla home.
 */
export function alternates(key: RouteKey, slug?: string): Record<string, string> {
  return {
    "it-IT": href(key, "it", slug),
    en: href(key, "en", slug),
  };
}
