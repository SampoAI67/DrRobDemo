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
- **Soggetti in parte scoperti:** `sq-rinosettoplastica`, `sq-mastoplastica`,
  `sq-body-reshaping`, `sq-face-rebuilding`, `sq-buttock`. Sono le stesse immagini che
  il cliente usa oggi, ma sul sito attuale stanno dentro pagine lunghe, mentre qui
  finiscono in una griglia di card tutte uguali, dove si notano molto di più.
  **Da rivedere con il cliente prima di pubblicare l'indice trattamenti**
- **`sq-ladylift` è un'illustrazione medica 3D**, non una fotografia. In una griglia di
  foto stona: o si accetta, o si chiede un'immagine fotografica
- **Permalip non ha immagine.** Non esiste materiale: la scheda va progettata senza
  apertura, oppure va chiesta una foto al cliente. Non sostituirla con la foto di un
  altro trattamento
- **Il logo ha il fondo bianco cotto nel PNG**, niente canale alfa: su fondo bone si
  vedrebbe il riquadro. Per usarlo in pagina serve un SVG o un PNG con trasparenza
- Tutte le immagini sono materiale del cliente: liberatorie dei soggetti ritratti da
  verificare, non risultano da nessuna fonte pubblica
