import { faqFor, type FaqItem } from "@/content/faq";
import { ui } from "@/content/copy";
import { Accordion, AccordionItem } from "./accordion";
import { SectionHeading } from "./sections";
import { FaqJsonLd } from "./json-ld";
import type { Locale } from "@/lib/i18n";

export function FaqSection({ scope, locale }: { scope: FaqItem["scope"]; locale: Locale }) {
  const items = faqFor(scope);
  if (items.length === 0) return null;

  return (
    <section className="bg-mist py-[--spacing-section]">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <SectionHeading
          kicker={locale === "it" ? "Prima di prenotare" : "Before you book"}
          title={ui.faqTitle[locale]}
          id={`faq-${scope}`}
        />
        <Accordion className="mt-10 max-w-4xl">
          {items.map((item) => (
            <AccordionItem key={item.id} title={item.q[locale]}>
              <p className="max-w-[68ch] text-ink-soft">{item.a[locale]}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <FaqJsonLd scope={scope} locale={locale} />
    </section>
  );
}
