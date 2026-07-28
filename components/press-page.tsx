"use client";

import { useState } from "react";
import { JsonLd } from "@/components/json-ld";
import { RegMark } from "@/components/reg-mark";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { navLabel } from "@/content/site";
import { pressContent as copy, type PressItem } from "@/content/press";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { breadcrumbList } from "@/lib/structured-data";

function FileTextIcon() {
  return (
    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m-6 4h6" />
    </svg>
  );
}

export function PressPage({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<string>("all");

  const filteredItems = filter === "all"
    ? copy.items
    : copy.items.filter((item) => item.category === filter);

  return (
    <>
      <SiteHeader locale={locale} routeKey="press" variant="solid" />

      <main id="contenuto">
        {/* HERO PRESS */}
        <section className="wrap pt-14 md:pt-20">
          <Reveal>
            <p className="u-label text-ink-soft" data-reveal>
              {copy.hero.eyebrow[locale]}
            </p>
            <h1 className="u-title mt-6 max-w-[20ch]" data-reveal>
              {copy.hero.title[locale]}
            </h1>
            <p className="u-lead mt-6 max-w-[50ch] text-ink" data-reveal>
              {copy.hero.subtitle[locale]}
            </p>

            {/* FILTRI TIPOLOGIA */}
            <div className="mt-12 border-t border-line pt-8" data-reveal>
              <div className="flex flex-wrap gap-3">
                {Object.entries(copy.filters).map(([key, label]) => {
                  const isActive = filter === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setFilter(key)}
                      className={`u-label px-4 py-2 text-xs transition-colors ${
                        isActive
                          ? "bg-accent text-white"
                          : "border border-line bg-surface text-ink hover:border-accent hover:text-accent"
                      }`}
                    >
                      {label[locale]}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ELENCO PUBBLICAZIONI / RASSEGNA STAMPA */}
        <section className="wrap my-16 md:my-24">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item: PressItem) => (
                <article
                  key={item.id}
                  className="flex flex-col justify-between border border-line bg-surface p-7 transition-all duration-300 hover:border-accent"
                  data-reveal
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="u-label text-xs text-accent">
                        {item.source}
                      </span>
                      <span className="u-label text-xs text-ink-soft">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="u-label mt-6 text-base font-semibold text-ink leading-snug">
                      <RegMark>{item.title[locale]}</RegMark>
                    </h3>

                    <p className="u-body mt-4 text-sm text-ink-soft">
                      <RegMark>{item.description[locale]}</RegMark>
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-line/60">
                    {item.file ? (
                      <a
                        href={`/app/uploads/2019/11/${item.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium u-label text-accent hover:underline"
                      >
                        <FileTextIcon />
                        <span>{copy.actions.readPdf[locale]}</span>
                      </a>
                    ) : item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium u-label text-accent hover:underline"
                      >
                        <ExternalLinkIcon />
                        <span>{copy.actions.viewArticle[locale]}</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs u-label text-ink-soft">
                        <NewspaperIcon />
                        <span>{copy.actions.proceedings[locale]}</span>
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter locale={locale} />

      <JsonLd
        data={breadcrumbList([
          { name: navLabel.home[locale], path: href("home", locale) },
          { name: navLabel.press[locale] },
        ])}
      />
    </>
  );
}
