"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { Reveal } from "@/components/reveal";
import { TREATMENTS } from "@/lib/content";
import "swiper/css";

/**
 * S3 — carosello trattamenti.
 *
 * Le card si vedono al massimo a ~320px di lato: le sorgenti quadrate arrivano a
 * 640-800px, quindi restano nitide anche a 2x. Non allargarle oltre.
 *
 * Senza JavaScript Swiper non inizializza e la traccia resta un blocco flex fermo:
 * il `<noscript>` qui sotto la trasforma in uno scroller orizzontale nativo, così
 * tutte e otto le card restano raggiungibili.
 */
export function Treatments() {
  const onSwiper = (swiper: SwiperInstance) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swiper.autoplay?.stop();
    }
  };

  return (
    <section className="section bg-ground" aria-labelledby="trattamenti">
      <noscript>
        <style>{`
          .treatments-track .swiper { overflow-x: auto; }
          .treatments-track .swiper-wrapper { transform: none !important; }
        `}</style>
      </noscript>

      <Reveal className="wrap">
        <h2 id="trattamenti" className="u-label text-ink-soft" data-reveal>
          Trattamenti
        </h2>
        <p className="u-lead mt-6 max-w-[34ch] text-ink" data-reveal>
          Otto fra i trattamenti che eseguo più di frequente, chirurgici e non
          chirurgici. L&rsquo;indicazione si stabilisce in visita, caso per caso.
        </p>
      </Reveal>

      <div className="treatments-track wrap-left mt-14 md:mt-20">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          speed={600}
          loop
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{ 768: { spaceBetween: 32 } }}
          onSwiper={onSwiper}
        >
          {TREATMENTS.map((t) => (
            <SwiperSlide
              key={t.title}
              className="!w-[clamp(200px,58vw,320px)] shrink-0"
            >
              <Link href="/trattamenti" className="group block">
                <div className="relative aspect-square overflow-hidden bg-line">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 320px, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="u-label mt-5 block text-ink transition-colors group-hover:text-accent">
                  {t.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="wrap mt-14 md:mt-16">
        <Link href="/trattamenti" className="link-rule u-label">
          <span aria-hidden="true" className="rule" />
          Vedi tutti i trattamenti
        </Link>
      </div>
    </section>
  );
}
