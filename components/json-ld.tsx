import { studio } from "@/content/site";
import { faqFor, type FaqItem } from "@/content/faq";
import { articles } from "@/content/articles";
import type { Locale } from "@/lib/i18n";

/**
 * Dati strutturati: il sito originale non ne ha nessuno, e sono ciò che permette
 * a Google e agli assistenti di citare correttamente medico, sedi e procedure.
 * (Il concept è pubblicato in noindex: qui servono a dimostrare l'impianto.)
 */

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function PhysicianJsonLd({ locale, siteUrl }: { locale: Locale; siteUrl: string }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": ["Physician", "MedicalClinic"],
        "@id": `${siteUrl}#physician`,
        name: "Dott. Roberto Dell'Avanzato",
        medicalSpecialty: ["PlasticSurgery", "Dermatology"],
        url: siteUrl,
        telephone: studio.phone,
        email: studio.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: studio.street,
          postalCode: studio.zip,
          addressLocality: studio.city,
          addressCountry: "IT",
        },
        geo: { "@type": "GeoCoordinates", latitude: studio.lat, longitude: studio.lng },
        areaServed: studio.city,
        availableService: articles.map((a) => ({ "@type": "MedicalProcedure", name: a.title[locale] })),
        memberOf: [
          { "@type": "Organization", name: "American Society of Plastic Surgeons" },
          { "@type": "Organization", name: "SICPRE" },
        ],
      }}
    />
  );
}

export function FaqJsonLd({ scope, locale }: { scope: FaqItem["scope"]; locale: Locale }) {
  const items = faqFor(scope);
  if (items.length === 0) return null;
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.q[locale],
          acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
        })),
      }}
    />
  );
}

export function ProcedureJsonLd({
  name,
  description,
  locale,
}: {
  name: string;
  description: string;
  locale: Locale;
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name,
        description,
        inLanguage: locale,
        procedureType: "https://schema.org/NoninvasiveProcedure",
        performer: { "@type": "Physician", name: "Dott. Roberto Dell'Avanzato" },
      }}
    />
  );
}
