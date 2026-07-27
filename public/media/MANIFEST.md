# Inventario immagini — homepage Dr. Dell'Avanzato

Generato da `tools/build-media.py` a partire dagli originali della media library di
`dellavanzatoroberto.it`. 38 file, **1,4 MB** in totale.

**Nessuna immagine è stata ingrandita.** Lo script salta le varianti che richiederebbero
un upscale invece di produrle sfocate.

Le sorgenti stanno in `_src/orig/` e sono escluse dal versionamento (`.gitignore`):
sono materiale del cliente, non asset del progetto.

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

## S3 e S4 — card trattamenti e zone (1:1)

| File | Sorgente | Max nativo |
|---|---|---|
| `sq-endolift-*` | `dr-dellavanzato-endolift2.jpg` | 640 |
| `sq-ultherapy-*` | `LG1A6108.jpg` | 800 |
| `sq-filler-*` | `filler.jpg` | 640 |
| `sq-botulino-*` | `dr-dellavanzato-tossinabotulinica.jpg` | 640 |
| `sq-profhilo-*` | `ProfhiloCampaign2.jpg` | **1080** |
| `sq-liposcultura-*` | `LG1A5542-2.jpg` | 800 |
| `sq-blefaroplastica-*` | `occhi.jpg` | 640 |
| `sq-cellfina-*` | `LG1A6170.jpg` | 640 |
| `sq-rinosettoplastica-*` | `dr-dellavanzato-rinosettoplastica2.jpg` | 640 |
| `sq-corpo-*` | `dr-dellavanzato-liposcultura.jpg` | 640 |

Ogni voce esiste in `-480` e nella larghezza massima nativa.

⚠️ **Tetto reale: 640-800 px.** Le card della S3 si vedono a ~400 px: coperte a 1x,
al limite a 2x. Le zone della S4 si vedono a ~640 px: coperte a 1x, **non** a 2x.
È il limite delle sorgenti, non un difetto della pipeline.

## S5 — cluster fluttuante

| File | Sorgente |
|---|---|
| `cluster-1-400.webp` (400×300) | `dr-dellavanzato-endolift2.jpg` |
| `cluster-2-300.webp` (300×400) | `innovatione.jpg` |
| `cluster-3-300.webp` (300×400) | `LG1A5717.jpg` |

Scartati i product shot su fondo bianco (`nanosoft`, `teos`): a 130-170 px su fondo bone
il contorno netto li fa sembrare adesivi.

## S6 — accordion metodo (2.35:1)

| File | Voce | Sorgente |
|---|---|---|
| `method-01-esperienza-*` | ESPERIENZA CLINICA | `Roberto-dellAvanzato_1695.jpg` — ritratto su fondo grigio scuro, ideale per la sezione scura |
| `method-02-tecnologia-*` | TECNOLOGIA | `innovatione.jpg` — al dispositivo |
| `method-03-insegnamento-*` | INSEGNAMENTO | `LG1A5894-2-1.jpg` — in studio |
| `method-04-percorso-*` | PERCORSO PERSONALIZZATO | `dr-dellavanzato-chi-sono2.jpg` |

Banda 2.35:1 invece di 16:9: le sorgenti a 1500×630 non arrivano a 16:9 senza upscale,
e una banda cinematografica sta meglio nel registro editoriale.

## Logo

`logo-600.webp`, 600×156, da `dellavanzato-logo-rev06.png`. Accento `#00B0C8`.

---

## Da verificare prima del go-live

- ⚠️ **`sq-botulino`**: l'immagine mostra un flacone di tossina botulinica con etichetta
  parzialmente leggibile. In Italia i medicinali con obbligo di ricetta non possono
  essere pubblicizzati al pubblico (D.Lgs. 219/2006). **Da far valutare al consulente
  del cliente**: o si sostituisce l'immagine, o si conferma che così com'è non è
  pubblicità di un medicinale. Non l'ho rimossa da sola perché toglierebbe una card
- **`sq-rinosettoplastica`** e le immagini cliniche del corpo: soggetti in parte
  scoperti. Coerenti col sito attuale, ma da confermare per il nuovo registro
- Tutte le immagini sono materiale del cliente: liberatorie dei soggetti ritratti da
  verificare, non risultano da nessuna fonte pubblica
