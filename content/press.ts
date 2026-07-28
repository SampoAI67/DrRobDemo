/**
 * Contenuti della pagina Rassegna Stampa.
 *
 * Articoli scientifici, interviste su quotidiani/periodici, atti di congressi
 * e pubblicazioni divulgative.
 */

import type { Localized } from "@/lib/i18n";

export type PressItem = {
  id: string;
  title: Localized<string>;
  source: string;
  date: string;
  category: "stampa" | "tv" | "congresso" | "pubblicazione";
  description: Localized<string>;
  url?: string;
  file?: string;
};

export const pressContent = {
  hero: {
    eyebrow: { it: "Media & Pubblicazioni", en: "Media & Publications" },
    title: { it: "Rassegna Stampa", en: "Press & Media" },
    subtitle: {
      it: "Articoli, contributi scientifici, interviste e interventi a congressi internazionali sulla medicina e chirurgia estetica mini-invasiva.",
      en: "Articles, scientific contributions, interviews, and congress presentations on minimally invasive aesthetic surgery and medicine.",
    },
  },
  filters: {
    all: { it: "Tutte le pubblicazioni", en: "All publications" },
    stampa: { it: "Stampa & Riviste", en: "Press & Magazines" },
    tv: { it: "Interviste & Media", en: "Interviews & Media" },
    congresso: { it: "Congressi & Atti", en: "Congresses & Proceedings" },
    pubblicazione: { it: "Studi Clinici", en: "Clinical Studies" },
  },
  actions: {
    readPdf: { it: "Leggi Documento (PDF)", en: "Read Document (PDF)" },
    viewArticle: { it: "Visualizza Articolo", en: "View Article" },
    proceedings: { it: "Atti di Congresso / Pubblicazione", en: "Congress Proceedings / Publication" },
  },
  items: [
    {
      id: "press-endolift-lifting",
      title: {
        it: "Endolift®: la metodica laser per il sollevamento dei tessuti senza bisturi",
        en: "Endolift®: the laser method for tissue lifting without surgery",
      },
      source: "Stampa Medico-Scientifica",
      date: "2024",
      category: "pubblicazione",
      description: {
        it: "Approfondimento clinico sulla tecnica Endolift®, vettori di trazione laser e protocolli di applicazione nel terzo inferiore del volto.",
        en: "Clinical in-depth article on the Endolift® technique, laser traction vectors, and application protocols for the lower third of the face.",
      },
      file: "articolo-Endolift_gennaio.pdf",
    },
    {
      id: "press-eufoton-lasers",
      title: {
        it: "Innovazione nelle tecnologie laser a lunghezza d'onda selettiva in medicina estetica",
        en: "Innovation in selective wavelength laser technologies in aesthetic medicine",
      },
      source: "Rassegna di Medicina Estetica",
      date: "2023",
      category: "stampa",
      description: {
        it: "Articolo dedicato all'integrazione delle lunghezze d'onda laser per la fototermolisi selettiva e la stimolazione del collagene dermico.",
        en: "Article dedicated to integrating laser wavelengths for selective photothermolysis and dermal collagen stimulation.",
      },
      file: "articolo-eufoton.pdf",
    },
    {
      id: "press-informazione-scientifica",
      title: {
        it: "Informazione scientifica e divulgazione etica nella chirurgia estetica",
        en: "Scientific information and ethical communication in aesthetic surgery",
      },
      source: "Journal of Aesthetic Communication",
      date: "2022",
      category: "stampa",
      description: {
        it: "Riflessione sugli standard d'informazione al paziente, la trasparenza clinica e il rispetto dei codici deontologici.",
        en: "Perspective on patient information standards, clinical transparency, and adherence to medical ethics codes.",
      },
      file: "articolo-Informazione-scientifica.pdf",
    },
    {
      id: "press-nanosoft-intradermico",
      title: {
        it: "Dispositivi iniettivi micro-ago Nanosoft per la biorivitalizzazione perioculare",
        en: "Nanosoft micro-needle injection devices for periocular biorevitalisation",
      },
      source: "Dermatologia Clinica & Estetica",
      date: "2021",
      category: "pubblicazione",
      description: {
        it: "Studio sull'impiego di micro-aghi da 0,6 mm per la somministrazione controllata nelle aree sensibili del volto.",
        en: "Study on using 0.6 mm micro-needles for controlled administration in sensitive facial areas.",
      },
      file: "L’INNOVATIVO-DISPOSITIVO-INIETTIVO-INTRADERMICO-NANOSOFT.pdf",
    },
    {
      id: "press-ginecologia-estetica",
      title: {
        it: "Tecnologie laser e trattamenti rigenerativi in ginecologia funzionale ed estetica",
        en: "Laser technologies and regenerative treatments in functional aesthetic gynecology",
      },
      source: "Medical SPA & Wellness Journal",
      date: "2020",
      category: "congresso",
      description: {
        it: "Presentazione dei protocolli non invasivi a supporto della salute e del benessere intimo femminile.",
        en: "Presentation of non-invasive protocols supporting female intimate health and wellness.",
      },
      file: "La-soluzione-più-intima-per-una-femminilità-senza-tempo.pdf",
    },
    {
      id: "press-follador-award",
      title: {
        it: "Premio Enrico Follador 2018 per la ricerca sulle metodiche lifting non chirurgiche",
        en: "2018 Enrico Follador Award for research on non-surgical lifting methods",
      },
      source: "Congresso Internazionale di Medicina e Chirurgia Estetica, Bologna",
      date: "2018",
      category: "congresso",
      description: {
        it: "Riconoscimento scientifico conferito per la relazione clinica sulla combinazione delle tecnologie Endolift® e Ultherapy®.",
        en: "Scientific award presented for the clinical lecture on combining Endolift® and Ultherapy® technologies.",
      },
    },
  ] satisfies PressItem[],
};
