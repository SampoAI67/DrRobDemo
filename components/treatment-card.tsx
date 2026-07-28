import Image from "next/image";
import Link from "next/link";
import { RegMark } from "@/components/reg-mark";
import type { Treatment } from "@/content/treatments";
import type { Locale } from "@/lib/i18n";
import { media } from "@/lib/media";
import { href } from "@/lib/routes";

/**
 * Griglia delle card, condivisa fra indice e correlati.
 *
 * I punti di rottura non seguono il gusto ma il tetto di risoluzione: le sorgenti
 * quadrate del cliente si fermano a 640-800 px, quindi la card non deve mai
 * superare ~400 px di lato. Le colonne cambiano prima che ciascuna arrivi lì —
 * il caso peggiore è a 1279 px, dove le tre colonne danno 371 px. Sotto sm resta
 * una colonna sola, e a quel punto è `max-w-[25rem]` sulla card a fare da tetto.
 */
export const CARD_GRID =
  "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

const CARD_SIZES =
  "(min-width: 1280px) 320px, (min-width: 768px) 31vw, (min-width: 640px) 46vw, min(92vw, 400px)";

/** Card dell'indice: immagine quadrata, titolo, sintesi. Il titolo è un h3. */
export function TreatmentCard({
  treatment,
  locale,
}: {
  treatment: Treatment;
  locale: Locale;
}) {
  return (
    <Link
      href={href("treatment", locale, treatment.slug[locale])}
      className="group block max-w-[25rem]"
    >
      <div className="relative aspect-square overflow-hidden bg-line">
        <Image
          src={media(treatment.image)}
          alt={treatment.alt[locale]}
          fill
          sizes={CARD_SIZES}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <h3 className="u-label mt-5 text-ink transition-colors group-hover:text-accent">
        <RegMark>{treatment.title[locale]}</RegMark>
      </h3>
      <p className="u-body mt-2 text-ink-soft">
        <RegMark>{treatment.summary[locale]}</RegMark>
      </p>
    </Link>
  );
}
