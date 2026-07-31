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
import { endolift as copy, endoliftClusterAlt } from "@/content/home";
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
const MOBILE = [
  { area: "col-start-1 col-span-6 row-start-1", max: "max-w-[10.5rem]", parallax: 34 },
  { area: "col-start-8 col-span-5 row-start-1 mt-[22%]", max: "max-w-[8.75rem]", parallax: 16 },
  { area: "col-start-3 col-span-5 row-start-2 -mt-[10%]", max: "max-w-[9.5rem]", parallax: 26 },
];

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
  const mobileStage = useRef<HTMLUListElement>(null);
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
      const root = mobileStage.current;
      if (!root) return;
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
            { y: MOBILE[i].parallax },
            {
              y: -MOBILE[i].parallax,
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
          // L'altezza minima serve a fare spazio al cluster in `absolute`, che
          // esiste solo da md: sotto, lasciava mezza schermata di vuoto sopra e
          // sotto lo statement.
          className="relative flex items-center justify-center py-4 md:min-h-[34rem]"
        >
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

        {/* Sotto md il cluster torna nel flusso, sfalsato invece che in riga.
            L'entrata la dà `Reveal` sul <li>, la deriva a scroll il <div>
            interno: due elementi annidati perché entrambe le animazioni
            scrivono su `y`, e sullo stesso nodo l'una sovrascriverebbe l'altra. */}
        <Reveal className="md:hidden">
          <ul
            ref={mobileStage}
            className="mt-14 grid grid-cols-12 items-start gap-x-3"
          >
            {CLUSTER.map((item, i) => (
              <li key={item.src} className={MOBILE[i].area} data-reveal>
                <div
                  ref={(el) => {
                    mobileItems.current[i] = el;
                  }}
                  className={MOBILE[i].max}
                >
                  <Image
                    src={media(item.src)}
                    alt={endoliftClusterAlt[i][locale]}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 767px) 45vw, 170px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
