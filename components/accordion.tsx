import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Fisarmonica su <details>/<summary>: accessibile e funzionante anche senza
 * JavaScript. L'animazione di apertura usa ::details-content dove il browser la
 * supporta, altrimenti l'apertura è istantanea — nessun contenuto resta chiuso.
 */
export function Accordion({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`divide-y divide-line border-y border-line ${className}`}>{children}</div>;
}

export function AccordionItem({
  title,
  meta,
  children,
  defaultOpen = false,
}: {
  title: string;
  meta?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group accordion" open={defaultOpen}>
      <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
        <span className="flex-1 font-display text-[clamp(1.15rem,2vw,1.5rem)] leading-snug">{title}</span>
        {meta && <span className="hidden text-xs uppercase tracking-[0.14em] text-ink-soft sm:inline">{meta}</span>}
        <ChevronDown
          size={20}
          aria-hidden
          className="flex-none text-clinic transition-transform duration-300 group-open:rotate-180"
        />
      </summary>
      <div className="pb-7 pr-2">{children}</div>
    </details>
  );
}
