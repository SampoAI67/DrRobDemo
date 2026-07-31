/**
 * Dati di sito: recapiti, credenziali, etichette di navigazione, metadata.
 *
 * Registro informativo, mai promozionale: si dichiara che cosa risulta, non quanto
 * sia bravo (L. 145/2018 commi 525-536; art. 56 Codice Deontologico FNOMCeO).
 * Ciò che non risulta dal materiale del cliente sta nel blocco «Da confermare»:
 * non si inventano orari, e-mail, nomi o sedi.
 */

import type { Localized } from "@/lib/i18n";
import type { RouteKey } from "@/lib/routes";

export const studio = {
  name: "Dr. Roberto Dell’Avanzato",
  street: "Via Andegari 18",
  postalCode: "20121",
  city: "Milano",
  phone: "+39 02 7202 3474",
  phoneHref: "+390272023474",
  /**
   * Recapito indicato dal cliente. È una casella personale su dominio gratuito:
   * prima del go-live andrebbe sostituita con un indirizzo sul dominio dello
   * studio, che è più credibile e non lega la corrispondenza clinica a un
   * provider di posta consumer. Finché resta questo, in pagina non si stampa mai
   * in chiaro — si espone solo come destinazione di un `mailto:`.
   */
  email: "dellavanzato@hotmail.it",
  /** Coordinate di Via Andegari 18 da OpenStreetMap (Nominatim), non stimate. */
  lat: 45.46904,
  lon: 9.19143,
  vatId: "0977885100",
  register: "47924",
} as const;

/** Etichette della navigazione, per chiave di rotta. */
export const navLabel: Record<RouteKey, Localized<string>> = {
  home: { it: "Home", en: "Home" },
  treatments: { it: "Trattamenti", en: "Treatments" },
  treatment: { it: "Trattamenti", en: "Treatments" },
  biography: { it: "Biografia", en: "Biography" },
  contact: { it: "Contatti", en: "Contact" },
  press: { it: "Rassegna stampa", en: "Press" },
};

export const ui = {
  wordmark: { it: "Dott. Dell’Avanzato", en: "Dr Dell’Avanzato" },
  book: { it: "Prenota una visita", en: "Book a consultation" },
  call: { it: "Chiama lo studio", en: "Call the practice" },
  write: { it: "Scrivi allo studio", en: "Email the practice" },
  mainNav: { it: "Principale", en: "Main" },
  siteNav: { it: "Pagine del sito", en: "Site pages" },
  skipToContent: { it: "Vai al contenuto", en: "Skip to content" },
  switchLanguage: { it: "English", en: "Italiano" },
  switchLanguageAria: {
    it: "Passa alla versione inglese",
    en: "Switch to the Italian version",
  },
} satisfies Record<string, Localized<string>>;

export const meta = {
  title: {
    it: "Dr. Roberto Dell'Avanzato — Chirurgia e medicina estetica, Milano",
    en: "Dr Roberto Dell'Avanzato — Aesthetic surgery and medicine, Milan",
  },
  description: {
    it: "Studio del dott. Roberto Dell'Avanzato, medico chirurgo, in Via Andegari 18 a Milano. Chirurgia e medicina estetica mini-invasiva, laser, metodica Endolift®.",
    en: "Practice of Dr Roberto Dell'Avanzato, surgeon, at Via Andegari 18 in Milan. Minimally invasive aesthetic surgery and medicine, lasers, the Endolift® method.",
  },
  ogTitle: {
    it: "Dr. Roberto Dell'Avanzato — Chirurgia e medicina estetica, Milano",
    en: "Dr Roberto Dell'Avanzato — Aesthetic surgery and medicine, Milan",
  },
  ogDescription: {
    it: "Chirurgia e medicina estetica mini-invasiva. Studio in Via Andegari 18, Milano.",
    en: "Minimally invasive aesthetic surgery and medicine. Practice at Via Andegari 18, Milan.",
  },
  ogAlt: {
    it: "Il dott. Roberto Dell'Avanzato nel suo studio di Milano.",
    en: "Dr Roberto Dell'Avanzato at his practice in Milan.",
  },
} satisfies Record<string, Localized<string>>;

export type CredentialBlock = {
  label: Localized<string>;
  lines: Localized<string>[];
};

/** S7 — colonne di «Studio e credenziali». Denso, si legge come un curriculum. */
export const credentials: CredentialBlock[][] = [
  [
    {
      label: { it: "Studio", en: "Practice" },
      lines: [
        {
          it: `${studio.street}, ${studio.postalCode} ${studio.city}`,
          en: `${studio.street}, ${studio.postalCode} ${studio.city}`,
        },
        {
          it: "50 m dalla metro Montenapoleone",
          en: "50 m from Montenapoleone underground station",
        },
        { it: `Tel ${studio.phone}`, en: `Tel ${studio.phone}` },
        { it: `P. IVA ${studio.vatId}`, en: `VAT ${studio.vatId}` },
      ],
    },
    {
      label: { it: "Albo", en: "Medical register" },
      lines: [
        {
          it: `Ordine dei Medici Chirurghi di Milano n. ${studio.register}`,
          en: `Milan Medical Association no. ${studio.register}`,
        },
      ],
    },
  ],
  [
    {
      label: {
        it: "Responsabile medicina estetica",
        en: "Head of aesthetic medicine",
      },
      lines: [
        {
          it: "Dipartimento medico Espace Chenot Health Wellness & Spa, L’Albereta Relais & Châteaux, Erbusco (BS)",
          en: "Espace Chenot Health Wellness & Spa medical department, L’Albereta Relais & Châteaux, Erbusco (BS)",
        },
      ],
    },
    {
      label: { it: "Key opinion leader", en: "Key opinion leader" },
      lines: [
        {
          it: "Teoxane · Merz · Eufoton · Filorga · Medicap · High Tech Aesthetic",
          en: "Teoxane · Merz · Eufoton · Filorga · Medicap · High Tech Aesthetic",
        },
      ],
    },
    {
      label: { it: "Docente a contratto", en: "Adjunct lecturer" },
      lines: [
        {
          it: "Università di San Marino · La Sapienza, Roma",
          en: "University of San Marino · La Sapienza, Rome",
        },
      ],
    },
  ],
  [
    {
      label: { it: "Missioni umanitarie", en: "Humanitarian missions" },
      lines: [
        {
          it: "Work in Progress Onlus (Gambia, Senegal) — socio fondatore",
          en: "Work in Progress Onlus (Gambia, Senegal) — founding member",
        },
        {
          it: "Depilex Smileagain Foundation (Pakistan, Bangladesh, 2003-2005)",
          en: "Depilex Smileagain Foundation (Pakistan, Bangladesh, 2003-2005)",
        },
      ],
    },
    {
      label: { it: "Da confermare", en: "To be confirmed" },
      // L'e-mail è uscita da qui: il cliente l'ha indicata. Restano le tre voci
      // che nessuno ha ancora confermato — non si inventano (vedi intestazione).
      lines: [
        { it: "Orari di studio", en: "Opening hours" },
        { it: "Direttore sanitario", en: "Medical director" },
        { it: "Elenco completo delle sedi", en: "Full list of locations" },
      ],
    },
  ],
];
