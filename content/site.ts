import type { L10n } from "@/lib/i18n";

/**
 * Dati di studio e contatto, presi dal sito originale
 * (https://www.dellavanzatoroberto.it/contact-2/, verificati 2026-07-25).
 * Nessun dato inventato: ciò che manca è marcato come da confermare.
 */
export const studio = {
  name: "Studio Medico Dr. Roberto Dell'Avanzato",
  building: "Milano Eccellenze Mediche",
  street: "Via Andegari 18",
  detail: { it: "Piano 1 — Scala destra", en: "Floor 1 — right staircase" } satisfies L10n,
  zip: "20121",
  city: "Milano",
  country: { it: "Italia", en: "Italy" } satisfies L10n,
  // coordinate del civico (Via Andegari 18, 20121 Milano) usate per il pin
  lat: 45.46342,
  lng: 9.19405,
  phone: "+39 02 72023474",
  phoneHref: "+390272023474",
  email: "info@dellavanzatoroberto.it",
  register: {
    it: "Ordine dei Medici Chirurghi e degli Odontoiatri di Milano n. 47924",
    en: "Milan Medical Association (Ordine dei Medici Chirurghi) reg. no. 47924",
  } satisfies L10n,
  vat: "P.IVA 0977885100",
  landmarks: {
    it: ["50 metri dalla metropolitana M3 «Montenapoleone»", "Di fronte all'Hotel Mandarin Oriental", "A pochi passi dal Duomo e da via Manzoni"],
    en: ["50 metres from «Montenapoleone» underground station (M3)", "Opposite the Mandarin Oriental Hotel", "A short walk from the Duomo and via Manzoni"],
  },
  hours: {
    it: "Orari di studio da confermare — si riceve solo su appuntamento.",
    en: "Opening hours to be confirmed — by appointment only.",
  } satisfies L10n,
} as const;

/** Sedi in cui esercita l'attività chirurgica, dalla pagina "It's Me". */
export const surgicalVenues = [
  "Clinica La Madonnina, Milano",
  "Clinica Villa Letizia, Milano",
  "Clinica Villa Arbe, Milano",
];

/** Profili presenti nell'header del sito originale. */
export const socials = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/aesthetic_surgery/" },
  { id: "twitter", label: "X / Twitter", href: "https://twitter.com/Dr_DellAvanzato" },
  { id: "mail", label: "Email", href: `mailto:${studio.email}` },
];

/** Riferimento al progetto originale — il concept non deve mai spacciarsi per il sito ufficiale. */
export const originalSite = "https://www.dellavanzatoroberto.it/";

export const disclaimer = {
  it: "Concept di redesign non ufficiale, a scopo dimostrativo. Non è il sito del Dott. Roberto Dell'Avanzato: testi e fotografie provengono dal sito originale e appartengono ai legittimi proprietari.",
  en: "Unofficial redesign concept, for demonstration purposes. This is not Dr Roberto Dell'Avanzato's website: copy and photographs come from the original site and belong to their rightful owners.",
} satisfies L10n;

/** Nota deontologica del sito originale, riformulata in positivo. */
export const medicalNotice = {
  it: "La visita medica è il solo strumento diagnostico per impostare un trattamento efficace: è un atto medico e per questo non è mai gratuita. Le indicazioni date per telefono o via e-mail restano suggerimenti di comportamento, non una diagnosi.",
  en: "An in-person consultation is the only diagnostic tool for planning an effective treatment: it is a medical act and is therefore never free of charge. Guidance given by phone or e-mail remains general advice, not a diagnosis.",
} satisfies L10n;
