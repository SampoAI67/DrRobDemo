/**
 * Testi della homepage, italiano e inglese affiancati.
 *
 * L'inglese non è una traduzione meccanica: tiene lo stesso registro informativo e
 * non promozionale dell'italiano. La terminologia clinica va fatta validare al
 * cliente, che è Key Opinion Leader internazionale.
 */

import type { Localized } from "@/lib/i18n";

export const hero = {
  kickers: [
    { it: "Chirurgia estetica", en: "Aesthetic surgery" },
    { it: "Medicina estetica", en: "Aesthetic medicine" },
    { it: "Milano", en: "Milan" },
  ] satisfies Localized<string>[],
  /** Due righe distinte: il wordmark va a capo in un punto preciso. */
  wordmark: ["Dr. Roberto", "Dell’Avanzato"],
  statement: {
    it: "Chirurgia e medicina estetica mini-invasiva. Dal 2005 sviluppo e insegno la metodica Endolift®.",
    en: "Minimally invasive aesthetic surgery and medicine. Since 2005 I have developed and taught the Endolift® method.",
  },
  imageAlt: {
    it: "Il dott. Roberto Dell’Avanzato esegue un trattamento iniettivo nel suo studio di Milano.",
    en: "Dr Roberto Dell’Avanzato performing an injectable treatment at his practice in Milan.",
  },
} satisfies Record<string, unknown>;

export const statement = {
  kicker: { it: "Il mio approccio", en: "My approach" },
  quote: {
    it: "«Il mio lavoro è rispettare e far emergere la tua identità.»",
    en: "“My work is to respect your identity and let it show.”",
  },
  attribution: { it: "Roberto Dell’Avanzato", en: "Roberto Dell’Avanzato" },
  link: { it: "La biografia", en: "The biography" },
} satisfies Record<string, Localized<string>>;

export const treatments = {
  kicker: { it: "Trattamenti", en: "Treatments" },
  lead: {
    it: "Otto fra i trattamenti che eseguo più di frequente, chirurgici e non chirurgici. L’indicazione si stabilisce in visita, caso per caso.",
    en: "Eight of the treatments I perform most often, surgical and non-surgical. The indication is established during the consultation, case by case.",
  },
  cta: { it: "Vedi tutti i trattamenti", en: "See all treatments" },
} satisfies Record<string, Localized<string>>;

export const concerns = {
  kicker: { it: "Da cosa vuoi partire", en: "Where would you start" },
  lead: {
    it: "Ogni percorso comincia da un’esigenza precisa. La visita stabilisce se e come intervenire.",
    en: "Every path begins with a specific need. The consultation establishes whether and how to proceed.",
  },
} satisfies Record<string, Localized<string>>;

export const endolift = {
  kicker: { it: "Endolift®", en: "Endolift®" },
  quote: {
    it: "«La passione per le tecnologie medicali mi ha portato ad essere tra i primi in Italia nel 2002 ad eseguire la liposuzione laser assistita, e nel 2005 a sviluppare personalmente la metodica Endolift®.»",
    en: "“A passion for medical technology led me to be among the first in Italy, in 2002, to perform laser-assisted liposuction, and in 2005 to personally develop the Endolift® method.”",
  },
  cta: { it: "La metodica Endolift®", en: "The Endolift® method" },
} satisfies Record<string, Localized<string>>;

export const method = {
  kicker: { it: "Il metodo", en: "The method" },
} satisfies Record<string, Localized<string>>;

export const proof = {
  kicker: { it: "Studio e credenziali", en: "Practice and credentials" },
} satisfies Record<string, Localized<string>>;
