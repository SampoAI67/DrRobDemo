import type { ReactNode } from "react";
import { Media } from "./media";
import { Reveal } from "./reveal";
import type { Locale } from "@/lib/i18n";

export function Section({
  children,
  tone = "paper",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: "paper" | "mist" | "ink";
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    mist: "bg-mist text-ink",
    ink: "bg-ink text-paper",
  } as const;
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-[--spacing-section] ${className}`}>
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/**
 * Hero editoriale: foto a piena altezza su un lato, colonna di testo stretta
 * sull'altro. Sostituisce lo slider a tutta larghezza del sito originale, dove
 * il testo galleggiava sopra l'immagine ed era il primo elemento a perdersi.
 */
export function PageHero({
  locale,
  kicker,
  title,
  lead,
  image,
  align = "right",
  children,
}: {
  locale: Locale;
  kicker: string;
  title: string;
  lead?: string;
  image: string;
  align?: "left" | "right";
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className={`grid lg:grid-cols-2 ${align === "left" ? "" : "lg:[&>*:first-child]:order-2"}`}>
        <div className="flex items-center px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="max-w-xl">
            <p className="kicker">{kicker}</p>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.6rem)]">{title}</h1>
            {lead && <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-ink-soft">{lead}</p>}
            {children && <div className="mt-9">{children}</div>}
          </div>
        </div>
        <Media
          id={image}
          locale={locale}
          priority
          ratio="4/5"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="min-h-[22rem] lg:h-full lg:min-h-[34rem]"
        />
      </div>
    </section>
  );
}

/** Blocco foto + testo alternato: è il ritmo che dà respiro alle pagine lunghe. */
export function Split({
  locale,
  image,
  title,
  children,
  flip = false,
  kicker,
  tone = "paper",
}: {
  locale: Locale;
  image: string;
  title: string;
  children: ReactNode;
  flip?: boolean;
  kicker?: string;
  tone?: "paper" | "mist";
}) {
  return (
    <div className={`${tone === "mist" ? "bg-mist" : "bg-paper"}`}>
      <div className="mx-auto grid max-w-[84rem] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <Media
            id={image}
            locale={locale}
            ratio="5/4"
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="shadow-[0_1px_0_0_var(--color-line)]"
          />
        </Reveal>
        <Reveal delay={90}>
          {kicker && <p className="kicker">{kicker}</p>}
          <h3 className="mt-5 text-[clamp(1.7rem,3.2vw,2.6rem)]">{title}</h3>
          <div className="prose-editorial mt-6 text-ink-soft">{children}</div>
        </Reveal>
      </div>
    </div>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
      {items.map((item, i) => (
        <Reveal as="li" key={item.value + i} delay={i * 60}>
          <p className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none text-clinic">{item.value}</p>
          <p className="mt-3 text-sm leading-snug text-ink-soft">{item.label}</p>
        </Reveal>
      ))}
    </ul>
  );
}

export function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <figure className="mx-auto max-w-4xl text-center">
      <blockquote className="font-display text-[clamp(1.6rem,3.6vw,2.9rem)] leading-[1.2]">
        &laquo;{children}&raquo;
      </blockquote>
      {cite && <figcaption className="mt-6 text-sm uppercase tracking-[0.18em] text-ink-soft">{cite}</figcaption>}
    </figure>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
  id,
  tone = "ink",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  id?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <div className="max-w-3xl">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 id={id} className={`mt-5 text-[clamp(2rem,4vw,3.2rem)] ${tone === "paper" ? "text-paper" : ""}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed ${tone === "paper" ? "text-paper/80" : "text-ink-soft"}`}>{lead}</p>
      )}
    </div>
  );
}
