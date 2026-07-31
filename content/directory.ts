/**
 * Elenco completo delle procedure, raggruppate per zona del corpo.
 *
 * Viene dalle due sezioni in coda alle pagine del cliente:
 * «Come vorresti valorizzarti?» su `/medicina-estetica/` (11 zone, 188 righe) e
 * «Cosa vuoi migliorare di te?» su `/chirurgia-estetica/` (6 zone, 45 righe).
 * `/advanced-beauty-technology/` non ne ha una.
 *
 * **Perché un catalogo e non 233 stringhe.** Nell'originale le righe si ripetono
 * pesantemente: «Mesoterapia, Bioristrutturazione…» compare in 10 zone su 11,
 * «Ringiovanimento con Laser frazionato CO2» in 9. Scritte una per una sarebbero
 * 233 etichette da tradurre e da tenere allineate a mano, con la certezza che
 * prima o poi due copie della stessa voce divergono. Qui ogni procedura è
 * definita **una volta** in `PROCEDURES` e le zone la referenziano per chiave:
 * TypeScript rifiuta una chiave inesistente, quindi un refuso non arriva in
 * pagina come voce muta.
 *
 * `card` è lo slug italiano di una delle 19 schede, dove la procedura ne ha una:
 * il nome diventa un link. Le altre restano testo — sono voci di listino, non
 * pagine, e inventare una descrizione per ognuna significherebbe scrivere
 * contenuto clinico che il cliente non ha mai scritto.
 *
 * **Registro.** Quattro etichette dell'originale contenevano un esito e non una
 * descrizione — «P-Shot: aumento della consistenza e ingrandimento del pene»,
 * «Cellfina® (Trattamento a lungo termine della cellulite)» — e sono ridotte al
 * nome della procedura, che la scheda o la visita spiegano. Elencate in
 * `CORREZIONI-REGISTRO.md` §14.
 */

import type { Localized } from "@/lib/i18n";

export type Procedure = {
  label: Localized<string>;
  /** Slug italiano della scheda dedicata, se esiste fra i 19 trattamenti. */
  card?: string;
};

/* ------------------------------------------------------------------ *
 * Medicina estetica e tecnologie
 * ------------------------------------------------------------------ */

const MEDICAL = {
  mesoterapia: {
    label: {
      it: "Mesoterapia, bioristrutturazione, biorivitalizzazione e biostimolazione",
      en: "Mesotherapy, bio-restructuring, bio-revitalisation and biostimulation",
    },
  },
  mesoterapiaPrp: {
    label: {
      it: "Mesoterapia avanzata con fattori di crescita piastrinici PRP (plasma ricco in piastrine)",
      en: "Advanced mesotherapy with PRP platelet growth factors (platelet-rich plasma)",
    },
  },
  mesoterapiaCellulite: {
    label: {
      it: "Mesoterapia per la cellulite",
      en: "Mesotherapy for cellulite",
    },
  },
  dermaroller: {
    label: {
      it: "Dermaroller (meso-needling)",
      en: "Dermaroller (meso-needling)",
    },
  },
  celebritylift: {
    label: {
      it: "CelebrityLift Laser con cosmeceutici dedicati",
      en: "CelebrityLift Laser with dedicated cosmeceuticals",
    },
  },
  ledMedicale: {
    label: { it: "LED medicale", en: "Medical LED" },
  },
  laserNeoformazioni: {
    label: {
      it: "Trattamento laser di neoformazioni cutanee",
      en: "Laser treatment of skin lesions",
    },
  },
  peeling: {
    label: {
      it: "Peeling (superficiale, medio, profondo)",
      en: "Peeling (superficial, medium, deep)",
    },
  },
  laserMacchie: {
    label: {
      it: "Trattamento laser delle macchie cutanee",
      en: "Laser treatment of skin pigmentation",
    },
  },
  dermamelan: {
    label: {
      it: "Dermamelan® per le macchie cutanee",
      en: "Dermamelan® for skin pigmentation",
    },
  },
  carbossiterapia: {
    label: { it: "Carbossiterapia", en: "Carboxytherapy" },
  },
  // «Ultherapy® (Lifting non chirurgico), Ultrasuoni micro focalizzati con
  // sistema di visione» nell'originale. Il «lifting non chirurgico» sta già nel
  // titolo della scheda; qui basta la tecnologia.
  ultherapy: {
    label: {
      it: "Ultherapy® — ultrasuoni microfocalizzati con sistema di visione",
      en: "Ultherapy® — micro-focused ultrasound with visualisation",
    },
    card: "ultherapy",
  },
  botoxVolto: {
    label: {
      it: "Tossina botulinica per le rughe del volto e del collo",
      en: "Botulinum toxin for facial and neck wrinkles",
    },
    card: "tossina-botulinica",
  },
  botoxBruxismo: {
    label: {
      it: "Tossina botulinica per il bruxismo",
      en: "Botulinum toxin for bruxism",
    },
    card: "tossina-botulinica",
  },
  botoxGenitale: {
    label: {
      it: "Tossina botulinica per disordini della sfera genitale",
      en: "Botulinum toxin for genital-area disorders",
    },
    card: "tossina-botulinica",
  },
  fili: {
    label: {
      it: "Fili biostimolanti e liftanti riassorbibili extra-sottili, senza accesso chirurgico",
      en: "Extra-fine absorbable biostimulating and lifting threads, without surgical access",
    },
    card: "fili-rivitalizzanti",
  },
  fillerRimodellare: {
    label: {
      it: "Filler all’acido ialuronico per rimodellare",
      en: "Hyaluronic acid filler for remodelling",
    },
    card: "filler",
  },
  fillerLabbra: {
    label: {
      it: "Filler all’acido ialuronico per le labbra o labioplastica",
      en: "Hyaluronic acid filler for the lips, or lip augmentation",
    },
    card: "filler",
  },
  fillerZigomi: {
    label: {
      it: "Filler all’acido ialuronico per gli zigomi o malaroplastica",
      en: "Hyaluronic acid filler for the cheekbones, or malar augmentation",
    },
    card: "filler",
  },
  fillerMento: {
    label: {
      it: "Filler all’acido ialuronico per il mento o mentoplastica",
      en: "Hyaluronic acid filler for the chin, or chin augmentation",
    },
    card: "filler",
  },
  fillerContorno: {
    label: {
      it: "Filler all’acido ialuronico per il contorno labbra e il contorno occhi",
      en: "Hyaluronic acid filler for the lip contour and the eye contour",
    },
    card: "filler",
  },
  fillerNaso: {
    label: {
      it: "Filler all’acido ialuronico per il naso: rinofiller o rinoplastica liquida",
      en: "Hyaluronic acid filler for the nose: rhinofiller or liquid rhinoplasty",
    },
    card: "filler",
  },
  fillerPuntoG: {
    label: {
      it: "Filler all’acido ialuronico per il punto G",
      en: "Hyaluronic acid filler for the G-spot",
    },
    card: "filler",
  },
  bioNutriLift: {
    label: { it: "BioNutriLift", en: "BioNutriLift" },
  },
  biodermogenesi: {
    label: { it: "Biodermogenesi", en: "Biodermogenesis" },
  },
  laserFrazionatoNonAblativo: {
    label: {
      it: "Ringiovanimento con laser frazionato non ablativo",
      en: "Rejuvenation with non-ablative fractional laser",
    },
  },
  laserFrazionatoCo2: {
    label: {
      it: "Ringiovanimento con laser frazionato ablativo CO₂",
      en: "Rejuvenation with ablative CO₂ fractional laser",
    },
  },
  endolift: {
    label: { it: "Endolift®", en: "Endolift®" },
    card: "endolift",
  },
  laserAcneAttiva: {
    label: {
      it: "Trattamento laser dell’acne in fase attiva",
      en: "Laser treatment of active acne",
    },
  },
  laserCicatriciAcne: {
    label: {
      it: "Trattamento laser delle cicatrici da acne",
      en: "Laser treatment of acne scarring",
    },
  },
  laserVascolari: {
    label: {
      it: "Trattamento laser di patologie vascolari",
      en: "Laser treatment of vascular conditions",
    },
  },
  laserRoncopatia: {
    label: {
      it: "Trattamento laser della roncopatia (russamento e apnee del sonno)",
      en: "Laser treatment of snoring and sleep apnoea",
    },
  },
  criolipolisi: {
    label: { it: "Criolipolisi", en: "Cryolipolysis" },
  },
  intralipoterapia: {
    label: {
      it: "Intralipoterapia per le adiposità localizzate",
      en: "Intralipotherapy for localised fat deposits",
    },
  },
  acnelan: {
    label: {
      it: "Acnelan® per il trattamento dell’acne",
      en: "Acnelan® for the treatment of acne",
    },
  },
  laserSmagliature: {
    label: {
      it: "Trattamento laser delle smagliature",
      en: "Laser treatment of stretch marks",
    },
  },
  // «Cellfina® (Trattamento a lungo termine della cellulite)» nell'originale:
  // la durata del risultato è un claim, e sta già — verificata — nella scheda.
  cellfina: {
    label: { it: "Cellfina®", en: "Cellfina®" },
    card: "cellfina",
  },
  newLiftLaser: {
    label: {
      it: "New Lift Laser con cosmeceutici Endolyft®",
      en: "New Lift Laser with Endolyft® cosmeceuticals",
    },
  },
  ledEndolyft: {
    label: {
      it: "LED con cosmeceutici Endolyft®",
      en: "LED with Endolyft® cosmeceuticals",
    },
  },
  scleroterapia: {
    label: {
      it: "Scleroterapia e sclero-mousse dei capillari",
      en: "Sclerotherapy and foam sclerotherapy of capillaries",
    },
  },
  bioNutriKnees: {
    label: { it: "Bio Nutri Knees", en: "Bio Nutri Knees" },
    card: "bio-nutri-knees",
  },
  ladylift: {
    label: {
      it: "LadyLift® — ringiovanimento vulvare e vaginale",
      en: "LadyLift® — vulvar and vaginal rejuvenation",
    },
    card: "ladylift",
  },
  gShot: {
    label: { it: "G-Shot — trattamento del punto G", en: "G-Shot — G-spot treatment" },
  },
  // «P-Shot: aumento della consistenza e ingrandimento del pene» nell'originale.
  // È un esito promesso, non una descrizione: resta il nome della procedura.
  pShot: {
    label: { it: "P-Shot", en: "P-Shot" },
  },
  laserAntalgica: {
    label: {
      it: "Laser terapia antalgica (trigger point)",
      en: "Analgesic laser therapy (trigger points)",
    },
  },
} satisfies Record<string, Procedure>;

/* ------------------------------------------------------------------ *
 * Chirurgia estetica
 * ------------------------------------------------------------------ */

const SURGICAL = {
  blefaroSuperiore: {
    label: {
      it: "Blefaroplastica superiore e/o inferiore (chirurgia delle palpebre)",
      en: "Upper and/or lower blepharoplasty (eyelid surgery)",
    },
  },
  blefaroLaser: {
    label: {
      it: "Blefaroplastica superiore e/o inferiore laser assistita",
      en: "Laser-assisted upper and/or lower blepharoplasty",
    },
    card: "blefaroplastica-laser",
  },
  blefaroTranscongiuntivale: {
    label: {
      it: "Blefaroplastica transcongiuntivale laser assistita",
      en: "Laser-assisted transconjunctival blepharoplasty",
    },
    card: "blefaroplastica-laser",
  },
  rinosettoplastica: {
    label: {
      it: "Rinoplastica e/o settoplastica (chirurgia del naso)",
      en: "Rhinoplasty and/or septoplasty (nasal surgery)",
    },
    card: "rinosettoplastica",
  },
  turbinati: {
    label: { it: "Riduzione dei turbinati", en: "Turbinate reduction" },
  },
  puntaNaso: {
    label: {
      it: "Chirurgia della punta del naso",
      en: "Surgery of the nasal tip",
    },
  },
  liftingVolto: {
    label: { it: "Lifting del volto", en: "Face lift" },
  },
  miniLiftingVolto: {
    label: { it: "Mini-lifting del volto", en: "Mini face lift" },
  },
  liftingCollo: {
    label: { it: "Lifting del collo", en: "Neck lift" },
  },
  browLift: {
    label: {
      it: "Lifting delle sopracciglia o brow-lift",
      en: "Eyebrow lift, or brow lift",
    },
  },
  cantopessi: {
    label: { it: "Cantopessi", en: "Canthopexy" },
  },
  labioplasticaCheiloplastica: {
    label: {
      it: "Labioplastica o cheiloplastica (chirurgia delle labbra)",
      en: "Cheiloplasty (lip surgery)",
    },
  },
  malaroplastica: {
    label: {
      it: "Malaroplastica (chirurgia degli zigomi)",
      en: "Malarplasty (cheekbone surgery)",
    },
  },
  mentoplastica: {
    label: {
      it: "Mentoplastica (chirurgia del mento)",
      en: "Genioplasty (chin surgery)",
    },
  },
  otoplastica: {
    label: {
      it: "Otoplastica (chirurgia delle orecchie)",
      en: "Otoplasty (ear surgery)",
    },
  },
  lobiAuricolari: {
    label: {
      it: "Ricostruzione dei lobi auricolari",
      en: "Earlobe reconstruction",
    },
  },
  contornoMandibolare: {
    label: {
      it: "Chirurgia del contorno mandibolare",
      en: "Jawline contouring surgery",
    },
  },

  autotrapiantoStrip: {
    label: {
      it: "Autotrapianto di capelli, tecnica STRIP",
      en: "Hair autotransplant, STRIP technique",
    },
  },
  autotrapiantoFue: {
    label: {
      it: "Autotrapianto di capelli, tecnica FUE",
      en: "Hair autotransplant, FUE technique",
    },
  },
  biofibre: {
    label: {
      it: "Trapianto di capelli artificiali Biofibre®",
      en: "Biofibre® artificial hair implant",
    },
  },

  mastoplastica: {
    label: {
      it: "Mastoplastica additiva, riduttiva e ricostruttiva",
      en: "Breast augmentation, reduction and reconstruction",
    },
    card: "mastoplastica-additiva",
  },
  mastopessi: {
    label: {
      it: "Mastopessi (sollevamento delle mammelle)",
      en: "Mastopexy (breast lift)",
    },
  },
  ginecomastia: {
    label: {
      it: "Riduzione della ginecomastia o pseudo-ginecomastia (mammella maschile)",
      en: "Reduction of gynaecomastia or pseudo-gynaecomastia (male breast)",
    },
  },
  capezzoli: {
    label: {
      it: "Correzione di capezzoli asimmetrici e introflessi",
      en: "Correction of asymmetric and inverted nipples",
    },
  },
  neoformazioniMammarie: {
    label: {
      it: "Chirurgia delle neoformazioni mammarie",
      en: "Surgery of breast lesions",
    },
  },
  simmetrizzazione: {
    label: {
      it: "Simmetrizzazione delle mammelle",
      en: "Breast symmetrisation",
    },
  },

  liposcultura: {
    label: {
      it: "Liposcultura e liposuzione laser delle adiposità localizzate (con aspirazione)",
      en: "Laser liposculpture and liposuction of localised fat (with aspiration)",
    },
    card: "liposcultura-laser",
  },
  laserLipolisi: {
    label: {
      it: "Laser lipolisi di piccole adiposità localizzate (senza aspirazione)",
      en: "Laser lipolysis of small localised fat deposits (without aspiration)",
    },
    card: "liposcultura-laser",
  },
  brachioplastica: {
    label: {
      it: "Lifting e mini-lifting delle braccia (brachioplastica)",
      en: "Arm lift and mini arm lift (brachioplasty)",
    },
  },
  torsoplastica: {
    label: {
      it: "Lifting dei glutei e delle cosce (torsoplastica)",
      en: "Buttock and thigh lift (torsoplasty)",
    },
  },
  addominoplastica: {
    label: {
      it: "Lifting e mini-lifting dell’addome (addominoplastica)",
      en: "Abdominal lift and mini abdominal lift (abdominoplasty)",
    },
  },
  rimodellamentoGlutei: {
    label: {
      it: "Rimodellamento di glutei e polpacci",
      en: "Buttock and calf remodelling",
    },
  },
  gluteoplastica: {
    label: {
      it: "Gluteoplastica con protesi, tecnica Gonzales",
      en: "Gluteoplasty with implants, Gonzales technique",
    },
  },
  lipofilling: {
    label: {
      it: "Lipofilling e lipostruttura",
      en: "Lipofilling and lipostructure",
    },
  },
  flebologia: {
    label: {
      it: "Flebologia e chirurgia delle varici",
      en: "Phlebology and varicose vein surgery",
    },
  },
  filiChirurgici: {
    label: {
      it: "Fili di sospensione e di trazione con accesso chirurgico",
      en: "Suspension and traction threads with surgical access",
    },
  },

  labioplasticaVaginale: {
    label: {
      it: "Labioplastica vaginale (chirurgia delle piccole o grandi labbra)",
      en: "Vaginal labiaplasty (surgery of the labia minora or majora)",
    },
  },
  vaginalTightening: {
    label: {
      it: "Vaginal tightening cosmetico (restringimento vaginale post-partum)",
      en: "Cosmetic vaginal tightening (post-partum vaginal narrowing)",
    },
  },
  rinfoltimentoPubico: {
    label: {
      it: "Rinfoltimento dei peli pubici",
      en: "Pubic hair restoration",
    },
  },
  scrotoplastica: {
    label: { it: "Scrotoplastica", en: "Scrotoplasty" },
  },

  cistiIstologico: {
    label: {
      it: "Asportazione di cisti con esame istologico",
      en: "Cyst removal with histological examination",
    },
  },
  neiIstologico: {
    label: {
      it: "Asportazione di nei con esame istologico",
      en: "Mole removal with histological examination",
    },
  },
  neoformazioniIstologico: {
    label: {
      it: "Asportazione di neoformazioni cutanee di volto e corpo con esame istologico",
      en: "Removal of skin lesions of the face and body with histological examination",
    },
  },
  granulomiIlt: {
    label: {
      it: "Rimozione di granulomi da filler con laser in fibra ILT (Intralesional Laser Therapy)",
      en: "Removal of filler granulomas with ILT fibre laser (intralesional laser therapy)",
    },
  },
  revisioneCicatrici: {
    label: { it: "Revisione di cicatrici", en: "Scar revision" },
  },
} satisfies Record<string, Procedure>;

/**
 * L'annotazione allarga i valori a `Procedure` conservando l'unione delle
 * chiavi. Senza, `satisfies` lascia i tipi letterali e le voci prive di `card`
 * non hanno affatto quella proprietà: leggerla diventa un errore di compilazione
 * anche dove serve proprio distinguere chi ha una scheda da chi no.
 */
export const PROCEDURES: Record<
  keyof typeof MEDICAL | keyof typeof SURGICAL,
  Procedure
> = { ...MEDICAL, ...SURGICAL };

export type ProcedureKey = keyof typeof PROCEDURES;

/* ------------------------------------------------------------------ *
 * Le zone
 * ------------------------------------------------------------------ */

export type DirectoryZone = {
  id: string;
  title: Localized<string>;
  keys: ProcedureKey[];
};

export type DirectoryGroup = {
  id: string;
  title: Localized<string>;
  zones: DirectoryZone[];
};

/**
 * L'ordine delle zone e delle voci è quello del sito del cliente: è il suo
 * listino, e riordinarlo per estetica gli farebbe cercare a lungo una voce che
 * sa dov'era.
 */
export const DIRECTORY: DirectoryGroup[] = [
  {
    id: "medicina",
    title: { it: "Medicina estetica", en: "Aesthetic medicine" },
    zones: [
      {
        id: "capelli",
        title: { it: "Capelli e cuoio capelluto", en: "Hair and scalp" },
        keys: [
          "mesoterapia",
          "mesoterapiaPrp",
          "dermaroller",
          "celebritylift",
          "ledMedicale",
          "laserNeoformazioni",
          "peeling",
          "laserMacchie",
          "dermamelan",
          "carbossiterapia",
        ],
      },
      {
        id: "volto-collo",
        title: { it: "Volto e collo", en: "Face and neck" },
        keys: [
          "ultherapy",
          "botoxVolto",
          "botoxBruxismo",
          "fili",
          "fillerRimodellare",
          "fillerLabbra",
          "fillerZigomi",
          "fillerMento",
          "fillerContorno",
          "fillerNaso",
          "bioNutriLift",
          "peeling",
          "mesoterapia",
          "mesoterapiaPrp",
          "dermaroller",
          "carbossiterapia",
          "biodermogenesi",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "celebritylift",
          "ledMedicale",
          "laserAcneAttiva",
          "laserCicatriciAcne",
          "laserVascolari",
          "laserNeoformazioni",
          "laserRoncopatia",
          "criolipolisi",
          "intralipoterapia",
          "laserMacchie",
          "dermamelan",
          "acnelan",
        ],
      },
      {
        id: "addome",
        title: { it: "Addome", en: "Abdomen" },
        keys: [
          "ultherapy",
          "fili",
          "peeling",
          "mesoterapia",
          "mesoterapiaPrp",
          "dermaroller",
          "carbossiterapia",
          "biodermogenesi",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "celebritylift",
          "ledMedicale",
          "laserVascolari",
          "laserNeoformazioni",
          "laserSmagliature",
          "criolipolisi",
          "intralipoterapia",
          "laserMacchie",
          "dermamelan",
        ],
      },
      {
        id: "mammelle",
        title: { it: "Mammelle", en: "Breasts" },
        keys: [
          "fili",
          "peeling",
          "mesoterapia",
          "mesoterapiaPrp",
          "dermaroller",
          "carbossiterapia",
          "biodermogenesi",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "celebritylift",
          "ledMedicale",
          "laserVascolari",
          "laserNeoformazioni",
          "laserSmagliature",
          "criolipolisi",
          "intralipoterapia",
          "laserMacchie",
          "dermamelan",
        ],
      },
      {
        id: "glutei",
        title: { it: "Glutei", en: "Buttocks" },
        keys: [
          "ultherapy",
          "cellfina",
          "fili",
          "fillerRimodellare",
          "peeling",
          "mesoterapia",
          "mesoterapiaCellulite",
          "mesoterapiaPrp",
          "dermaroller",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "newLiftLaser",
          "ledEndolyft",
          "laserVascolari",
          "laserNeoformazioni",
          "laserSmagliature",
          "criolipolisi",
          "intralipoterapia",
        ],
      },
      {
        id: "ginocchia",
        title: { it: "Ginocchia", en: "Knees" },
        keys: [
          "ultherapy",
          "fili",
          "fillerRimodellare",
          "peeling",
          "mesoterapia",
          "mesoterapiaPrp",
          "dermaroller",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "newLiftLaser",
          "ledEndolyft",
          "laserVascolari",
          "laserNeoformazioni",
          "laserSmagliature",
          "criolipolisi",
          "intralipoterapia",
          "scleroterapia",
          "laserMacchie",
          "dermamelan",
          "bioNutriKnees",
        ],
      },
      {
        id: "braccia-cosce",
        title: {
          it: "Interno braccia e interno cosce",
          en: "Inner arms and inner thighs",
        },
        keys: [
          "ultherapy",
          "fili",
          "fillerRimodellare",
          "peeling",
          "mesoterapia",
          "mesoterapiaCellulite",
          "mesoterapiaPrp",
          "dermaroller",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "newLiftLaser",
          "ledEndolyft",
          "laserNeoformazioni",
          "laserSmagliature",
          "criolipolisi",
          "intralipoterapia",
        ],
      },
      {
        id: "mani-piedi",
        title: { it: "Mani e piedi", en: "Hands and feet" },
        keys: [
          "ultherapy",
          "fili",
          "fillerRimodellare",
          "peeling",
          "mesoterapia",
          "mesoterapiaPrp",
          "dermaroller",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "newLiftLaser",
          "ledEndolyft",
          "laserVascolari",
          "laserNeoformazioni",
          "intralipoterapia",
          "laserMacchie",
          "dermamelan",
        ],
      },
      {
        id: "genitali-femminili",
        title: { it: "Genitali femminili", en: "Female genitalia" },
        keys: [
          "botoxGenitale",
          "fili",
          "fillerRimodellare",
          "fillerPuntoG",
          "mesoterapia",
          "mesoterapiaPrp",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "endolift",
          "newLiftLaser",
          "ledEndolyft",
          "laserVascolari",
          "laserNeoformazioni",
          "intralipoterapia",
          "ladylift",
          "gShot",
        ],
      },
      {
        id: "genitali-maschili",
        title: { it: "Genitali maschili", en: "Male genitalia" },
        keys: [
          "botoxGenitale",
          "fili",
          "fillerRimodellare",
          "mesoterapia",
          "mesoterapiaPrp",
          "laserFrazionatoNonAblativo",
          "laserFrazionatoCo2",
          "laserVascolari",
          "laserNeoformazioni",
          "laserMacchie",
          "dermamelan",
          "pShot",
        ],
      },
      {
        id: "altri",
        title: { it: "Altri trattamenti", en: "Other treatments" },
        keys: ["laserAntalgica", "laserRoncopatia", "scleroterapia"],
      },
    ],
  },
  {
    id: "chirurgia",
    title: { it: "Chirurgia estetica", en: "Aesthetic surgery" },
    zones: [
      {
        id: "chirurgia-volto",
        title: {
          it: "Chirurgia del volto e del collo",
          en: "Face and neck surgery",
        },
        keys: [
          "blefaroSuperiore",
          "blefaroLaser",
          "blefaroTranscongiuntivale",
          "rinosettoplastica",
          "turbinati",
          "puntaNaso",
          "liftingVolto",
          "miniLiftingVolto",
          "liftingCollo",
          "browLift",
          "cantopessi",
          "labioplasticaCheiloplastica",
          "malaroplastica",
          "mentoplastica",
          "otoplastica",
          "lobiAuricolari",
          "contornoMandibolare",
        ],
      },
      {
        id: "chirurgia-capelli",
        title: { it: "Chirurgia dei capelli", en: "Hair surgery" },
        keys: ["autotrapiantoStrip", "autotrapiantoFue", "biofibre"],
      },
      {
        id: "chirurgia-seno",
        title: { it: "Chirurgia del seno", en: "Breast surgery" },
        keys: [
          "mastoplastica",
          "mastopessi",
          "ginecomastia",
          "capezzoli",
          "neoformazioniMammarie",
          "simmetrizzazione",
        ],
      },
      {
        id: "chirurgia-corpo",
        title: { it: "Chirurgia del corpo", en: "Body surgery" },
        keys: [
          "liposcultura",
          "laserLipolisi",
          "brachioplastica",
          "torsoplastica",
          "addominoplastica",
          "rimodellamentoGlutei",
          "gluteoplastica",
          "lipofilling",
          "flebologia",
          "filiChirurgici",
        ],
      },
      {
        id: "chirurgia-intimita",
        title: { it: "Chirurgia dell’intimità", en: "Intimate surgery" },
        keys: [
          "labioplasticaVaginale",
          "vaginalTightening",
          "rinfoltimentoPubico",
          "scrotoplastica",
        ],
      },
      {
        id: "piccola-chirurgia",
        title: { it: "Piccola chirurgia", en: "Minor surgery" },
        keys: [
          "cistiIstologico",
          "neiIstologico",
          "neoformazioniIstologico",
          "granulomiIlt",
          "revisioneCicatrici",
        ],
      },
    ],
  },
];

/** Cornice della sezione. */
export const directoryCopy = {
  kicker: { it: "Elenco completo", en: "Full list" },
  title: {
    it: "Tutti i trattamenti, per zona",
    en: "All treatments, by area",
  },
  lead: {
    it: "Le procedure eseguite in studio, raggruppate come sul listino. Dove esiste una scheda dedicata il nome è un link; l’indicazione si stabilisce in visita, caso per caso.",
    en: "The procedures performed at the practice, grouped as in the practice list. Where a dedicated page exists the name is a link; the indication is established during the consultation, case by case.",
  },
};
