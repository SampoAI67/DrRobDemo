"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Ritardo fra un figlio `[data-reveal]` e il successivo. */
  stagger?: number;
};

/**
 * Reveal a scroll: opacity 0→1, y 24→0, .8s power2.out, stagger .08, una volta sola.
 *
 * Anima i discendenti marcati `[data-reveal]`, o il contenitore stesso se non ce ne
 * sono. È un `gsap.from`: lo stato finale è quello del markup, quindi senza JS il
 * contenuto resta semplicemente visibile.
 */
export function Reveal({ children, className, stagger = 0.08 }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.registerPlugin(ScrollTrigger);

      const marked = el.querySelectorAll<HTMLElement>("[data-reveal]");
      const targets: HTMLElement[] = marked.length ? Array.from(marked) : [el];

      gsap.from(targets, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        stagger,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
