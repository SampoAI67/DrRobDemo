import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { RegMark } from "@/components/reg-mark";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bioContent as copy } from "@/content/bio";
import { navLabel } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { media } from "@/lib/media";
import { href } from "@/lib/routes";
import { breadcrumbList } from "@/lib/structured-data";

function GraduationIcon() {
  return (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4m6 12v-3.172a2 2 0 01.586-1.414l5-5c.781-.781 2.047-.781 2.828 0 .781.781.781 2.047 0 2.828l-5 5A2 2 0 0115 15.828V19m-6 0a2 2 0 01-2-2v-3.172a2 2 0 00-.586-1.414l-5-5a2 2 0 010-2.828 2 2 0 012.828 0l5 5A2 2 0 009 13.828V17a2 2 0 002 2z" />
    </svg>
  );
}

export function BioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} routeKey="biography" variant="solid" />

      <main id="contenuto">
        {/* HERO BIOGRAFIA */}
        <section className="wrap pt-14 md:pt-20">
          <Reveal>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="u-label text-ink-soft" data-reveal>
                  {copy.hero.eyebrow[locale]}
                </p>
                <h1 className="u-title mt-6 max-w-[20ch]" data-reveal>
                  {copy.hero.title[locale]}
                </h1>
                <p className="u-lead mt-6 max-w-[50ch] text-ink" data-reveal>
                  {copy.hero.subtitle[locale]}
                </p>
              </div>

              <div className="lg:col-span-5" data-reveal>
                <div className="relative aspect-[3/4] overflow-hidden bg-line">
                  <Image
                    src={media(copy.hero.image)}
                    alt={copy.hero.title[locale]}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FORMAZIONE ED ESPERIENZA */}
        <section className="wrap mt-20 md:mt-32">
          <Reveal>
            <div className="border-t border-line pt-12">
              <h2 className="u-label text-ink-soft" data-reveal>
                {copy.overview.title[locale]}
              </h2>

              <div className="mt-8 space-y-6 max-w-[65ch]" data-reveal>
                {copy.overview.paragraphs.map((p, i) => (
                  <p key={i} className="u-body text-ink">
                    <RegMark>{p[locale]}</RegMark>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* INSEGNAMENTO E ACCADEMIA */}
        <section className="wrap mt-20 md:mt-28">
          <Reveal>
            <div className="border-t border-line pt-12">
              <div className="flex items-center gap-3" data-reveal>
                <GraduationIcon />
                <h2 className="u-label text-ink-soft">
                  {copy.teaching.title[locale]}
                </h2>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" data-reveal>
                {copy.teaching.items.map((item, index) => (
                  <li
                    key={index}
                    className="border-l-2 border-accent/40 bg-surface/50 p-6 transition-colors hover:border-accent"
                  >
                    <p className="u-body text-ink">
                      <RegMark>{item[locale]}</RegMark>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* AFFILIAZIONI SCIENTIFICHE */}
        <section className="wrap mt-20 md:mt-28">
          <Reveal>
            <div className="border-t border-line pt-12">
              <div className="flex items-center gap-3" data-reveal>
                <ShieldIcon />
                <h2 className="u-label text-ink-soft">
                  {copy.affiliations.title[locale]}
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
                {copy.affiliations.items.map((aff, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border border-line p-5 transition-colors hover:bg-surface"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="u-body text-sm font-medium text-ink">
                      {aff[locale]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* MISSIONI UMANITARIE */}
        <section className="wrap mt-20 md:mt-32">
          <Reveal>
            <div className="border-t border-line pt-12">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3" data-reveal>
                    <HeartIcon />
                    <h2 className="u-label text-ink-soft">
                      {copy.humanitarian.title[locale]}
                    </h2>
                  </div>

                  <div className="mt-8 space-y-6 max-w-[60ch]" data-reveal>
                    {copy.humanitarian.paragraphs.map((p, i) => (
                      <p key={i} className="u-body text-ink">
                        {p[locale]}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5" data-reveal>
                  <div className="relative aspect-[4/3] overflow-hidden bg-line">
                    <Image
                      src={media(copy.humanitarian.image)}
                      alt={copy.humanitarian.title[locale]}
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ETICA E APPROCCIO CLINICO */}
        <section className="wrap my-20 md:my-32">
          <Reveal>
            <div className="bg-surface border border-line p-8 md:p-14" data-reveal>
              <div className="flex items-center gap-3">
                <AwardIcon />
                <h2 className="u-label text-ink-soft">
                  {copy.ethics.title[locale]}
                </h2>
              </div>

              <blockquote className="u-statement mt-8 max-w-[55ch] text-ink italic">
                {copy.ethics.quote[locale]}
              </blockquote>

              <div className="mt-8 border-t border-line pt-6 max-w-[60ch]">
                {copy.ethics.paragraphs.map((p, i) => (
                  <p key={i} className="u-body text-ink-soft">
                    {p[locale]}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <Link href={href("contact", locale)} className="link-rule u-label">
                  <span aria-hidden="true" className="rule" />
                  {navLabel.contact[locale]}
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter locale={locale} />

      <JsonLd
        data={breadcrumbList([
          { name: navLabel.home[locale], path: href("home", locale) },
          { name: navLabel.biography[locale] },
        ])}
      />
    </>
  );
}
