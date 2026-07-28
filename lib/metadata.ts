import type { Metadata } from "next";
import { HTML_LANG, type Locale } from "@/lib/i18n";
import { alternates, href, type RouteKey } from "@/lib/routes";
import { meta } from "@/content/site";

/**
 * In staging il dominio non è quello di produzione: senza override, og:image
 * punterebbe a un file che lì non esiste. Si imposta NEXT_PUBLIC_SITE_URL al
 * deploy; il default resta il dominio finale.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dellavanzatoroberto.it";

/**
 * Metadata di una pagina, con gli `hreflang` reciproci già a posto.
 *
 * Il canonical e gli alternates si costruiscono dalla stessa mappa rotte usata da
 * nav e switch di lingua: se uno slug cambia, cambiano insieme e non si separano.
 */
export function buildMetadata({
  locale,
  routeKey,
  slug,
  title,
  description,
}: {
  locale: Locale;
  routeKey: RouteKey;
  slug?: string;
  title?: string;
  description?: string;
}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: title ?? meta.title[locale],
    description: description ?? meta.description[locale],
    // Il sito resta fuori dagli indici finché non si va live.
    robots: { index: false, follow: false },
    alternates: {
      canonical: href(routeKey, locale, slug),
      languages: alternates(routeKey, slug),
    },
    openGraph: {
      type: "website",
      locale: HTML_LANG[locale].replace("-", "_"),
      title: title ?? meta.ogTitle[locale],
      description: description ?? meta.ogDescription[locale],
      // JPEG e non WebP: diversi crawler social non renderizzano il WebP e
      // mostrerebbero la scheda senza immagine.
      images: [
        {
          url: "/media/og-image.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: meta.ogAlt[locale],
        },
      ],
    },
  };
}
