# Immagini — le scelte e il perché

L'elenco meccanico (nomi, larghezze, sorgenti) è in [INVENTARIO.md](INVENTARIO.md),
rigenerato a ogni build. Qui c'è solo il ragionamento, che va letto prima di toccare
le immagini.

Generate da `tools/build-media.py` dagli originali della media library di
`dellavanzatoroberto.it`: **49 immagini, 101 varianti, 2,7 MB**.

**Nessuna immagine è stata ingrandita.** Lo script salta le varianti che richiederebbero
un upscale invece di produrle sfocate, e le dichiara nell'inventario.

**La mappa delle varianti la genera lo script**, in `lib/image-variants.ts`. Prima era
scritta a mano nel loader: bastava aggiungere un'immagine e scordare la mappa perché
`next/image` ripiegasse in silenzio sulla src canonica, servendo l'originale a piena
risoluzione. Ora non può andare fuori sincrono.

Le sorgenti stanno in `_src/orig/` e sono escluse dal versionamento (`.gitignore`):
sono materiale del cliente, non asset del progetto.

## Formati

| Prefisso | Rapporto | A cosa serve |
|---|---|---|
| `hero-desktop` / `hero-mobile` | 16:9 / 9:16 | apertura della home, due inquadrature diverse |
| `sq-` | 1:1 | carosello home, indice trattamenti, selettore per zona |
| `open-` | 3:2 | apertura delle schede trattamento |
| `method-` | 2.35:1 | banda dell'accordion «Il metodo» |
| `bio-` | 3:2 | pagina biografia |
| `cluster-` | varie | immaginette fluttuanti della sezione Endolift |

⚠️ **Le aperture `open-` si fermano a 960 px** (poche arrivano a 1200-1440). Vanno
mostrate a **non più di ~640 px di larghezza**, o sfocano su schermi 2x. Non è un
difetto della pipeline: è il tetto delle sorgenti del cliente.

---

## S1 — Hero

L'unico originale ad alta risoluzione dell'intera libreria: **`LG1A6314.jpg`, 6720×4480**
(10,3 MB). Il dottore esegue un'iniezione in studio, lampada scialitica e pannello verde
sullo sfondo.

| File | Dimensioni | Peso |
|---|---|---|
| `hero-desktop-3200.webp` | 3200×1800 | 159 kB |
| `hero-desktop-1920.webp` | 1920×1080 | 78 kB |
| `hero-desktop-1280.webp` | 1280×720 | 44 kB |
| `hero-mobile-1500.webp` | 1500×2667 | 117 kB |
| `hero-mobile-828.webp` | 828×1472 | 50 kB |

- **Desktop:** ritaglio 16:9 ancorato in alto — tiene lampada e pannello verde
- **Mobile:** ritaglio 9:16 centrato — l'unico che tiene sia il medico sia la paziente
- **Testo in basso a sinistra:** gli occhi della paziente stanno al ~45% dell'altezza,
  ben sopra un blocco di testo ancorato al fondo. Serve comunque lo scrim

## Logo

`logo-600.webp`, 600×156, da `dellavanzato-logo-rev06.png`. Accento `#00B0C8`.

---

## Da verificare prima del go-live

- ⚠️ **`sq-botulino`**: l'immagine mostra un flacone di tossina botulinica con etichetta
  parzialmente leggibile. In Italia i medicinali con obbligo di ricetta non possono
  essere pubblicizzati al pubblico (D.Lgs. 219/2006). **Da far valutare al consulente
  del cliente**: o si sostituisce l'immagine, o si conferma che così com'è non è
  pubblicità di un medicinale. Non l'ho rimossa da sola perché toglierebbe una card
- ⚠️ **Le immagini di stock sono modelli, non pazienti.** Sette schede
  (`mastoplastica`, `body-reshaping`, `buttock`, `rinosettoplastica`, `ladylift`,
  `permalip`, `face-rebuilding`) usano fotografie Pexels. **Non vanno mai presentate
  come risultati ottenuti nello studio**, né accostate a diciture che lo lascino
  intendere: sarebbe ingannevole, e su materiale sanitario è un problema serio.
  L'elenco con autore e link è in [INVENTARIO.md](INVENTARIO.md)
- **Il logo ha il fondo bianco cotto nel PNG**, niente canale alfa: su fondo bone si
  vedrebbe il riquadro. Per usarlo in pagina serve un SVG o un PNG con trasparenza
- Le immagini del cliente: liberatorie dei soggetti ritratti da verificare, non
  risultano da nessuna fonte pubblica

## Perché sette immagini vengono dallo stock

Le fotografie cliniche del cliente per mastoplastica, body reshaping, glutei e
rinosettoplastica mostrano soggetti in parte scoperti. Sul suo sito attuale stanno
dentro pagine lunghe, dove passano inosservate; nel nuovo indice trattamenti finiscono
in una **griglia di card tutte uguali**, dove si notano molto di più e cambiano il
registro della pagina. Ladylift era un'illustrazione 3D in mezzo a fotografie, e
Permalip non aveva alcuna immagine.

Le originali restano in `_src/orig/`: se il cliente le preferisce, si rimettono
cambiando una riga in `tools/build-media.py`.

**Dove il cliente resta protagonista:** hero, accordion del metodo, sezione Endolift e
biografia usano le sue fotografie vere. È lì che l'autenticità conta, ed è un vantaggio
che lo stock non può dare.

Effetto collaterale utile: le sorgenti Pexels sono da **4000-4480 px**, contro i
1000-1500 px del materiale del cliente. Per quelle sette schede il tetto di risoluzione
non esiste più.
