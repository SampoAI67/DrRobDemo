import type { L10n, Locale } from "@/lib/i18n";

export type Area = "medicina" | "chirurgia" | "technology";

export interface Treatment {
  id: string;
  area: Area;
  /** id dell'immagine in content/images.json */
  image: string;
  title: L10n;
  /** riassunto di una riga, usato nelle card e nelle intestazioni di accordion */
  lead: L10n;
  body: Record<Locale, string[]>;
  /** ha una pagina di approfondimento dedicata */
  flagship?: boolean;
}

/**
 * Testi italiani ripresi dalle pagine "Medicina Estetica", "Chirurgia Estetica"
 * e "Advanced Beauty Technology" del sito originale (2026-07-25), riorganizzati
 * ma non riscritti: nessuna affermazione clinica è stata aggiunta o modificata.
 * L'inglese è traduzione fedele, in registro informativo.
 */
export const treatments: Treatment[] = [
  // ---------------------------------------------------------------- medicina
  {
    id: "ultherapy",
    area: "medicina",
    image: "t-ultherapy",
    flagship: true,
    title: { it: "Lifting non chirurgico Ultherapy®", en: "Ultherapy® non-surgical lifting" },
    lead: {
      it: "Ultrasuoni microfocalizzati sotto guida ecografica, in un'unica seduta.",
      en: "Micro-focused ultrasound under ultrasound guidance, in a single session.",
    },
    body: {
      it: [
        "Ultherapy® è un trattamento ad ultrasuoni microfocalizzati sicuro e non chirurgico, che contrasta gli effetti del tempo sulla pelle. È il primo e unico trattamento non invasivo approvato dall'FDA americana per il sollevamento graduale del sopracciglio, per il lifting del collo e della zona sottomentoniera e per il miglioramento delle rughe del décolleté.",
        "Il trattamento può essere effettuato anche per il lifting non chirurgico di braccia, cosce, glutei e addome. È un'ottima alternativa soprattutto per chi non è pronto per un intervento chirurgico o per chi desidera estendere gli effetti della medicina estetica e della chirurgia.",
        "I risultati arrivano in 2-3 mesi dal trattamento e durano circa un anno, con una sola seduta.",
      ],
      en: [
        "Ultherapy® is a safe, non-surgical micro-focused ultrasound treatment that counters the effects of time on the skin. It is the first and only non-invasive treatment approved by the US FDA for gradual brow lifting, for lifting the neck and submental area and for improving décolletage wrinkles.",
        "The treatment can also be used for non-surgical lifting of the arms, thighs, buttocks and abdomen. It is a sound alternative above all for those who are not ready for surgery, or who wish to extend the effects of aesthetic medicine and surgery.",
        "Results appear two to three months after the treatment and last around a year, from a single session.",
      ],
    },
  },
  {
    id: "tossina-botulinica",
    area: "medicina",
    image: "t-botulino",
    title: { it: "Tossina botulinica", en: "Botulinum toxin" },
    lead: {
      it: "Rughe di viso e collo, bruxismo e iperidrosi.",
      en: "Facial and neck wrinkles, bruxism and hyperhidrosis.",
    },
    body: {
      it: [
        "La tossina botulinica viene utilizzata per ridurre le rughe sul viso e sul collo.",
        "Può anche essere usata per fermare la produzione di sudore eccessivo (iperidrosi) nelle ghiandole sudoripare di mani, ascelle e piedi, che spesso ha un impatto sociale e psicologico significativo.",
      ],
      en: [
        "Botulinum toxin is used to reduce wrinkles on the face and neck.",
        "It can also be used to stop excessive sweat production (hyperhidrosis) in the sweat glands of the hands, armpits and feet, which often has a significant social and psychological impact.",
      ],
    },
  },
  {
    id: "filler",
    area: "medicina",
    image: "t-filler",
    title: { it: "Filler a base di acido ialuronico", en: "Hyaluronic acid fillers" },
    lead: {
      it: "Volumi, contorni e proporzioni, senza stravolgere i lineamenti.",
      en: "Volume, contour and proportion, without distorting the features.",
    },
    body: {
      it: [
        "Il filler a base di acido ialuronico viene usato per la definizione del contorno e l'aumento delle labbra, la riduzione delle rughe del viso e del collo, per ripristinare il volume perduto di zigomi, mento e guance, per il trattamento delle cicatrici e per rimodellare naso, mani, glutei e polpacci.",
      ],
      en: [
        "Hyaluronic acid filler is used to define the lip contour and increase lip volume, to reduce wrinkles on the face and neck, to restore lost volume in the cheekbones, chin and cheeks, to treat scars and to reshape the nose, hands, buttocks and calves.",
      ],
    },
  },
  {
    id: "endolift",
    area: "medicina",
    image: "t-endolift",
    flagship: true,
    title: { it: "Endolift®", en: "Endolift®" },
    lead: {
      it: "La metodica laser sviluppata dal Dr. Dell'Avanzato dal 2005.",
      en: "The laser method developed by Dr Dell'Avanzato since 2005.",
    },
    body: {
      it: [
        "Endolift, protocollo personalmente creato e perfezionato dal Dr. Dell'Avanzato — per questo anche denominato «Metodica Dell'Avanzato» o «Dell'Avanzato Technique» — è uno dei trattamenti più innovativi ed efficaci nel campo della medicina estetica, che utilizza la tecnologia laser per ricompattare la pelle, con un effetto chiamato «skin tightening».",
        "La metodica è particolarmente adatta per quelle zone del viso, del collo e del corpo dove è presente lassità cutanea, stimolando la contrazione e la produzione delle fibre di collagene, la proteina più importante per il sostegno dell'epidermide.",
        "Endolift utilizza un laser connesso ad una sottilissima fibra ottica: la procedura consiste nell'inserire sottocute, nella zona dell'ipoderma superficiale, una fibra poco più grande di un capello. Le zone trattabili sono palpebre inferiori, bordo mandibolare, sottomento (il cosiddetto «doppio mento») e collo, interno braccia, interno cosce, ginocchia, addome e caviglie.",
      ],
      en: [
        "Endolift, a protocol personally created and refined by Dr Dell'Avanzato — which is why it is also known as the «Dell'Avanzato Method» or «Dell'Avanzato Technique» — is one of the most innovative and effective treatments in aesthetic medicine. It uses laser technology to firm the skin, an effect known as «skin tightening».",
        "The method is particularly suited to those areas of the face, neck and body where skin laxity is present, stimulating the contraction and production of collagen fibres, the most important protein supporting the epidermis.",
        "Endolift uses a laser connected to an extremely fine optical fibre: the procedure consists of inserting a fibre barely thicker than a hair beneath the skin, into the superficial hypodermis. The areas that can be treated are the lower eyelids, the jawline, the submental area (the so-called «double chin») and neck, inner arms, inner thighs, knees, abdomen and ankles.",
      ],
    },
  },
  {
    id: "fili",
    area: "medicina",
    image: "t-fili",
    title: {
      it: "Fili rivitalizzanti e fili liftanti",
      en: "Revitalising and lifting threads",
    },
    lead: {
      it: "Effetto lifting immediato, in un'unica sessione e senza accesso chirurgico.",
      en: "Immediate lifting effect, in a single session and without surgical access.",
    },
    body: {
      it: [
        "I fili rivitalizzanti e i fili liftanti extra-sottili in poly (L-lactide-co-ε-caprolactone) sono posizionati sottocute, in un'unica sessione, con o senza anestesia locale, con una tecnica indolore.",
        "Permettono di ottenere un immediato effetto lifting rassodante e ricompattante che ringiovanisce visibilmente e a lungo. Il tempo medio di riassorbimento dei fili è di 15-18 mesi, molto più lungo rispetto ai 6 mesi dei fili in PDO.",
      ],
      en: [
        "Extra-fine revitalising and lifting threads in poly (L-lactide-co-ε-caprolactone) are placed beneath the skin in a single session, with or without local anaesthesia, using a painless technique.",
        "They deliver an immediate firming and tightening lift that visibly rejuvenates for a long time. The average absorption time is 15-18 months, considerably longer than the six months of PDO threads.",
      ],
    },
  },
  {
    id: "profhilo",
    area: "medicina",
    image: "t-profhilo",
    title: { it: "Profhilo® e Profhilo Body®", en: "Profhilo® and Profhilo Body®" },
    lead: {
      it: "Bio-rigenerazione cutanea per texture, idratazione e tono.",
      en: "Skin bio-remodelling for texture, hydration and tone.",
    },
    body: {
      it: [
        "Profhilo® rappresenta un nuovo tipo di acido ialuronico, una delle ultime novità per trattare la lassità della pelle, prevalentemente del volto e del collo, attraverso la bio-rigenerazione cutanea: migliora la texture e riduce le rughe sottili, aumentando l'idratazione e il tono cutaneo attraverso la produzione di elastina e collagene.",
        "Con Profhilo® sono necessarie solo 5 aree d'infiltrazione per trattare ciascun viso, il che rende il trattamento molto semplice e confortevole. Già dopo la seconda seduta si può notare un'intensa idratazione della pelle, oltre a una maggiore luminosità e compattezza.",
      ],
      en: [
        "Profhilo® is a new type of hyaluronic acid, one of the most recent options for treating skin laxity, mainly of the face and neck, through skin bio-remodelling: it improves texture and reduces fine wrinkles, increasing hydration and skin tone through the production of elastin and collagen.",
        "Profhilo® requires only five injection points per face, which makes the treatment very simple and comfortable. Intense skin hydration, along with greater radiance and firmness, can already be seen after the second session.",
      ],
    },
  },

  // --------------------------------------------------------------- chirurgia
  {
    id: "liposcultura-laser",
    area: "chirurgia",
    image: "t-liposcultura",
    title: { it: "Liposcultura laser", en: "Laser liposculpture" },
    lead: {
      it: "Rimodellamento del profilo corporeo con distruzione selettiva del grasso.",
      en: "Body contouring with selective destruction of fat.",
    },
    body: {
      it: [
        "La liposcultura laser (o laserliposuzione) e la laserlipolisi sono tecniche studiate per rimodellare il profilo corporeo eliminando i depositi di tessuto adiposo in eccesso. Da alcuni anni il laser rappresenta la soluzione più efficace per il trattamento delle adiposità localizzate, perché permette di distruggere definitivamente gli adipociti e allo stesso tempo di migliorare tono e qualità della cute grazie alla stimolazione della neocollagenesi e alla conseguente retrazione cutanea.",
        "Nel 2006 la FDA americana ha stabilito che il laser, rispetto a tutte le altre energie presenti in commercio, permette la distruzione selettiva del grasso e la retrazione della pelle riducendo il rischio di cedimento cutaneo che si verifica con le altre tecniche.",
        "Le zone più trattate sono addome, fianchi, glutei, cosce, coulotte de cheval, ginocchia, caviglie, braccia, mammella maschile e sottomento.",
      ],
      en: [
        "Laser liposculpture (or laser liposuction) and laser lipolysis are techniques designed to reshape the body profile by removing excess fat deposits. For some years the laser has been the most effective solution for localised fat, because it permanently destroys adipocytes while improving skin tone and quality through the stimulation of neocollagenesis and the resulting skin retraction.",
        "In 2006 the US FDA established that the laser, compared with all other energies on the market, allows selective destruction of fat and skin retraction, reducing the risk of skin laxity that occurs with other techniques.",
        "The most frequently treated areas are the abdomen, flanks, buttocks, thighs, saddlebags, knees, ankles, arms, male breast and submental area.",
      ],
    },
  },
  {
    id: "mastoplastica-additiva",
    area: "chirurgia",
    image: "t-mastoplastica",
    title: { it: "Mastoplastica additiva", en: "Breast augmentation" },
    lead: {
      it: "Volume, proporzione e correzione delle asimmetrie.",
      en: "Volume, proportion and correction of asymmetries.",
    },
    body: {
      it: [
        "L'intervento di mastoplastica additiva è il trattamento chirurgico per aumentare il volume delle mammelle e correggerne difetti e asimmetrie, per migliorare l'armonia e le forme del corpo.",
        "La procedura è indicata per rendere più proporzionato e voluminoso un seno piccolo, per correggere un'eventuale asimmetria tra le due mammelle, oppure per restituire forma e volume a un seno che appare «svuotato» a causa di una perdita di peso importante o in seguito all'allattamento.",
        "Consiste nell'inserimento di protesi mammarie in sede sottoghiandolare, sottomuscolare o dual plane, attraverso un accesso periareolare, dal solco mammario o dal cavo ascellare; forme e dimensioni vengono scelte in base a desideri e caratteristiche di ogni paziente.",
      ],
      en: [
        "Breast augmentation is the surgical procedure used to increase breast volume and correct defects and asymmetries, improving the harmony and shape of the body.",
        "It is indicated to make a small breast more proportionate and fuller, to correct asymmetry between the two breasts, or to restore shape and volume to a breast that looks «deflated» following significant weight loss or breastfeeding.",
        "The procedure consists of inserting breast implants in a subglandular, submuscular or dual-plane position, through a periareolar, inframammary-fold or axillary access; shapes and sizes are chosen according to each patient's wishes and characteristics.",
      ],
    },
  },
  {
    id: "blefaroplastica-laser",
    area: "chirurgia",
    image: "t-blefaroplastica",
    title: { it: "Blefaroplastica laser", en: "Laser blepharoplasty" },
    lead: {
      it: "Ringiovanimento dello sguardo con tempi di recupero ridotti.",
      en: "Rejuvenation of the eyes with reduced recovery times.",
    },
    body: {
      it: [
        "La blefaroplastica è un intervento che permette di correggere gli inestetismi delle palpebre, portando a un ringiovanimento dello sguardo. Si migliorano i difetti legati alla perdita di compattezza dei tessuti che si verifica naturalmente con l'avanzare dell'età, come le «palpebre cadenti» e l'accentuazione di gonfiori o borse intorno agli occhi.",
        "In passato l'intervento veniva eseguito chirurgicamente, mentre oggi è possibile usare la tecnologia laser, meno invasiva e con tempi di recupero praticamente nulli. Il fascio di luce concentrata provoca la contrazione della pelle e stimola la neocollagenesi, portando all'eliminazione del tessuto in eccesso e a un ringiovanimento cellulare.",
      ],
      en: [
        "Blepharoplasty corrects imperfections of the eyelids, rejuvenating the appearance of the eyes. It addresses the loss of tissue firmness that occurs naturally with age, such as «drooping eyelids» and increased puffiness or bags around the eyes.",
        "In the past the procedure was performed surgically, whereas today laser technology can be used: less invasive, with practically no recovery time. The concentrated beam of light causes the skin to contract and stimulates neocollagenesis, removing excess tissue and rejuvenating the cells.",
      ],
    },
  },
  {
    id: "rinosettoplastica",
    area: "chirurgia",
    image: "t-rinosettoplastica",
    title: { it: "Rinosettoplastica", en: "Rhinoseptoplasty" },
    lead: {
      it: "Forma del naso e funzione respiratoria nello stesso intervento.",
      en: "Nose shape and breathing function in the same procedure.",
    },
    body: {
      it: [
        "La rinosettoplastica è l'intervento chirurgico che permette di modificare forma e dimensioni del naso per renderlo più armonioso con il resto del volto. L'intervento viene eseguito anche per correggere deviazioni del setto e quindi migliorare l'attività respiratoria.",
        "Con la rinosettoplastica si possono aumentare o diminuire le dimensioni del naso, correggere difetti legati alla forma (ad esempio un naso troppo largo o una «gobba» sul dorso), modificare l'ampiezza delle narici o l'angolo tra fronte e naso, oppure tra naso e labbro superiore.",
      ],
      en: [
        "Rhinoseptoplasty is the surgical procedure that changes the shape and size of the nose to bring it into harmony with the rest of the face. It is also performed to correct deviations of the septum and thereby improve breathing.",
        "Rhinoseptoplasty can increase or reduce the size of the nose, correct shape-related defects (for example a nose that is too wide or a «hump» on the bridge), change the width of the nostrils or the angle between forehead and nose, or between nose and upper lip.",
      ],
    },
  },
  {
    id: "cellfina",
    area: "chirurgia",
    image: "t-cellfina",
    flagship: true,
    title: { it: "Cellfina®", en: "Cellfina®" },
    lead: {
      it: "L'unico protocollo approvato FDA per la cellulite a lungo termine.",
      en: "The only FDA-approved protocol for long-term cellulite treatment.",
    },
    body: {
      it: [
        "Cellfina® è attualmente l'unico protocollo medico estetico approvato dall'FDA per il trattamento a lungo termine della cellulite. Agisce sulla causa strutturale dell'inestetismo, recidendo in maniera precisa e controllata i setti fibrosi retraenti, responsabili del caratteristico aspetto della pelle «a buccia d'arancia».",
        "Con la recisione dei setti fibrosi la pelle si distende e torna ad essere liscia e compatta. Il trattamento richiede una sola seduta ed è particolarmente efficace su cosce e glutei. Il 93% delle pazienti si ritiene ancora soddisfatta a 3 anni dal trattamento.",
      ],
      en: [
        "Cellfina® is currently the only aesthetic medical protocol approved by the FDA for the long-term treatment of cellulite. It acts on the structural cause, precisely and controllably releasing the retracting fibrous septa responsible for the characteristic «orange-peel» appearance of the skin.",
        "Once the fibrous septa are released, the skin relaxes and becomes smooth and firm again. The treatment requires a single session and is particularly effective on the thighs and buttocks. 93% of patients still report being satisfied three years after treatment.",
      ],
    },
  },

  // -------------------------------------------------------------- technology
  {
    id: "face-rebuilding",
    area: "technology",
    image: "t-face-rebuilding",
    title: { it: "Face Rebuilding", en: "Face Rebuilding" },
    lead: {
      it: "Endolift® e Ultherapy® nella stessa seduta, a profondità diverse.",
      en: "Endolift® and Ultherapy® in the same session, at different depths.",
    },
    body: {
      it: [
        "Il Face Rebuilding è un protocollo innovativo di ringiovanimento del volto basato sul trattamento combinato di Endolift® e Ultherapy® nella stessa seduta. Con l'avanzare dell'età i segni principali che appaiono sul volto sono le rughe d'espressione e le lassità muscolo-cutanee.",
        "La combinazione dei due trattamenti permette di agire a profondità diverse: Endolift® agisce con un effetto tightening sulla pelle, riducendo anche gli eventuali eccessi di grasso se necessario, mentre Ultherapy® agisce a livello più profondo, fino alla fascia del muscolo, garantendo un risultato migliore e più duraturo nel tempo. Altre metodiche possono essere aggiunte in base alle necessità individuali.",
      ],
      en: [
        "Face Rebuilding is an innovative facial rejuvenation protocol based on the combined use of Endolift® and Ultherapy® in the same session. With age, the main signs that appear on the face are expression lines and muscular-cutaneous laxity.",
        "Combining the two treatments makes it possible to work at different depths: Endolift® has a tightening effect on the skin and can also reduce excess fat where necessary, while Ultherapy® works deeper, down to the muscle fascia, delivering a better and longer-lasting result. Other methods can be added according to individual needs.",
      ],
    },
  },
  {
    id: "body-reshaping",
    area: "technology",
    image: "t-body-reshaping",
    title: { it: "Body Reshaping", en: "Body Reshaping" },
    lead: {
      it: "Laser, ultrasuoni e fili in PDO sulle lassità del corpo.",
      en: "Laser, ultrasound and PDO threads for body laxity.",
    },
    body: {
      it: [
        "Endolift® permette di retrarre la pelle e rimodellare il derma, attivando la produzione di collagene e stimolando la neo-angiogenesi nelle aree di maggiore lassità cutanea del corpo, come addome, interno braccia, interno cosce e glutei.",
        "Ultherapy® aiuta a ottenere il massimo risultato lavorando più in profondità, nel derma medio e profondo verso la fascia del muscolo. I fili rivitalizzanti in polidiossanone (PDO), totalmente riassorbibili, vengono inseriti con aghi speciali sottilissimi che permettono di posizionare il filo nel punto stabilito, dando maggiore sostegno al protocollo.",
      ],
      en: [
        "Endolift® retracts the skin and remodels the dermis, activating collagen production and stimulating neo-angiogenesis in the areas of greatest skin laxity on the body, such as the abdomen, inner arms, inner thighs and buttocks.",
        "Ultherapy® helps achieve the best result by working deeper, in the mid and deep dermis towards the muscle fascia. Fully absorbable polydioxanone (PDO) revitalising threads are inserted with very fine specialised needles that place the thread precisely, giving the protocol additional support.",
      ],
    },
  },
  {
    id: "bio-nutri-knees",
    area: "technology",
    image: "t-bio-nutri-knees",
    title: { it: "Bio Nutri Knees", en: "Bio Nutri Knees" },
    lead: {
      it: "Il protocollo Bio Nutri Lift applicato all'area del ginocchio.",
      en: "The Bio Nutri Lift protocol applied to the knee area.",
    },
    body: {
      it: [
        "Il protocollo Bio Nutri Knees è il trattamento Bio Nutri Lift applicato alle ginocchia, un'area spesso poco considerata ma in realtà molto sentita da molte pazienti. È pensato per trattare specificamente rughe e volumi nell'area sopra il ginocchio.",
        "Prevede l'utilizzo di due prodotti: un acido ialuronico debolmente reticolato, che leviga la superficie delle rughe e dona un effetto lifting immediato, e una soluzione poli-rivitalizzante che stimola nel derma la neo-produzione di collagene ed elastina, con un rinnovamento cellulare e un effetto ringiovanente naturale.",
      ],
      en: [
        "The Bio Nutri Knees protocol is the Bio Nutri Lift treatment applied to the knees, an area that is often overlooked yet matters a great deal to many patients. It is designed to treat wrinkles and volume specifically in the area above the knee.",
        "It uses two products: a lightly cross-linked hyaluronic acid, which smooths the surface of wrinkles and gives an immediate lifting effect, and a poly-revitalising solution that stimulates new collagen and elastin production in the dermis, resulting in cell renewal and a natural rejuvenating effect.",
      ],
    },
  },
  {
    id: "teosyalpen",
    area: "technology",
    image: "t-teosyalpen",
    title: { it: "TeosyalPen®", en: "TeosyalPen®" },
    lead: {
      it: "Iniezione a flusso costante, per il comfort del paziente.",
      en: "Constant-flow injection, for patient comfort.",
    },
    body: {
      it: [
        "Il comfort del paziente durante i trattamenti medico-estetici è di importanza fondamentale. La percezione del dolore, o comunque una sensazione di fastidio, può provocare ansia, specialmente in chi per la prima volta si sottopone a un trattamento iniettivo con acido ialuronico.",
        "Per evitare questo inconveniente è oggi possibile ricorrere a un device elettronico cordless, simile a una «penna», che grazie alla sua tecnologia brevettata permette al medico di mantenere, durante l'applicazione dei gel a base di acido ialuronico (filler e biorivitalizzanti), un flusso omogeneo e una velocità costante senza picchi di pressione.",
      ],
      en: [
        "Patient comfort during aesthetic medical treatments is fundamentally important. The perception of pain, or simply a sense of discomfort, can cause anxiety, especially in those undergoing a hyaluronic acid injection for the first time.",
        "To avoid this, a cordless electronic device shaped like a «pen» can now be used: thanks to its patented technology it allows the physician to maintain an even flow and a constant speed, with no pressure peaks, while applying hyaluronic acid gels (fillers and bio-revitalisers).",
      ],
    },
  },
  {
    id: "global-buttock-remodeling",
    area: "technology",
    image: "t-buttock",
    title: { it: "Global Buttock Remodeling", en: "Global Buttock Remodeling" },
    lead: {
      it: "Endolift® + Ultherapy® + Cellfina® per il rimodellamento dei glutei.",
      en: "Endolift® + Ultherapy® + Cellfina® for buttock remodelling.",
    },
    body: {
      it: [
        "Attraverso la combinazione di tre delle più avanzate metodiche attualmente in commercio è possibile effettuare un ringiovanimento globale dei glutei: Endolift® (laser con fibra ottica), Ultherapy® (ultrasuoni microfocalizzati con sistema di visione) e Cellfina® (subcision guidata).",
        "Dopo che con Endolift® è stata trattata e rimodellata la pelle dei glutei in superficie, viene effettuata immediatamente una seduta con gli ultrasuoni microfocalizzati, che permettono di arrivare più in profondità nel derma medio e profondo verso la fascia del muscolo. Successivamente si esegue una seduta con Cellfina®, l'unico trattamento mini-invasivo approvato FDA per migliorare gli inestetismi della cellulite per oltre 4 anni in un'unica sessione, completando così il rimodellamento globale dei glutei e delle cosce posteriori.",
      ],
      en: [
        "Combining three of the most advanced methods currently available makes it possible to carry out a global rejuvenation of the buttocks: Endolift® (fibre-optic laser), Ultherapy® (micro-focused ultrasound with visualisation) and Cellfina® (guided subcision).",
        "Once Endolift® has treated and remodelled the surface skin of the buttocks, a micro-focused ultrasound session follows immediately, reaching deeper into the mid and deep dermis towards the muscle fascia. A Cellfina® session is then performed — the only minimally invasive treatment approved by the FDA to improve the appearance of cellulite for over four years in a single session — completing the global remodelling of the buttocks and posterior thighs.",
      ],
    },
  },
  {
    id: "nanosoft",
    area: "technology",
    image: "t-nanosoft",
    title: { it: "NanoSoft®", en: "NanoSoft®" },
    lead: {
      it: "Microaghi per le zone dove la pelle è più sottile.",
      en: "Micro-needles for the areas where skin is thinnest.",
    },
    body: {
      it: [
        "I segni del tempo che appaiono in alcune zone — palpebre inferiori e superiori, contorno bocca e collo — sono spesso quelli più sentiti dai pazienti. La pelle, in queste zone, è molto sottile e necessita di trattamenti più specifici e meno aggressivi.",
        "Per rivitalizzare la pelle è fondamentale trattare lo strato intradermico più superficiale, dove ci sono i fibroblasti e dove occorre stimolare la produzione di nuovo collagene ed elastina: è quindi essenziale la precisione dell'iniezione, che non deve essere né troppo profonda né troppo superficiale. Il dispositivo iniettivo intradermico presenta 3 microaghi di forma piramidale da 0,6 mm in puro silicone microcristallizzato, con un calibro di circa 36G, ed è applicabile a qualsiasi siringa.",
      ],
      en: [
        "The signs of ageing that appear in certain areas — lower and upper eyelids, the area around the mouth and the neck — are often the ones patients feel most keenly. The skin in these areas is very thin and requires more specific, less aggressive treatments.",
        "To revitalise the skin it is essential to treat the most superficial intradermal layer, where the fibroblasts are and where new collagen and elastin production must be stimulated: injection precision is therefore critical, neither too deep nor too superficial. The intradermal injection device has three pyramid-shaped 0.6 mm micro-needles in pure micro-crystallised silicone, with a calibre of around 36G, and fits any syringe.",
      ],
    },
  },
  {
    id: "ladylift",
    area: "technology",
    image: "t-ladylift",
    title: { it: "LadyLift®", en: "LadyLift®" },
    lead: {
      it: "Rigenerazione laser della mucosa vaginale.",
      en: "Laser regeneration of the vaginal mucosa.",
    },
    body: {
      it: [
        "Il protocollo LadyLift® è un trattamento pensato per la rigenerazione della mucosa vaginale. Età e stress muscolare causano un processo atrofico all'interno della vagina, che può portare a problemi quali secchezza e difficoltà sessuali, pruriti e bruciori, incontinenza urinaria e lassità tissutali, che si traducono in una perdita del tono della mucosa vaginale.",
        "LadyLift® utilizza la tecnologia laser per stimolare la neo-produzione di collagene e il rinnovamento cellulare a livello del tessuto epiteliale e connettivo, ripristinando compattezza, flessibilità e idratazione della mucosa.",
      ],
      en: [
        "The LadyLift® protocol is designed to regenerate the vaginal mucosa. Age and muscular stress cause an atrophic process inside the vagina, which can lead to dryness and sexual difficulties, itching and burning, urinary incontinence and tissue laxity, all resulting in a loss of tone in the vaginal mucosa.",
        "LadyLift® uses laser technology to stimulate new collagen production and cell renewal in the epithelial and connective tissue, restoring firmness, flexibility and hydration to the mucosa.",
      ],
    },
  },
  {
    id: "permalip",
    area: "technology",
    image: "t-permalip",
    title: { it: "Permalip®", en: "Permalip®" },
    lead: {
      it: "Protesi labiali in silicone, definitive ma totalmente reversibili.",
      en: "Silicone lip implants: permanent, yet fully reversible.",
    },
    body: {
      it: [
        "Permalip® rappresenta un'innovativa alternativa ai soliti filler utilizzati per l'aumento del volume delle labbra, soprattutto in caso di ipoplasia marcata o di scarsa durata dei normali filler. Il trattamento, in anestesia locale, prevede l'inserimento di una piccola protesi composta da un elastomero liscio in silicone, identica alle protesi mammarie.",
        "La protesi è disponibile in 3 volumi e in 3 differenti lunghezze, così da poter essere utilizzata in tutte le pazienti. L'effetto che si ottiene è molto naturale e permette una riduzione dell'80% delle fastidiose rughette sopra al labbro superiore, con un rimodellamento sicuro e definitivo ma totalmente reversibile al bisogno.",
      ],
      en: [
        "Permalip® is an innovative alternative to the usual fillers used to increase lip volume, particularly in cases of marked hypoplasia or where standard fillers do not last. The treatment, under local anaesthesia, involves inserting a small implant made of smooth silicone elastomer, identical in material to breast implants.",
        "The implant comes in three volumes and three different lengths, so it can be used for every patient. The effect is very natural and reduces the fine lines above the upper lip by 80%, with safe and permanent remodelling that remains fully reversible if needed.",
      ],
    },
  },
];

export const byArea = (area: Area) => treatments.filter((t) => t.area === area);
export const byId = (id: string) => treatments.find((t) => t.id === id);
