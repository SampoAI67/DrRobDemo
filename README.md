# Concept di redesign · Dott. Roberto Dell'Avanzato

Rifacimento di [dellavanzatoroberto.it](https://www.dellavanzatoroberto.it/) — medicina e
chirurgia estetica, Milano — con i contenuti e le fotografie del sito originale
riorganizzati in un sito statico bilingue.

> **Non è il sito ufficiale del Dott. Dell'Avanzato.** È un concept non commissionato,
> pubblicato in `noindex` e con l'indicazione esplicita nel footer di ogni pagina.
> Testi e immagini appartengono ai legittimi proprietari.

---

## Cosa cambia rispetto all'originale

| Problema dell'originale | Come è risolto qui |
|---|---|
| Le tre pagine dei macro-servizi ripetono lo stesso blocco immagine + testo, con font piccoli | Ritmo editoriale: hero asimmetrico, blocchi alternati, corpo del testo a 17px su misura di 68 caratteri |
| «Come vorresti valorizzarti?»: oltre 200 trattamenti in bullet su due colonne | **Selettore per zona del corpo**: si sceglie la zona, restano solo i trattamenti che la riguardano. Stato nella query string, quindi condivisibile |
| L'elenco degli interventi chirurgici è un muro di testo | Fisarmonica su `<details>`, animata dove il browser lo permette, funzionante anche senza JavaScript |
| Nessuna versione inglese | IT su root, EN sotto `/en` con slug tradotti, `hreflang` e switch in ogni pagina |
| Pagina contatti spoglia, mappa centrata sul quartiere | Riquadro con indirizzo, riferimenti d'accesso e pin sul civico; la mappa interattiva (OpenStreetMap, nessun cookie) si carica solo al clic |
| Form unico e generico | Richiesta di visita in quattro passi: interesse → zona → tempistica → contatti |
| Nessun dato strutturato | `Physician` + `MedicalClinic`, `MedicalProcedure` sulle pagine flagship, `FAQPage` su ogni sezione con domande |
| Contenuti non aggiornati (orari «settembre 2025», e-mail `@hotmail.it`) | Segnaposto espliciti: i dati da confermare non vengono inventati |

Endolift® — la metodica che il Dott. Dell'Avanzato ha sviluppato dal 2005 — passa da
essere un post fra gli altri ad avere un blocco dedicato in home e una pagina di
approfondimento.

Niente foto prima/dopo, recensioni, prezzi o promesse di risultato: la pubblicità
sanitaria in Italia (L. 145/2018, art. 1 commi 525-536) ammette solo comunicazione
informativa. Al loro posto c'è un **trust wall** di fatti verificabili: cattedre,
società scientifiche, premi, missioni umanitarie, numero di iscrizione all'Ordine.

---

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · export statico, nessun backend.

```
app/(it)/            rotte italiane, root layout con lang="it"
app/(en)/en/         rotte inglesi, root layout con lang="en"
views/               una vista per pagina, condivisa fra le due lingue
components/          guscio, sezioni editoriali, moduli interattivi
content/             tutti i testi, in italiano e inglese affiancati
lib/                 rotte, i18n, metadata
tools/fetch-images.mjs  scarica le immagini originali e le converte in WebP
```

I contenuti stanno tutti in `content/`, con le due lingue una accanto all'altra: se
cambia l'italiano si vede subito cosa va tradotto.

## Sviluppo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # export statico in out/
```

## Immagini

Le fotografie sono quelle del sito originale. Non stanno nel repository come file
sorgente: `content/images.json` elenca i 44 URL originali con l'alt in due lingue, e il
workflow **Fetch immagini originali** (`.github/workflows/fetch-assets.yml`, esecuzione
manuale) le scarica, genera le varianti WebP a 480/960/1600 px in `public/media/` e le
committa. `npm run fetch:images` fa la stessa cosa in locale.

## Deploy

Il workflow **Deploy su GitHub Pages** builda con `BASE_PATH=/DrRobDemo` e pubblica
`out/`. Per il form, impostare il segreto `W3F_ACCESS_KEY` (Web3Forms): senza chiave il
modulo ripiega su un `mailto:` già compilato e resta comunque utilizzabile.

## Da confermare con il diretto interessato

- [ ] Orari di studio (l'originale riporta ancora «apertura ultima settimana di settembre 2025»)
- [ ] Indirizzo e-mail di contatto pubblico
- [ ] Privacy policy e cookie policy
- [ ] Verifica di ogni dato numerico e di ogni trattamento elencato
