import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home, ui } from "@/content/copy";
import { facts, humanitarian } from "@/content/credentials";
import { articles } from "@/content/articles";
import { studio } from "@/content/site";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { PageHero, PullQuote, Section, SectionHeading, Split, Stats } from "@/components/sections";
import { href } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        kicker={home.heroKicker[locale]}
        title={home.heroTitle[locale]}
        lead={home.heroLead[locale]}
        image="hero-home-3"
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href={href("contact", locale)}
            className="inline-flex min-h-12 items-center gap-2 bg-clinic px-6 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic-deep"
          >
            {ui.book[locale]}
            <ArrowRight size={16} aria-hidden />
          </Link>
          <a
            href={`tel:${studio.phoneHref}`}
            className="inline-flex min-h-12 items-center gap-2 border border-ink px-6 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-paper"
          >
            {studio.phone}
          </a>
        </div>
      </PageHero>

      <Section tone="ink">
        <PullQuote cite="Dr. Roberto Dell'Avanzato">{home.quote[locale]}</PullQuote>
      </Section>

      <Split locale={locale} image="bio-home" kicker={home.bioKicker[locale]} title={home.role[locale]} flip>
        <p>{home.bio[locale]}</p>
        <p>
          {locale === "it"
            ? "Responsabile della medicina estetica del Dipartimento Medico Espace Chenot Health Wellness & Spa, L'Albereta Relais & Châteaux, e referente internazionale per la metodica Endolift®."
            : "Head of aesthetic medicine at the Espace Chenot Health Wellness & Spa Medical Department, L'Albereta Relais & Châteaux, and international reference for the Endolift® method."}
        </p>
        <p>
          <Link href={href("its-me", locale)} className="font-medium text-clinic underline underline-offset-4">
            {locale === "it" ? "Il percorso completo" : "The full biography"}
          </Link>
        </p>
      </Split>

      <Section tone="mist">
        <Stats items={facts.map((f) => ({ value: f.value, label: f.label[locale] }))} />
      </Section>

      <Section labelledBy="aree">
        <SectionHeading kicker={locale === "it" ? "Le tre aree" : "Three areas"} title={home.areasTitle[locale]} id="aree" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {home.areas.map((area, i) => (
            <Reveal key={area.href} as="article" delay={i * 80}>
              <Link href={href(["medicina", "chirurgia", "technology"][i] as "medicina", locale)} className="group block">
                <Media
                  id={area.image}
                  locale={locale}
                  ratio="3/2"
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <h3 className="mt-6 text-[clamp(1.4rem,2.4vw,1.9rem)] transition-colors group-hover:text-clinic">
                  {area.title[locale]}
                </h3>
                <p className="mt-3 max-w-[38ch] text-ink-soft">{area.text[locale]}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-clinic">
                  {ui.readMore[locale]}
                  <ArrowRight size={15} aria-hidden className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Endolift® è la firma del professionista: sul sito originale era un post
          fra gli altri, qui ha un blocco dedicato. */}
      <div className="border-y border-line bg-mist">
        <div className="mx-auto grid max-w-[84rem] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-24">
          <Reveal>
            <p className="kicker">{home.heroKicker[locale]}</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)]">
              {locale === "it" ? "Una metodica nata qui, nel 2005" : "A method born here, in 2005"}
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
              {locale === "it"
                ? "Endolift® è il protocollo laser che il Dr. Dell'Avanzato ha creato e perfezionato personalmente, al punto che viene chiamato anche «Metodica Dell'Avanzato». Una fibra ottica poco più grande di un capello, nessuna incisione, nessuna anestesia."
                : "Endolift® is the laser protocol Dr Dell'Avanzato created and refined himself — so much so that it is also known as the «Dell'Avanzato Method». An optical fibre barely thicker than a hair, no incisions, no anaesthesia."}
            </p>
            <Link
              href={href("article", locale, "endolift")}
              className="mt-8 inline-flex min-h-12 items-center gap-2 border border-ink px-6 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-paper"
            >
              {ui.readMore[locale]}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={90}>
            <Media id="post-endolift" locale={locale} ratio="3/2" sizes="(min-width: 1024px) 52vw, 100vw" />
          </Reveal>
        </div>
      </div>

      <Split locale={locale} image="missioni" kicker={home.missionsKicker[locale]} title={home.missionsTitle[locale]}>
        <p className="!text-ink">{home.missionsLead[locale]}</p>
        {humanitarian.map((item, i) => (
          <p key={i}>{item[locale]}</p>
        ))}
      </Split>

      <Section tone="mist" labelledBy="approfondimenti">
        <SectionHeading
          kicker={locale === "it" ? "DRD News" : "DRD News"}
          title={home.newsTitle[locale]}
          lead={home.newsLead[locale]}
          id="approfondimenti"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.id} as="article" delay={i * 80}>
              <Link href={href("article", locale, article.id)} className="group block">
                <Media id={article.image} locale={locale} ratio="3/2" sizes="(min-width: 768px) 32vw, 100vw" />
                <h3 className="mt-6 text-[clamp(1.25rem,2.1vw,1.6rem)] transition-colors group-hover:text-clinic">
                  {article.title[locale]}
                </h3>
                <p className="mt-3 text-ink-soft">{article.lead[locale]}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)]">
            {locale === "it" ? "Parliamone di persona" : "Let's talk in person"}
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            {locale === "it"
              ? "La visita è il solo modo per capire cosa serve davvero. Lo studio è in Via Andegari 18, a Milano."
              : "A consultation is the only way to understand what is really needed. The practice is at Via Andegari 18, Milan."}
          </p>
          <Link
            href={href("contact", locale)}
            className="mt-9 inline-flex min-h-12 items-center gap-2 bg-clinic px-7 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-clinic-deep"
          >
            {ui.book[locale]}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
