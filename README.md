# Concept di redesign · Dott. Roberto Dell'Avanzato

Proposta di rifacimento per `dellavanzatoroberto.it`, medicina e chirurgia estetica,
Milano ed Erbusco.

> **Non è il sito ufficiale del Dott. Dell'Avanzato.** È un concept non commissionato,
> pubblicato con `noindex` e con l'indicazione esplicita in fondo alla pagina.

Il sistema di design, con il ragionamento dietro ogni scelta, è in
[`design-system.md`](design-system.md).

---

## Stack

HTML, CSS e ~50 righe di JavaScript. Nessuna dipendenza, nessun build step, nessuna
richiesta di rete a runtime: i font sono self-hosted, quindi nessun IP del visitatore
raggiunge Google.

```
index.html            una pagina, 10 sezioni
styles.css            token + 16 blocchi commentati
fonts.css             @font-face self-hosted
main.js               reveal on scroll, filetto header, anno
design-system.md      il sistema e il perché delle scelte di settore
assets/fonts/         Cormorant Garamond + Montserrat (variable, latin + latin-ext)
assets/og-image.jpg   1200×630, generata da assets/og-source.html
tools/make-og.mjs     rigenera l'og-image con Playwright
```

## Anteprima locale

```bash
npx http-server -p 8099 -s .
```

## Qualità

| Controllo | Esito |
|---|---|
| axe-core wcag2a/2aa, wcag21a/21aa, best-practice | 0 violazioni, 36 passes |
| Contrasto di tutte le coppie di token | ≥ 4.5:1, verificato in light e dark |
| Touch target | nessuno sotto 44px |
| Overflow orizzontale @1440 / @390 | nessuno |
| `prefers-reduced-motion` | rispettato |
| Senza JavaScript | pagina interamente leggibile |

---

## Provenienza dei contenuti

Il sito originale non è stato raggiungibile durante la costruzione. Tutti i dati in pagina
provengono da fonti pubbliche di terze parti (SICPRE, Casa di Cura La Madonnina / Gruppo
San Donato, Ultherapy.it, TuaMe, MioDottore, TopDoctors), raccolte il 2026-07-25, e
**vanno verificati con il diretto interessato** prima di qualsiasi uso.

Non compaiono in pagina, per scelta: recensioni, testimonianze, prezzi, percentuali di
successo, promesse di risultato, foto prima/dopo, numeri di telefono. Dove il dato manca,
la pagina scrive «da inserire».

I testi sono in registro informativo e non promozionale, come richiesto dall'art. 1
commi 525-536 della L. 145/2018 sulla pubblicità sanitaria.

### Da completare prima di un eventuale go-live

- [ ] Ritratto clinico reale nel segnaposto dell'hero (4:5, ≥1200px, AVIF/WebP < 200 kB)
- [ ] Numero di telefono dello studio
- [ ] P. IVA e direttore sanitario nel footer
- [ ] Verifica di ogni dato numerico e di ogni trattamento elencato
- [ ] Conferma delle quattro risposte in «Domande frequenti»: sono organizzative e
      plausibili, ma descrivono una prassi di studio da confermare
- [ ] Privacy policy e cookie policy
- [ ] Rimozione di `<meta name="robots" content="noindex, nofollow">` e della riga
      «Concept di redesign» nel footer
