/**
 * Testi dei segnaposto delle pagine interne, in attesa delle pagine vere.
 *
 * Dichiarano che la pagina è in preparazione invece di fingere contenuto: su un
 * sito sanitario è preferibile una pagina onestamente vuota a una piena di parole
 * generiche non verificate.
 */

import type { Localized } from "@/lib/i18n";
import { studio } from "@/content/site";

type Stub = { title: Localized<string>; intro: Localized<string> };

export const stubs = {
  treatments: {
    title: { it: "Trattamenti", en: "Treatments" },
    intro: {
      it: "Pagina in preparazione. Ogni trattamento avrà una scheda informativa dedicata.",
      en: "Page in preparation. Each treatment will have its own information page.",
    },
  },
  biography: {
    title: { it: "Biografia", en: "Biography" },
    intro: {
      it: "Pagina in preparazione. Raccoglierà il percorso professionale, la formazione e l’attività di insegnamento.",
      en: "Page in preparation. It will bring together the professional path, training and teaching activity.",
    },
  },
  contact: {
    title: { it: "Prenota una visita", en: "Book a consultation" },
    intro: {
      it: `Pagina in preparazione. Studio in ${studio.street}, ${studio.postalCode} ${studio.city} — tel. ${studio.phone}. Orari e indirizzo e-mail da confermare.`,
      en: `Page in preparation. Practice at ${studio.street}, ${studio.postalCode} ${studio.city} — tel. ${studio.phone}. Opening hours and e-mail address to be confirmed.`,
    },
  },
} satisfies Record<string, Stub>;

export const backHome: Localized<string> = {
  it: "Torna alla home",
  en: "Back to home",
};
