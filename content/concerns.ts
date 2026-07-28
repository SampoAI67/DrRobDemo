/**
 * S4 — «Da cosa vuoi partire»: le otto esigenze da cui l'utente si riconosce.
 *
 * Ogni voce porterà alla scheda del trattamento corrispondente: oggi puntano tutte
 * all'indice, perché le schede non esistono ancora. `treatmentSlug` tiene già la
 * destinazione finale, così i link profondi si accendono da soli quando le schede
 * saranno in piedi.
 */

import type { Localized } from "@/lib/i18n";

export type Concern = {
  n: string;
  label: Localized<string>;
  image: string;
  alt: Localized<string>;
  /** Scheda di destinazione, riferita a TREATMENTS. */
  treatmentSlug: string;
};

export const CONCERNS: Concern[] = [
  {
    n: "01",
    label: { it: "Rilassamento cutaneo", en: "Skin laxity" },
    image: "/media/sq-ultherapy.webp",
    alt: {
      it: "Trattamento con manipolo a ultrasuoni sul volto",
      en: "Ultrasound handpiece treatment on the face",
    },
    treatmentSlug: "ultherapy",
  },
  {
    n: "02",
    label: { it: "Adiposità localizzate", en: "Localised fat deposits" },
    image: "/media/sq-liposcultura.webp",
    alt: {
      it: "Intervento di liposcultura laser assistita",
      en: "Laser-assisted liposculpture procedure",
    },
    treatmentSlug: "liposcultura-laser",
  },
  {
    n: "03",
    label: { it: "Rughe", en: "Wrinkles" },
    image: "/media/sq-botulino.webp",
    alt: {
      it: "Preparazione di un trattamento per le rughe d’espressione",
      en: "Preparation of a treatment for expression lines",
    },
    treatmentSlug: "tossina-botulinica",
  },
  {
    n: "04",
    label: { it: "Volumi e labbra", en: "Volume and lips" },
    image: "/media/sq-filler.webp",
    alt: {
      it: "Siringa preriempita per il trattamento dei volumi",
      en: "Pre-filled syringe for volume treatment",
    },
    treatmentSlug: "filler",
  },
  {
    n: "05",
    label: { it: "Cellulite", en: "Cellulite" },
    image: "/media/sq-cellfina.webp",
    alt: {
      it: "Trattamento degli inestetismi della cellulite",
      en: "Treatment for the appearance of cellulite",
    },
    treatmentSlug: "cellfina",
  },
  {
    n: "06",
    label: { it: "Palpebre e sguardo", en: "Eyelids and gaze" },
    image: "/media/sq-blefaroplastica.webp",
    alt: { it: "Regione perioculare", en: "Periocular region" },
    treatmentSlug: "blefaroplastica-laser",
  },
  {
    n: "07",
    label: { it: "Profilo del viso", en: "Facial profile" },
    image: "/media/sq-rinosettoplastica.webp",
    alt: {
      it: "Profilo del viso, area della rinosettoplastica",
      en: "Facial profile, the area treated by septorhinoplasty",
    },
    treatmentSlug: "rinosettoplastica",
  },
  {
    n: "08",
    label: { it: "Ginocchia e corpo", en: "Knees and body" },
    image: "/media/sq-corpo.webp",
    alt: {
      it: "Trattamento di rimodellamento del corpo",
      en: "Body reshaping treatment",
    },
    treatmentSlug: "body-reshaping",
  },
];
