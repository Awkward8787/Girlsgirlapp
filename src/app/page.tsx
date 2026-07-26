import { Suspense } from "react";
import { HeroCarousel } from "@/components/hero-carousel";
import { NewDropBanner } from "@/components/new-drop-banner";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";
import { TrendingLooks } from "@/components/trending-looks";
import { CommunitySection } from "@/components/community-section";
import { getFeaturedProducts } from "@/services/product-service";

function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="mt-8">
      <SectionHeader title="Featured Products" href="/shop" />
      <div className="mt-4 flex gap-3 overflow-x-auto hide-scrollbar md:grid md:grid-cols-4 md:gap-4 md:overflow-visible">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} layout="horizontal" />
        ))}
      </div>
    </section>
  );
}

function FeaturedProductsFallback() {
  return (
    <section className="mt-8">
      <div className="h-5 w-40 animate-pulse rounded bg-gg-surface" />
      <div className="mt-4 flex gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-64 w-[160px] shrink-0 animate-pulse rounded-xl bg-gg-surface" />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 md:py-6">
      <HeroCarousel />

      <div className="mt-6">
        <NewDropBanner />
      </div>

      <Suspense fallback={<FeaturedProductsFallback />}>
        <FeaturedProducts />
      </Suspense>

      <section className="mt-8">
        <SectionHeader title="Trending Looks" href="/shop" />
        <div className="mt-4">
          <TrendingLooks />
        </div>
      </section>

      <div className="mt-8">
        <CommunitySection />
      </div>
    </div>
  );
}
