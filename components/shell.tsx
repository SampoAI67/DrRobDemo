import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { studio, ui } from "@/content/site";
import type { Locale } from "@/lib/i18n";

/**
 * Corpo condiviso dai due root layout.
 *
 * `<html>` e `<body>` devono stare nel root layout, quindi qui c'è tutto il resto:
 * smooth scroll, salto al contenuto, dati strutturati. Averlo in un posto solo
 * evita che le due lingue divergano senza che nessuno se ne accorga.
 */

/** Solo dati verificati dal materiale del cliente: niente orari, niente e-mail. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: studio.name,
  medicalSpecialty: ["PlasticSurgery", "Dermatology"],
  address: {
    "@type": "PostalAddress",
    streetAddress: studio.street,
    postalCode: studio.postalCode,
    addressLocality: studio.city,
    addressCountry: "IT",
  },
  telephone: studio.phone,
  vatID: studio.vatId,
};

export function Shell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <a
        href="#contenuto"
        className="u-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-ground"
      >
        {ui.skipToContent[locale]}
      </a>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
