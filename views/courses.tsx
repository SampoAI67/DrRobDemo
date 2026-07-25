import { pages } from "@/content/copy";
import { kol, teaching } from "@/content/credentials";
import { PageHero, Section, SectionHeading } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import type { Locale } from "@/lib/i18n";

export function CoursesView({ locale }: { locale: Locale }) {
  const copy = pages.courses;

  return (
    <>
      <PageHero
        locale={locale}
        kicker={copy.kicker[locale]}
        title={copy.title[locale]}
        lead={copy.lead[locale]}
        image="chi-sono-3"
        align="left"
      />

      <Section labelledBy="docenze">
        <SectionHeading
          kicker={locale === "it" ? "Università e master" : "Universities and Master's programmes"}
          title={locale === "it" ? "Dove insegna" : "Where he teaches"}
          id="docenze"
        />
        <ul className="mt-10 max-w-4xl divide-y divide-line border-y border-line">
          {teaching.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 50} className="py-6 text-lg leading-snug text-ink-soft">
              {item[locale]}
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="kol">
        <SectionHeading
          kicker={locale === "it" ? "Formazione per le aziende" : "Industry training"}
          title={locale === "it" ? "Attività da Key Opinion Leader" : "Key Opinion Leader activity"}
          lead={
            locale === "it"
              ? "Referente e formatore per le metodiche e i dispositivi di alcune tra le principali aziende del settore."
              : "Reference physician and trainer for the methods and devices of several leading companies in the field."
          }
          id="kol"
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {kol.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 50} className="border-t border-line pt-5 text-ink-soft">
              {item[locale]}
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
