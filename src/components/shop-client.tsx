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
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      {/* Search */}
      <div className="relative mt-4">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gg-pink" />
        <input
          type="search"
          placeholder="Search sets, tops, bottoms & more..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-full bg-gg-surface py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gg-muted focus:outline-none focus:ring-1 focus:ring-gg-pink"
        />
      </div>

      {/* Category tabs */}
      <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              category === cat.id
                ? "bg-gg-pink text-white"
                : "text-white hover:bg-gg-surface"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Count & sort */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-white">{filteredProducts.length} Items</span>
        <button
          type="button"
          className="flex items-center gap-1.5 font-medium text-gg-pink"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Sort: Newest
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-gg-muted">No products found. Try a different search.</p>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-3 pb-4 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
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
