import type { Metadata } from "next";
import { href, type PageId } from "./routes";
import type { Locale } from "./i18n";

/** URL pubblico del concept (GitHub Pages di default, sovrascrivibile in build). */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sampoai67.github.io/DrRobDemo";

/**
 * Metadata comuni a tutte le pagine. `noindex` è deliberato: è un concept non
 * commissionato su un professionista reale e non deve finire nei motori di
 * ricerca al posto del sito ufficiale.
 */
export function pageMetadata({
  locale,
  id,
  param,
  title,
  description,
}: {
  locale: Locale;
  id: PageId;
  param?: string;
  title: string;
  description: string;
}): Metadata {
  const path = href(id, locale, param);
  const other: Locale = locale === "it" ? "en" : "it";

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    robots: { index: false, follow: false },
    alternates: {
      canonical: path,
      languages: {
        it: href(id, "it", param),
        en: href(id, "en", param),
        "x-default": href(id, "it", param),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "it" ? "it_IT" : "en_GB",
      alternateLocale: other === "it" ? "it_IT" : "en_GB",
      title,
      description,
      url: path,
      siteName: "Dott. Roberto Dell'Avanzato",
    },
  };
}
