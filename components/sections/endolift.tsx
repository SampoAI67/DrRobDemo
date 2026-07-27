"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Reveal } from "@/components/reveal";

/** Le tre immagini restano fra 130 e 170px: a quella scala le sorgenti reggono. */
const CLUSTER = [
  {
    src: "/media/cluster-1.webp",
    alt: "Fibra laser impiegata nella metodica Endolift®",
    width: 400,
    height: 300,
    /** posizione sul contenitore, desktop */
    position: "left-[2%] top-[8%] w-[10.5rem]",
    amplitude: 32,
  },
  {
    src: "/media/cluster-2.webp",
    alt: "Dispositivo laser in studio",
    width: 300,
    height: 400,
    position: "right-[3%] top-[24%] w-[8.75rem]",
    amplitude: 24,
  },
  {
    src: "/media/cluster-3.webp",
    alt: "Il dott. Dell'Avanzato durante un intervento",
    width: 300,
    height: 400,
    position: "bottom-[6%] left-[11%] w-[9.5rem]",
    amplitude: 28,
  },
];

const RADIUS = 210; // px entro cui il cursore magnetizza
const STRENGTH = 0.58;

/**
 * S5 — Endolift®.
 *
 * Statement grande e tre immagini che derivano col mouse e si lasciano attrarre
 * quando il cursore passa vicino. Sotto md il cluster diventa una riga statica:
 * a quella larghezza le immagini flottanti coprirebbero il testo.
 */
export function Endolift() {
  const stage = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLDivElement | null)[]>([]);

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
          className="relative flex min-h-[34rem] items-center justify-center py-4"
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
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                sizes="170px"
                className="h-auto w-full object-cover"
              />
            </div>
          ))}

          <Reveal className="relative z-10 max-w-[40rem] text-center">
            <h2 id="endolift" className="u-label text-ink-soft" data-reveal>
              Endolift<sup className="text-[0.6em]">®</sup>
            </h2>
            <blockquote className="mt-8" data-reveal>
              <p className="u-lead text-balance text-ink">
                «La passione per le tecnologie medicali mi ha portato ad essere tra
                i primi in Italia nel 2002 ad eseguire la liposuzione laser
                assistita, e nel 2005 a sviluppare personalmente la metodica
                Endolift®.»
              </p>
            </blockquote>
            <div className="mt-12 flex justify-center" data-reveal>
              <Link href="/trattamenti" className="link-rule u-label">
                <span aria-hidden="true" className="rule" />
                La metodica Endolift<sup className="text-[0.6em]">®</sup>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Sotto md il cluster torna nel flusso, in riga. */}
        <ul className="mt-12 flex items-end justify-center gap-4 md:hidden">
          {CLUSTER.map((item) => (
            <li key={item.src} className="w-[7.5rem]">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="120px"
                className="h-auto w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
