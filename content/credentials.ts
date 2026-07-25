import type { L10n } from "@/lib/i18n";

/**
 * Trust wall — tutto ciò che sostiene l'autorevolezza del professionista, preso
 * dalle pagine "It's Me" e "Corsi di formazione" del sito originale.
 * Nessuna recensione, testimonianza, prezzo o promessa di risultato: la
 * pubblicità sanitaria in Italia (L. 145/2018, art. 1 c. 525-536) ammette solo
 * comunicazione informativa.
 */

export interface Fact {
  value: string;
  label: L10n;
}

/** I numeri che il sito originale dichiara. */
export const facts: Fact[] = [
  { value: "2005", label: { it: "l'anno in cui sviluppa Endolift®", en: "the year he developed Endolift®" } },
  { value: "25+", label: { it: "anni di medicina e chirurgia estetica", en: "years in aesthetic medicine and surgery" } },
  { value: "300+", label: { it: "articoli, video e abstract pubblicati", en: "published papers, videos and abstracts" } },
  { value: "500", label: { it: "congressi internazionali", en: "international congresses" } },
  { value: "30", label: { it: "paesi come visiting surgeon", en: "countries as a visiting surgeon" } },
];

export const teaching: L10n[] = [
  {
    it: "Professore a contratto di «Laser e Medical Devices» al Master in Chirurgia Estetica — Università di San Marino e «La Sapienza» di Roma",
    en: "Adjunct professor of «Lasers and Medical Devices», Master's in Aesthetic Surgery — University of San Marino and «La Sapienza» University of Rome",
  },
  {
    it: "Professore a contratto di «Endolift e Tecnologie Combinate» al Master in Chirurgia Estetica — UniCamillus, Roma",
    en: "Adjunct professor of «Endolift and Combined Technologies», Master's in Aesthetic Surgery — UniCamillus, Rome",
  },
  {
    it: "Professore a contratto di «Medical Devices e Tecnologie Combinate» al Master in Chirurgia Estetica — Consorzio Universitario Humanitas, Roma",
    en: "Adjunct professor of «Medical Devices and Combined Technologies», Master's in Aesthetic Surgery — Humanitas University Consortium, Rome",
  },
  {
    it: "Docente e tutor ai corsi pratici di laser, filler, fili, peeling e altre procedure di medicina e chirurgia estetica",
    en: "Lecturer and tutor on practical courses in lasers, fillers, threads, peels and other aesthetic medicine and surgery procedures",
  },
  {
    it: "Past Director of Medical Department — Espace Chenot Health Wellness Spa, L'Albereta Relais & Châteaux",
    en: "Past Director of the Medical Department — Espace Chenot Health Wellness Spa, L'Albereta Relais & Châteaux",
  },
];

export const training: L10n[] = [
  { it: "Specialista in Chirurgia Generale con lode", en: "Specialist in General Surgery, with honours" },
  {
    it: "Master universitario di II livello in Medicina Estetica e Chirurgia Estetica, Università di San Marino, con lode",
    en: "Second-level Master's in Aesthetic Medicine and Surgery, University of San Marino, with honours",
  },
  {
    it: "Diploma universitario in Chirurgia Mini-Invasiva, Università Louis Pasteur di Strasburgo",
    en: "University Diploma in Minimally Invasive Surgery, Louis Pasteur University of Strasbourg",
  },
  {
    it: "Certificazioni BLS, PBLS, ACLS, PHTC, PALS",
    en: "BLS, PBLS, ACLS, PHTC and PALS certifications",
  },
  { it: "Visiting surgeon in oltre 30 paesi del mondo", en: "Visiting surgeon in more than 30 countries" },
];

export const societies: string[] = [
  "American Society of Plastic Surgeons (ASPS)",
  "Società Italiana di Chirurgia Plastica Ricostruttiva ed Estetica (SICPRE)",
  "AGORÀ — Società Italiana di Medicina Estetica",
  "SIES — Società Italiana di Medicina e Chirurgia Estetica",
  "EBAM — Evidence Based Aesthetic Medicine",
  "WOSAAM — World Society of Anti-Aging Medicine",
  "Aesthetic Multispecialty Society (AMS)",
  "Gruppo Italiano di Studio sulle Tecnologie (GIST)",
  "Honorary Member of the Italian Academy of Beauty",
  "GMC (General Medical Council UK) registered",
];

export const awards: L10n[] = [
  {
    it: "Premio Enrico Follador 2018 per «Endolift® e Ultherapy® per il miglior lifting non chirurgico del volto e del collo», 21° Congresso Internazionale di Medicina e Chirurgia Estetica di Bologna",
    en: "Enrico Follador Prize 2018 for «Endolift® and Ultherapy® for the best non-surgical lifting of the face and neck», 21st International Congress of Aesthetic Medicine and Surgery, Bologna",
  },
  {
    it: "Finalista al 7° Beauty Trophy Award, categoria «Procedure Laser» — Monte Carlo Aesthetics Live & Practical Congress 2019",
    en: "Finalist at the 7th Beauty Trophy Award, «Laser Procedures» category — Monte Carlo Aesthetics Live & Practical Congress 2019",
  },
  {
    it: "Premio TYCO Miglior Video al 106° Congresso della Società Nazionale di Chirurgia, Roma 2004",
    en: "TYCO Best Video Award at the 106th Congress of the National Society of Surgery, Rome 2004",
  },
  {
    it: "Premio Miglior Poster al XXII Congresso della European Federation, Napoli 2001",
    en: "Best Poster Award at the 22nd Congress of the European Federation, Naples 2001",
  },
  {
    it: "Certificato di Eccellenza dell'Associazione dei Medici Pakistani per i servizi umanitari resi alle vittime di aggressioni con l'acido",
    en: "Certificate of Excellence from the Pakistan Medical Association for humanitarian services to victims of acid attacks",
  },
  {
    it: "Certificato di Merito del Combined Military Hospital di Islamabad per i servizi umanitari resi al paese",
    en: "Certificate of Merit from the Combined Military Hospital of Islamabad for humanitarian services rendered to the country",
  },
];

/** Key Opinion Leader — aziende citate sul sito originale. */
export const kol: L10n[] = [
  { it: "Filler RHA, Ridensificazione Dinamica e Teosyal Pen — TEOXANE", en: "RHA fillers, Dynamic Redensification and Teosyal Pen — TEOXANE" },
  { it: "Laser ed Endolift — EUFOTON", en: "Lasers and Endolift — EUFOTON" },
  { it: "Ultherapy — MERZ", en: "Ultherapy — MERZ" },
  { it: "Cellfina — MERZ", en: "Cellfina — MERZ" },
  { it: "NCTF e Meso-Needling — FILORGA", en: "NCTF and Meso-Needling — FILORGA" },
  { it: "Biofibre — MEDICAP", en: "Biofibre — MEDICAP" },
  { it: "Criolipolisi — HIGH TECH AESTHETIC", en: "Cryolipolysis — HIGH TECH AESTHETIC" },
];

export const humanitarian: L10n[] = [
  {
    it: "Socio fondatore di «Work in Progress ONLUS», associazione senza scopo di lucro che opera in Gambia e Senegal, con partecipazione a diverse missioni umanitarie.",
    en: "Founding member of «Work in Progress ONLUS», a non-profit association working in Gambia and Senegal, taking part in several humanitarian missions.",
  },
  {
    it: "Membro del Consiglio Direttivo e medico volontario per Depilex Smileagain Foundation: quattro spedizioni umanitarie tra il 2003 e il 2005, durante le quali ha eseguito numerosi trattamenti chirurgici e laser sulle donne sfigurate con l'acido in Pakistan e Bangladesh.",
    en: "Board member and volunteer doctor for the Depilex Smileagain Foundation: four humanitarian missions between 2003 and 2005, during which he performed numerous surgical and laser treatments on women disfigured by acid attacks in Pakistan and Bangladesh.",
  },
  {
    it: "Durante una delle missioni è stato affiancato da Elena Doni, giornalista che ha scritto il libro «Il Volto Cancellato» insieme a Fakhra Younas, una delle ragazze operate dal Dr. Dell'Avanzato.",
    en: "On one of the missions he was accompanied by Elena Doni, the journalist who wrote the book «Il Volto Cancellato» together with Fakhra Younas, one of the young women operated on by Dr Dell'Avanzato.",
  },
];

/** Rassegna stampa — l'unica voce pubblicata sul sito originale. */
export const press: { title: string; description: L10n; year: string }[] = [
  {
    title: "Face-Building",
    year: "2019",
    description: {
      it: "Un innovativo protocollo di ringiovanimento del volto con trattamento combinato di Endolift® e Ultherapy®.",
      en: "An innovative facial rejuvenation protocol combining Endolift® and Ultherapy®.",
    },
  },
];
