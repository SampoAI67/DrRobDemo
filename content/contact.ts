/**
 * Contenuti della pagina Contatti.
 *
 * Informazioni di studio, orari, contatti telefonici e modulo di richiesta informazioni.
 */

import type { Localized } from "@/lib/i18n";
import { studio } from "@/content/site";

export const contactContent = {
  hero: {
    eyebrow: { it: "Sedi e Contatti", en: "Locations & Contact" },
    title: { it: "Prenota una Visita", en: "Book a Consultation" },
    subtitle: {
      it: `Studio Medico Dr. Roberto Dell’Avanzato a Milano in ${studio.street}, nelle immediate vicinanze di Via Montenapoleone.`,
      en: `Practice of Dr Roberto Dell’Avanzato in Milan at ${studio.street}, in close proximity to Via Montenapoleone.`,
    },
  },
  details: {
    addressLabel: { it: "Indirizzo dello Studio", en: "Practice Address" },
    address: {
      it: `${studio.street} (Piano 1 – Scala destra)\n${studio.postalCode} ${studio.city}`,
      en: `${studio.street} (1st Floor – Right Staircase)\n${studio.postalCode} ${studio.city}`,
    },
    transport: {
      it: "A 50 metri dalla fermata Metropolitana Montenapoleone (M3) e vicino a Piazza Duomo.",
      en: "50 meters from Montenapoleone Underground Station (M3) and near Piazza Duomo.",
    },
    phoneLabel: { it: "Telefono", en: "Telephone" },
    phone: studio.phone,
    hoursLabel: { it: "Orari di Ricevimento", en: "Opening Hours" },
    hours: {
      it: "Lunedì – Venerdì: 10:00 – 18:00 (su appuntamento)",
      en: "Monday – Friday: 10:00 AM – 6:00 PM (by appointment)",
    },
    emailLabel: { it: "Informazioni via E-mail", en: "E-mail Inquiries" },
    emailNotice: {
      it: "Per richieste di informazioni generali o prenotazioni è possibile utilizzare il modulo o inviare una richiesta via e-mail.",
      en: "For general information or appointment requests, please use the form below or send an email inquiry.",
    },
  },
  form: {
    title: { it: "Modulo di Contatto", en: "Contact Form" },
    subtitle: {
      it: "Compila i campi sottostanti per inviare un messaggio allo studio.",
      en: "Fill out the fields below to send a message to the practice.",
    },
    nameLabel: { it: "Nome e Cognome", en: "Full Name" },
    namePlaceholder: { it: "Inserisci il tuo nome completo", en: "Enter your full name" },
    emailLabel: { it: "Indirizzo E-mail", en: "E-mail Address" },
    emailPlaceholder: { it: "nome@esempio.it", en: "name@example.com" },
    phoneLabel: { it: "Recapito Telefonico", en: "Phone Number" },
    phonePlaceholder: { it: "+39 333 1234567", en: "+39 333 1234567" },
    topicLabel: { it: "Area di Interesse", en: "Area of Interest" },
    topicOptions: [
      { id: "medicina", label: { it: "Medicina Estetica", en: "Aesthetic Medicine" } },
      { id: "chirurgia", label: { it: "Chirurgia Estetica", en: "Aesthetic Surgery" } },
      { id: "laser", label: { it: "Tecnologie Laser & Endolift®", en: "Laser Technologies & Endolift®" } },
      { id: "altro", label: { it: "Informazioni Generali", en: "General Inquiries" } },
    ],
    messageLabel: { it: "Messaggio / Richiesta", en: "Message / Request" },
    messagePlaceholder: {
      it: "Descrivi brevemente la tua richiesta o i trattamenti di tuo interesse...",
      en: "Briefly describe your inquiry or treatments of interest...",
    },
    privacyNotice: {
      it: "I dati personali forniti verranno trattati esclusivamente per rispondere alla richiesta nel rispetto della normativa sulla privacy (Reg. UE 2016/679).",
      en: "Personal data provided will be processed solely to respond to your request in compliance with EU Regulation 2016/679.",
    },
    submitButton: { it: "Invia Messaggio", en: "Send Message" },
    successMessage: {
      it: "Grazie per averci contattato. Il messaggio è stato inviato e lo studio ti risponderà al più presto.",
      en: "Thank you for contacting us. Your message has been sent and the practice will reply as soon as possible.",
    },
    mailtoFallbackButton: { it: "Invia via E-mail (Client Precompilato)", en: "Send via Email (Pre-filled Client)" },
  },
  map: {
    title: { it: "Dove Siamo", en: "Our Location" },
    loadButton: { it: "Carica la Mappa Interattiva", en: "Load Interactive Map" },
    privacyNote: {
      it: "Facendo clic su «Carica la Mappa», viene caricata la mappa interattiva OpenStreetMap. Nessun cookie di tracciamento di terze parti viene rilasciato prima di questa azione.",
      en: "Clicking 'Load Interactive Map' displays the OpenStreetMap view. No 3rd party tracking cookies are set prior to this interaction.",
    },
  },
};
