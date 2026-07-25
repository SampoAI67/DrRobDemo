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
 * Apertura editoriale: prima il titolo e la chiamata all'azione, poi la foto a
 * tutta larghezza nelle sue proporzioni reali. Le immagini di testata
 * dell'originale sono banner 2.38:1 e sotto ci galleggiava il testo, che era la
 * prima cosa a perdersi; qui l'H1 e il pulsante stanno sempre sopra la piega e
 * la fotografia non viene ritagliata per entrare in un box deciso a priori.
 */
export function PageHero({
  locale,
  kicker,
  title,
  lead,
  image,
  imagePosition,
  imageRatio,
  children,
}: {
  locale: Locale;
  kicker: string;
  title: string;
  lead?: string;
  image: string;
  imagePosition?: string;
  imageRatio?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[84rem] px-5 pb-12 pt-14 sm:px-8 lg:pb-16 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="kicker">{kicker}</p>
            <h1 className="mt-6 text-[clamp(2.6rem,6.4vw,5rem)]">{title}</h1>
          </div>
          <div>
            {lead && <p className="max-w-[52ch] text-lg leading-relaxed text-ink-soft">{lead}</p>}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
      <Media
        id={image}
        locale={locale}
        priority
        ratio={imageRatio}
        position={imagePosition}
        sizes="100vw"
        className="max-h-[min(62vh,34rem)] w-full"
      />
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
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="shadow-[0_1px_0_0_var(--color-line)]"
          />
        </Reveal>
        <Reveal delay={90}>
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.6rem)]">{title}</h2>
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
      {cite && <figcaption className="mt-6 text-sm uppercase tracking-[0.18em] text-paper/75">{cite}</figcaption>}
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
