import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { backHome, stubs } from "@/content/stubs";
import { ui } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { href, type RouteKey } from "@/lib/routes";

/**
 * Segnaposto per le pagine interne, che verranno costruite nelle prossime fasi.
 * Serve a non lasciare link rotti, non a fare contenuto.
 *
 * A differenza di prima ha header e footer condivisi: le pagine interne erano
 * rimaste senza navigazione, perché header e footer vivevano dentro le sezioni
 * della home.
 */
export function PageStub({
  locale,
  routeKey,
}: {
  locale: Locale;
  routeKey: Extract<RouteKey, "biography" | "contact">;
}) {
  const stub = stubs[routeKey];

  return (
    <>
      <SiteHeader locale={locale} routeKey={routeKey} variant="solid" />
      <main id="contenuto" className="section wrap flex min-h-[70svh] flex-col">
        <p className="u-label text-ink-soft">{ui.wordmark[locale]}</p>
        <h1 className="u-title mt-8 max-w-[18ch]">{stub.title[locale]}</h1>
        <p className="u-statement mt-6 max-w-[46ch] text-ink-soft">
          {stub.intro[locale]}
        </p>
        <div className="mt-12">
          <Link href={href("home", locale)} className="link-rule u-label">
            <span aria-hidden="true" className="rule" />
            {backHome[locale]}
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
