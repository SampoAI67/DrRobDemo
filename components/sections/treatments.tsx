"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { Reveal } from "@/components/reveal";
import { TREATMENTS } from "@/content/treatments";
import { treatments as copy } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
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
export function Treatments({ locale }: { locale: Locale }) {
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
          {copy.kicker[locale]}
        </h2>
        <p className="u-lead mt-6 max-w-[34ch] text-ink" data-reveal>
          {copy.lead[locale]}
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
              key={t.slug}
              className="!w-[clamp(200px,58vw,320px)] shrink-0"
            >
              {/* Punta all'indice finché le schede dedicate non esistono: lo slug
                  è già in `content/treatments.ts`, basterà passarlo a href(). */}
              <Link href={href("treatments", locale)} className="group block">
                <div className="relative aspect-square overflow-hidden bg-line">
                  <Image
                    src={t.image}
                    alt={t.alt[locale]}
                    fill
                    sizes="(min-width: 768px) 320px, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="u-label mt-5 block text-ink transition-colors group-hover:text-accent">
                  {t.title[locale]}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="wrap mt-14 md:mt-16">
        <Link href={href("treatments", locale)} className="link-rule u-label">
          <span aria-hidden="true" className="rule" />
          {copy.cta[locale]}
        </Link>
      </div>
    </section>
  );
}
