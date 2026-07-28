import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Treatments } from "@/components/sections/treatments";
import { Concerns } from "@/components/sections/concerns";
import { Endolift } from "@/components/sections/endolift";
import { Method } from "@/components/sections/method";
import { Proof } from "@/components/sections/proof";
import type { Locale } from "@/lib/i18n";

/** Le sette sezioni della home, condivise fra le due lingue. */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <main id="contenuto">
      <Hero locale={locale} />
      <Statement locale={locale} />
      <Treatments locale={locale} />
      <Concerns locale={locale} />
      <Endolift locale={locale} />
      <Method locale={locale} />
      <Proof locale={locale} />
    </main>
  );
}
