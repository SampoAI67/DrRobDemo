import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pages, ui } from "@/content/copy";
import { facts } from "@/content/credentials";
import { studio, surgicalVenues } from "@/content/site";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { PageHero, Section, SectionHeading, Stats } from "@/components/sections";
import { TrustWall } from "@/components/trust-wall";
import { href } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";

const gallery = ["chi-sono-1", "chi-sono-2", "chi-sono-3", "chi-sono-4"];

export function ItsMeView({ locale }: { locale: Locale }) {
  const copy = pages.itsMe;

  return (
    <>
      <PageHero
        locale={locale}
        kicker={copy.kicker[locale]}
        title={copy.title[locale]}
        lead={copy.body[locale][0]}
        image="hero-chi-sono"
        align="left"
      />

      <Section>
        <div className="prose-editorial mx-auto max-w-3xl text-lg leading-relaxed text-ink-soft">
          {copy.body[locale].slice(1).map((p, i) => (
            <Reveal key={i} as="p" delay={i * 40}>
              {p}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <Stats items={facts.map((f) => ({ value: f.value, label: f.label[locale] }))} />
      </Section>

      <Section className="!py-0">
        <div className="grid grid-cols-2 gap-3 py-16 lg:grid-cols-4">
          {gallery.map((id, i) => (
            <Reveal key={id} delay={i * 70}>
              <Media id={id} locale={locale} ratio="4/5" sizes="(min-width: 1024px) 23vw, 45vw" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper" labelledBy="credenziali">
        <SectionHeading
          kicker={locale === "it" ? "Verificabile" : "On the record"}
          title={locale === "it" ? "Formazione, docenze e riconoscimenti" : "Training, teaching and recognition"}
          id="credenziali"
        />
        <div className="mt-14">
          <TrustWall locale={locale} />
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">{locale === "it" ? "Medicina estetica" : "Aesthetic medicine"}</p>
            <p className="mt-5 font-display text-2xl leading-snug">{studio.name}</p>
            <p className="mt-3 text-ink-soft">
              {studio.building} — {studio.street}, {studio.detail[locale]}
              <br />
              {studio.zip} {studio.city}
            </p>
          </div>
          <div>
            <p className="kicker">{locale === "it" ? "Chirurgia estetica" : "Aesthetic surgery"}</p>
            <ul className="mt-5 space-y-2 text-ink-soft">
              {surgicalVenues.map((venue) => (
                <li key={venue} className="border-l-2 border-line pl-4">
                  {venue}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href={href("contact", locale)}
          className="mt-12 inline-flex min-h-12 items-center gap-2 bg-clinic px-7 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic-deep"
        >
          {ui.book[locale]}
          <ArrowRight size={16} aria-hidden />
        </Link>
      </Section>
    </>
  );
}
