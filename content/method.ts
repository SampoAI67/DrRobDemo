/**
 * S6 — «Il metodo»: quattro voci, accordion verticale su fondo scuro.
 *
 * Fatti verificabili dal materiale del cliente, non affermazioni di qualità.
 */

import type { Localized } from "@/lib/i18n";

export type MethodStep = {
  n: string;
  title: Localized<string>;
  text: Localized<string>;
  image: string;
  alt: Localized<string>;
};

export const METHOD: MethodStep[] = [
  {
    n: "01",
    title: { it: "Esperienza clinica", en: "Clinical experience" },
    text: {
      it: "Oltre 25 anni. Specialista in Chirurgia, Master Universitario in Chirurgia Estetica (San Marino), Diploma Universitario in Chirurgia Mini-Invasiva (Francia).",
      en: "Over 25 years. Specialist in Surgery, University Master in Aesthetic Surgery (San Marino), University Diploma in Minimally Invasive Surgery (France).",
    },
    image: "/media/method-01-esperienza.webp",
    alt: {
      it: "Ritratto del dott. Roberto Dell’Avanzato",
      en: "Portrait of Dr Roberto Dell’Avanzato",
    },
  },
  {
    n: "02",
    title: { it: "Tecnologia", en: "Technology" },
    text: {
      it: "Tra i primi in Italia nel 2002 sulla liposuzione laser assistita. Endolift® dal 2005.",
      en: "Among the first in Italy, in 2002, to perform laser-assisted liposuction. Endolift® since 2005.",
    },
    image: "/media/method-02-tecnologia.webp",
    alt: {
      it: "Il dott. Dell’Avanzato accanto a un dispositivo laser",
      en: "Dr Dell’Avanzato beside a laser device",
    },
  },
  {
    n: "03",
    title: { it: "Insegnamento", en: "Teaching" },
    text: {
      it: "Docente a contratto di Laser e Micro-Liposcultura Laser, Università di San Marino e La Sapienza di Roma.",
      en: "Adjunct lecturer in Lasers and Laser Micro-Liposculpture, University of San Marino and La Sapienza University of Rome.",
    },
    image: "/media/method-03-insegnamento.webp",
    alt: {
      it: "Il dott. Dell’Avanzato nel suo studio",
      en: "Dr Dell’Avanzato at his practice",
    },
  },
  {
    n: "04",
    title: { it: "Percorso personalizzato", en: "Personalised pathway" },
    text: {
      it: "Anamnesi, piano su misura, trattamento mini-invasivo o non invasivo, follow-up.",
      en: "History taking, a tailored plan, minimally invasive or non-invasive treatment, follow-up.",
    },
    image: "/media/method-04-percorso.webp",
    alt: {
      it: "Il dott. Dell’Avanzato durante una visita",
      en: "Dr Dell’Avanzato during a consultation",
    },
  },
];
