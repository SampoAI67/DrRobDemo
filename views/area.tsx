import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { pages, ui } from "@/content/copy";
import { byArea, type Area } from "@/content/treatments";
import { surgicalGroups } from "@/content/zones";
import { surgicalVenues } from "@/content/site";
import { Accordion, AccordionItem } from "@/components/accordion";
import { BodyZoneSelector } from "@/components/body-zone-selector";
import { FaqSection } from "@/components/faq-section";
import { PageHero, Section, SectionHeading, Split } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import { href } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";

const config = {
  medicina: { copy: pages.medicina, hero: "hero-medicina-3", faq: "medicina" },
  chirurgia: { copy: pages.chirurgia, hero: "hero-chirurgia-3", faq: "chirurgia" },
  technology: { copy: pages.technology, hero: "hero-advanced", faq: "technology" },
} as const;

export function AreaView({ area, locale }: { area: Area; locale: Locale }) {
  const { copy, hero, faq } = config[area];
  const items = byArea(area);

  return (
    <>
      <PageHero
        locale={locale}
        kicker={copy.kicker[locale]}
        title={copy.title[locale]}
        lead={copy.lead[locale]}
        image={hero}
      >
        {"note" in copy && <p className="max-w-[52ch] border-l-2 border-gold-bright pl-5 text-ink-soft">{copy.note[locale]}</p>}
      </PageHero>

      <div>
        {items.map((treatment, i) => (
          <Split
            key={treatment.id}
            locale={locale}
            image={treatment.image}
            title={treatment.title[locale]}
            kicker={treatment.lead[locale]}
            flip={i % 2 === 1}
            tone={i % 2 === 1 ? "mist" : "paper"}
          >
            {treatment.body[locale].map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {treatment.flagship && (
              <p>
                <Link
                  href={href("article", locale, treatment.id)}
                  className="inline-flex items-center gap-2 font-medium text-clinic underline underline-offset-4"
                >
                  {ui.readMore[locale]}
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </p>
            )}
          </Split>
        ))}
      </div>

      {area === "medicina" && (
        <Section tone="paper" id="zone" labelledBy="zone-title">
          <SectionHeading
            kicker={locale === "it" ? "Trova il tuo trattamento" : "Find your treatment"}
            title={pages.medicina.zonesTitle[locale]}
            lead={pages.medicina.zonesLead[locale]}
            id="zone-title"
          />
          <BodyZoneSelector locale={locale} />
        </Section>
      )}

      {area === "chirurgia" && (
        <>
          <Section tone="paper" id="interventi" labelledBy="interventi-title">
            <SectionHeading
              kicker={locale === "it" ? "Elenco completo" : "Full list"}
              title={pages.chirurgia.groupsTitle[locale]}
              lead={pages.chirurgia.groupsLead[locale]}
              id="interventi-title"
            />
            <Accordion className="mt-12">
              {surgicalGroups.map((group, i) => (
                <AccordionItem
                  key={group.id}
                  title={group.name[locale]}
                  meta={`${group.items.length} ${locale === "it" ? "interventi" : "procedures"}`}
                  defaultOpen={i === 0}
                >
                  <ul className="grid gap-2 md:grid-cols-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="border-l-2 border-line pl-4 text-[0.95rem] leading-snug text-ink-soft">
                        {item[locale]}
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
          </Section>

          <Section tone="mist" labelledBy="sedi-title">
            <SectionHeading
              kicker={locale === "it" ? "Sale operatorie" : "Operating theatres"}
              title={pages.chirurgia.venuesTitle[locale]}
              id="sedi-title"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {surgicalVenues.map((venue, i) => (
                <Reveal as="li" key={venue} delay={i * 70} className="flex items-start gap-3 border-t border-line pt-5">
                  <MapPin size={18} aria-hidden className="mt-1 flex-none text-clinic" />
                  <span className="text-ink-soft">{venue}</span>
                </Reveal>
              ))}
            </ul>
          </Section>
        </>
      )}

      <FaqSection scope={faq} locale={locale} />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)]">
            {locale === "it" ? "Il passo successivo è la visita" : "The next step is a consultation"}
          </h2>
          <Link
            href={href("contact", locale)}
            className="mt-8 inline-flex min-h-12 items-center gap-2 bg-clinic px-7 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic-deep"
          >
            {ui.book[locale]}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
