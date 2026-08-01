"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/models/product";

interface ProductCardProps {
  product: Product;
  layout?: "horizontal" | "grid";
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function ProductCard({ product, layout = "grid" }: ProductCardProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group block shrink-0 transition-opacity duration-300 hover:opacity-95 ${
        isHorizontal ? "w-[168px] sm:w-[200px]" : "w-full"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gg-surface">
        {product.isNew && (
          <span className="absolute left-3 top-3 z-10 border border-gg-champagne/40 bg-gg-black/60 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-gg-champagne backdrop-blur-sm">
            New
          </span>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/30 p-2 text-white/70 backdrop-blur-sm transition-colors hover:border-gg-pink/40 hover:text-gg-pink"
        >
          <Heart className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes={isHorizontal ? "200px" : "(max-width:768px) 50vw, 25vw"}
            className="object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
      <div className="mt-3 px-0.5">
        <h3 className="truncate font-medium text-sm tracking-wide text-gg-white">
          {product.name}
        </h3>
        <p className="mt-0.5 truncate text-[11px] uppercase tracking-wider text-gg-muted">
          {product.subtitle}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium tabular-nums tracking-wide text-gg-pink">
            {formatPrice(product.price)}
          </span>
          <div className="flex gap-1.5">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.id}
                className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
