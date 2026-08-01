"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/services/product-service";

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlides[activeIndex];

  function goTo(index: number) {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }

  return (
    <section
      data-od-id="hero"
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gg-ink md:min-h-[480px]"
    >
      <div className="relative flex flex-col md:flex-row md:items-stretch">
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-12 md:px-14 md:py-20">
          <p className="gg-editorial-label">{slide.eyebrow}</p>
          <h1 className="gg-display mt-4 text-4xl uppercase md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55 md:text-[15px]">
            {slide.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/shop" className="gg-btn-primary">
              {slide.cta}
            </Link>
            <Link href="/style" className="gg-btn-ghost hidden sm:inline-flex">
              View Style Feed
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-px transition-all duration-500 ${
                  i === activeIndex ? "w-10 bg-gg-pink" : "w-4 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-72 w-full md:absolute md:right-0 md:top-0 md:h-full md:w-[55%]">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 55vw"
            className="object-cover object-top md:object-center"
          />
          <div className="gg-image-vignette absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-gg-ink via-gg-ink/70 to-transparent md:from-gg-ink md:via-gg-ink/30" />
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(activeIndex - 1)}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2.5 text-white/80 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white md:block"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(activeIndex + 1)}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2.5 text-white/80 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white md:block"
      >
        <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </section>
  );
}
