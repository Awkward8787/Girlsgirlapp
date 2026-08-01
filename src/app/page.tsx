import { Suspense } from "react";
import { HeroCarousel } from "@/components/hero-carousel";
import { NewDropBanner } from "@/components/new-drop-banner";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";
import { TrendingLooks } from "@/components/trending-looks";
import { CommunitySection } from "@/components/community-section";
import { getFeaturedProducts } from "@/services/product-service";

function BrandManifesto() {
  return (
    <div
      data-od-id="manifesto"
      className="border-y border-white/[0.06] py-8 text-center md:py-10"
    >
      <p className="gg-editorial-label">What They Talkin Bout</p>
      <p className="mx-auto mt-3 max-w-lg font-display text-xl italic leading-relaxed text-white/70 md:text-2xl">
        More than fashion — a movement for women who support women, stay loyal, and keep shining.
      </p>
    </div>
  );
}

function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section data-od-id="featured" className="mt-12 md:mt-16">
      <SectionHeader title="Featured Products" href="/shop" />
      <div className="mt-6 flex gap-4 overflow-x-auto hide-scrollbar md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} layout="horizontal" />
        ))}
      </div>
    </section>
  );
}

function FeaturedProductsFallback() {
  return (
    <section className="mt-12">
      <div className="h-4 w-48 animate-pulse rounded bg-gg-surface" />
      <div className="mt-6 flex gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-72 w-[168px] shrink-0 animate-pulse rounded-2xl bg-gg-surface"
          />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 md:py-8">
      <HeroCarousel />

      <div className="mt-10 md:mt-14">
        <BrandManifesto />
      </div>

      <div className="mt-10 md:mt-14">
        <NewDropBanner />
      </div>

      <Suspense fallback={<FeaturedProductsFallback />}>
        <FeaturedProducts />
      </Suspense>

      <section data-od-id="trending" className="mt-12 md:mt-16">
        <SectionHeader title="Trending Looks" href="/shop" />
        <div className="mt-6">
          <TrendingLooks />
        </div>
      </section>

      <div className="mt-12 md:mt-16">
        <CommunitySection />
      </div>
    </div>
  );
}
