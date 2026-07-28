import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { fontVariables } from "@/lib/fonts";
import { HTML_LANG } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

/**
 * Root layout italiano. L'italiano sta alla radice, l'inglese sotto /en, quindi i
 * root layout sono due — uno per gruppo, come previsto da Next quando manca
 * `app/layout.tsx` di primo livello.
 *
 * Nota: navigare fra due root layout diversi provoca un ricaricamento completo
 * della pagina invece di una navigazione client. Per uno switch di lingua va bene.
 */
export const metadata: Metadata = buildMetadata({ locale: "it", routeKey: "home" });

export default function ItalianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={HTML_LANG.it} className={fontVariables}>
      <body>
        <Shell locale="it">{children}</Shell>
      </body>
    </html>
  );
}
