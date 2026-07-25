import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { pages } from "@/content/copy";
import { studio } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { StudioMap } from "@/components/studio-map";
import { FaqSection } from "@/components/faq-section";
import { Section, SectionHeading } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import type { Locale } from "@/lib/i18n";

export function ContactView({ locale }: { locale: Locale }) {
  const copy = pages.contact;

  return (
    <>
      <Section tone="paper" className="!pb-0">
        <div className="max-w-3xl">
          <p className="kicker">{copy.kicker[locale]}</p>
          <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.4rem)]">{copy.title[locale]}</h1>
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">{copy.lead[locale]}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div className="space-y-8">
            <Reveal className="border-t border-line pt-6">
              <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-clinic">
                <Phone size={17} aria-hidden />
                {locale === "it" ? "Telefono" : "Phone"}
              </h2>
              <a
                href={`tel:${studio.phoneHref}`}
                className="mt-3 inline-flex min-h-11 items-center font-display text-3xl text-ink transition-colors hover:text-clinic"
              >
                {studio.phone}
              </a>
            </Reveal>

            <Reveal className="border-t border-line pt-6" delay={60}>
              <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-clinic">
                <Mail size={17} aria-hidden />
                E-mail
              </h2>
              <a
                href={`mailto:${studio.email}`}
                className="mt-3 inline-flex min-h-11 items-center text-lg text-ink underline underline-offset-4 transition-colors hover:text-clinic"
              >
                {studio.email}
              </a>
            </Reveal>

            <Reveal className="border-t border-line pt-6" delay={120}>
              <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-clinic">
                <Clock size={17} aria-hidden />
                {locale === "it" ? "Appuntamenti" : "Appointments"}
              </h2>
              <p className="mt-3 text-ink-soft">{studio.hours[locale]}</p>
            </Reveal>

            <Reveal className="border-t border-line pt-6" delay={180}>
              <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-clinic">
                <ShieldCheck size={17} aria-hidden />
                {locale === "it" ? "Iscrizione all'Ordine" : "Medical registration"}
              </h2>
              <p className="mt-3 text-ink-soft">{studio.register[locale]}</p>
            </Reveal>
          </div>

          <div>
            <h2 className="sr-only">{copy.howToGet[locale]}</h2>
            <StudioMap locale={locale} />
          </div>
        </div>
      </Section>

      <Section tone="paper" id="richiesta" labelledBy="richiesta-title">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <SectionHeading
            kicker={locale === "it" ? "Modulo" : "Form"}
            title={copy.formTitle[locale]}
            lead={copy.formLead[locale]}
            id="richiesta-title"
          />
          <ContactForm locale={locale} />
        </div>
      </Section>

      <FaqSection scope="contatti" locale={locale} />
    </>
  );
}
