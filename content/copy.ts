import type { Locale } from "@/lib/i18n";

/**
 * Copy di navigazione, interfaccia e pagine. Le due lingue stanno affiancate
 * per restare allineate: se cambia l'italiano si vede subito cosa tradurre.
 */

export interface NavItem {
  /** rotta senza prefisso di lingua */
  href: string;
  label: Record<Locale, string>;
  /** etichetta accorciata per la barra desktop, dove lo spazio è finito */
  short?: Record<Locale, string>;
  /**
   * Voci della barra desktop. Sette non ci stanno senza rimpicciolire il testo
   * fino a renderlo illeggibile: le due secondarie restano nel menu mobile,
   * nel footer e nei rimandi dalle pagine.
   */
  primary?: boolean;
}

export const nav: NavItem[] = [
  { href: "/its-me", primary: true, label: { it: "Chi sono", en: "About" } },
  { href: "/medicina-estetica", primary: true, label: { it: "Medicina estetica", en: "Aesthetic medicine" } },
  { href: "/chirurgia-estetica", primary: true, label: { it: "Chirurgia estetica", en: "Aesthetic surgery" } },
  {
    href: "/advanced-beauty-technology",
    primary: true,
    label: { it: "Advanced beauty technology", en: "Advanced beauty technology" },
    short: { it: "Beauty technology", en: "Beauty technology" },
  },
  { href: "/rassegna-stampa", label: { it: "Riconoscimenti", en: "Recognition" } },
  { href: "/corsi-di-formazione", label: { it: "Formazione", en: "Teaching" } },
  { href: "/contatti", primary: true, label: { it: "Contatti", en: "Contact" } },
];

export const ui = {
  skipToContent: { it: "Vai al contenuto", en: "Skip to content" },
  menu: { it: "Menu", en: "Menu" },
  close: { it: "Chiudi", en: "Close" },
  languageSwitch: { it: "English", en: "Italiano" },
  languageSwitchLabel: { it: "Leggi in inglese", en: "Read in Italian" },
  book: { it: "Richiedi una visita", en: "Request a consultation" },
  call: { it: "Chiama lo studio", en: "Call the practice" },
  callShort: { it: "Chiama", en: "Call" },
  write: { it: "Scrivi", en: "Write" },
  readMore: { it: "Approfondisci", en: "Read more" },
  backTo: { it: "Torna a", en: "Back to" },
  allTreatments: { it: "Tutti i trattamenti", en: "All treatments" },
  faqTitle: { it: "Domande frequenti", en: "Frequently asked questions" },
  openMaps: { it: "Apri in Google Maps", en: "Open in Google Maps" },
  procedures: { it: "trattamenti", en: "treatments" },
  chooseZone: { it: "Scegli una zona", en: "Choose an area" },
  showList: { it: "Mostra l'elenco completo", en: "Show the full list" },
  hideList: { it: "Nascondi l'elenco", en: "Hide the list" },
} satisfies Record<string, Record<Locale, string>>;

export const home = {
  meta: {
    title: {
      it: "Dr. Roberto Dell'Avanzato — Medicina e chirurgia estetica, Milano",
      en: "Dr Roberto Dell'Avanzato — Aesthetic medicine and surgery, Milan",
    },
    description: {
      it: "Medico chirurgo specialista, perfezionato in medicina e chirurgia estetica. Ideatore della metodica Endolift®. Studio in Via Andegari 18, Milano.",
      en: "Specialist surgeon with advanced training in aesthetic medicine and surgery. Creator of the Endolift® method. Practice in Via Andegari 18, Milan.",
    },
  },
  heroKicker: { it: "Endolift® — la metodica che porta il suo nome", en: "Endolift® — the method that bears his name" },
  heroTitle: { it: "Amo la bellezza", en: "I love beauty" },
  heroLead: {
    it: "Medicina e chirurgia estetica a Milano. Valorizzare la bellezza, l'armonia e l'unicità di ogni persona, senza stravolgerne l'identità.",
    en: "Aesthetic medicine and surgery in Milan. Enhancing each person's beauty, harmony and uniqueness, without altering who they are.",
  },
  quote: {
    it: "Quando penso di essere andato il più lontano possibile, scopro che posso spingermi ancora oltre",
    en: "Just when I think I have gone as far as I can, I discover I can go further still",
  },
  role: {
    it: "Specialista in chirurgia, medicina e chirurgia estetica",
    en: "Specialist in surgery, aesthetic medicine and aesthetic surgery",
  },
  bioKicker: { it: "Il medico", en: "The physician" },
  missionsKicker: { it: "Fuori dallo studio", en: "Beyond the practice" },
  bio: {
    it: "Sono il Dr. Roberto Dell'Avanzato, uno dei chirurghi estetici più conosciuti in Italia e considerato uno dei massimi esperti di medical device e tecnologie laser al mondo. Mi occupo di medicina e chirurgia estetica da oltre venticinque anni e ho ideato la moderna tecnica Endolift® Laser, presentata da me per la prima volta al mondo.",
    en: "I am Dr Roberto Dell'Avanzato, one of the best-known aesthetic surgeons in Italy and regarded as one of the world's leading experts in medical devices and laser technology. I have worked in aesthetic medicine and surgery for over twenty-five years and created the modern Endolift® Laser technique, which I was the first in the world to present.",
  },
  areasTitle: { it: "Tre modi di lavorare sulla stessa persona", en: "Three ways of working on the same person" },
  areas: [
    {
      href: "/medicina-estetica",
      title: { it: "Medicina estetica", en: "Aesthetic medicine" },
      text: {
        it: "Armonia e naturalezza senza bisturi e senza dolore.",
        en: "Harmony and natural results, without a scalpel and without pain.",
      },
      image: "hero-medicina-3",
    },
    {
      href: "/chirurgia-estetica",
      title: { it: "Chirurgia estetica", en: "Aesthetic surgery" },
      text: {
        it: "Professionalità ed esperienza per una bellezza senza eccessi.",
        en: "Expertise and experience for beauty without excess.",
      },
      image: "home-chirurgia",
    },
    {
      href: "/advanced-beauty-technology",
      title: { it: "Advanced beauty technology", en: "Advanced beauty technology" },
      text: {
        it: "Trattamenti mini-invasivi, una sola seduta, risultati che durano.",
        en: "Minimally invasive treatments, a single session, lasting results.",
      },
      image: "home-advanced",
    },
  ],
  missionsTitle: { it: "Missioni umanitarie", en: "Humanitarian missions" },
  missionsLead: {
    it: "Parte di questo lavoro è stata dedicata alle donne sfigurate con l'acido nel sub-continente indiano.",
    en: "Part of this work has been devoted to women disfigured by acid attacks in the Indian subcontinent.",
  },
  newsTitle: { it: "Approfondimenti", en: "In depth" },
  newsLead: {
    it: "Tre metodiche spiegate per esteso: come funzionano, dove agiscono, cosa aspettarsi.",
    en: "Three methods explained in full: how they work, where they act, what to expect.",
  },
};

export const pages = {
  itsMe: {
    slug: { it: "/its-me", en: "/its-me" },
    kicker: { it: "Chi sono", en: "About" },
    title: { it: "Amo la bellezza", en: "I love beauty" },
    meta: {
      title: { it: "Chi sono — Dr. Roberto Dell'Avanzato", en: "About — Dr Roberto Dell'Avanzato" },
      description: {
        it: "Percorso, formazione, docenze, società scientifiche e missioni umanitarie del Dr. Roberto Dell'Avanzato.",
        en: "Career, training, teaching, scientific societies and humanitarian missions of Dr Roberto Dell'Avanzato.",
      },
    },
    body: {
      it: [
        "Sono il Dr. Roberto Dell'Avanzato, uno dei chirurghi estetici più conosciuti in Italia e considerato uno dei massimi esperti di medical device e tecnologie laser al mondo. Mi occupo di medicina e chirurgia estetica da oltre venticinque anni e ho inventato la moderna tecnica Endolift Laser, metodica presentata da me per la prima volta al mondo.",
        "Dopo 6 anni di specializzazione in Chirurgia Generale e 2 anni di master universitario in Medicina e Chirurgia Estetica in Italia, ho continuato la mia formazione in tutte le più prestigiose strutture di riferimento in Europa e America, lavorando fianco a fianco con i migliori chirurghi plastici al mondo, e continuo a essere invitato con regolarità a parlare in conferenze internazionali e a tenere corsi di formazione come Key Opinion Leader delle più importanti aziende del settore.",
        "Ho dedicato parte della mia vita ad aiutare le ragazze sfigurate con l'acido nel sub-continente indiano, Pakistan e Bangladesh, esperienza dalla quale è stato tratto anche un libro; ho ricevuto il Certificato di Eccellenza dell'Associazione dei Medici Pakistani e il Certificato di Merito del Combined Military Hospital di Islamabad per i servizi umanitari resi al paese.",
        "L'amore per il mio lavoro, l'etica professionale e il rispetto per ogni singolo paziente mi hanno portato a valorizzarne la bellezza, l'armonia e l'unicità. Ogni persona che si affida a me desidera migliorare il proprio aspetto e risolvere la propria problematica, ma non vuole e non deve rinunciare alla propria identità. Non chiedetemi mai di generare un altro di quegli eccessi che si vedono in televisione e che sviliscono la nostra professione, perché la mia risposta sarà sempre «no». La medicina e la chirurgia estetica non devono stravolgere l'aspetto di un paziente, ma migliorarlo al fine di rafforzarne il benessere psico-fisico.",
        "Per questa ragione la prima visita è sempre volta a un'attenta anamnesi e analisi della problematica, valutando bene le esigenze di ciascun paziente, al fine di proporre la migliore soluzione possibile.",
        "Chi si sottopone a un trattamento di medicina estetica o a un intervento di chirurgia estetica può beneficiare di trattamenti combinati esclusivi e di protocolli da me stesso sviluppati, come la microliposcultura laser eseguita in anestesia locale o il protocollo Endolift®–Ultherapy®–Cellfina® per il rimodellamento globale dei glutei. Il mio punto di forza è la conoscenza e la capacità di integrare tutte le migliori metodologie che la medicina estetica e la chirurgia estetica possono offrire.",
        "Dal 2005 mi occupo inoltre di trattare le problematiche legate ai filler permanenti iniettati prevalentemente all'estero, che possono creare problemi a vita se non affrontati con la giusta tecnica e il giusto protocollo, dirigendo il Centro di Riferimento Internazionale di Patologie da Filler Permanenti a Milano.",
      ],
      en: [
        "I am Dr Roberto Dell'Avanzato, one of the best-known aesthetic surgeons in Italy and regarded as one of the world's leading experts in medical devices and laser technology. I have worked in aesthetic medicine and surgery for over twenty-five years and invented the modern Endolift Laser technique, a method I was the first in the world to present.",
        "After six years of specialisation in General Surgery and a two-year university Master's in Aesthetic Medicine and Surgery in Italy, I continued my training in the most prestigious reference centres in Europe and America, working alongside the world's best plastic surgeons. I am still regularly invited to speak at international conferences and to run training courses as Key Opinion Leader for the sector's leading companies.",
        "I have devoted part of my life to helping young women disfigured by acid attacks in the Indian subcontinent, in Pakistan and Bangladesh — an experience that also became the subject of a book. I received the Certificate of Excellence from the Pakistan Medical Association and the Certificate of Merit from the Combined Military Hospital of Islamabad for humanitarian services rendered to the country.",
        "Love for my work, professional ethics and respect for every single patient have led me to enhance their beauty, harmony and uniqueness. Everyone who comes to me wants to improve their appearance and resolve their concern, but they do not want — and should not have — to give up their identity. Never ask me to create another of those excesses seen on television that demean our profession, because my answer will always be «no». Aesthetic medicine and surgery should not distort a patient's appearance, but improve it in order to strengthen their physical and psychological wellbeing.",
        "For this reason the first consultation always involves a careful medical history and analysis of the concern, weighing up each patient's needs in order to propose the best possible solution.",
        "Patients undergoing an aesthetic medicine treatment or an aesthetic surgery procedure can benefit from exclusive combined treatments and protocols I have developed myself, such as laser micro-liposculpture under local anaesthesia or the Endolift®–Ultherapy®–Cellfina® protocol for global buttock remodelling. My strength lies in knowing — and being able to integrate — all the best methods that aesthetic medicine and surgery can offer.",
        "Since 2005 I have also treated complications caused by permanent fillers, mostly injected abroad, which can cause lifelong problems if not addressed with the right technique and protocol. I direct the International Reference Centre for Permanent Filler Pathologies in Milan.",
      ],
    },
  },

  medicina: {
    kicker: { it: "Medicina estetica", en: "Aesthetic medicine" },
    title: {
      it: "Senza bisturi e senza dolore",
      en: "Without a scalpel, without pain",
    },
    meta: {
      title: { it: "Medicina estetica a Milano — Dr. Roberto Dell'Avanzato", en: "Aesthetic medicine in Milan — Dr Roberto Dell'Avanzato" },
      description: {
        it: "Ultherapy®, Endolift®, filler, tossina botulinica, fili e Profhilo®: trattamenti mini-invasivi personalizzati, eseguiti in ambulatorio.",
        en: "Ultherapy®, Endolift®, fillers, botulinum toxin, threads and Profhilo®: personalised minimally invasive treatments, performed in the practice.",
      },
    },
    lead: {
      it: "Migliora il tuo aspetto trattando ogni inestetismo o patologia senza bisturi e senza dolore. I trattamenti che ti proporrò saranno sempre personalizzati, mini-invasivi o non invasivi, eseguiti in ambulatorio praticando al massimo una leggera anestesia locale quando necessario.",
      en: "Improve your appearance and treat any concern or condition without a scalpel and without pain. The treatments I propose are always personalised, minimally invasive or non-invasive, carried out in the practice with at most a light local anaesthetic where necessary.",
    },
    heroImages: ["hero-medicina-3", "hero-medicina-1", "hero-medicina-2"],
    zonesTitle: { it: "Come vorresti valorizzarti?", en: "How would you like to enhance yourself?" },
    zonesLead: {
      it: "Scegli la zona da trattare: vedrai solo i trattamenti che la riguardano.",
      en: "Choose the area you would like to treat: you will only see the treatments that apply to it.",
    },
  },

  chirurgia: {
    kicker: { it: "Chirurgia estetica", en: "Aesthetic surgery" },
    title: { it: "Rispettare e far emergere la tua identità", en: "Respecting and revealing your identity" },
    meta: {
      title: { it: "Chirurgia estetica a Milano — Dr. Roberto Dell'Avanzato", en: "Aesthetic surgery in Milan — Dr Roberto Dell'Avanzato" },
      description: {
        it: "Liposcultura laser, mastoplastica additiva, blefaroplastica laser, rinosettoplastica e Cellfina®, presso le cliniche di Milano.",
        en: "Laser liposculpture, breast augmentation, laser blepharoplasty, rhinoseptoplasty and Cellfina®, at the Milan clinics.",
      },
    },
    lead: {
      it: "La chirurgia estetica è un'evoluzione più articolata della chirurgia plastica, nella quale l'intervento fornisce «solo» una parte del risultato. Il medico deve portare il risultato ai livelli più alti per farti ritrovare l'armonia con te stesso senza stravolgere il tuo aspetto, combinando alla chirurgia i più avanzati trattamenti di medicina estetica.",
      en: "Aesthetic surgery is a more complex evolution of plastic surgery, in which the operation provides «only» part of the result. The physician must take that result to the highest level so you can find harmony with yourself again without your appearance being distorted, combining surgery with the most advanced aesthetic medicine treatments.",
    },
    heroImages: ["hero-chirurgia-3", "hero-chirurgia-1", "hero-chirurgia-2"],
    groupsTitle: { it: "Cosa vuoi migliorare di te?", en: "What would you like to improve?" },
    groupsLead: {
      it: "L'elenco completo degli interventi, raccolto per area.",
      en: "The full list of procedures, grouped by area.",
    },
    venuesTitle: { it: "Dove opero", en: "Where I operate" },
  },

  technology: {
    kicker: { it: "Advanced beauty technology", en: "Advanced beauty technology" },
    title: { it: "La differenza è l'inizio della sinergia", en: "Difference is where synergy begins" },
    meta: {
      title: { it: "Advanced beauty technology — Dr. Roberto Dell'Avanzato", en: "Advanced beauty technology — Dr Roberto Dell'Avanzato" },
      description: {
        it: "Protocolli combinati: Face Rebuilding, Body Reshaping, Global Buttock Remodeling, NanoSoft®, LadyLift®, Permalip®.",
        en: "Combined protocols: Face Rebuilding, Body Reshaping, Global Buttock Remodeling, NanoSoft®, LadyLift®, Permalip®.",
      },
    },
    lead: {
      it: "Trattamenti mini-invasivi, una sola seduta, risultati che durano nel tempo. Nel trattamento di alcune patologie o inestetismi i medical device, con le giuste indicazioni, hanno ormai eguagliato i risultati della chirurgia: la giusta combinazione delle diverse metodiche, unita a un corretto protocollo, è la carta vincente degli ultimi anni.",
      en: "Minimally invasive treatments, a single session, results that last. For certain conditions and concerns, medical devices — used with the right indications — now match the results of surgery: the right combination of methods, together with a sound protocol, has been the winning card of recent years.",
    },
    note: {
      it: "La passione per le tecnologie medicali mi ha portato a essere tra i primi in Italia nel 2002 a eseguire la liposuzione laser assistita e nel 2005 a sviluppare personalmente la metodica Endolift®.",
      en: "My passion for medical technology led me to be among the first in Italy to perform laser-assisted liposuction in 2002, and in 2005 to personally develop the Endolift® method.",
    },
    heroImages: ["hero-advanced", "t-face-rebuilding", "t-buttock"],
  },

  press: {
    kicker: { it: "Riconoscimenti", en: "Recognition" },
    title: { it: "Ricerca, docenza e stampa", en: "Research, teaching and press" },
    meta: {
      title: { it: "Riconoscimenti e rassegna stampa — Dr. Roberto Dell'Avanzato", en: "Recognition and press — Dr Roberto Dell'Avanzato" },
      description: {
        it: "Premi, società scientifiche, docenze universitarie, pubblicazioni e missioni umanitarie.",
        en: "Awards, scientific societies, university teaching, publications and humanitarian missions.",
      },
    },
    lead: {
      it: "Nessuna testimonianza e nessuna fotografia prima-dopo: in Italia la comunicazione sanitaria è informativa, non promozionale. Quello che segue è ciò che si può verificare.",
      en: "No testimonials and no before-and-after photographs: in Italy healthcare communication is informative, not promotional. What follows is what can be verified.",
    },
  },

  courses: {
    kicker: { it: "Formazione", en: "Teaching" },
    title: { it: "Corsi di formazione in medicina estetica", en: "Training in aesthetic medicine" },
    meta: {
      title: { it: "Corsi di formazione — Dr. Roberto Dell'Avanzato", en: "Training courses — Dr Roberto Dell'Avanzato" },
      description: {
        it: "Docenze universitarie, corsi pratici di laser, filler, fili e peeling, attività da Key Opinion Leader.",
        en: "University teaching, practical courses in lasers, fillers, threads and peels, Key Opinion Leader activity.",
      },
    },
    lead: {
      it: "Docente e tutor ai corsi pratici di laser, filler, fili, peeling e altre procedure di medicina e chirurgia estetica, in Italia e all'estero.",
      en: "Lecturer and tutor on practical courses in lasers, fillers, threads, peels and other aesthetic medicine and surgery procedures, in Italy and abroad.",
    },
  },

  contact: {
    kicker: { it: "Sedi e contatti", en: "Practice and contact" },
    title: { it: "Prenotare una visita", en: "Booking a consultation" },
    meta: {
      title: { it: "Contatti — Studio di Via Andegari 18, Milano", en: "Contact — Via Andegari 18 practice, Milan" },
      description: {
        it: "Studio medico in Via Andegari 18, Milano, a 50 metri dalla metro Montenapoleone. Telefono, e-mail e richiesta di visita.",
        en: "Medical practice at Via Andegari 18, Milan, 50 metres from Montenapoleone underground station. Phone, e-mail and consultation request.",
      },
    },
    lead: {
      it: "Lo studio si trova nel cuore di Milano, in Via Andegari 18, a cinquanta metri dalla fermata Montenapoleone della linea M3 e di fronte all'Hotel Mandarin Oriental.",
      en: "The practice is in the heart of Milan, at Via Andegari 18, fifty metres from Montenapoleone station on the M3 line and opposite the Mandarin Oriental Hotel.",
    },
    howToGet: { it: "Come arrivare", en: "Getting there" },
    formTitle: { it: "Richiedi una visita", en: "Request a consultation" },
    formLead: {
      it: "Quattro domande, meno di un minuto. Ti ricontatta lo studio.",
      en: "Four questions, less than a minute. The practice will get back to you.",
    },
  },
};
