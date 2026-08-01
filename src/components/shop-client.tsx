"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { ShopCategory } from "@/models/product";
import { getProductsByCategory, products } from "@/services/product-service";

const categories: { id: ShopCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sets", label: "Sets" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "new-drop", label: "New Drop" },
];

export function ShopClient() {
  const [category, setCategory] = useState<ShopCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = getProductsByCategory(category);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    return result;
  }, [category, searchQuery]);

  return (
    <div data-od-id="shop" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="mt-6 md:mt-8">
        <p className="gg-editorial-label">Catalog</p>
        <h1 className="gg-display mt-2 text-3xl uppercase md:text-4xl">Shop</h1>
      </div>

      <div className="relative mt-8">
        <Search
          className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
          strokeWidth={1.5}
        />
        <input
          type="search"
          placeholder="Search sets, tops, bottoms & more..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-full border border-white/[0.08] bg-gg-surface py-4 pl-12 pr-5 text-sm text-gg-white placeholder:text-gg-muted focus:border-gg-pink/30 focus:outline-none focus:ring-1 focus:ring-gg-pink/20"
        />
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider transition-all ${
              category === cat.id
                ? "border-gg-pink/50 bg-gg-pink/10 text-gg-pink"
                : "border-white/[0.08] text-white/60 hover:border-white/15 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-b border-white/[0.06] pb-4 text-sm">
        <span className="text-[11px] uppercase tracking-wider text-white/50">
          {filteredProducts.length} Pieces
        </span>
        <button
          type="button"
          className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-gg-pink"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
          Sort: Newest
          <ChevronDown className="h-3 w-3" strokeWidth={1.5} />
        </button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-display text-lg italic text-white/40">No pieces found.</p>
          <p className="mt-2 text-sm text-gg-muted">Try a different search or category.</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 pb-6 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export function getShopItemCount(): number {
  return products.length;
}
