import { FileText } from "lucide-react";
import { pages } from "@/content/copy";
import { press } from "@/content/credentials";
import { PageHero, Section, SectionHeading } from "@/components/sections";
import { TrustWall } from "@/components/trust-wall";
import { Reveal } from "@/components/reveal";
import type { Locale } from "@/lib/i18n";

export function PressView({ locale }: { locale: Locale }) {
  const copy = pages.press;

  return (
    <>
      <PageHero
        locale={locale}
        kicker={copy.kicker[locale]}
        title={copy.title[locale]}
        lead={copy.lead[locale]}
        image="chi-sono-4"
        imageRatio="16/9"
        imagePosition="center 30%"
      />

      <Section labelledBy="stampa">
        <SectionHeading
          kicker={locale === "it" ? "Rassegna stampa" : "Press"}
          title={locale === "it" ? "Pubblicazioni divulgative" : "Articles for the general public"}
          id="stampa"
        />
        <ul className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
          {press.map((item) => (
            <Reveal as="li" key={item.title} className="flex items-start gap-5 py-6">
              <FileText size={20} aria-hidden className="mt-1 flex-none text-clinic" />
              <div>
                <p className="font-display text-xl">{item.title}</p>
                <p className="mt-2 text-ink-soft">{item.description[locale]}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-soft">{item.year}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="riconoscimenti">
        <SectionHeading
          kicker={locale === "it" ? "Verificabile" : "On the record"}
          title={locale === "it" ? "Cattedre, società, premi" : "Chairs, societies, awards"}
          id="riconoscimenti"
        />
        <div className="mt-14">
          <TrustWall locale={locale} />
        </div>
      </Section>
    </>
  );
}
