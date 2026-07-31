/**
 * Contenuti della pagina Biografia.
 *
 * Segue il registro sanitario (L. 145/2018; art. 56 Codice Deontologico FNOMCeO):
 * descrizione informale del percorso formativo, accademico e umanitario senza
 * toni promozionali o superlativi.
 */

import type { Localized } from "@/lib/i18n";

export type BioSection = {
  id: string;
  title: Localized<string>;
  content: Localized<string>[];
  list?: Localized<string>[];
};

export const bioContent = {
  /**
   * Titolo della scheda del browser. Distinto da `hero.title`, che è il nome del
   * medico: usare quello produceva «Dr. Roberto Dell'Avanzato — Dr. Roberto
   * Dell'Avanzato», con la metà utile del titolo sprecata in un doppione.
   */
  pageTitle: { it: "Biografia", en: "Biography" },

  hero: {
    eyebrow: { it: "Profilo Professionale", en: "Professional Profile" },
    title: { it: "Dr. Roberto Dell’Avanzato", en: "Dr Roberto Dell’Avanzato" },
    /** Descrive la foto, non ripete il titolo: il ritratto formale su fondo grigio. */
    alt: {
      it: "Ritratto del dott. Roberto Dell’Avanzato in giacca e cravatta, su fondo grigio.",
      en: "Portrait of Dr Roberto Dell’Avanzato in a suit and tie against a grey background.",
    },
    subtitle: {
      it: "Medico Chirurgo Specialista in Chirurgia Generale, Master Universitario in Medicina e Chirurgia Estetica. Ricercatore e docente nell’ambito delle tecnologie laser e mini-invasive.",
      en: "Surgeon specializing in General Surgery, University Master's Degree in Aesthetic Medicine and Surgery. Researcher and lecturer in laser and minimally invasive technologies.",
    },
    image: "bio-ritratto",
  },
  overview: {
    title: { it: "Esperienza e Formazione Clinica", en: "Experience and Clinical Background" },
    /**
     * ⚠️ Il nome del file è ereditato dal sito del cliente
     * (`dr-dellavanzato-missioni-umanitarie.jpg`) ma **non descrive il
     * contenuto**: l'immagine ritrae il medico in camice alla scrivania del suo
     * studio, non una missione umanitaria. Stava infatti a corredo della sezione
     * sulle missioni in Pakistan, dove il contesto la faceva leggere come una
     * fotografia di quelle missioni. Qui illustra ciò che mostra davvero.
     */
    image: "bio-missioni",
    alt: {
      it: "Il dott. Dell’Avanzato in camice, seduto alla scrivania del suo studio.",
      en: "Dr Dell’Avanzato in a white coat, seated at the desk of his practice.",
    },
    paragraphs: [
      {
        it: "Il Dr. Roberto Dell’Avanzato opera nel campo della medicina e della chirurgia estetica con una solida formazione specialistica. Dopo la laurea in Medicina e Chirurgia, ha conseguito la Specializzazione in Chirurgia Generale con lode e successivamente il Master Universitario di II Livello in Medicina Estetica e Chirurgia Estetica.",
        en: "Dr Roberto Dell’Avanzato practices in aesthetic medicine and surgery supported by extensive specialist training. Following his degree in Medicine, he completed a specialization in General Surgery with honours and subsequently a Level II University Master's in Aesthetic Medicine and Surgery.",
      },
      {
        it: "Ha perfezionato le sue competenze presso centri di riferimento in Europa e negli Stati Uniti, partecipando all'attività clinica e al confronto scientifico con specialisti di rilevanza internazionale.",
        en: "He perfected his clinical skills at reference centers across Europe and the United States, participating in clinical work and scientific exchange with internationally renowned specialists.",
      },
      {
        it: "Particolare rilievo nella sua attività scientifica e clinica assume lo sviluppo e la diffusione della metodica laser Endolift® per il ricompattamento e il rimodellamento dei tessuti, presentata e documentata in congressi medici internazionali.",
        en: "A significant focus of his scientific and clinical work is the development and dissemination of the Endolift® laser method for tissue tightening and remodeling, presented and documented at international medical congresses.",
      },
    ],
  },
  teaching: {
    title: { it: "Incarichi Accademici e Didattica", en: "Academic Roles and Teaching" },
    items: [
      {
        it: "Professore a contratto di «Laser e Medical Devices» presso il Master in Chirurgia Estetica (Università di San Marino e Università «La Sapienza» di Roma).",
        en: "Adjunct Professor of 'Laser and Medical Devices' in the Master's in Aesthetic Surgery (University of San Marino and 'La Sapienza' University of Rome).",
      },
      {
        it: "Professore a contratto di «Endolift e Tecnologie Combinate» presso il Master in Chirurgia Estetica (UniCamillus, Roma).",
        en: "Adjunct Professor of 'Endolift and Combined Technologies' in the Master's in Aesthetic Surgery (UniCamillus, Rome).",
      },
      {
        it: "Professore a contratto presso il Consorzio Universitario Humanitas di Roma.",
        en: "Adjunct Professor at the Humanitas University Consortium of Rome.",
      },
      {
        it: "Docente e tutor in corsi di formazione pratica su procedure laser, iniettabili e metodiche mini-invasive.",
        en: "Lecturer and tutor in practical training courses on laser procedures, injectables, and minimally invasive techniques.",
      },
    ],
  },
  affiliations: {
    title: { it: "Affiliazioni Scientifiche e Società", en: "Scientific Affiliations and Societies" },
    items: [
      { it: "Socio Internazionale — American Society of Plastic Surgeons (ASPS)", en: "International Member — American Society of Plastic Surgeons (ASPS)" },
      { it: "Socio — Società Italiana di Chirurgia Plastica Ricostruttiva ed Estetica (SICPRE)", en: "Member — Italian Society of Plastic, Reconstructive and Aesthetic Surgery (SICPRE)" },
      { it: "Membro del Comitato Scientifico — AGORÀ (Società Italiana di Medicina Estetica)", en: "Scientific Committee Member — AGORÀ (Italian Society of Aesthetic Medicine)" },
      { it: "Membro del Comitato Scientifico — SIES (Società Italiana di Medicina e Chirurgia Estetica)", en: "Scientific Committee Member — SIES (Italian Society of Aesthetic Medicine and Surgery)" },
      { it: "Socio — Aesthetic Multispecialty Society (AMS)", en: "Member — Aesthetic Multispecialty Society (AMS)" },
      { it: "Socio — World Society of Anti-Aging Medicine (WOSAAM)", en: "Member — World Society of Anti-Aging Medicine (WOSAAM)" },
    ],
  },
  humanitarian: {
    title: { it: "Attività Umanitaria", en: "Humanitarian Activity" },
    paragraphs: [
      {
        it: "Il Dr. Dell’Avanzato è socio fondatore dell'associazione ONLUS «Work in Progress», attiva con progetti sanitari e sociali in Gambia e Senegal.",
        en: "Dr Dell’Avanzato is a founding member of the non-profit association 'Work in Progress', operating healthcare and social projects in Gambia and Senegal.",
      },
      {
        it: "Ha inoltre partecipato a missioni umanitarie nel sub-continente indiano (Pakistan e Bangladesh) nell'ambito delle attività della Depilex Smileagain Foundation, prestando assistenza chirurgica e medica a donne vittime di ustioni e aggressioni da acido.",
        en: "He also participated in humanitarian missions in the Indian subcontinent (Pakistan and Bangladesh) with the Depilex Smileagain Foundation, providing surgical and medical care to women affected by severe burns and acid trauma.",
      },
      {
        it: "Per l'attività svolta in ambito umanitario gli sono stati conferiti il Certificato di Eccellenza dall'Associazione dei Medici Pakistani e il Certificato di Merito dal Combined Military Hospital di Islamabad.",
        en: "For his humanitarian contribution he was awarded the Certificate of Excellence by the Pakistan Medical Association and the Certificate of Merit by the Combined Military Hospital of Islamabad.",
      },
    ],
    // Nessuna immagine. Non ne esiste una delle missioni: l'unica in archivio con
    // quel nome è un ritratto in studio (vedi `overview.image`), e accostarla a un
    // testo su donne sfigurate con l'acido la farebbe leggere come documentazione
    // di quelle spedizioni. Se il cliente fornisce fotografie vere delle missioni
    // si aggiungono qui; nel frattempo il testo regge da solo.
  },
  ethics: {
    title: { it: "Approccio Clinico ed Etica Professionale", en: "Clinical Approach and Ethics" },
    quote: {
      it: "«La medicina e la chirurgia estetica non devono stravolgere l’aspetto del paziente, ma valorizzarne l'armonia naturale e il benessere psico-fisico nel rispetto dell'identità individuale.»",
      en: "«Aesthetic medicine and surgery should never distort a patient's appearance, but rather enhance natural harmony and psycho-physical well-being while respecting individual identity.»",
    },
    paragraphs: [
      {
        it: "La consultazione iniziale prevede un'approfondita anamnesi e la valutazione personalizzata delle indicazioni cliniche, selezionando trattamenti o protocolli combinati volti a risultati misurati ed equilibrati.",
        en: "The initial consultation involves a detailed medical history and personalized evaluation of clinical indications, choosing treatments or combined protocols designed for measured and balanced results.",
      },
    ],
  },
};
