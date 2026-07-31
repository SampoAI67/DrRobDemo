/**
 * Contenuti della pagina Rassegna stampa.
 *
 * ⚠️ Questo file è già stato scritto una volta **inventando**: testate come
 * «Journal of Aesthetic Communication» o «Medical SPA & Wellness Journal» non
 * esistono, le date 2020-2024 erano immaginate (i PDF sono caricati nel 2019) e
 * ogni abbinamento titolo↔documento era sbagliato. Su un sito sanitario una
 * fonte attribuita a vuoto è un problema legale, non un refuso.
 *
 * Quello che segue è estratto da `dellavanzatoroberto.it/rassegna-stampa/`, che
 * pubblica **sette** articoli. Per ciascuno il sito del cliente dà un titolo, un
 * sottotitolo e un PDF: nient'altro. Quindi qui non compaiono né testata né data
 * — non perché non contino, ma perché non risultano. Se il cliente le fornisce
 * si aggiungono i campi `source` e `date` e la scheda li mostra.
 *
 * **Titoli e sottotitoli sono verbatim**, con la sola normalizzazione del
 * maiuscolo (l'originale è tutto in capslock). Sono citazioni di documenti
 * pubblicati, non testo redazionale: riscriverli per addolcire «eccellenti
 * risultati» o «innovativo» significherebbe attribuire al documento parole che
 * non contiene. La questione è segnalata al cliente in `CORREZIONI-REGISTRO.md`
 * §13, ed è sua la decisione se lasciarli, tagliarli o cambiare documento.
 *
 * I PDF stanno in `public/stampa/`, scaricati dal WordPress del cliente e
 * rinominati in modo leggibile. Prima puntavano a `/app/uploads/2019/11/…`, che
 * su questo sito è un 404: percorso del vecchio WordPress, senza `basePath`, e
 * per giunta due dei sette file stanno sotto `2019/12`.
 */

import type { Localized } from "@/lib/i18n";

export type PressItem = {
  id: string;
  /** Verbatim dal documento, nella sua lingua: non si traduce una citazione. */
  title: string;
  /** Sottotitolo del documento. Tradotto per i lettori inglesi, il titolo no. */
  standfirst: Localized<string>;
  /** Nome del file in `public/stampa/`. */
  file: string;
};

export const pressContent = {
  hero: {
    eyebrow: { it: "Pubblicazioni", en: "Publications" },
    title: { it: "Rassegna stampa", en: "Press" },
    subtitle: {
      it: "Gli articoli pubblicati sulle metodiche laser e mini-invasive, consultabili per intero.",
      en: "Published articles on laser and minimally invasive methods, available to read in full.",
    },
  },

  /** I documenti sono in italiano: per il lettore inglese va detto prima. */
  languageNote: {
    it: "",
    en: "The documents are in Italian.",
  },

  actions: {
    readPdf: { it: "Leggi l’articolo", en: "Read the article" },
    /** Letto dagli screen reader al posto dell'etichetta generica di ogni card. */
    readPdfAria: {
      it: "Leggi l’articolo (PDF)",
      en: "Read the article (PDF)",
    },
    pdfMeta: { it: "PDF", en: "PDF" },
  },

  items: [
    {
      id: "face-building",
      title: "Face-building",
      standfirst: {
        it: "Un innovativo protocollo di ringiovanimento del volto con trattamento combinato di Endolift® e Ultherapy®.",
        en: "An innovative facial rejuvenation protocol combining Endolift® and Ultherapy®.",
      },
      file: "face-building-endolift-ultherapy.pdf",
    },
    {
      id: "dieci-anni-lipolisi",
      title:
        "10 anni di lipolisi laser assistita con laser a diodi utilizzando una o più lunghezze d’onda simultanee",
      standfirst: {
        it: "Risultati preliminari del nuovo Laser Spectrum con algoritmo Dual Boost®.",
        en: "Preliminary results of the new Laser Spectrum with the Dual Boost® algorithm.",
      },
      file: "dieci-anni-lipolisi-laser-assistita.pdf",
    },
    {
      id: "endolift-doppio-mento",
      title: "Il laser che corregge il doppio mento e le borse sotto gli occhi",
      standfirst: {
        it: "Si chiama Endolift, è una tecnica non invasiva per contrastare il rilassamento della pelle.",
        en: "It is called Endolift, a non-invasive technique to counter skin laxity.",
      },
      file: "endolift-doppio-mento-borse.pdf",
    },
    {
      id: "endolift-laser-dieci-anni",
      title: "Endolift® laser",
      standfirst: {
        it: "10 anni di eccellenti risultati di una metodica tutta italiana per il ringiovanimento «soft» del volto, del collo e del corpo.",
        en: "Ten years of excellent results from an entirely Italian method for the ‘soft’ rejuvenation of the face, neck and body.",
      },
      file: "endolift-laser-dieci-anni.pdf",
    },
    {
      id: "protocolli-shape",
      title: "Per una medicina estetica all’avanguardia e senza dolore",
      standfirst: {
        it: "La mia esperienza di lavoro con un innovativo device elettronico e con nuovi protocolli S.H.A.P.E.",
        en: "My experience working with an innovative electronic device and the new S.H.A.P.E. protocols.",
      },
      file: "medicina-estetica-protocolli-shape.pdf",
    },
    {
      id: "soluzione-intima",
      title: "La soluzione più «intima»",
      standfirst: {
        it: "Per una femminilità senza tempo.",
        en: "For timeless femininity.",
      },
      file: "soluzione-intima-femminilita.pdf",
    },
    {
      id: "nanosoft",
      title: "L’innovativo dispositivo iniettivo intradermico Nanosoft®",
      standfirst: {
        it: "Dedicato alle aree delicate come le palpebre.",
        en: "Designed for delicate areas such as the eyelids.",
      },
      file: "nanosoft-dispositivo-intradermico.pdf",
    },
  ] satisfies PressItem[],
};
