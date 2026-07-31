import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { HTML_LANG, type Locale } from "@/lib/i18n";
import {
  alternates,
  href,
  slugFor,
  type RouteKey,
  type SlugArg,
} from "@/lib/routes";
import { meta } from "@/content/site";

/**
 * In staging il dominio non è quello di produzione: senza override, og:image
 * punterebbe a un file che lì non esiste. Si imposta NEXT_PUBLIC_SITE_URL al
 * deploy; il default resta il dominio finale.
 *
 * Qui va solo l'**origine**, senza sottocartella: il `basePath` lo aggiunge
 * `absolute()`, perché `href()` deve restare senza prefisso per `next/link`,
 * che se lo mette da sé.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dellavanzatoroberto.it";

/**
 * URL assoluto di un percorso interno, `basePath` compreso.
 *
 * `new URL("/contatti", "https://host/DrRobDemo")` scarta la sottocartella e dà
 * `https://host/contatti`, che su un deploy in sottocartella è una pagina che
 * non esiste. Il prefisso va messo prima di risolvere.
 */
export function absolute(path: string): string {
  return new URL(asset(path), SITE_URL).toString();
}

/**
 * Metadata di una pagina, con gli `hreflang` reciproci già a posto.
 *
 * Il canonical e gli alternates si costruiscono dalla stessa mappa rotte usata da
 * nav e switch di lingua: se uno slug cambia, cambiano insieme e non si separano.
 *
 * Per le schede trattamento `slug` è un `Localized<string>`: il canonical prende
 * quello della lingua corrente, gli alternates ciascuno il proprio.
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
  slug?: SlugArg;
  title?: string;
  description?: string;
}): Metadata {
  const langs = alternates(routeKey, slug);

  return {
    metadataBase: new URL(SITE_URL),
    title: title ?? meta.title[locale],
    description: description ?? meta.description[locale],
    // Il sito resta fuori dagli indici finché non si va live.
    robots: { index: false, follow: false },
    alternates: {
      canonical: absolute(href(routeKey, locale, slugFor(slug, locale))),
      languages: Object.fromEntries(
        Object.entries(langs).map(([lang, path]) => [lang, absolute(path)]),
      ),
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
          url: absolute("/media/og-image.jpg"),
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: meta.ogAlt[locale],
        },
      ],
    },
  };
}
