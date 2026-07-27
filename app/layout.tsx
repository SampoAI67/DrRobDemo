import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

/**
 * Archivo è variabile sull'asse di larghezza: è l'identità tipografica del sito
 * (sans espanso, in corpo piccolo). next/font self-hosta i file al build, quindi
 * a runtime non parte nessuna richiesta verso Google.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dellavanzatoroberto.it"),
  title: "Dr. Roberto Dell'Avanzato — Chirurgia e medicina estetica, Milano",
  description:
    "Studio del dott. Roberto Dell'Avanzato, medico chirurgo, in Via Andegari 18 a Milano. Chirurgia e medicina estetica mini-invasiva, laser, metodica Endolift®.",
  // Il sito resta fuori dagli indici finché non si va live.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title: "Dr. Roberto Dell'Avanzato — Chirurgia e medicina estetica, Milano",
    description:
      "Chirurgia e medicina estetica mini-invasiva. Studio in Via Andegari 18, Milano.",
    images: [{ url: "/media/hero-desktop-1280.webp", width: 1280, height: 720 }],
  },
};

/** Solo dati verificati dal materiale del cliente: niente orari, niente e-mail. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Roberto Dell'Avanzato",
  medicalSpecialty: ["PlasticSurgery", "Dermatology"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Andegari 18",
    postalCode: "20121",
    addressLocality: "Milano",
    addressCountry: "IT",
  },
  telephone: "+39 02 7202 3474",
  vatID: "0977885100",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${archivo.variable} ${hanken.variable}`}>
      <body>
        <SmoothScroll />
        <a
          href="#contenuto"
          className="u-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-ground"
        >
          Vai al contenuto
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
