/**
 * Contenuti della pagina Contatti.
 *
 * Due regole che questo file ha già violato una volta e che vanno tenute d'occhio:
 *
 * 1. **Non si inventano gli orari.** La versione precedente dichiarava
 *    «Lunedì – Venerdì: 10:00 – 18:00» mentre la sezione credenziali della home
 *    elencava gli orari fra i dati «da confermare»: il sito si contraddiceva da
 *    solo. Finché il cliente non li conferma, qui si dice che si concordano per
 *    telefono — che è vero e non promette nulla.
 *
 * 2. **Il modulo non promette un invio che non avviene.** Senza
 *    `NEXT_PUBLIC_CONTACT_ENDPOINT` l'export è statico e nessun server riceve
 *    niente: il pulsante apre il programma di posta dell'utente con il messaggio
 *    già composto, e il testo lo dice. Le due modalità hanno etichette e conferme
 *    diverse, `mailto` e `endpoint`, perché descrivono due cose diverse.
 */

import { studio } from "@/content/site";

export const contactContent = {
  hero: {
    eyebrow: { it: "Sedi e contatti", en: "Locations and contact" },
    title: { it: "Prenota una visita", en: "Book a consultation" },
    subtitle: {
      it: `Lo studio è a Milano, in ${studio.street}, a 50 metri dalla metropolitana Montenapoleone. Il modo più rapido per fissare un appuntamento è il telefono.`,
      en: `The practice is in Milan, at ${studio.street}, 50 metres from Montenapoleone underground station. The quickest way to arrange an appointment is by telephone.`,
    },
  },

  /** Blocco d'azione in testa alla pagina: telefono primo, posta secondo. */
  action: {
    note: {
      it: "L’indicazione si stabilisce in visita, caso per caso.",
      en: "The indication is established during the consultation, case by case.",
    },
  },

  details: {
    title: { it: "Lo studio", en: "The practice" },
    addressLabel: { it: "Indirizzo", en: "Address" },
    address: {
      it: `${studio.street} (piano 1, scala destra)\n${studio.postalCode} ${studio.city}`,
      en: `${studio.street} (1st floor, right staircase)\n${studio.postalCode} ${studio.city}`,
    },
    transportLabel: { it: "Come arrivare", en: "Getting there" },
    transport: {
      it: "A 50 metri dalla fermata Montenapoleone della linea M3, fra Montenapoleone e il Duomo.",
      en: "50 metres from Montenapoleone station on line M3, between Montenapoleone and the Duomo.",
    },
    phoneLabel: { it: "Telefono", en: "Telephone" },
    hoursLabel: { it: "Orari", en: "Opening hours" },
    // Vedi punto 1 in testa al file: nessun orario finché il cliente non conferma.
    hours: {
      it: "Si riceve su appuntamento. Gli orari si concordano al telefono.",
      en: "By appointment only. Times are arranged by telephone.",
    },
  },

  form: {
    title: { it: "Richiesta di informazioni", en: "Information request" },
    subtitle: {
      it: "Se preferisci scrivere, compila i campi: il pulsante apre il tuo programma di posta con il messaggio già pronto.",
      en: "If you would rather write, fill in the fields: the button opens your email program with the message ready to send.",
    },
    // Variante mostrata quando un endpoint è configurato e l'invio è reale.
    subtitleEndpoint: {
      it: "Se preferisci scrivere, compila i campi e invia la richiesta allo studio.",
      en: "If you would rather write, fill in the fields and send your request to the practice.",
    },

    nameLabel: { it: "Nome e cognome", en: "Full name" },
    emailLabel: { it: "Indirizzo e-mail", en: "Email address" },
    phoneLabel: { it: "Recapito telefonico", en: "Phone number" },
    phoneHint: { it: "Facoltativo", en: "Optional" },
    topicLabel: { it: "Area di interesse", en: "Area of interest" },
    topicOptions: [
      { id: "medicina", label: { it: "Medicina estetica", en: "Aesthetic medicine" } },
      { id: "chirurgia", label: { it: "Chirurgia estetica", en: "Aesthetic surgery" } },
      { id: "laser", label: { it: "Tecnologie laser ed Endolift®", en: "Laser technologies and Endolift®" } },
      { id: "altro", label: { it: "Informazioni generali", en: "General information" } },
    ],
    messageLabel: { it: "Messaggio", en: "Message" },
    requiredHint: { it: "Campo obbligatorio", en: "Required field" },

    submitMailto: { it: "Apri il messaggio nella posta", en: "Open the message in your email" },
    submitEndpoint: { it: "Invia la richiesta", en: "Send the request" },
    submitting: { it: "Invio in corso…", en: "Sending…" },

    /**
     * Conferme distinte: con `mailto` il sito non ha inviato nulla e non deve
     * dire il contrario — ha solo passato il messaggio al client di posta, e
     * l'invio lo fa l'utente.
     */
    doneMailto: {
      it: "Si è aperto il tuo programma di posta con il messaggio già composto. La richiesta arriva allo studio solo dopo che l’hai inviata da lì.",
      en: "Your email program has opened with the message already composed. The request reaches the practice only once you send it from there.",
    },
    doneEndpoint: {
      it: "La richiesta è stata inviata allo studio.",
      en: "Your request has been sent to the practice.",
    },
    errorEndpoint: {
      it: "L’invio non è riuscito. Puoi riprovare, oppure telefonare allo studio.",
      en: "The request could not be sent. You can try again, or telephone the practice.",
    },

    /**
     * Nota sui dati. Con `mailto` il sito non raccoglie né trasmette nulla: i
     * campi restano nel browser e il messaggio lo spedisce il client di posta
     * dell'utente. Dirlo è più corretto — e più rassicurante — che citare il
     * regolamento a vuoto, come faceva la versione precedente.
     */
    privacyMailto: {
      it: "Questo sito non raccoglie né conserva i dati inseriti: restano nel browser finché non apri il messaggio, e a spedirlo è il tuo programma di posta.",
      en: "This site neither collects nor stores what you type: the data stays in your browser until the message opens, and it is your own email program that sends it.",
    },
    privacyEndpoint: {
      it: "I dati inseriti vengono trattati esclusivamente per rispondere a questa richiesta (Reg. UE 2016/679). Non vengono usati per altri fini né ceduti a terzi.",
      en: "The data you provide is processed solely to reply to this request (EU Regulation 2016/679). It is not used for any other purpose nor shared with third parties.",
    },

    /** Ripiego per chi ha JavaScript disattivato: il modulo lì non funziona. */
    noScript: {
      it: "Per compilare il modulo serve JavaScript. In alternativa puoi telefonare allo studio o scrivere all’indirizzo qui sopra.",
      en: "The form requires JavaScript. Alternatively you can telephone the practice or write to the address above.",
    },

    /** Oggetto e corpo del messaggio precompilato. */
    mailSubject: {
      it: "Richiesta di informazioni dal sito",
      en: "Information request from the website",
    },
  },

  map: {
    title: { it: "Dove siamo", en: "Where we are" },
    loadButton: { it: "Carica la mappa", en: "Load the map" },
    privacyNote: {
      it: "La mappa è di OpenStreetMap e si carica solo se la richiedi: finché non premi il pulsante, nessun servizio esterno riceve la tua visita.",
      en: "The map is from OpenStreetMap and loads only on request: until you press the button, no external service is contacted.",
    },
    iframeTitle: {
      it: "Mappa di Via Andegari 18, Milano",
      en: "Map of Via Andegari 18, Milan",
    },
  },
};
