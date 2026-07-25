import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { ui } from "@/content/copy";
import { studio } from "@/content/site";
import { href } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";

/**
 * Barra di conversione fissa sotto i 1024px: chiamare o richiedere una visita
 * sono sempre a un tocco, senza tornare in cima alla pagina.
 */
export function MobileCta({ locale }: { locale: Locale }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-paper/95 backdrop-blur lg:hidden">
      <a
        href={`tel:${studio.phoneHref}`}
        className="flex min-h-14 items-center justify-center gap-2 border-r border-line text-sm font-medium uppercase tracking-[0.1em] text-ink"
      >
        <Phone size={17} aria-hidden />
        {ui.callShort[locale]}
      </a>
      <Link
        href={`${href("contact", locale)}#richiesta`}
        className="flex min-h-14 items-center justify-center gap-2 bg-clinic text-sm font-medium uppercase tracking-[0.1em] text-paper"
      >
        <CalendarCheck size={17} aria-hidden />
        {ui.book[locale]}
      </Link>
    </div>
  );
}
