/**
 * Etichette dell'indice trattamenti e delle 19 schede.
 *
 * Qui c'è SOLO la cornice: occhielli, titoli di sezione, richiami. Il contenuto dei
 * trattamenti — titolo, sintesi, corpo — sta in `content/treatments.ts` e viene dal
 * sito del cliente. Nessuna frase di questo file descrive un trattamento, il suo
 * svolgimento o il suo esito: su un sito sanitario il testo clinico non si scrive
 * qui, si riporta da lì.
 *
 * La riga «L'indicazione si stabilisce in visita, caso per caso.» è ripresa
 * verbatim da `content/home.ts`, dove è già stata verificata: non è una variante.
 */

import type { Localized } from "@/lib/i18n";

export const treatmentsIndex = {
  kicker: { it: "Studio di Milano", en: "Milan practice" },
  title: { it: "Trattamenti", en: "Treatments" },
  lead: {
    it: "I trattamenti che eseguo, raggruppati per area. L’indicazione si stabilisce in visita, caso per caso.",
    en: "The treatments I perform, grouped by area. The indication is established during the consultation, case by case.",
  },
} satisfies Record<string, Localized<string>>;

export const treatmentPage = {
  breadcrumb: { it: "Percorso", en: "Breadcrumb" },
  related: {
    it: "Altri trattamenti dell’area",
    en: "Other treatments in this area",
  },
  allTreatments: { it: "Tutti i trattamenti", en: "All treatments" },
  bookingKicker: { it: "Prenotazione", en: "Booking" },
  bookingLead: {
    it: "L’indicazione si stabilisce in visita, caso per caso.",
    en: "The indication is established during the consultation, case by case.",
  },
} satisfies Record<string, Localized<string>>;

/**
 * Schede su cui l'immagine di apertura NON va pubblicata, con il motivo.
 *
 * Chiave: lo slug italiano, che è l'identificativo stabile del trattamento.
 * Il motivo non compare in pagina — serve a chi rilegge il codice e a far decidere
 * al cliente se procurare un'immagine sostitutiva.
 *
 * L'immagine quadrata dell'indice resta: a ~300 px l'etichetta non è leggibile.
 * È l'apertura a 640 px che rende il problema concreto.
 */
export const OPENING_WITHHELD: Record<string, string> = {
  "tossina-botulinica":
    "open-botulino inquadra un flacone con l'etichetta in parte leggibile. Il D.Lgs. 219/2006 vieta la pubblicità al pubblico dei medicinali con obbligo di ricetta: a piena larghezza il nome commerciale diventa riconoscibile. Serve un'immagine sostitutiva approvata dal cliente.",
};
