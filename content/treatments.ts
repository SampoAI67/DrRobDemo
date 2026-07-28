/**
 * Trattamenti mostrati nel carosello della home.
 *
 * Registro informativo: si descrive che cos'è un trattamento, mai quanto sia
 * efficace. Niente prezzi, prima/dopo, recensioni, percentuali, superlativi
 * (L. 145/2018 commi 525-536; art. 56 Codice Deontologico FNOMCeO).
 *
 * ⚠️ `sq-botulino` inquadra un flacone di tossina botulinica con etichetta in parte
 * leggibile. In Italia i medicinali con obbligo di ricetta non sono pubblicizzabili
 * al pubblico (D.Lgs. 219/2006): l'immagine è da far validare al consulente legale
 * del cliente, o da sostituire. Sulla futura scheda dedicata il problema si amplifica,
 * perché lì l'immagine è grande. Vedi public/media/MANIFEST.md.
 */

import type { Localized } from "@/lib/i18n";

export type Treatment = {
  /** Slug della futura scheda dedicata. I marchi restano identici nelle due lingue. */
  slug: string;
  title: Localized<string>;
  image: string;
  alt: Localized<string>;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "endolift",
    title: { it: "Endolift®", en: "Endolift®" },
    image: "/media/sq-endolift.webp",
    alt: {
      it: "Trattamento Endolift® con fibra laser sul volto",
      en: "Endolift® treatment with laser fibre on the face",
    },
  },
  {
    slug: "ultherapy",
    title: { it: "Ultherapy®", en: "Ultherapy®" },
    image: "/media/sq-ultherapy.webp",
    alt: {
      it: "Trattamento Ultherapy® con manipolo a ultrasuoni",
      en: "Ultherapy® treatment with ultrasound handpiece",
    },
  },
  {
    slug: "filler",
    title: { it: "Filler", en: "Fillers" },
    image: "/media/sq-filler.webp",
    alt: {
      it: "Siringa preriempita per trattamento con filler",
      en: "Pre-filled syringe for filler treatment",
    },
  },
  {
    slug: "tossina-botulinica",
    title: { it: "Tossina botulinica", en: "Botulinum toxin" },
    image: "/media/sq-botulino.webp",
    alt: {
      it: "Preparazione di un trattamento con tossina botulinica",
      en: "Preparation of a botulinum toxin treatment",
    },
  },
  {
    slug: "profhilo",
    title: { it: "Profhilo®", en: "Profhilo®" },
    image: "/media/sq-profhilo.webp",
    alt: {
      it: "Trattamento di bioristrutturazione con Profhilo®",
      en: "Bioremodelling treatment with Profhilo®",
    },
  },
  {
    slug: "liposcultura-laser",
    title: { it: "Liposcultura laser", en: "Laser liposculpture" },
    image: "/media/sq-liposcultura.webp",
    alt: {
      it: "Liposcultura laser assistita in sala operatoria",
      en: "Laser-assisted liposculpture in the operating room",
    },
  },
  {
    slug: "blefaroplastica-laser",
    title: { it: "Blefaroplastica laser", en: "Laser blepharoplasty" },
    image: "/media/sq-blefaroplastica.webp",
    alt: {
      it: "Regione perioculare, area della blefaroplastica laser",
      en: "Periocular region, the area treated by laser blepharoplasty",
    },
  },
  {
    slug: "cellfina",
    title: { it: "Cellfina®", en: "Cellfina®" },
    image: "/media/sq-cellfina.webp",
    alt: {
      it: "Trattamento Cellfina® sugli inestetismi della cellulite",
      en: "Cellfina® treatment for the appearance of cellulite",
    },
  },
];
