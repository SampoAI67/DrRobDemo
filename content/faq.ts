import type { L10n } from "@/lib/i18n";

export interface FaqItem {
  id: string;
  /** pagina su cui compare: slug della macro-area o del trattamento flagship */
  scope: "medicina" | "chirurgia" | "technology" | "endolift" | "ultherapy" | "cellfina" | "contatti";
  q: L10n;
  a: L10n;
}

/**
 * Ogni risposta è ricavata dai testi del sito originale: durate, indicazioni e
 * numeri sono quelli dichiarati dal Dott. Dell'Avanzato, non stime aggiunte.
 * Vengono esposte anche come JSON-LD FAQPage (vedi components/json-ld.tsx).
 */
export const faq: FaqItem[] = [
  {
    id: "prima-visita",
    scope: "contatti",
    q: { it: "Come si svolge la prima visita?", en: "What happens at the first consultation?" },
    a: {
      it: "La prima visita è sempre volta a un'attenta anamnesi e all'analisi della problematica, valutando le esigenze del singolo paziente per proporre la soluzione più adatta. È un atto medico e per questo non è gratuita: le indicazioni date per telefono o via e-mail restano suggerimenti di comportamento.",
      en: "The first consultation always involves a careful medical history and analysis of the concern, assessing each patient's needs in order to propose the most suitable solution. It is a medical act and therefore not free of charge: guidance given by phone or e-mail remains general advice.",
    },
  },
  {
    id: "dove-riceve",
    scope: "contatti",
    q: { it: "Dove riceve il Dott. Dell'Avanzato?", en: "Where does Dr Dell'Avanzato practise?" },
    a: {
      it: "L'attività di medicina estetica si svolge nello studio di Via Andegari 18 a Milano, a 50 metri dalla metropolitana Montenapoleone e di fronte all'Hotel Mandarin Oriental. L'attività chirurgica si svolge presso la Clinica La Madonnina, la Clinica Villa Letizia e la Clinica Villa Arbe di Milano.",
      en: "Aesthetic medicine is carried out at the practice in Via Andegari 18, Milan, 50 metres from Montenapoleone underground station and opposite the Mandarin Oriental Hotel. Surgery takes place at Clinica La Madonnina, Clinica Villa Letizia and Clinica Villa Arbe in Milan.",
    },
  },
  {
    id: "endolift-doloroso",
    scope: "endolift",
    q: { it: "Endolift® è doloroso? Serve anestesia?", en: "Is Endolift® painful? Does it require anaesthesia?" },
    a: {
      it: "Il trattamento non è doloroso, non richiede anestesia e non comporta un periodo di convalescenza: si può riprendere immediatamente la normale quotidianità. Se a Endolift® viene associata la laserlipolisi, l'area trattata può apparire arrossata o gonfia, ma il tutto tende a sparire spontaneamente in 2-3 giorni.",
      en: "The treatment is not painful, requires no anaesthesia and involves no recovery period: normal daily activities can be resumed immediately. If laser lipolysis is combined with Endolift®, the treated area may look red or slightly swollen, but this usually resolves on its own within two or three days.",
    },
  },
  {
    id: "endolift-durata",
    scope: "endolift",
    q: { it: "Quanto dura una seduta di Endolift® e ogni quanto si ripete?", en: "How long is an Endolift® session and how often is it repeated?" },
    a: {
      it: "La seduta è unica e dura dai 15 ai 30 minuti, a seconda dello stato di lassità della pelle e delle zone da trattare. Il trattamento può essere ripetuto ogni anno per mantenere i risultati; nei casi di lassità importante può essere consigliata un'ulteriore seduta dopo sei mesi.",
      en: "It is a single session lasting 15 to 30 minutes, depending on the degree of skin laxity and the areas to be treated. The treatment can be repeated annually to maintain results; in cases of marked laxity a further session may be advised after six months.",
    },
  },
  {
    id: "endolift-zone",
    scope: "endolift",
    q: { it: "Quali zone si possono trattare con Endolift®?", en: "Which areas can be treated with Endolift®?" },
    a: {
      it: "Per il viso: palpebre inferiori, bordo mandibolare, sottomento (il cosiddetto «doppio mento») e collo. Per il corpo: interno braccia, interno cosce, ginocchia, addome e caviglie.",
      en: "On the face: lower eyelids, jawline, submental area (the so-called «double chin») and neck. On the body: inner arms, inner thighs, knees, abdomen and ankles.",
    },
  },
  {
    id: "ultherapy-risultati",
    scope: "ultherapy",
    q: { it: "Quando si vedono i risultati di Ultherapy® e quanto durano?", en: "When do Ultherapy® results appear and how long do they last?" },
    a: {
      it: "I risultati arrivano in 2-3 mesi dal trattamento e continuano a migliorare nei mesi successivi, perché viene stimolato il naturale processo di neocollagenesi. La durata è variabile a seconda del paziente, ma in genere non è mai inferiore a un anno.",
      en: "Results appear two to three months after the treatment and continue to improve in the following months, as the natural process of neocollagenesis is stimulated. Duration varies from patient to patient but is generally never less than a year.",
    },
  },
  {
    id: "ultherapy-seduta",
    scope: "ultherapy",
    q: { it: "Quanto dura una seduta di Ultherapy®?", en: "How long does an Ultherapy® session take?" },
    a: {
      it: "Dai 30 ai 90 minuti, a seconda dell'estensione della zona da trattare. Per viso, collo e décolleté è prevista in genere una sola seduta, senza ricovero, anestesia o convalescenza.",
      en: "From 30 to 90 minutes, depending on the size of the area being treated. For the face, neck and décolletage a single session is generally required, with no hospital stay, anaesthesia or recovery time.",
    },
  },
  {
    id: "ultherapy-grasso",
    scope: "ultherapy",
    q: { it: "Ultherapy® agisce anche sul grasso localizzato?", en: "Does Ultherapy® also act on localised fat?" },
    a: {
      it: "No. Ultherapy® non ha alcun effetto sugli accumuli di grasso, per i quali si possono prevedere trattamenti come intralipoterapia, criolipolisi, laser-lipolisi o laser-liposuzione.",
      en: "No. Ultherapy® has no effect on fat deposits, for which treatments such as intralipotherapy, cryolipolysis, laser lipolysis or laser liposuction may be considered.",
    },
  },
  {
    id: "cellfina-sedute",
    scope: "cellfina",
    q: { it: "Quante sedute di Cellfina® servono?", en: "How many Cellfina® sessions are needed?" },
    a: {
      it: "Il trattamento si esegue in genere in una sola seduta, in anestesia locale, al termine della quale è possibile tornare immediatamente alle attività abituali seguendo le indicazioni del medico. Il 93% delle pazienti si ritiene ancora soddisfatta a 5 anni dall'unica seduta.",
      en: "The treatment is generally carried out in a single session under local anaesthesia, after which normal activities can be resumed immediately, following the physician's instructions. 93% of patients still report being satisfied five years after that single session.",
    },
  },
  {
    id: "cellfina-come-agisce",
    scope: "cellfina",
    q: { it: "Perché Cellfina® agisce sulla causa della cellulite?", en: "Why does Cellfina® act on the cause of cellulite?" },
    a: {
      it: "Perché interviene sui setti fibrosi retraenti: attraverso la subcision guidata (TS-GS®) il dispositivo esegue una recisione precisa e controllata dei setti, senza intaccare i tessuti sani circostanti, così che la cute si rilasci e la superficie torni più levigata.",
      en: "Because it works on the retracting fibrous septa: using guided subcision (TS-GS®) the device makes a precise, controlled release of the septa without affecting the surrounding healthy tissue, so the skin relaxes and the surface becomes smoother.",
    },
  },
  {
    id: "medicina-anestesia",
    scope: "medicina",
    q: { it: "I trattamenti di medicina estetica richiedono anestesia o ricovero?", en: "Do aesthetic medicine treatments require anaesthesia or hospitalisation?" },
    a: {
      it: "No. I trattamenti proposti sono mini-invasivi o non invasivi e vengono eseguiti in ambulatorio, praticando al massimo una leggera anestesia locale quando necessario.",
      en: "No. The treatments offered are minimally invasive or non-invasive and are performed in the practice, with at most a light local anaesthetic where necessary.",
    },
  },
  {
    id: "chirurgia-differenza",
    scope: "chirurgia",
    q: { it: "Che differenza c'è tra chirurgia plastica e chirurgia estetica?", en: "What is the difference between plastic surgery and aesthetic surgery?" },
    a: {
      it: "La chirurgia estetica è un'evoluzione più articolata della chirurgia plastica, nella quale l'intervento fornisce solo una parte del risultato: il medico deve portare il risultato ai livelli più alti combinando alla chirurgia i più avanzati trattamenti di medicina estetica, senza stravolgere l'aspetto del paziente.",
      en: "Aesthetic surgery is a more complex evolution of plastic surgery, in which the operation provides only part of the result: the physician must take that result further by combining surgery with the most advanced aesthetic medicine treatments, without distorting the patient's appearance.",
    },
  },
  {
    id: "technology-combinati",
    scope: "technology",
    q: { it: "Perché combinare più tecnologie nella stessa seduta?", en: "Why combine several technologies in the same session?" },
    a: {
      it: "Perché le diverse metodiche agiscono a profondità differenti: Endolift® lavora sulla pelle con un effetto tightening, Ultherapy® arriva fino alla fascia del muscolo, Cellfina® interviene sui setti fibrosi. La giusta combinazione, unita a un corretto protocollo, è alla base del risultato.",
      en: "Because the different methods work at different depths: Endolift® acts on the skin with a tightening effect, Ultherapy® reaches down to the muscle fascia, Cellfina® acts on the fibrous septa. The right combination, together with a sound protocol, is what produces the result.",
    },
  },
];

export const faqFor = (scope: FaqItem["scope"]) => faq.filter((f) => f.scope === scope);
