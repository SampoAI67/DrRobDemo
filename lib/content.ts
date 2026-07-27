/**
 * Contenuti della homepage.
 *
 * Registro informativo: si descrive che cos'è un trattamento, mai quanto sia
 * efficace. Niente prezzi, prima/dopo, recensioni, percentuali, superlativi
 * (L. 145/2018 commi 525-536; art. 56 Codice Deontologico FNOMCeO).
 * Ogni dato non verificabile sul materiale del cliente è marcato «da confermare».
 */

export type Treatment = {
  title: string;
  image: string;
  alt: string;
};

/**
 * S3 — carosello trattamenti.
 *
 * ⚠️ `sq-botulino` inquadra un flacone di tossina botulinica con etichetta in parte
 * leggibile. In Italia i medicinali con obbligo di ricetta non sono pubblicizzabili
 * al pubblico (D.Lgs. 219/2006): l'immagine è da far validare al consulente legale
 * del cliente, o da sostituire. Vedi public/media/MANIFEST.md.
 */
export const TREATMENTS: Treatment[] = [
  {
    title: "Endolift®",
    image: "/media/sq-endolift.webp",
    alt: "Trattamento Endolift® con fibra laser sul volto",
  },
  {
    title: "Ultherapy®",
    image: "/media/sq-ultherapy.webp",
    alt: "Trattamento Ultherapy® con manipolo a ultrasuoni",
  },
  {
    title: "Filler",
    image: "/media/sq-filler.webp",
    alt: "Siringa preriempita per trattamento con filler",
  },
  {
    title: "Tossina botulinica",
    image: "/media/sq-botulino.webp",
    alt: "Preparazione di un trattamento con tossina botulinica",
  },
  {
    title: "Profhilo®",
    image: "/media/sq-profhilo.webp",
    alt: "Trattamento di bioristrutturazione con Profhilo®",
  },
  {
    title: "Liposcultura laser",
    image: "/media/sq-liposcultura.webp",
    alt: "Liposcultura laser assistita in sala operatoria",
  },
  {
    title: "Blefaroplastica laser",
    image: "/media/sq-blefaroplastica.webp",
    alt: "Regione perioculare, area della blefaroplastica laser",
  },
  {
    title: "Cellfina®",
    image: "/media/sq-cellfina.webp",
    alt: "Trattamento Cellfina® sugli inestetismi della cellulite",
  },
];

export type Concern = {
  n: string;
  label: string;
  image: string;
  alt: string;
};

/** S4 — da cosa vuoi partire. */
export const CONCERNS: Concern[] = [
  {
    n: "01",
    label: "Rilassamento cutaneo",
    image: "/media/sq-ultherapy.webp",
    alt: "Trattamento con manipolo a ultrasuoni sul volto",
  },
  {
    n: "02",
    label: "Adiposità localizzate",
    image: "/media/sq-liposcultura.webp",
    alt: "Intervento di liposcultura laser assistita",
  },
  {
    n: "03",
    label: "Rughe",
    image: "/media/sq-botulino.webp",
    alt: "Preparazione di un trattamento per le rughe d'espressione",
  },
  {
    n: "04",
    label: "Volumi e labbra",
    image: "/media/sq-filler.webp",
    alt: "Siringa preriempita per il trattamento dei volumi",
  },
  {
    n: "05",
    label: "Cellulite",
    image: "/media/sq-cellfina.webp",
    alt: "Trattamento degli inestetismi della cellulite",
  },
  {
    n: "06",
    label: "Palpebre e sguardo",
    image: "/media/sq-blefaroplastica.webp",
    alt: "Regione perioculare",
  },
  {
    n: "07",
    label: "Profilo del viso",
    image: "/media/sq-rinosettoplastica.webp",
    alt: "Profilo del viso, area della rinosettoplastica",
  },
  {
    n: "08",
    label: "Ginocchia e corpo",
    image: "/media/sq-corpo.webp",
    alt: "Trattamento di rimodellamento del corpo",
  },
];

export type MethodStep = {
  n: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

/** S6 — il metodo. */
export const METHOD: MethodStep[] = [
  {
    n: "01",
    title: "Esperienza clinica",
    text: "Oltre 25 anni. Specialista in Chirurgia, Master Universitario in Chirurgia Estetica (San Marino), Diploma Universitario in Chirurgia Mini-Invasiva (Francia).",
    image: "/media/method-01-esperienza.webp",
    alt: "Ritratto del dott. Roberto Dell'Avanzato",
  },
  {
    n: "02",
    title: "Tecnologia",
    text: "Tra i primi in Italia nel 2002 sulla liposuzione laser assistita. Endolift® dal 2005.",
    image: "/media/method-02-tecnologia.webp",
    alt: "Il dott. Dell'Avanzato accanto a un dispositivo laser",
  },
  {
    n: "03",
    title: "Insegnamento",
    text: "Docente a contratto di Laser e Micro-Liposcultura Laser, Università di San Marino e La Sapienza di Roma.",
    image: "/media/method-03-insegnamento.webp",
    alt: "Il dott. Dell'Avanzato nel suo studio",
  },
  {
    n: "04",
    title: "Percorso personalizzato",
    text: "Anamnesi, piano su misura, trattamento mini-invasivo o non invasivo, follow-up.",
    image: "/media/method-04-percorso.webp",
    alt: "Il dott. Dell'Avanzato durante una visita",
  },
];
