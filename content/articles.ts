import type { L10n } from "@/lib/i18n";

/**
 * I tre approfondimenti pubblicati sul sito originale (categoria
 * "Approfondimenti", novembre 2019), riportati per intero e tradotti.
 */

export type Block =
  | { type: "h"; text: L10n }
  | { type: "p"; text: L10n }
  | { type: "ul"; items: L10n[] };

export interface Article {
  id: string;
  image: string;
  date: string;
  title: L10n;
  lead: L10n;
  metaDescription: L10n;
  /** id del trattamento correlato in content/treatments.ts */
  treatment: string;
  blocks: Block[];
}

export const articles: Article[] = [
  {
    id: "endolift",
    image: "post-endolift",
    date: "2019-11-08",
    treatment: "endolift",
    title: {
      it: "Endolift®: trattamento rimodellante per viso, collo e corpo",
      en: "Endolift®: remodelling treatment for face, neck and body",
    },
    lead: {
      it: "La metodica laser sviluppata dal Dr. Dell'Avanzato fin dai suoi albori, nel 2005.",
      en: "The laser method Dr Dell'Avanzato has developed since its very beginning, in 2005.",
    },
    metaDescription: {
      it: "Come funziona Endolift®, quali zone tratta, come si svolge la seduta e quali risultati attendersi.",
      en: "How Endolift® works, which areas it treats, how a session unfolds and what results to expect.",
    },
    blocks: [
      {
        type: "p",
        text: {
          it: "Endolift® è uno dei trattamenti più innovativi ed efficaci nel campo della medicina estetica, che utilizza la tecnologia laser per ricompattare la pelle, con un effetto chiamato «skin tightening». La metodica, che ho personalmente sviluppato fin dai suoi albori nel 2005, è particolarmente adatta per quelle zone del viso, del collo e del corpo dove è presente lassità cutanea, stimolando la contrazione e la produzione delle fibre di collagene, la proteina più importante per il sostegno dell'epidermide.",
          en: "Endolift® is one of the most innovative and effective treatments in aesthetic medicine, using laser technology to firm the skin — an effect known as «skin tightening». The method, which I have personally developed since its very beginning in 2005, is particularly suited to those areas of the face, neck and body where skin laxity is present, stimulating the contraction and production of collagen fibres, the most important protein supporting the epidermis.",
        },
      },
      {
        type: "p",
        text: {
          it: "Il collagene è la proteina principale dei tessuti connettivi dell'organismo, che hanno il compito di fare da supporto, unire e proteggere gli altri tipi di tessuti. Il tessuto cutaneo presenta uno strato più esterno, l'epidermide, al di sotto della quale si trova il derma, costituito da tessuto connettivo. Le componenti principali del derma sono proprio le fibre di collagene, che formano una sorta di «scheletro» di sostegno insieme alle fibre di elastina: il collagene ha una funzione riempitiva e di sostegno, l'elastina dona alla pelle elasticità.",
          en: "Collagen is the main protein of the body's connective tissues, which support, bind and protect other types of tissue. The skin has an outer layer, the epidermis, beneath which lies the dermis, made of connective tissue. The dermis is composed largely of collagen fibres, which together with elastin fibres form a supporting «skeleton»: collagen fills and supports, while elastin gives the skin its elasticity.",
        },
      },
      {
        type: "p",
        text: {
          it: "Entrambe le proteine sono importanti per mantenere compattezza e tonicità della pelle, ma con l'avanzare dell'età l'organismo inizia a produrre minori quantità di collagene, per cui le vecchie fibre non riescono a essere sostituite efficacemente dalle nuove. Il risultato è l'accentuazione delle rughe e il cedimento del tessuto, che a lungo andare porta anche a un cambiamento nel profilo e nei lineamenti.",
          en: "Both proteins matter for keeping skin firm and toned, but as we age the body produces less collagen, so old fibres are no longer effectively replaced by new ones. The result is deeper wrinkles and sagging tissue, which over time also changes the profile and features of the face.",
        },
      },
      {
        type: "p",
        text: {
          it: "Attraverso il trattamento Endolift® è possibile ottenere un rimodellamento dei profili di viso e corpo. I risultati, in taluni casi, sono paragonabili a quelli di un lifting chirurgico, ma con il vantaggio di un metodo mini-invasivo, non doloroso e con tempi di recupero praticamente nulli, a seconda della zona trattata e dell'inestetismo da correggere.",
          en: "Endolift® makes it possible to remodel the contours of the face and body. In some cases the results are comparable to those of a surgical lift, but with the advantage of a minimally invasive, painless method with practically no recovery time, depending on the area treated and the concern being addressed.",
        },
      },
      {
        type: "p",
        text: {
          it: "Infine, con la stessa fibra è possibile anche ridurre il grasso in eccesso presente nelle stesse aree — sottomento, interno braccia, interno cosce, ginocchia, addome, caviglie — e trattare la pseudoginecomastia, modificando semplicemente i settaggi e la potenza del macchinario ed effettuando quindi una laserlipolisi. Questo perché la lunghezza d'onda di 1470 nm, colpendo il giallo e l'acqua, ha un effetto selettivo sulla distruzione del grasso, riducendo al contempo la lassità cutanea senza creare alcun danno.",
          en: "Finally, the same fibre can also reduce excess fat in those same areas — submental region, inner arms, inner thighs, knees, abdomen, ankles — and treat pseudo-gynaecomastia, simply by changing the device's settings and power to perform laser lipolysis. This is because the 1470 nm wavelength, targeting yellow and water, acts selectively on the destruction of fat while at the same time reducing skin laxity, without causing damage.",
        },
      },
      { type: "h", text: { it: "Come funziona il trattamento Endolift®", en: "How the Endolift® treatment works" } },
      {
        type: "p",
        text: {
          it: "La metodica Endolift® utilizza un laser connesso a una sottilissima fibra ottica. La procedura consiste nell'inserire sottocute, nello specifico nella zona dell'ipoderma superficiale, una fibra ottica poco più grande di un capello. Per viso e collo si utilizzano in genere fibre da 200-300 micron, per il corpo fibre da 400-600 micron.",
          en: "The Endolift® method uses a laser connected to an extremely fine optical fibre. The procedure consists of inserting a fibre barely thicker than a hair beneath the skin, specifically into the superficial hypodermis. Fibres of 200-300 microns are generally used for the face and neck, and 400-600 microns for the body.",
        },
      },
      {
        type: "p",
        text: {
          it: "Si tratta in ogni caso di una procedura laser assistita: l'inserimento delle fibre avviene senza che sia necessaria alcuna incisione o taglio. La fibra, che ha una punta conica e penetra semplicemente come un piccolo ago, è molto flessibile e, una volta inserita nell'ipoderma superficiale, viene manovrata dal medico con un movimento «a ventaglio» che permette di trattare efficacemente tutta l'area interessata.",
          en: "This is in every case a laser-assisted procedure: the fibres are inserted without any incision or cut. The fibre has a conical tip and penetrates simply, like a small needle. It is highly flexible and, once in the superficial hypodermis, is guided by the physician in a «fan» motion that treats the whole area effectively.",
        },
      },
      { type: "p", text: { it: "Il calore emesso dal laser e la sua lunghezza d'onda:", en: "The heat emitted by the laser and its wavelength:" } },
      {
        type: "ul",
        items: [
          {
            it: "determinano un effetto di «skin tightening», ossia una retrazione, o meglio una contrazione, del tessuto connettivo sottocutaneo;",
            en: "produce a «skin tightening» effect, that is a retraction — more precisely a contraction — of the subcutaneous connective tissue;",
          },
          { it: "stimolano i fibroblasti a produrre nuovo collagene.", en: "stimulate the fibroblasts to produce new collagen." },
        ],
      },
      { type: "p", text: { it: "I risultati sono:", en: "The results are:" } },
      {
        type: "ul",
        items: [
          { it: "compattazione, rassodamento e tonificazione della pelle;", en: "firming, tightening and toning of the skin;" },
          {
            it: "aspetto più giovane e fresco, rimodellamento del profilo e attenuazione delle rughe;",
            en: "a younger, fresher appearance, remodelled contours and softened wrinkles;",
          },
          {
            it: "risultato naturale — non il classico effetto «tirato» del lifting chirurgico — che migliora nel tempo, perché l'organismo continua a produrre nuovo collagene anche nei mesi successivi al trattamento.",
            en: "a natural result — not the typical «pulled» look of a surgical facelift — that improves over time, because the body keeps producing new collagen in the months after treatment.",
          },
        ],
      },
      { type: "h", text: { it: "Quali zone è possibile trattare", en: "Which areas can be treated" } },
      {
        type: "p",
        text: {
          it: "La metodica Endolift® può essere utilizzata per il rimodellamento dei profili di viso, collo e corpo. Le zone nelle quali si sono ottenuti risultati ottimali sono:",
          en: "The Endolift® method can be used to remodel the contours of the face, neck and body. The areas where optimal results have been obtained are:",
        },
      },
      {
        type: "ul",
        items: [
          {
            it: "per il viso: palpebre inferiori, bordo mandibolare, sottomento (il cosiddetto «doppio mento») e collo;",
            en: "on the face: lower eyelids, jawline, submental area (the so-called «double chin») and neck;",
          },
          {
            it: "per il corpo: interno braccia, interno cosce, ginocchia, addome e caviglie.",
            en: "on the body: inner arms, inner thighs, knees, abdomen and ankles.",
          },
        ],
      },
      { type: "h", text: { it: "Come si svolge una seduta", en: "How a session unfolds" } },
      {
        type: "p",
        text: {
          it: "Prima di sottoporre un paziente al trattamento, il medico specialista nella metodica esegue una visita e un esame clinico necessari per valutare se il paziente è idoneo e se l'inestetismo o la patologia presente è trattabile con successo con la metodica laser assistita Endolift®.",
          en: "Before a patient undergoes the treatment, the physician trained in the method carries out a consultation and clinical examination to assess whether the patient is suitable and whether the concern or condition can be successfully treated with the laser-assisted Endolift® method.",
        },
      },
      {
        type: "p",
        text: {
          it: "Una volta stabilito che il paziente si può sottoporre al trattamento, si procede in un'unica seduta, della durata variabile da 15 a 30 minuti a seconda dello stato di lassità della pelle e delle zone da trattare. Il trattamento può essere ripetuto ogni anno per mantenere i risultati ma, se necessario, anche dopo sei mesi può essere consigliata un'ulteriore seduta per ottimizzare i risultati, soprattutto nei casi di importante lassità cutanea.",
          en: "Once it is established that the patient can undergo the treatment, it is carried out in a single session lasting 15 to 30 minutes, depending on the degree of skin laxity and the areas to be treated. It can be repeated annually to maintain results; where necessary, a further session may be advised after six months to optimise them, particularly in cases of marked skin laxity.",
        },
      },
      {
        type: "p",
        text: {
          it: "Il trattamento non è doloroso, non richiede anestesia, non comporta un periodo di convalescenza e il paziente può riprendere immediatamente la sua normale quotidianità. Se a Endolift® viene associato il trattamento di riduzione del grasso, o laserlipolisi, l'area trattata potrebbe apparire arrossata o un po' gonfia dopo la seduta, ma il tutto tenderà a sparire spontaneamente entro 2-3 giorni. È comunque importante seguire scrupolosamente le prescrizioni post-trattamento indicate dal medico.",
          en: "The treatment is not painful, requires no anaesthesia and involves no recovery period: patients can resume their normal routine immediately. If fat-reduction treatment — laser lipolysis — is combined with Endolift®, the treated area may look red or slightly swollen after the session, but this tends to resolve on its own within two or three days. It remains important to follow the physician's post-treatment instructions carefully.",
        },
      },
    ],
  },

  {
    id: "ultherapy",
    image: "post-ultherapy",
    date: "2019-11-18",
    treatment: "ultherapy",
    title: {
      it: "Ultherapy®: il lifting non chirurgico che solleva il muscolo",
      en: "Ultherapy®: the non-surgical lift that raises the muscle",
    },
    lead: {
      it: "Ultrasuoni microfocalizzati sotto guida ecografica, dal derma fino alla fascia muscolare.",
      en: "Micro-focused ultrasound under ultrasound guidance, from the dermis down to the muscle fascia.",
    },
    metaDescription: {
      it: "Come agisce Ultherapy®, quali zone tratta, quanto dura la seduta e quali risultati attendersi.",
      en: "How Ultherapy® works, which areas it treats, how long a session lasts and what results to expect.",
    },
    blocks: [
      {
        type: "p",
        text: {
          it: "Ultherapy® è il primo e unico lifting non chirurgico ad aver ricevuto l'approvazione dall'americana FDA, essendo in grado di sollevare il muscolo e rigenerare la pelle in profondità. Il protocollo prevede l'utilizzo di ultrasuoni microfocalizzati sotto guida ecografica, così da trattare con precisione solo le zone e i livelli di interesse, ottimizzando i risultati senza interferire con i tessuti circostanti come il grasso.",
          en: "Ultherapy® is the first and only non-surgical lift to have received approval from the US FDA, being able to lift the muscle and regenerate the skin at depth. The protocol uses micro-focused ultrasound under ultrasound guidance, so that only the areas and levels of interest are treated precisely, optimising results without affecting surrounding tissue such as fat.",
        },
      },
      {
        type: "p",
        text: {
          it: "Ultherapy® agisce in profondità, a livello della fascia del muscolo, che viene rimodellata permettendo il sollevamento non chirurgico del muscolo stesso; inoltre lavora a livello del derma che, come la maggior parte dei tessuti connettivi, ha funzione di sostegno e riempimento. Per svolgere questa funzione il derma si avvale di una complessa rete costituita da collagene ed elastina, una vera e propria «impalcatura» a sostegno dell'epidermide.",
          en: "Ultherapy® works deep down, at the level of the muscle fascia, which is remodelled to allow non-surgical lifting of the muscle itself. It also works on the dermis which, like most connective tissue, supports and fills. To do so the dermis relies on a complex network of collagen and elastin, a genuine «scaffolding» supporting the epidermis.",
        },
      },
      {
        type: "p",
        text: {
          it: "Con il passare degli anni il processo di formazione di nuovo collagene rallenta e l'organismo non riesce più a soddisfare il proprio fabbisogno. Questo si traduce in una perdita di tono ed elasticità della pelle, particolarmente evidente su viso, collo e décolleté, ma anche in altre zone del corpo come interno braccia, interno cosce, glutei, addome e ginocchia.",
          en: "Over the years the formation of new collagen slows down and the body can no longer meet its own needs. This translates into a loss of tone and elasticity, particularly visible on the face, neck and décolletage, but also in other areas such as the inner arms, inner thighs, buttocks, abdomen and knees.",
        },
      },
      {
        type: "p",
        text: {
          it: "Ultherapy® stimola anche il naturale processo di neocollagenesi: gli ultrasuoni microfocalizzati inducono i fibroblasti del derma a produrre nuove fibre collagene, che vanno a rinforzare la struttura di sostegno dell'epidermide risollevando i tessuti. La pelle appare subito più tonica e compatta, e il risultato continua a migliorare nei mesi successivi con un effetto assolutamente naturale.",
          en: "Ultherapy® also stimulates the natural process of neocollagenesis: micro-focused ultrasound prompts the fibroblasts in the dermis to produce new collagen fibres, reinforcing the supporting structure of the epidermis and lifting the tissue. The skin looks firmer and more toned straight away, and the result keeps improving over the following months with an entirely natural effect.",
        },
      },
      { type: "h", text: { it: "Come funziona il trattamento", en: "How the treatment works" } },
      {
        type: "p",
        text: {
          it: "L'innovazione del protocollo sta nell'utilizzo degli ultrasuoni microfocalizzati sotto guida ecografica per eseguire un vero e proprio lifting non chirurgico del muscolo e dei tessuti sovrastanti, senza la convalescenza e le possibili complicanze derivanti da un intervento chirurgico: la ripresa della quotidianità è immediata, senza alcuna limitazione nel post-trattamento.",
          en: "The innovation of the protocol lies in using micro-focused ultrasound under ultrasound guidance to perform a genuine non-surgical lift of the muscle and the tissue above it, without the recovery time and possible complications of surgery: normal life resumes immediately, with no post-treatment restrictions.",
        },
      },
      {
        type: "p",
        text: {
          it: "La guida ecografica permette di agire in maniera precisa nelle zone di interesse. Gli ultrasuoni microfocalizzati penetrano attraverso l'epidermide e il derma fino alla fascia del muscolo, dove erogano un'energia a bassa intensità per pochissimi millisecondi, stimolando la produzione di fibre collagene, il sollevamento non chirurgico del muscolo e un ringiovanimento globale dell'area. Uno dei maggiori punti di forza è proprio la capacità di arrivare a diverse profondità: oltre che sul derma, il trattamento agisce sulla fascia muscolare superficiale, che finora poteva essere trattata solo con il lifting chirurgico.",
          en: "Ultrasound guidance allows precise action in the areas of interest. Micro-focused ultrasound penetrates through the epidermis and dermis to the muscle fascia, where it delivers low-intensity energy for a few milliseconds, stimulating collagen fibre production, non-surgical lifting of the muscle and overall rejuvenation of the area. One of its greatest strengths is precisely this ability to reach different depths: as well as the dermis, it acts on the superficial muscular fascia, which until now could only be treated with surgical lifting.",
        },
      },
      {
        type: "p",
        text: {
          it: "Rispetto al lifting chirurgico tradizionale, il protocollo ha molteplici vantaggi:",
          en: "Compared with a traditional surgical facelift, the protocol has several advantages:",
        },
      },
      {
        type: "ul",
        items: [
          { it: "si esegue in un'unica seduta;", en: "it is carried out in a single session;" },
          {
            it: "è un trattamento non invasivo che non richiede né ricovero, né anestesia, né convalescenza;",
            en: "it is non-invasive and requires no hospital stay, anaesthesia or recovery period;",
          },
          {
            it: "il risultato è naturale e migliora nei mesi successivi alla seduta, perché viene stimolato il processo di neocollagenesi;",
            en: "the result is natural and improves in the months after the session, as neocollagenesis is stimulated;",
          },
          {
            it: "la durata è variabile a seconda del paziente, ma in genere non è mai inferiore a un anno.",
            en: "duration varies from patient to patient, but is generally never less than a year.",
          },
        ],
      },
      { type: "h", text: { it: "Quali zone e come si svolge la seduta", en: "Which areas, and how a session unfolds" } },
      {
        type: "p",
        text: {
          it: "Ultherapy® è utilizzato con ottimi risultati soprattutto su viso, collo e décolleté. Sul volto permette il sollevamento dell'angolo del sopracciglio, il ringiovanimento di tutta l'area intorno agli occhi riducendo l'evidenza delle borse adipose, il trattamento dell'area intorno alla bocca, la riduzione dei solchi naso-genieni con il sollevamento non chirurgico di tutto il volto, la ridefinizione del contorno mandibolare e del sottomento.",
          en: "Ultherapy® is used with excellent results above all on the face, neck and décolletage. On the face it lifts the brow, rejuvenates the whole area around the eyes by reducing the prominence of fat pads, treats the area around the mouth, softens the nasolabial folds with a non-surgical lift of the entire face, and redefines the jawline and submental area.",
        },
      },
      {
        type: "p",
        text: {
          it: "L'effetto è un ringiovanimento generale: quando i tessuti cedono, il volto perde le linee di profilo e appare invecchiato; la comparsa di lassità su collo e regione sottomentoniera forma spesso il cosiddetto «doppio mento», e anche lo sguardo può apparire invecchiato perché si accentuano le borse sotto agli occhi e la caduta dell'angolo del sopracciglio. Gli ultrasuoni microfocalizzati ricompattano e tonificano i tessuti, ridisegnando i lineamenti del volto e risollevando le aree trattate.",
          en: "The effect is a general rejuvenation: when tissue sags, the face loses its contours and looks older; laxity in the neck and submental region often forms the so-called «double chin», and the eyes too can look older as under-eye bags become more prominent and the brow drops. Micro-focused ultrasound firms and tones the tissue, redrawing the features of the face and lifting the treated areas.",
        },
      },
      {
        type: "p",
        text: {
          it: "Ultherapy® ha un effetto ringiovanente anche sul décolleté, dove leviga la pelle e riduce le rughe. In quest'area, non avendo un competitor come la chirurgia, risulta non solo l'unico ma anche il miglior trattamento eseguibile in grado di dare un risultato realmente visibile. Per viso, collo e décolleté è prevista in genere una sola seduta.",
          en: "Ultherapy® also rejuvenates the décolletage, where it smooths the skin and reduces wrinkles. In this area, having no surgical competitor, it is not only the only treatment available but also the best one capable of producing a genuinely visible result. A single session is generally required for face, neck and décolletage.",
        },
      },
      {
        type: "p",
        text: {
          it: "La durata del trattamento è variabile dai 30 ai 90 minuti, a seconda dell'estensione della zona. Il medico fa scorrere sul viso una sonda ecografica seguendo le linee previste dal protocollo elaborato dal board medico americano: la guida ecografica consente di trattare con la massima precisione solo le aree d'interesse, stimolando la rigenerazione ottimale della pelle e garantendo comfort, sicurezza ed efficacia clinicamente provati.",
          en: "The treatment lasts from 30 to 90 minutes, depending on the extent of the area. The physician moves an ultrasound probe across the face following the lines set out in the protocol developed by the American medical board: ultrasound guidance makes it possible to treat only the areas of interest with maximum precision, stimulating optimal skin regeneration and ensuring clinically proven comfort, safety and efficacy.",
        },
      },
      {
        type: "p",
        text: {
          it: "Ultherapy® è stato impiegato con successo anche sul corpo, per migliorare le lassità di interno braccia, interno cosce, glutei, addome e ginocchia, ed è particolarmente efficace quando il tessuto cutaneo cede dopo un dimagrimento rapido, come dopo una gravidanza o una dieta rigida. Non ha invece alcun effetto sugli accumuli di grasso, per i quali si possono prevedere trattamenti come intralipoterapia, criolipolisi, laser-lipolisi o laser-liposuzione. Il trattamento viene eseguito solo in centri medici certificati, da medici certificati e adeguatamente formati.",
          en: "Ultherapy® has also been used successfully on the body, to improve laxity of the inner arms, inner thighs, buttocks, abdomen and knees, and is particularly effective when the skin has slackened after rapid weight loss, such as following pregnancy or a strict diet. It has no effect on fat deposits, for which treatments such as intralipotherapy, cryolipolysis, laser lipolysis or laser liposuction may be considered. The treatment is performed only in certified medical centres, by certified and properly trained physicians.",
        },
      },
    ],
  },

  {
    id: "cellfina",
    image: "post-cellfina",
    date: "2019-11-07",
    treatment: "cellfina",
    title: {
      it: "Cellfina®: trattamento a lungo termine della cellulite",
      en: "Cellfina®: long-term treatment of cellulite",
    },
    lead: {
      it: "L'unico protocollo approvato dall'FDA che agisce sulla causa strutturale della cellulite.",
      en: "The only FDA-approved protocol that acts on the structural cause of cellulite.",
    },
    metaDescription: {
      it: "Che cos'è la cellulite, perché si forma e come agisce Cellfina® sui setti fibrosi retraenti.",
      en: "What cellulite is, why it forms and how Cellfina® acts on the retracting fibrous septa.",
    },
    blocks: [
      {
        type: "p",
        text: {
          it: "Il trattamento Cellfina® è un protocollo medico estetico innovativo, attualmente l'unico approvato dall'FDA, per il miglioramento a lungo termine dell'aspetto estetico della cellulite con una sola seduta.",
          en: "Cellfina® is an innovative aesthetic medical protocol, currently the only one approved by the FDA, for the long-term improvement of the appearance of cellulite in a single session.",
        },
      },
      {
        type: "p",
        text: {
          it: "Nell'ottobre 2016 ho cominciato, tra i primi in Europa, la mia esperienza con Cellfina®, una Tissue Stabilized-Guided Subcision® (TS-GS®), e nel febbraio 2017 sono stato il primo medico italiano a parlarne a un congresso americano, il prestigioso American-Brazilian Aesthetic Meeting (ABAM) a Park City, Utah.",
          en: "In October 2016 I began, among the first in Europe, my experience with Cellfina®, a Tissue Stabilized-Guided Subcision® (TS-GS®), and in February 2017 I was the first Italian physician to present it at an American congress, the prestigious American-Brazilian Aesthetic Meeting (ABAM) in Park City, Utah.",
        },
      },
      {
        type: "p",
        text: {
          it: "La cellulite, spesso identificata come un inestetismo cutaneo, è più propriamente una patologia degenerativa del derma e dell'ipoderma, ed è tipicamente femminile: si stima che interessi più del 90% delle donne. Non è una condizione strettamente correlata al sovrappeso, perché colpisce sia donne in sovrappeso sia donne magre, anche sportive e in ottima forma fisica. L'inestetismo che si vede in superficie è causato da un insieme di fattori genetici e di predisposizione ereditaria, più altri fattori legati all'ambiente e allo stile di vita.",
          en: "Cellulite, often seen as a skin imperfection, is more properly a degenerative condition of the dermis and hypodermis, and is typically female: it is estimated to affect more than 90% of women. It is not strictly linked to being overweight, since it affects both overweight and slim women, including athletic women in excellent physical condition. What is visible on the surface is caused by a combination of genetic and hereditary factors, plus others linked to environment and lifestyle.",
        },
      },
      {
        type: "p",
        text: {
          it: "Tra le cause troviamo i cambiamenti ormonali: non è un caso se la pelle «a buccia d'arancia» si accentui in concomitanza con alcune fasi del ciclo mestruale. È legata anche a problemi nella microcircolazione sanguigna e linfatica che, insieme alla ritenzione idrica, sono tra i fattori endogeni che ne favoriscono la comparsa.",
          en: "Hormonal changes are among the causes: it is no coincidence that «orange-peel» skin becomes more pronounced during certain phases of the menstrual cycle. It is also linked to problems with blood and lymphatic microcirculation which, together with water retention, are among the endogenous factors that encourage it.",
        },
      },
      {
        type: "p",
        text: {
          it: "Vi sono invece fattori sui quali si può lavorare per prevenire o ritardare la comparsa della cellulite: essenzialmente alimentazione e stile di vita. Una dieta «anticellulite» dovrebbe essere povera di zuccheri raffinati, ricca di acqua e povera di sale, e prevedere un corretto apporto dei nutrienti contenuti principalmente in frutta e verdura di stagione. Quanto allo stile di vita, sedentarietà, fumo e alcol sono nemici certi: l'attività ideale è aerobica a intensità moderata, che mette in circolo i grassi senza un eccesso di acido lattico e senza sollecitare troppo muscoli e articolazioni.",
          en: "There are, however, factors that can be worked on to prevent or delay cellulite: essentially diet and lifestyle. An «anti-cellulite» diet should be low in refined sugars, rich in water and low in salt, with an adequate intake of the nutrients found mainly in seasonal fruit and vegetables. As for lifestyle, a sedentary routine, smoking and alcohol are clear enemies: the ideal activity is moderate-intensity aerobic exercise, which mobilises fat without excess lactic acid and without overloading muscles and joints.",
        },
      },
      { type: "h", text: { it: "Quali sono le caratteristiche della cellulite", en: "The characteristics of cellulite" } },
      {
        type: "p",
        text: {
          it: "La cellulite è conosciuta nel mondo scientifico con l'acronimo PEFS, Pannicolopatia-Edemato-Fibro-Sclerotica. È il nome stesso a descrivere la patologia:",
          en: "In the scientific world cellulite is known by the acronym PEFS, oedematous-fibrosclerotic panniculopathy. The name itself describes the condition:",
        },
      },
      {
        type: "ul",
        items: [
          {
            it: "pannicolopatia, perché coinvolge il tessuto connettivo e il pannicolo adiposo sottocutaneo: le cause citate fanno sì che gli adipociti presenti nel tessuto sottocutaneo si gonfino fino a scoppiare, rilasciando i grassi contenuti nel tessuto circostante;",
            en: "panniculopathy, because it involves the connective tissue and the subcutaneous fat layer: the causes described make the adipocytes in the subcutaneous tissue swell until they burst, releasing the fat they contain into the surrounding tissue;",
          },
          { it: "edemato, perché c'è una situazione di ristagno di liquidi nei tessuti;", en: "oedematous, because fluid stagnates in the tissue;" },
          {
            it: "fibrosclerotica, perché le fibre collagene del tessuto connettivo si ispessiscono e inglobano gli adipociti degenerati formando dei noduli.",
            en: "fibrosclerotic, because the collagen fibres of the connective tissue thicken and engulf the degenerated adipocytes, forming nodules.",
          },
        ],
      },
      {
        type: "p",
        text: {
          it: "Per capire come si formano i cosiddetti «buchini» e i noduli che determinano l'aspetto «a buccia d'arancia» o «a materasso» bisogna parlare dei setti fibrosi retraenti: tralci di tessuto connettivo che si ispessiscono con il progredire della cellulite. Questi tralci sono perpendicolari alla superficie della cute nella donna, mentre nell'uomo sono disposti con un angolo di circa 45°.",
          en: "To understand how the so-called «dimples» and nodules that create the «orange-peel» or «mattress» appearance form, we need to look at the retracting fibrous septa: strands of connective tissue that thicken as cellulite progresses. In women these strands run perpendicular to the surface of the skin, whereas in men they sit at an angle of around 45°.",
        },
      },
      {
        type: "p",
        text: {
          it: "Quando gli adipociti degenerano rilasciando il loro contenuto nei tessuti circostanti, il grasso si trova compresso tra due setti fibrosi successivi e «ernia» verso l'alto, generando l'avvallamento che forma il «buchino» tipico della pelle a buccia d'arancia. Nell'uomo questo non accade, perché i setti fibrosi non sono perpendicolari alla cute: è uno dei principali motivi per i quali la cellulite sembra colpire prevalentemente le donne.",
          en: "When adipocytes degenerate and release their contents into the surrounding tissue, the fat is compressed between two adjacent fibrous septa and «herniates» upwards, creating the depression that forms the dimple typical of orange-peel skin. This does not happen in men, because the fibrous septa are not perpendicular to the skin: one of the main reasons cellulite appears to affect mostly women.",
        },
      },
      { type: "h", text: { it: "Come funziona il metodo Cellfina®", en: "How the Cellfina® method works" } },
      {
        type: "p",
        text: {
          it: "Il metodo Cellfina® agisce proprio sui setti fibrosi retraenti. Attraverso la subcision guidata, o TS-GS®, il dispositivo permette di effettuare una recisione precisa e controllata dei setti, senza intaccare i tessuti sani circostanti, ottenendo il rilascio della cute e rendendo la superficie della pelle più levigata e omogenea.",
          en: "The Cellfina® method acts precisely on the retracting fibrous septa. Through guided subcision, or TS-GS®, the device makes a precise and controlled release of the septa without affecting the surrounding healthy tissue, freeing the skin and making its surface smoother and more even.",
        },
      },
      {
        type: "p",
        text: {
          it: "L'innovazione e l'efficacia di Cellfina® stanno proprio in questo: agire sulla causa strutturale della cellulite. Il risultato che si ottiene è ottimale e soprattutto duraturo nel tempo. Il 93% delle pazienti si ritiene ancora soddisfatta a 5 anni dall'unica seduta di trattamento.",
          en: "The innovation and effectiveness of Cellfina® lie exactly in this: acting on the structural cause of cellulite. The result is excellent and, above all, long-lasting. 93% of patients still report being satisfied five years after that single treatment session.",
        },
      },
      {
        type: "p",
        text: {
          it: "Cellfina® è un trattamento medico estetico minimamente invasivo, effettuato in anestesia locale, e deve essere eseguito solo in centri dove operano medici certificati all'utilizzo del metodo e del medical device.",
          en: "Cellfina® is a minimally invasive aesthetic medical treatment, performed under local anaesthesia, and must be carried out only in centres with physicians certified in the use of the method and the medical device.",
        },
      },
      {
        type: "p",
        text: {
          it: "Il sistema è composto da due piattaforme con guide speciali. La prima crea un vuoto, solleva la pelle e diffonde un anestetico locale con un piccolissimo ago. La seconda, una volta che l'anestetico ha fatto effetto, utilizza un microbisturi per eseguire la recisione guidata dei setti fibrosi retraenti. Il grande vantaggio è che permette di trattare «buchi» ravvicinati lavorando a profondità differenti, così da non creare un piano di scollamento unico come fanno le altre metodiche, quindi senza i rischi di recidive o erniazioni del tessuto sottostante.",
          en: "The system consists of two platforms with dedicated guides. The first creates a vacuum, lifts the skin and delivers a local anaesthetic through a very fine needle. Once the anaesthetic has taken effect, the second uses a micro-blade to perform the guided release of the retracting fibrous septa. Its great advantage is that it can treat closely spaced dimples while working at different depths, so it does not create a single detachment plane as other methods do — avoiding the risk of recurrence or herniation of the underlying tissue.",
        },
      },
      {
        type: "p",
        text: {
          it: "Il trattamento si esegue in genere in una sola seduta, al termine della quale è possibile tornare immediatamente alle attività abituali, avendo cura di seguire nei giorni successivi le indicazioni del medico. Questa procedura approvata dall'FDA tratta la causa primaria degli inestetismi della cellulite, principalmente dei glutei e delle cosce posteriori, e risulta sicura, ripetibile, riproducibile ed efficace.",
          en: "The treatment is generally carried out in a single session, after which normal activities can be resumed immediately, following the physician's instructions in the days that follow. This FDA-approved procedure treats the primary cause of the appearance of cellulite, mainly on the buttocks and posterior thighs, and is safe, repeatable, reproducible and effective.",
        },
      },
    ],
  },
];

export const articleById = (id: string) => articles.find((a) => a.id === id);
