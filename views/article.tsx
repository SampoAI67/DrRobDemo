import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { articleById, articles } from "@/content/articles";
import { byId } from "@/content/treatments";
import { ui } from "@/content/copy";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/sections";
import { FaqSection } from "@/components/faq-section";
import { ProcedureJsonLd } from "@/components/json-ld";
import { href } from "@/lib/routes";
import type { FaqItem } from "@/content/faq";
import type { Locale } from "@/lib/i18n";

const areaOf = { endolift: "medicina", ultherapy: "medicina", cellfina: "chirurgia" } as const;

export function ArticleView({ id, locale }: { id: string; locale: Locale }) {
  const article = articleById(id);
  if (!article) throw new Error(`Articolo sconosciuto: ${id}`);
  const treatment = byId(article.treatment);
  const others = articles.filter((a) => a.id !== id);

  return (
    <>
      <article>
        <header className="border-b border-line">
          <div className="mx-auto max-w-[84rem] px-5 py-14 sm:px-8 lg:py-20">
            <Link
              href={href(areaOf[id as keyof typeof areaOf], locale)}
              className="inline-flex min-h-11 items-center gap-2 text-sm uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-clinic"
            >
              <ArrowLeft size={15} aria-hidden />
              {ui.backTo[locale]} {treatment ? treatment.title[locale] : ui.allTreatments[locale]}
            </Link>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.3rem,5vw,4rem)]">{article.title[locale]}</h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-soft">{article.lead[locale]}</p>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-ink-soft">
              <time dateTime={article.date}>
                {new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(article.date))}
              </time>
            </p>
          </div>
          <Media
            id={article.image}
            locale={locale}
            priority
            sizes="100vw"
            className="max-h-[min(58vh,30rem)] w-full"
          />
        </header>

        <Section>
          <div className="prose-editorial mx-auto max-w-3xl text-lg leading-relaxed text-ink-soft">
            {article.blocks.map((block, i) => {
              if (block.type === "h")
                return (
                  <Reveal as="h2" key={i} className="!mt-14 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] text-ink">
                    {block.text[locale]}
                  </Reveal>
                );
              if (block.type === "ul")
                return (
                  <Reveal as="ul" key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item[locale]}</li>
                    ))}
                  </Reveal>
                );
              return (
                <Reveal as="p" key={i}>
                  {block.text[locale]}
                </Reveal>
              );
            })}
          </div>
        </Section>
      </article>

      <FaqSection scope={id as FaqItem["scope"]} locale={locale} />

      <Section>
        <h2 className="text-[clamp(1.6rem,3vw,2.4rem)]">{locale === "it" ? "Continua a leggere" : "Keep reading"}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {others.map((other, i) => (
            <Reveal key={other.id} as="article" delay={i * 80}>
              <Link href={href("article", locale, other.id)} className="group block">
                <Media id={other.image} locale={locale} ratio="3/2" sizes="(min-width: 768px) 46vw, 100vw" />
                <h3 className="mt-6 text-[clamp(1.25rem,2.1vw,1.6rem)] transition-colors group-hover:text-clinic">
                  {other.title[locale]}
                </h3>
                <p className="mt-3 text-ink-soft">{other.lead[locale]}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)]">
            {locale === "it"
              ? "Verificare se è la metodica giusta per te"
              : "Find out whether this is the right method for you"}
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

      <ProcedureJsonLd name={article.title[locale]} description={article.metaDescription[locale]} locale={locale} />
    </>
  );
}
