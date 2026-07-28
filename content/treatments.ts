/**
 * I 19 trattamenti: dati e testi, italiano e inglese affiancati.
 *
 * L'italiano viene dal sito attuale del cliente — sono parole sue, non inventate —
 * con dieci passaggi riscritti in forma informativa perché contenevano primati,
 * comparativi, percentuali di risultato o promesse, che la L. 145/2018 (art. 1
 * commi 525-536) e l'art. 56 del Codice Deontologico FNOMCeO escludono.
 * Ogni modifica è elencata in `drrob-redesign/CORREZIONI-REGISTRO.md`, da far
 * approvare al cliente. Il testo originale sta in `_src/copy-pulito.json`.
 *
 * Regola per chi aggiunge o modifica: si descrive **che cos'è** un trattamento e
 * **come si svolge**, mai quanto sia efficace. Niente prezzi, prima/dopo,
 * recensioni, percentuali, superlativi, confronti con altri prodotti.
 */

import type { Localized } from "@/lib/i18n";

export type Area = "medicina" | "chirurgia" | "tecnologie";

export const AREA_LABEL: Record<Area, Localized<string>> = {
  medicina: { it: "Medicina estetica", en: "Aesthetic medicine" },
  chirurgia: { it: "Chirurgia estetica", en: "Aesthetic surgery" },
  tecnologie: { it: "Advanced Beauty Technology", en: "Advanced Beauty Technology" },
};

export type Treatment = {
  /** Slug tradotto: i marchi restano uguali, i descrittivi cambiano per il posizionamento. */
  slug: Localized<string>;
  area: Area;
  title: Localized<string>;
  /** Una riga, per la card dell'indice e per la meta description. */
  summary: Localized<string>;
  /** Corpo della scheda, un elemento per paragrafo. */
  body: Localized<string[]>;
  /** Nome canonico dell'immagine quadrata e dell'apertura 3:2, senza suffisso. */
  image: string;
  open: string;
  alt: Localized<string>;
  /** Presente nel carosello della home: l'ordine è quello dell'array. */
  inHome?: boolean;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: { it: "endolift", en: "endolift" },
    area: "medicina",
    title: { it: "Endolift®", en: "Endolift®" },
    summary: {
      it: "Laser a fibra ottica per il ricompattamento cutaneo di viso, collo e corpo. Protocollo creato dal Dr. Dell’Avanzato nel 2005.",
      en: "Optical-fibre laser for skin tightening of the face, neck and body. A protocol created by Dr Dell’Avanzato in 2005.",
    },
    body: {
      it: [
        "Endolift, protocollo personalmente creato e perfezionato dal Dr. Dell’Avanzato — per questo anche denominato «Metodica Dell’Avanzato» o «Dell’Avanzato Technique» — è un trattamento di medicina estetica che utilizza la tecnologia laser per ricompattare la pelle, con un effetto chiamato skin tightening.",
        "La metodica è indicata per le zone del viso, del collo e del corpo dove è presente lassità cutanea: stimola la contrazione e la produzione delle fibre di collagene, la proteina che sostiene l’epidermide.",
        "Endolift utilizza un laser connesso a una sottilissima fibra ottica. La procedura consiste nell’inserire sottocute, nella zona dell’ipoderma superficiale, una fibra ottica poco più grande di un capello.",
        "Le zone trattabili sono: palpebre inferiori, bordo mandibolare, sottomento — il cosiddetto «doppio mento» — e collo, interno braccia, interno cosce, ginocchia, addome e caviglie.",
      ],
      en: [
        "Endolift, a protocol personally created and refined by Dr Dell’Avanzato — and for this reason also known as the «Dell’Avanzato Method» or «Dell’Avanzato Technique» — is an aesthetic medicine treatment that uses laser technology to tighten the skin, an effect known as skin tightening.",
        "The method is indicated for areas of the face, neck and body where skin laxity is present: it stimulates the contraction and production of collagen fibres, the protein that supports the epidermis.",
        "Endolift uses a laser connected to a very fine optical fibre. The procedure involves inserting a fibre barely thicker than a hair under the skin, into the superficial hypodermis.",
        "Treatable areas are: lower eyelids, jawline, submental region — the so-called «double chin» — and neck, inner arms, inner thighs, knees, abdomen and ankles.",
      ],
    },
    image: "sq-endolift",
    open: "open-endolift",
    alt: {
      it: "Trattamento Endolift® con fibra laser sul volto",
      en: "Endolift® treatment with laser fibre on the face",
    },
    inHome: true,
  },
  {
    slug: { it: "ultherapy", en: "ultherapy" },
    area: "medicina",
    title: { it: "Ultherapy®", en: "Ultherapy®" },
    summary: {
      it: "Ultrasuoni microfocalizzati per il lifting non chirurgico di sopracciglio, collo e décolleté.",
      en: "Micro-focused ultrasound for non-surgical lifting of the brow, neck and décolleté.",
    },
    body: {
      it: [
        "Ultherapy® è un trattamento ad ultrasuoni microfocalizzati, non chirurgico, che contrasta gli effetti del tempo sulla pelle. È un trattamento non invasivo approvato dalla FDA statunitense per il sollevamento graduale del sopracciglio, per il lifting del collo e della zona sottomentoniera e per il miglioramento delle rughe del décolleté.",
        "Il trattamento può essere effettuato anche per il lifting non chirurgico di braccia, cosce, glutei e addome interni.",
        "È un’alternativa per chi non intende sottoporsi a un intervento chirurgico, o per chi desidera estendere gli effetti di trattamenti di medicina estetica e chirurgia già eseguiti. I risultati si osservano nei 2-3 mesi successivi al trattamento e si mantengono indicativamente per un anno, con una sola seduta.",
      ],
      en: [
        "Ultherapy® is a non-surgical micro-focused ultrasound treatment that counters the effects of time on the skin. It is a non-invasive treatment approved by the US FDA for the gradual lifting of the brow, for lifting the neck and submental area, and for improving décolleté wrinkles.",
        "The treatment can also be used for non-surgical lifting of the arms, thighs, buttocks and inner abdomen.",
        "It is an option for those who do not wish to undergo surgery, or who want to extend the effects of aesthetic medicine and surgery already performed. Results are observed in the 2-3 months following the treatment and are maintained for approximately one year, with a single session.",
      ],
    },
    image: "sq-ultherapy",
    open: "open-ultherapy",
    alt: {
      it: "Trattamento Ultherapy® con manipolo a ultrasuoni",
      en: "Ultherapy® treatment with ultrasound handpiece",
    },
    inHome: true,
  },
  {
    slug: { it: "filler", en: "dermal-fillers" },
    area: "medicina",
    title: { it: "Filler", en: "Dermal fillers" },
    summary: {
      it: "Acido ialuronico per volumi, contorno delle labbra, rughe del viso e del collo.",
      en: "Hyaluronic acid for volume, lip contour, and wrinkles of the face and neck.",
    },
    body: {
      it: [
        "Il filler a base di acido ialuronico viene impiegato per la definizione del contorno e l’aumento delle labbra, per la riduzione delle rughe del viso e del collo, per ripristinare il volume di zigomi, mento e guance, per il trattamento delle cicatrici e per rimodellare naso, mani, glutei e polpacci.",
      ],
      en: [
        "Hyaluronic acid fillers are used to define the contour and increase the volume of the lips, to reduce wrinkles of the face and neck, to restore volume to the cheekbones, chin and cheeks, to treat scars, and to reshape the nose, hands, buttocks and calves.",
      ],
    },
    image: "sq-filler",
    open: "open-filler",
    alt: {
      it: "Siringa preriempita per trattamento con filler",
      en: "Pre-filled syringe for filler treatment",
    },
    inHome: true,
  },
  {
    slug: { it: "tossina-botulinica", en: "botulinum-toxin" },
    area: "medicina",
    title: { it: "Tossina botulinica", en: "Botulinum toxin" },
    summary: {
      it: "Riduzione delle rughe di viso e collo; trattamento dell’iperidrosi di mani, ascelle e piedi.",
      en: "Reduction of facial and neck wrinkles; treatment of hyperhidrosis of hands, underarms and feet.",
    },
    body: {
      it: [
        "La tossina botulinica viene utilizzata per ridurre le rughe sul viso e sul collo. Può inoltre essere impiegata per contenere la produzione di sudore eccessivo — iperidrosi — nelle ghiandole sudoripare di mani, ascelle e piedi, una condizione che ha spesso un impatto sociale e psicologico significativo.",
      ],
      en: [
        "Botulinum toxin is used to reduce wrinkles on the face and neck. It can also be used to limit excessive sweating — hyperhidrosis — in the sweat glands of the hands, underarms and feet, a condition that often has a significant social and psychological impact.",
      ],
    },
    image: "sq-botulino",
    open: "open-botulino",
    alt: {
      it: "Preparazione di un trattamento con tossina botulinica",
      en: "Preparation of a botulinum toxin treatment",
    },
    inHome: true,
  },
  {
    slug: { it: "profhilo", en: "profhilo" },
    area: "medicina",
    title: { it: "Profhilo®", en: "Profhilo®" },
    summary: {
      it: "Bio-rigenerazione cutanea con acido ialuronico per lassità di volto e collo.",
      en: "Skin bio-remodelling with hyaluronic acid for laxity of the face and neck.",
    },
    body: {
      it: [
        "Profhilo® è un tipo di acido ialuronico impiegato per trattare la lassità della pelle, prevalentemente di volto e collo, attraverso la bio-rigenerazione cutanea: migliora la texture e riduce le rughe sottili, aumentando idratazione e tono attraverso la produzione di elastina e collagene.",
        "Con Profhilo® sono necessarie cinque aree d’infiltrazione per trattare ciascun viso. Dopo la seconda seduta si osservano idratazione, luminosità e compattezza della pelle.",
      ],
      en: [
        "Profhilo® is a type of hyaluronic acid used to treat skin laxity, mainly of the face and neck, through skin bio-remodelling: it improves texture and reduces fine wrinkles, increasing hydration and tone through the production of elastin and collagen.",
        "Profhilo® requires five injection points to treat each face. After the second session, hydration, radiance and firmness of the skin are observed.",
      ],
    },
    image: "sq-profhilo",
    open: "open-profhilo",
    alt: {
      it: "Trattamento di bioristrutturazione con Profhilo®",
      en: "Bioremodelling treatment with Profhilo®",
    },
    inHome: true,
  },
  {
    slug: { it: "fili-rivitalizzanti", en: "revitalising-threads" },
    area: "medicina",
    title: {
      it: "Fili rivitalizzanti e liftanti",
      en: "Revitalising and lifting threads",
    },
    summary: {
      it: "Fili extra-sottili riassorbibili, posizionati sottocute in un’unica sessione.",
      en: "Extra-fine absorbable threads, placed subcutaneously in a single session.",
    },
    body: {
      it: [
        "I fili rivitalizzanti e i fili liftanti extra-sottili in poly (L-lactide-co-E-caprolactone) sono posizionati sottocute in un’unica sessione, con o senza anestesia locale, con una tecnica indolore.",
        "Consentono un effetto lifting rassodante e ricompattante. Il tempo medio di riassorbimento dei fili è di 15-18 mesi.",
      ],
      en: [
        "Revitalising and extra-fine lifting threads in poly (L-lactide-co-E-caprolactone) are placed subcutaneously in a single session, with or without local anaesthesia, using a painless technique.",
        "They provide a firming and tightening lifting effect. The average absorption time of the threads is 15-18 months.",
      ],
    },
    image: "sq-fili",
    open: "open-fili",
    alt: {
      it: "Trattamento con fili rivitalizzanti",
      en: "Treatment with revitalising threads",
    },
  },
  {
    slug: { it: "liposcultura-laser", en: "laser-liposculpture" },
    area: "chirurgia",
    title: { it: "Liposcultura laser", en: "Laser liposculpture" },
    summary: {
      it: "Rimodellamento del profilo corporeo con laser, sulle adiposità localizzate.",
      en: "Body contouring with laser, on localised fat deposits.",
    },
    body: {
      it: [
        "La liposcultura laser — o laserliposuzione — e la laserlipolisi sono tecniche studiate per rimodellare il profilo corporeo eliminando i depositi di tessuto adiposo in eccesso.",
        "Il laser consente di trattare le adiposità localizzate agendo sugli adipociti e stimolando al tempo stesso la neocollagenesi, con conseguente retrazione cutanea.",
        "Nel 2006 la FDA statunitense ha riconosciuto al laser la capacità di distruzione selettiva del grasso con retrazione della pelle.",
        "Le zone più trattate sono addome, fianchi, glutei, cosce, culotte de cheval, ginocchia, caviglie, braccia, mammella maschile e sottomento.",
      ],
      en: [
        "Laser liposculpture — or laser liposuction — and laser lipolysis are techniques designed to reshape the body contour by removing excess fat deposits.",
        "The laser makes it possible to treat localised fat deposits by acting on the adipocytes while stimulating neocollagenesis, with consequent skin retraction.",
        "In 2006 the US FDA recognised the laser’s capacity for selective fat destruction with skin retraction.",
        "The most commonly treated areas are the abdomen, flanks, buttocks, thighs, culotte de cheval, knees, ankles, arms, male breast and submental region.",
      ],
    },
    image: "sq-liposcultura",
    open: "open-liposcultura",
    alt: {
      it: "Liposcultura laser assistita in sala operatoria",
      en: "Laser-assisted liposculpture in the operating room",
    },
    inHome: true,
  },
  {
    slug: { it: "mastoplastica-additiva", en: "breast-augmentation" },
    area: "chirurgia",
    title: { it: "Mastoplastica additiva", en: "Breast augmentation" },
    summary: {
      it: "Intervento chirurgico per aumentare il volume delle mammelle e correggerne asimmetrie.",
      en: "Surgical procedure to increase breast volume and correct asymmetries.",
    },
    body: {
      it: [
        "L’intervento di mastoplastica additiva è il trattamento chirurgico per aumentare il volume delle mammelle e correggerne difetti e asimmetrie.",
        "La procedura è indicata per rendere più proporzionato un seno piccolo, per correggere un’asimmetria fra le due mammelle, o per restituire forma e volume a un seno che appare svuotato in seguito a una perdita di peso importante o all’allattamento.",
        "Consiste nell’inserimento di protesi mammarie in sede sottoghiandolare, sottomuscolare o dual plane, attraverso un accesso periareolare, dal solco mammario o dal cavo ascellare. Forme e dimensioni vengono scelte in base alle caratteristiche e alle esigenze di ogni paziente.",
      ],
      en: [
        "Breast augmentation is the surgical treatment used to increase breast volume and to correct defects and asymmetries.",
        "The procedure is indicated to give better proportion to a small breast, to correct asymmetry between the two breasts, or to restore shape and volume to a breast that appears deflated following significant weight loss or breastfeeding.",
        "It involves the insertion of breast implants in a subglandular, submuscular or dual-plane position, through a periareolar, inframammary or axillary approach. Shapes and sizes are chosen according to each patient’s characteristics and requirements.",
      ],
    },
    image: "sq-mastoplastica",
    open: "open-mastoplastica",
    alt: {
      it: "Immagine di riferimento per la mastoplastica additiva",
      en: "Reference image for breast augmentation",
    },
  },
  {
    slug: { it: "blefaroplastica-laser", en: "laser-blepharoplasty" },
    area: "chirurgia",
    title: { it: "Blefaroplastica laser", en: "Laser blepharoplasty" },
    summary: {
      it: "Correzione degli inestetismi delle palpebre con tecnologia laser.",
      en: "Correction of eyelid imperfections using laser technology.",
    },
    body: {
      it: [
        "La blefaroplastica è un intervento che corregge gli inestetismi delle palpebre, con un effetto di ringiovanimento dello sguardo.",
        "Interviene su difetti legati alla perdita di compattezza dei tessuti che si verifica naturalmente con l’avanzare dell’età, come le palpebre cadenti e l’accentuazione di gonfiori o borse intorno agli occhi.",
        "In passato l’intervento veniva eseguito chirurgicamente; oggi è possibile ricorrere alla tecnologia laser, meno invasiva e con tempi di recupero molto ridotti. Il fascio di luce concentrata provoca la contrazione della pelle e stimola la neocollagenesi.",
      ],
      en: [
        "Blepharoplasty is a procedure that corrects eyelid imperfections, with a rejuvenating effect on the gaze.",
        "It addresses defects linked to the loss of tissue firmness that occurs naturally with age, such as drooping eyelids and the accentuation of puffiness or bags around the eyes.",
        "The procedure was formerly performed surgically; today laser technology can be used, which is less invasive and involves much shorter recovery times. The concentrated light beam causes skin contraction and stimulates neocollagenesis.",
      ],
    },
    image: "sq-blefaroplastica",
    open: "open-blefaroplastica",
    alt: {
      it: "Regione perioculare, area della blefaroplastica laser",
      en: "Periocular region, the area treated by laser blepharoplasty",
    },
    inHome: true,
  },
  {
    slug: { it: "rinosettoplastica", en: "septorhinoplasty" },
    area: "chirurgia",
    title: { it: "Rinosettoplastica", en: "Septorhinoplasty" },
    summary: {
      it: "Modifica di forma e dimensioni del naso; correzione delle deviazioni del setto.",
      en: "Modification of the shape and size of the nose; correction of septal deviation.",
    },
    body: {
      it: [
        "La rinosettoplastica è l’intervento chirurgico che modifica forma e dimensioni del naso per renderlo più armonioso con il resto del volto. Viene eseguito anche per correggere deviazioni del setto e migliorare l’attività respiratoria.",
        "Consente di aumentare o diminuire le dimensioni del naso, correggere difetti legati alla forma — un naso troppo largo, una gobba sul dorso — o modificare l’ampiezza delle narici e l’angolo fra fronte e naso o fra naso e labbro superiore.",
      ],
      en: [
        "Septorhinoplasty is the surgical procedure that modifies the shape and size of the nose to bring it into harmony with the rest of the face. It is also performed to correct septal deviation and improve breathing.",
        "It makes it possible to increase or reduce the size of the nose, to correct defects of shape — a nose that is too wide, a hump on the bridge — or to modify the width of the nostrils and the angle between forehead and nose or between nose and upper lip.",
      ],
    },
    image: "sq-rinosettoplastica",
    open: "open-rinosettoplastica",
    alt: {
      it: "Profilo del viso, area della rinosettoplastica",
      en: "Facial profile, the area treated by septorhinoplasty",
    },
  },
  {
    slug: { it: "cellfina", en: "cellfina" },
    area: "chirurgia",
    title: { it: "Cellfina®", en: "Cellfina®" },
    summary: {
      it: "Subcision guidata sui setti fibrosi responsabili dell’aspetto a buccia d’arancia.",
      en: "Guided subcision of the fibrous septa responsible for the orange-peel appearance.",
    },
    body: {
      it: [
        "Cellfina® è un protocollo approvato dalla FDA per il trattamento a lungo termine della cellulite.",
        "Agisce sulla causa strutturale dell’inestetismo, recidendo in maniera precisa e controllata i setti fibrosi retraenti responsabili del caratteristico aspetto della pelle a buccia d’arancia. Con la recisione dei setti la pelle si distende.",
        "Il trattamento richiede una sola seduta e viene eseguito su cosce e glutei.",
      ],
      en: [
        "Cellfina® is a protocol approved by the FDA for the long-term treatment of cellulite.",
        "It acts on the structural cause of the imperfection, precisely and controllably releasing the retracting fibrous septa responsible for the characteristic orange-peel appearance of the skin. Once the septa are released, the skin flattens.",
        "The treatment requires a single session and is performed on the thighs and buttocks.",
      ],
    },
    image: "sq-cellfina",
    open: "open-cellfina",
    alt: {
      it: "Trattamento Cellfina® sugli inestetismi della cellulite",
      en: "Cellfina® treatment for the appearance of cellulite",
    },
    inHome: true,
  },
  {
    slug: { it: "face-rebuilding", en: "face-rebuilding" },
    area: "tecnologie",
    title: { it: "Face Rebuilding", en: "Face Rebuilding" },
    summary: {
      it: "Endolift® e Ultherapy® combinati nella stessa seduta, per agire a profondità diverse.",
      en: "Endolift® and Ultherapy® combined in a single session, acting at different depths.",
    },
    body: {
      it: [
        "Il Face Rebuilding è un protocollo di ringiovanimento del volto basato sul trattamento combinato di Endolift® e Ultherapy® nella stessa seduta.",
        "Con l’avanzare dell’età i segni principali che appaiono sul volto sono le rughe d’espressione e le lassità muscolo-cutanee. La combinazione dei due trattamenti permette di agire a profondità diverse: Endolift® agisce con un effetto tightening sulla pelle, riducendo se necessario gli eccessi di grasso, mentre Ultherapy® agisce a livello più profondo, fino alla fascia muscolare. Altre metodiche possono essere associate in base alle necessità individuali.",
      ],
      en: [
        "Face Rebuilding is a facial rejuvenation protocol based on the combined treatment of Endolift® and Ultherapy® in the same session.",
        "With age, the main signs that appear on the face are expression lines and musculocutaneous laxity. Combining the two treatments makes it possible to act at different depths: Endolift® produces a tightening effect on the skin, reducing excess fat where necessary, while Ultherapy® acts more deeply, down to the muscular fascia. Other methods may be combined according to individual needs.",
      ],
    },
    image: "sq-face-rebuilding",
    open: "open-face-rebuilding",
    alt: {
      it: "Immagine di riferimento per il protocollo Face Rebuilding",
      en: "Reference image for the Face Rebuilding protocol",
    },
  },
  {
    slug: { it: "body-reshaping", en: "body-reshaping" },
    area: "tecnologie",
    title: { it: "Body Reshaping", en: "Body Reshaping" },
    summary: {
      it: "Endolift® applicato alle aree del corpo con maggiore lassità cutanea.",
      en: "Endolift® applied to the areas of the body with greater skin laxity.",
    },
    body: {
      it: [
        "Endolift® permette di retrarre la pelle e rimodellare il derma, attivando la produzione di collagene e stimolando la neo-angiogenesi nelle aree di maggiore lassità cutanea del corpo, come addome, interno braccia, interno cosce e glutei.",
      ],
      en: [
        "Endolift® makes it possible to retract the skin and remodel the dermis, activating collagen production and stimulating neo-angiogenesis in the areas of the body with greater skin laxity, such as the abdomen, inner arms, inner thighs and buttocks.",
      ],
    },
    image: "sq-body-reshaping",
    open: "open-body-reshaping",
    alt: {
      it: "Immagine di riferimento per il protocollo Body Reshaping",
      en: "Reference image for the Body Reshaping protocol",
    },
  },
  {
    slug: { it: "bio-nutri-knees", en: "bio-nutri-knees" },
    area: "tecnologie",
    title: { it: "Bio Nutri Knees", en: "Bio Nutri Knees" },
    summary: {
      it: "Il protocollo Bio Nutri Lift applicato all’area sopra il ginocchio.",
      en: "The Bio Nutri Lift protocol applied to the area above the knee.",
    },
    body: {
      it: [
        "Il protocollo Bio Nutri Knees è il trattamento Bio Nutri Lift applicato alle ginocchia, un’area spesso poco considerata ma molto sentita da molte pazienti.",
        "È pensato per trattare rughe e volumi nell’area sopra il ginocchio. Prevede l’utilizzo di due prodotti: un acido ialuronico debolmente reticolato, che leviga la superficie delle rughe con un effetto lifting immediato, e una soluzione poli-rivitalizzante, che stimola nel derma la neo-produzione di collagene ed elastina.",
      ],
      en: [
        "The Bio Nutri Knees protocol is the Bio Nutri Lift treatment applied to the knees, an area that is often overlooked but matters greatly to many patients.",
        "It is designed to treat wrinkles and volume in the area above the knee. It uses two products: a weakly cross-linked hyaluronic acid, which smooths the surface of wrinkles with an immediate lifting effect, and a poly-revitalising solution, which stimulates the new production of collagen and elastin in the dermis.",
      ],
    },
    image: "sq-bio-nutri-knees",
    open: "open-bio-nutri-knees",
    alt: {
      it: "Area del ginocchio, trattata dal protocollo Bio Nutri Knees",
      en: "The knee area, treated by the Bio Nutri Knees protocol",
    },
  },
  {
    slug: { it: "teosyalpen", en: "teosyalpen" },
    area: "tecnologie",
    title: { it: "TeosyalPen®", en: "TeosyalPen®" },
    summary: {
      it: "Device elettronico per l’iniezione di gel di acido ialuronico a flusso e velocità costanti.",
      en: "Electronic device for injecting hyaluronic acid gels at constant flow and speed.",
    },
    body: {
      it: [
        "Il comfort del paziente durante i trattamenti medico-estetici è importante. La percezione del dolore, o una sensazione di fastidio, può provocare ansia, specialmente in chi si sottopone per la prima volta a un trattamento iniettivo con acido ialuronico.",
        "TeosyalPen® è un device elettronico cordless, simile a una penna, che grazie alla sua tecnologia brevettata permette al medico di mantenere, durante l’applicazione dei gel a base di acido ialuronico — filler e biorivitalizzanti — un flusso omogeneo e una velocità costante, senza picchi di pressione.",
      ],
      en: [
        "Patient comfort during aesthetic medical treatments matters. The perception of pain, or a sensation of discomfort, can cause anxiety, especially for those undergoing an injectable hyaluronic acid treatment for the first time.",
        "TeosyalPen® is a cordless electronic device, similar to a pen, whose patented technology allows the practitioner to maintain a uniform flow and a constant speed, without pressure peaks, while applying hyaluronic acid gels — fillers and bio-revitalisers.",
      ],
    },
    image: "sq-teosyalpen",
    open: "open-teosyalpen",
    alt: {
      it: "Device TeosyalPen® per iniezioni di acido ialuronico",
      en: "TeosyalPen® device for hyaluronic acid injections",
    },
  },
  {
    slug: { it: "global-buttock-remodeling", en: "global-buttock-remodeling" },
    area: "tecnologie",
    title: { it: "Global Buttock Remodeling", en: "Global Buttock Remodeling" },
    summary: {
      it: "Endolift®, Ultherapy® e Cellfina® combinati sul rimodellamento di glutei e cosce posteriori.",
      en: "Endolift®, Ultherapy® and Cellfina® combined for remodelling the buttocks and posterior thighs.",
    },
    body: {
      it: [
        "Attraverso la combinazione di tre metodiche è possibile effettuare un ringiovanimento globale dei glutei: Endolift® (laser con fibra ottica), Ultherapy® (ultrasuoni microfocalizzati con sistema di visione) e Cellfina® (subcision guidata).",
        "Dopo che con Endolift® è stata trattata e rimodellata la pelle dei glutei in superficie, si procede con una seduta di ultrasuoni microfocalizzati con sistema di visione, che raggiungono il derma medio e profondo verso la fascia del muscolo. Successivamente viene eseguita una seduta con Cellfina®, trattamento mini-invasivo approvato dalla FDA per gli inestetismi della cellulite, completando il rimodellamento di glutei e cosce posteriori.",
      ],
      en: [
        "By combining three methods it is possible to carry out a global rejuvenation of the buttocks: Endolift® (optical-fibre laser), Ultherapy® (micro-focused ultrasound with visualisation) and Cellfina® (guided subcision).",
        "Once the surface skin of the buttocks has been treated and remodelled with Endolift®, a session of micro-focused ultrasound with visualisation follows, reaching the mid and deep dermis towards the muscular fascia. A Cellfina® session is then performed — a minimally invasive treatment approved by the FDA for the appearance of cellulite — completing the remodelling of the buttocks and posterior thighs.",
      ],
    },
    image: "sq-buttock",
    open: "open-buttock",
    alt: {
      it: "Immagine di riferimento per il rimodellamento dei glutei",
      en: "Reference image for buttock remodelling",
    },
  },
  {
    slug: { it: "nanosoft", en: "nanosoft" },
    area: "tecnologie",
    title: { it: "Nanosoft®", en: "Nanosoft®" },
    summary: {
      it: "Microaghi per il trattamento intradermico superficiale di palpebre, contorno bocca e collo.",
      en: "Microneedles for superficial intradermal treatment of eyelids, mouth contour and neck.",
    },
    body: {
      it: [
        "I segni del tempo su palpebre inferiori e superiori, contorno bocca e collo sono spesso quelli più sentiti dai pazienti. La pelle, in queste zone, è molto sottile e richiede trattamenti specifici e poco aggressivi.",
        "Per rivitalizzare la pelle occorre trattare lo strato intradermico più superficiale, dove si trovano i fibroblasti e dove va stimolata la produzione di nuovo collagene ed elastina: la precisione dell’iniezione è quindi determinante, perché non deve essere né troppo profonda né troppo superficiale. Il dispositivo iniettivo intradermico presenta tre microaghi di forma piramidale da 0,6 mm in silicone microcristallizzato, con un calibro di circa 36G, ed è applicabile a qualsiasi siringa.",
      ],
      en: [
        "The signs of time on the lower and upper eyelids, the mouth contour and the neck are often those patients feel most. The skin in these areas is very thin and requires specific, minimally aggressive treatments.",
        "To revitalise the skin, the most superficial intradermal layer must be treated, where the fibroblasts are and where the production of new collagen and elastin needs to be stimulated: the precision of the injection is therefore decisive, as it must be neither too deep nor too superficial. The intradermal injection device has three pyramid-shaped 0.6 mm microneedles in microcrystallised silicone, with a gauge of about 36G, and fits any syringe.",
      ],
    },
    image: "sq-nanosoft",
    open: "open-nanosoft",
    alt: {
      it: "Dispositivo Nanosoft® a microaghi",
      en: "Nanosoft® microneedle device",
    },
  },
  {
    slug: { it: "ladylift", en: "ladylift" },
    area: "tecnologie",
    title: { it: "LadyLift®", en: "LadyLift®" },
    summary: {
      it: "Laser per la rigenerazione della mucosa vaginale.",
      en: "Laser for the regeneration of the vaginal mucosa.",
    },
    body: {
      it: [
        "Il protocollo LadyLift® è un trattamento per la rigenerazione della mucosa vaginale. Età e stress muscolare causano un processo atrofico all’interno della vagina, che può portare a secchezza e difficoltà sessuali, prurito e bruciore, incontinenza urinaria e lassità tissutale, con perdita del tono della mucosa.",
        "LadyLift® utilizza la tecnologia laser per stimolare la neo-produzione di collagene e il rinnovamento cellulare a livello del tessuto epiteliale e connettivo, ripristinando compattezza, flessibilità e idratazione della mucosa.",
      ],
      en: [
        "The LadyLift® protocol is a treatment for the regeneration of the vaginal mucosa. Age and muscular stress cause an atrophic process within the vagina, which can lead to dryness and sexual difficulty, itching and burning, urinary incontinence and tissue laxity, with a loss of mucosal tone.",
        "LadyLift® uses laser technology to stimulate the new production of collagen and cellular renewal in the epithelial and connective tissue, restoring firmness, flexibility and hydration of the mucosa.",
      ],
    },
    image: "sq-ladylift",
    open: "open-ladylift",
    alt: {
      it: "Immagine di riferimento per il protocollo LadyLift®",
      en: "Reference image for the LadyLift® protocol",
    },
  },
  {
    slug: { it: "permalip", en: "permalip" },
    area: "tecnologie",
    title: { it: "Permalip®", en: "Permalip®" },
    summary: {
      it: "Protesi labiale in elastomero di silicone, alternativa al filler e reversibile.",
      en: "Silicone elastomer lip implant, an alternative to fillers and reversible.",
    },
    body: {
      it: [
        "Permalip® è un’alternativa ai filler impiegati per l’aumento del volume delle labbra, indicata soprattutto in caso di ipoplasia marcata o di scarsa durata dei filler tradizionali.",
        "Il trattamento, in anestesia locale, prevede l’inserimento di una piccola protesi composta da un elastomero liscio in silicone, dello stesso tipo delle protesi mammarie. La protesi è disponibile in tre volumi e tre lunghezze. L’effetto attenua le rughe sopra al labbro superiore; il rimodellamento è stabile nel tempo e reversibile in qualsiasi momento.",
      ],
      en: [
        "Permalip® is an alternative to the fillers used to increase lip volume, indicated in particular in cases of marked hypoplasia or where conventional fillers are short-lasting.",
        "The treatment, under local anaesthesia, involves inserting a small implant made of a smooth silicone elastomer, of the same type as breast implants. The implant is available in three volumes and three lengths. The effect softens the lines above the upper lip; the remodelling is stable over time and reversible at any moment.",
      ],
    },
    image: "sq-permalip",
    open: "open-permalip",
    alt: {
      it: "Immagine di riferimento per il trattamento Permalip®",
      en: "Reference image for the Permalip® treatment",
    },
  },
];

/** Gli otto del carosello in home, nell'ordine in cui compaiono. */
export const HOME_TREATMENTS = TREATMENTS.filter((t) => t.inHome);

/** Raggruppamento per area, per l'indice dei trattamenti. */
export const AREAS: Area[] = ["medicina", "chirurgia", "tecnologie"];

export function byArea(area: Area): Treatment[] {
  return TREATMENTS.filter((t) => t.area === area);
}

export function bySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug.it === slug || t.slug.en === slug);
}
