/**
 * Dati strutturati delle pagine trattamento.
 *
 * Vale la stessa regola dei testi: si dichiara che cos'è un trattamento, mai quanto
 * funzioni. Niente `aggregateRating`, `review`, `offers` — sono i campi che
 * trasformerebbero una scheda informativa in pubblicità sanitaria.
 *
 * Gli URL sono assoluti perché i crawler li leggono fuori dal contesto della pagina,
 * e le immagini passano da `mediaFile()`: la src canonica di `media()` la risolve il
 * loader di next/image, su disco non esiste.
 */

import { studio } from "@/content/site";
import type { Area, Treatment } from "@/content/treatments";
import { HTML_LANG, type Locale } from "@/lib/i18n";
import { mediaFile } from "@/lib/media";
import { SITE_URL } from "@/lib/metadata";
import { href } from "@/lib/routes";

const abs = (path: string): string => new URL(path, SITE_URL).toString();

/**
 * `procedureType` solo dove l'area lo dichiara senza ambiguità. Medicina estetica e
 * Advanced Beauty Technology mettono insieme iniettivi, laser e device: assegnare
 * loro un tipo unico sarebbe un'affermazione che i testi non fanno.
 */
const PROCEDURE_TYPE: Partial<Record<Area, string>> = {
  chirurgia: "https://schema.org/SurgicalProcedure",
};

const provider = {
  "@type": "Physician",
  name: studio.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: studio.street,
    postalCode: studio.postalCode,
    addressLocality: studio.city,
    addressCountry: "IT",
  },
  telephone: studio.phone,
};

export function medicalProcedure(treatment: Treatment, locale: Locale) {
  const type = PROCEDURE_TYPE[treatment.area];

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title[locale],
    description: treatment.summary[locale],
    url: abs(href("treatment", locale, treatment.slug[locale])),
    inLanguage: HTML_LANG[locale],
    image: abs(mediaFile(treatment.image)),
    ...(type ? { procedureType: type } : {}),
    provider,
  };
}

/** Una voce del percorso. Senza `path` è la pagina corrente, che non si linka. */
export type Crumb = { name: string; path?: string };

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.path ? { item: abs(crumb.path) } : {}),
    })),
  };
}
