"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal } from "@/components/reveal";
import { media } from "@/lib/media";
import { bySlug } from "@/content/treatments";
import { endolift as copy } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/** Le tre immagini restano fra 130 e 170px: a quella scala le sorgenti reggono. */
const CLUSTER = [
  {
    src: "cluster-1",
    width: 400,
    height: 300,
    /** posizione sul contenitore, desktop */
    position: "left-[2%] top-[8%] w-[10.5rem]",
    amplitude: 32,
  },
  {
    src: "cluster-2",
    width: 300,
    height: 400,
    position: "right-[3%] top-[24%] w-[8.75rem]",
    amplitude: 24,
  },
  {
    src: "cluster-3",
    width: 300,
    height: 400,
    position: "bottom-[6%] left-[11%] w-[9.5rem]",
    amplitude: 28,
  },
];

const RADIUS = 210; // px entro cui il cursore magnetizza
const STRENGTH = 0.58;

/**
 * Composizione del cluster sotto md.
 *
 * Prima qui c'era una riga allineata a `items-end`: tre immagini della stessa
 * altezza, ferme, in fondo a mezza schermata di vuoto. Ora ricalca l'assetto
 * desktop — una grande a sinistra in alto, una stretta a destra più in basso,
 * una terza sfalsata sotto che si incastra fra le due — con la griglia a 12
 * colonne invece delle posizioni assolute: a 390px il testo occupa tutta la
 * larghezza, e immagini in `absolute` gli finirebbero sopra.
 *
 * `max` non supera mai la larghezza che ogni immagine ha su desktop: le
 * sorgenti arrivano a 400px (cluster-1) e 300px (le altre due), e il layout si
 * adatta al file, mai il contrario (`public/media/INVENTARIO.md`).
 *
 * `parallax` è l'ampiezza in px della deriva legata allo scroll: valori diversi
 * fanno scorrere le tre immagini a velocità diverse.
 */
/**
 * `from`/`to` sono la traslazione verticale in px agli estremi della corsa: a
 * `from` quando la sezione entra dal basso, a `to` quando esce dall'alto.
 *
 * Non è una coppia simmetrica per capriccio. Le prime due salgono, la terza
 * **scende**: se scendesse anche lei — cioè se salisse come le altre — si
 * avvicinerebbe al link «La metodica Endolift®», e quel link ha 0,38 di margine
 * sulla soglia AA (vedi `MOBILE_OPACITY`). Misurato sulla versione precedente,
 * col terzo elemento in salita il varco fra immagine e link passava da 53 a 2px
 * nel corso dello scroll. Facendola scendere il varco si allarga invece di
 * chiudersi, e in più la contro-direzione rende la parallasse molto più
 * leggibile di tre immagini che scorrono insieme.
 *
 * La corsa di ogni immagine è verificata a otto posizioni di scroll da
 * `tools/contrast-endolift.py`: con le immagini in movimento il contrasto non è
 * più una proprietà di una schermata, ma di tutto lo scorrimento.
 */
const MOBILE = [
  {
    position: "left-[-4%] top-[1%] w-[44%] max-w-[10.5rem]",
    from: 54,
    to: -54,
  },
  {
    position: "right-[-3%] top-[19%] w-[37%] max-w-[8.75rem]",
    from: 30,
    to: -30,
  },
  {
    position: "bottom-[1%] left-[9%] w-[40%] max-w-[9.5rem]",
    from: -8,
    to: 56,
  },
];

/**
 * Opacità del cluster mobile, che sta **sotto** il testo.
 *
 * Il vincolo non è il corpo del testo — l'ink è quasi nero e sopravvive a
 * fondi molto più scuri del bone — ma il link «La metodica Endolift®»:
 * l'accento `#00747F` sul fondo chiaro dà 4,9:1, cioè appena sopra la soglia
 * AA di 4,5. Qualunque immagine dietro quel link lo fa scendere sotto, quindi
 * il terzo elemento è posizionato in modo da lasciargli libera la fascia, e
 * non è un dettaglio estetico: è la ragione per cui sta lì.
 *
 * Il valore è misurato sui pixel con `tools/contrast-endolift.py`, non scelto
 * a occhio: sopra una foto il controllo sul DOM confronta con
 * `background-color`, che lì è trasparente, e restituisce un falso «a posto».
 */
const MOBILE_OPACITY = 0.28;

/**
 * S5 — Endolift®.
 *
 * Statement grande e tre immagini che derivano col mouse e si lasciano attrarre
 * quando il cursore passa vicino. Sotto md il cluster diventa una riga statica:
 * a quella larghezza le immagini flottanti coprirebbero il testo.
 */
export function Endolift({ locale }: { locale: Locale }) {
  const stage = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLDivElement | null)[]>([]);
  const mobileStage = useRef<HTMLDivElement>(null);
  const mobileItems = useRef<(HTMLDivElement | null)[]>([]);
  const endoliftSlug = bySlug("endolift")?.slug[locale];

  /**
   * Deriva a scroll del cluster mobile.
   *
   * È la controparte dell'effetto mouse di sopra: lì le immagini inseguono il
   * cursore con `quickTo`, qui inseguono lo scroll. `scrub` numerico è ciò che
   * dà il rimbalzo — l'animazione non si incolla alla posizione di scroll ma la
   * raggiunge in mezzo secondo, quindi le immagini partono, sfilano oltre e si
   * assestano, esattamente come l'inerzia di `quickTo` sul desktop. Con
   * `scrub: true` seguirebbero lo scroll rigidamente e sarebbe un altro effetto.
   *
   * Ampiezze diverse per immagine: è quello che rende la parallasse leggibile,
   * altrimenti si muoverebbero come un blocco solo.
   */
  useGSAP(
    () => {
      // Il trigger è il palco, non il contenitore delle immagini: quello ha
      // solo figli in `absolute`, quindi altezza zero, e l'intervallo
      // «top bottom → bottom top» collasserebbe in un punto.
      const root = stage.current;
      if (!root || !mobileStage.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.registerPlugin(ScrollTrigger);

      // matchMedia e non un controllo sulla larghezza una tantum: al passaggio
      // sopra md GSAP disfa da sé questi ScrollTrigger, che su desktop
      // agirebbero su nodi nascosti e sporcherebbero i calcoli di posizione.
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        mobileItems.current.forEach((el, i) => {
          if (!el) return;

          gsap.fromTo(
            el,
            { y: MOBILE[i].from },
            {
              y: MOBILE[i].to,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: mobileStage },
  );

  useGSAP(
    () => {
      const root = stage.current;
      if (!root) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const setters = items.current.map((el) =>
        el
          ? {
              x: gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" }),
              y: gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" }),
            }
          : null,
      );

      const onMove = (event: PointerEvent) => {
        const bounds = root.getBoundingClientRect();
        const nx = (event.clientX - bounds.left) / bounds.width - 0.5;
        const ny = (event.clientY - bounds.top) / bounds.height - 0.5;

        items.current.forEach((el, i) => {
          const set = setters[i];
          if (!el || !set) return;

          const amp = CLUSTER[i].amplitude;
          let tx = nx * amp * 2;
          let ty = ny * amp * 2;

          // Centro a riposo: la rect corrente include già la traslazione in corso.
          const rect = el.getBoundingClientRect();
          const curX = Number(gsap.getProperty(el, "x")) || 0;
          const curY = Number(gsap.getProperty(el, "y")) || 0;
          const cx = rect.left - curX + rect.width / 2;
          const cy = rect.top - curY + rect.height / 2;

          const dx = event.clientX - cx;
          const dy = event.clientY - cy;
          const distance = Math.hypot(dx, dy);

          if (distance < RADIUS) {
            const falloff = 1 - distance / RADIUS;
            tx += dx * STRENGTH * falloff;
            ty += dy * STRENGTH * falloff;
          }

          set.x(tx);
          set.y(ty);
        });
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: stage },
  );

  return (
    <section className="section bg-ground" aria-labelledby="endolift">
      <div className="wrap">
        <div
          ref={stage}
          // Il `pb` mobile non è spaziatura: alza il blocco di testo dentro il
          // palco e libera in fondo una fascia per la terza immagine, così il
          // link in accento non le finisce sopra. Vedi `MOBILE_OPACITY`.
          className="relative flex min-h-[36rem] items-center justify-center pt-4 pb-40 md:min-h-[34rem] md:py-4"
        >
          {/* Cluster mobile: stesso assetto sfalsato di prima, ma dietro il
              testo invece che sotto.

              Nessun z-index, come il cluster desktop qui sotto: sta dietro
              perché lo statement ha `relative z-10`. Un `-z-10` sembrerebbe
              più esplicito ma le rende invisibili — un indice negativo dipinge
              prima degli sfondi di blocco, e il `bg-ground` della sezione ci
              passa sopra. Verificato: scatto senza una sola immagine.

              Decorativo come su desktop — `alt=""` e `aria-hidden` — perché a
              questa opacità è una texture: far annunciare tre descrizioni di
              fotografie in mezzo a una citazione sarebbe solo rumore. */}
          <Reveal className="md:hidden">
            <div ref={mobileStage} aria-hidden="true">
              {CLUSTER.map((item, i) => (
                <div
                  key={item.src}
                  className={`pointer-events-none absolute ${MOBILE[i].position}`}
                  data-reveal
                >
                  <div
                    ref={(el) => {
                      mobileItems.current[i] = el;
                    }}
                    style={{ opacity: MOBILE_OPACITY }}
                  >
                    <Image
                      src={media(item.src)}
                      alt=""
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 767px) 45vw, 170px"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Cluster fluttuante — decorativo, quindi fuori dal flusso e solo da md. */}
          {CLUSTER.map((item, i) => (
            <div
              key={item.src}
              ref={(el) => {
                items.current[i] = el;
              }}
              className={`pointer-events-none absolute hidden md:block ${item.position}`}
              aria-hidden="true"
            >
              <Image
                src={media(item.src)}
                alt=""
                width={item.width}
                height={item.height}
                sizes="170px"
                className="h-auto w-full object-cover"
              />
            </div>
          ))}

          <Reveal className="relative z-10 max-w-[40rem] text-center">
            {/* Niente <sup> dentro .u-label: il letter-spacing dell'etichetta si
                applica anche dopo l'ultima lettera e stacca il simbolo. Il glifo ®
                è già disegnato in apice — inline, come ovunque nel sito. */}
            <h2 id="endolift" className="u-label text-ink-soft" data-reveal>
              {copy.kicker[locale]}
            </h2>
            <blockquote className="mt-8" data-reveal>
              <p className="u-lead text-balance text-ink">
                {copy.quote[locale]}
              </p>
            </blockquote>
            <div className="mt-12 flex justify-center" data-reveal>
              {/* Il link dice «la metodica Endolift®»: ora che la scheda esiste,
                  porta lì e non più all'indice. */}
              <Link
                href={
                  endoliftSlug
                    ? href("treatment", locale, endoliftSlug)
                    : href("treatments", locale)
                }
                className="link-rule u-label"
              >
                <span aria-hidden="true" className="rule" />
                {copy.cta[locale]}
              </Link>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
