import Link from "next/link";
import { nav, ui } from "@/content/copy";
import { disclaimer, originalSite, socials, studio } from "@/content/site";
import { href, type PageId } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";

const navIds: Record<string, PageId> = {
  "/its-me": "its-me",
  "/medicina-estetica": "medicina",
  "/chirurgia-estetica": "chirurgia",
  "/advanced-beauty-technology": "technology",
  "/rassegna-stampa": "press",
  "/corsi-di-formazione": "courses",
  "/contatti": "contact",
};

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-[--spacing-section] border-t border-line bg-mist">
      <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl leading-tight">Dott. Roberto Dell&rsquo;Avanzato</p>
          <p className="mt-2 text-sm text-ink-soft">
            {locale === "it"
              ? "Medico chirurgo specialista, perfezionato in medicina e chirurgia estetica."
              : "Specialist surgeon with advanced training in aesthetic medicine and surgery."}
          </p>
          <p className="mt-6 text-sm text-ink-soft">{studio.register[locale]}</p>
          <p className="text-sm text-ink-soft">{studio.vat}</p>
        </div>

        <nav aria-label={locale === "it" ? "Pagine del sito" : "Site pages"} className="text-sm">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={href(navIds[item.href], locale)} className="text-ink-soft transition-colors hover:text-clinic">
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic text-sm text-ink-soft">
          <p className="font-medium text-ink">{studio.name}</p>
          <p className="mt-2">
            {studio.street} — {studio.detail[locale]}
            <br />
            {studio.zip} {studio.city}, {studio.country[locale]}
          </p>
          <p className="mt-4">
            <a href={`tel:${studio.phoneHref}`} className="transition-colors hover:text-clinic">
              {studio.phone}
            </a>
            <br />
            <a href={`mailto:${studio.email}`} className="transition-colors hover:text-clinic">
              {studio.email}
            </a>
          </p>
          <ul className="mt-4 flex gap-4">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  className="inline-flex min-h-11 items-center text-ink-soft underline underline-offset-4 transition-colors hover:text-clinic"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </address>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[84rem] px-5 py-6 text-xs leading-relaxed text-ink-soft sm:px-8">
          <p>
            {disclaimer[locale]}{" "}
            <a href={originalSite} className="underline underline-offset-2" rel="noopener nofollow" target="_blank">
              {locale === "it" ? "Sito originale" : "Original website"}
            </a>
            .
          </p>
          <p className="mt-2">
            {ui.book[locale]}: <a href={`tel:${studio.phoneHref}`} className="underline underline-offset-2">{studio.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
