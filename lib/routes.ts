import { defaultLocale, type Locale } from "./i18n";

/**
 * Tabella delle rotte. L'italiano vive sulla root, l'inglese sotto /en con slug
 * tradotti: una sola fonte di verità per link, hreflang, switch di lingua e
 * generateStaticParams del catch-all.
 */
export type PageId =
  | "home"
  | "its-me"
  | "medicina"
  | "chirurgia"
  | "technology"
  | "press"
  | "courses"
  | "contact"
  | "article";

export interface RouteDef {
  id: PageId;
  /** parametro extra: id dell'articolo per le pagine flagship */
  param?: string;
  path: Record<Locale, string>;
}

export const routes: RouteDef[] = [
  { id: "home", path: { it: "/", en: "/en" } },
  { id: "its-me", path: { it: "/its-me", en: "/en/about" } },
  { id: "medicina", path: { it: "/medicina-estetica", en: "/en/aesthetic-medicine" } },
  { id: "chirurgia", path: { it: "/chirurgia-estetica", en: "/en/aesthetic-surgery" } },
  { id: "technology", path: { it: "/advanced-beauty-technology", en: "/en/advanced-beauty-technology" } },
  { id: "press", path: { it: "/rassegna-stampa", en: "/en/recognition" } },
  { id: "courses", path: { it: "/corsi-di-formazione", en: "/en/teaching" } },
  { id: "contact", path: { it: "/contatti", en: "/en/contact" } },
  { id: "article", param: "endolift", path: { it: "/trattamenti/endolift", en: "/en/treatments/endolift" } },
  { id: "article", param: "ultherapy", path: { it: "/trattamenti/ultherapy", en: "/en/treatments/ultherapy" } },
  { id: "article", param: "cellfina", path: { it: "/trattamenti/cellfina", en: "/en/treatments/cellfina" } },
];

/** href della pagina `id` nella lingua `locale`. */
export function href(id: PageId, locale: Locale, param?: string): string {
  const route = routes.find((r) => r.id === id && r.param === param);
  if (!route) throw new Error(`Rotta sconosciuta: ${id}${param ? `/${param}` : ""}`);
  return route.path[locale];
}

/** Dato un path, restituisce la rotta e la lingua a cui appartiene. */
export function resolve(pathname: string): { route: RouteDef; locale: Locale } | undefined {
  const clean = pathname.replace(/\/+$/, "") || "/";
  for (const route of routes) {
    for (const locale of ["it", "en"] as Locale[]) {
      if (route.path[locale] === clean) return { route, locale };
    }
  }
  return undefined;
}

/** Segmenti del catch-all per una rotta, es. "/en/about" → ["en","about"]. */
export function segments(path: string): string[] {
  return path.split("/").filter(Boolean);
}

export const localeOf = (path: string): Locale => (path === "/en" || path.startsWith("/en/") ? "en" : defaultLocale);
