import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { fontVariables } from "@/lib/fonts";
import { HTML_LANG } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

/** Root layout inglese: tutto ciò che sta sotto /en. */
export const metadata: Metadata = buildMetadata({ locale: "en", routeKey: "home" });

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={HTML_LANG.en} className={fontVariables}>
      <body>
        <Shell locale="en">{children}</Shell>
      </body>
    </html>
  );
}
