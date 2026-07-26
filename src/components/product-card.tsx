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
      className={`group block shrink-0 transition-transform hover:scale-[1.02] ${
        isHorizontal ? "w-[160px] sm:w-[180px]" : "w-full"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl bg-gg-surface">
        {product.isNew && (
          <span className="absolute left-2 top-2 z-10 rounded-md bg-gg-pink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            New
          </span>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
          className="absolute right-2 top-2 z-10 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition-colors hover:text-gg-pink"
        >
          <Heart className="h-4 w-4" />
        </button>
        <div className={`relative ${isHorizontal ? "aspect-[3/4]" : "aspect-square"}`}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes={isHorizontal ? "180px" : "(max-width:768px) 50vw, 25vw"}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-2.5">
        <h3 className="truncate text-sm font-semibold text-white">{product.name}</h3>
        <p className="truncate text-xs text-gg-muted">{product.subtitle}</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-sm font-bold text-gg-pink">{formatPrice(product.price)}</span>
          <div className="flex gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.id}
                className="h-3 w-3 rounded-full border border-gg-border"
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
