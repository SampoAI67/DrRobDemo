import type { ReactNode } from "react";
import { Libre_Bodoni, Public_Sans } from "next/font/google";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { MobileCta } from "./mobile-cta";
import { PhysicianJsonLd } from "./json-ld";
import { ui } from "@/content/copy";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";

const display = Libre_Bodoni({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-libre-bodoni",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-public-sans",
  display: "swap",
});

/**
 * Guscio comune alle due lingue. Ci sono due root layout — app/(it) e app/(en) —
 * proprio per poter scrivere il lang giusto nell'HTML statico di ogni pagina.
 */
export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* marca il documento come "JS attivo": senza questa riga le regole di
            reveal non si applicano e la pagina resta interamente leggibile */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.js="on"` }} />
      </head>
      <body className="pb-14 lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          {ui.skipToContent[locale]}
        </a>
        <SiteHeader locale={locale} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} />
        <MobileCta locale={locale} />
        <PhysicianJsonLd locale={locale} siteUrl={SITE_URL} />
      </body>
    </html>
  );
}
