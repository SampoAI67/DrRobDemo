# Design system · medicina estetica

Il sistema dietro `demos/dellavanzato/`. Non è una libreria generica: è tarato su un
ambulatorio di medicina e chirurgia estetica, cioè su un contenuto **YMYL** (*your money
or your life*) letto da un pubblico che ha in media fra i 40 e i 65 anni, regolato in Italia
dall'art. 1 commi 525-536 della L. 145/2018.

Le tre conseguenze che governano ogni scelta qui sotto:

1. **La credibilità è il messaggio.** Un ambulatorio non vende un prodotto, vende il fatto
   che a firmare sia un medico identificabile. Le credenziali salgono in alto, non finiscono
   nel «chi sono».
2. **Il registro non è promozionale.** Niente promesse di risultato, niente superlativi
   comparativi, niente prezzo civetta. Non è una scelta di stile: è la legge.
3. **Si legge a cinquant'anni.** Corpo del testo più grande e testo secondario più scuro di
   quanto un portfolio si potrebbe permettere.

---

## 1. Due famiglie di neutri

La scelta strutturale del sistema. Un solo accento, ma **due neutri**, e non sono
intercambiabili:

| Famiglia | Token | Dove | Perché |
|---|---|---|---|
| **Caldo** | `--paper` `--surface` `--surface-2` `--hairline` | hero, racconto, trattamenti, sedi, percorso | è la voce del brand: accogliente, editoriale |
| **Freddo** | `--clinical` `--clinical-line` | credenziali, nota clinica | è la voce del referto: qui non si racconta, si dichiara |

Il lettore capisce a colpo d'occhio dove finisce la persuasione e dove inizia il dato.
Il neutro freddo **non è un secondo accento**: è desaturato di proposito, non attira, separa.

```css
--paper:    #F7F3EC;   --clinical:      #E8E9E6;
--surface:  #EDE7DB;   --clinical-line: #C2C5BF;
```

In dark mode: `--clinical: #1A1D1C` contro `--paper: #12100D`, stessa logica invertita.

## 2. Accento unico: ottone

`--brass #A67C3D` è **solo decorativo**: filetti, numerali, bordi, glifi ≥ 36px. Per il testo
esiste la variante scura `--brass-text #7A5620` (5.97:1 su `--paper`). La regola operativa:
se un colore porta informazione deve passare 4.5:1, altrimenti resta al bordo della pagina.

## 3. Tipografia

| Ruolo | Font | Note |
|---|---|---|
| Display | Cormorant Garamond 300-600 | didone stretta, autorità senza rigidità |
| Testo | Montserrat 400-600 | geometrica, alta leggibilità in corpo piccolo |

Entrambi **self-hosted** (woff2 variable, latin + latin-ext, 192 kB totali): nessuna chiamata
a `fonts.gstatic.com`, quindi nessun IP del paziente verso terzi. Su un sito sanitario il
dato di navigazione è già sensibile per contesto.

Scala fluida `--step--1 → --step-4`. Due tarature specifiche del settore:

- **corpo a 17-19px** invece dei canonici 16-18 (`--step-0: clamp(1.0625rem, …, 1.1875rem)`)
- **interlinea 1.7** invece di 1.5-1.6
- **`--muted #4B4437`**, cioè 8.70:1 sul fondo, non il grigio da 4.5:1 di minima

## 3b. Mobile first

La base del CSS, quella senza media query, **è il telefono**. Ogni `@media` è un
`min-width` che aggiunge, mai un `max-width` che ripara. Le eccezioni sono due e
dichiarate: la barra d'azione fissa e il suo spazio in fondo alla pagina.

Le regole che qui cambiano davvero il risultato:

- **Nessuna griglia a colonne fisse sotto i 48rem.** Una `grid-template-columns: 3rem 1fr`
  con tre figli manda il terzo nella colonna da 3rem: il testo va a capo una parola per
  riga. È esattamente il difetto che si è presentato nella lista trattamenti. Sul telefono
  il numero è un'etichetta sopra il titolo, non una colonna.
- **Spaziature grandi fluide** (`--sp-5/6/7` in `clamp`) e ancorate al valore mobile: 104px
  fra due sezioni su desktop sono respiro, su un telefono sono uno scroll a vuoto.
- **Una sola CTA primaria visibile per schermata.** La barra d'azione fissa entra solo
  quando il bottone dell'hero è uscito dal campo. Due bottoni primari identici sulla stessa
  schermata sono una gerarchia rotta, non una comodità.
- **`scroll-margin-top` su ogni sezione con id**, altrimenti l'header fisso mangia il
  titolo a ogni link di ancora.
- **`background-attachment: fixed` solo da 48rem in su**: su iOS costringe a ridipingere il
  viewport a ogni frame di scroll.
- **Dati affiancati, non impilati**: i quattro numeri sotto l'hero stanno in due colonne.
  Quattro righe in verticale sono quattro schermate per dire una cosa sola.

## 4. Ritmo spaziale

Scala non monotona (`0.5 · 0.875 · 1.5 · 2.5 · 4 · 6.5 · 10 rem`). I salti ineguali evitano
la `monotonous-spacing` che il linter Impeccable segnala come tell da generatore.

## 5. Componenti di settore

Tre componenti che un sito editoriale generico non ha e che un ambulatorio non può non avere.

### `.credentials` · striscia credenziali
Albo e numero di iscrizione, specializzazione, master, docenza. Quattro colonne sul neutro
freddo, subito sotto l'hero. È il segnale E-E-A-T più diretto su contenuto medico, e in
Italia l'indicazione dell'iscrizione all'albo è un obbligo, non un vezzo.

### `.nota` · nota clinica
Blocco su neutro freddo con filetto ottone a sinistra ed etichetta in maiuscoletto. Serve
dove il registro deve cambiare: controindicazioni, tempi di ripresa, «l'indicazione si
formula in visita». Visivamente diverso dal corpo del testo perché **non deve leggersi come
copy di vendita**.

### `.faq` · domande frequenti
`<details>/<summary>` nativi, zero JS, marcatura `FAQPage`. Contiene solo domande
**organizzative** (come si prenota, cosa portare, dove si svolge). Le domande cliniche non
stanno qui: rispondervi in pagina sarebbe esattamente il messaggio promozionale che la legge
esclude.

## 6. Dati strutturati

`Physician` con `hasCredential`, `alumniOf`, `award`, `medicalSpecialty`, e `availableService`
di tipo `MedicalProcedure` con `procedureType` e `bodyLocation`. In più `FAQPage`. È il
vocabolario che i motori si aspettano da un profilo sanitario: sbagliarlo significa farsi
leggere come un centro benessere.

## 7. Movimento

Reveal 240ms su `transform` e `opacity`, `prefers-reduced-motion` rispettato. Lo stato
nascosto vive sotto `html.js`: senza JavaScript la pagina è interamente leggibile, e con essa
il contenuto medico.

Nessun parallasse, nessun contatore animato, nessun before/after a slider. Su contenuto
sanitario il movimento decorativo lavora contro la credibilità.

## 8. Cose che questo sistema non fa

- **Niente foto prima/dopo**, neanche come componente. In Italia sono il caso più
  contestato della pubblicità sanitaria.
- **Niente recensioni o testimonianze** costruite.
- **Niente prezzi o pacchetti** in pagina.
- **Niente contatori** «pazienti felici», «anni di esperienza» animati.
- **Niente trattini lunghi** nel copy: leggibilità e voce, non tipografia da comunicato.

## 9. Checklist prima di ogni consegna

- [ ] axe-core: 0 violazioni su wcag2a/2aa/21a/21aa + best-practice
- [ ] ogni coppia di token testo/fondo ≥ 4.5:1, verificata in light **e** dark
- [ ] nessun elemento interattivo sotto 44px
- [ ] iscrizione all'albo visibile senza scorrere fino al footer
- [ ] nessun claim di risultato, nessun superlativo comparativo
- [ ] nessun dato numerico non verificato con il medico
- [ ] JSON-LD valido (`Physician` + `FAQPage`)
- [ ] pagina leggibile con JavaScript disattivato
