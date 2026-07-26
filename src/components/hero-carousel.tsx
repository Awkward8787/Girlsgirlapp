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
    <section className="relative overflow-hidden rounded-2xl bg-gg-surface md:min-h-[420px]">
      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-10 md:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gg-pink">
            {slide.eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
            {slide.title}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            {slide.body}
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-flex w-fit items-center rounded-full gg-gradient-pink px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {slide.cta}
          </Link>
          <div className="mt-6 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={heroSlides[i].id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-gg-pink" : "w-2 bg-gg-muted/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-64 w-full md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover object-top md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gg-surface via-gg-surface/60 to-transparent md:from-gg-surface md:via-gg-surface/40" />
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(activeIndex - 1)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-gg-pink md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(activeIndex + 1)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-gg-pink md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
