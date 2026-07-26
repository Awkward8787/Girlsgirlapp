"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Crown,
  Feather,
  Heart,
  Minus,
  Plus,
  Shirt,
  Star,
} from "lucide-react";
import type { Product } from "@/models/product";

interface ProductDetailClientProps {
  product: Product;
}

const featureIcons = {
  feather: Feather,
  crown: Crown,
  outfit: Shirt,
};

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.id ?? "");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const selectedColorName =
    product.colors.find((c) => c.id === selectedColor)?.name ?? "";

  const accordionItems = [
    { id: "details", label: "Details", content: product.details },
    { id: "shipping", label: "Shipping", content: product.shipping },
    { id: "returns", label: "Returns", content: product.returns },
  ];

  return (
    <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:gap-12 md:px-6 md:py-8">
      {/* Image gallery */}
      <div className="relative">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gg-surface md:rounded-2xl">
          <Image
            src={product.images[activeImage] ?? product.imageUrl}
            alt={product.name}
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gg-black to-transparent" />
        </div>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {product.images.map((_, i) => (
            <button
              key={product.images[i]}
              type="button"
              aria-label={`View image ${i + 1}`}
              onClick={() => setActiveImage(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeImage ? "w-6 bg-gg-pink" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product info */}
      <div className="px-4 py-6 md:px-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-black uppercase tracking-wide text-white md:text-2xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-gg-muted">{product.subtitle}</p>
          </div>
          <button
            type="button"
            aria-label="Add to wishlist"
            className="shrink-0 rounded-full p-2 text-gg-pink transition-colors hover:bg-gg-pink/10"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-3 text-2xl font-bold text-gg-pink">{formatPrice(product.price)}</p>

        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < product.rating ? "fill-gg-pink text-gg-pink" : "text-gg-muted"
              }`}
            />
          ))}
          <span className="ml-1 text-xs text-gg-muted">({product.reviewCount})</span>
        </div>

        {/* Color */}
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-white">
            Color: <span className="text-gg-muted">{selectedColorName}</span>
          </p>
          <div className="mt-3 flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.id}
                type="button"
                aria-label={color.name}
                onClick={() => setSelectedColor(color.id)}
                className={`h-8 w-8 rounded-full border-2 transition-all ${
                  selectedColor === color.id
                    ? "border-white scale-110"
                    : "border-gg-border"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Size</p>
            <button type="button" className="text-xs font-medium text-gg-pink">
              Size Guide
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`min-w-[48px] rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? "border-gg-pink bg-gg-pink/10 text-gg-pink"
                    : "border-gg-border text-white hover:border-gg-muted"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-white">Qty</p>
          <div className="mt-3 inline-flex items-center rounded-lg bg-gg-surface-elevated">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2.5 text-gg-pink transition-colors hover:bg-gg-border/50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[40px] text-center text-sm font-medium">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2.5 text-gg-pink transition-colors hover:bg-gg-border/50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 flex divide-x divide-gg-border rounded-xl border border-gg-border">
          {product.features.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <div
                key={feature.label}
                className="flex flex-1 flex-col items-center gap-2 px-3 py-4 text-center"
              >
                <Icon className="h-5 w-5 text-gg-pink" />
                <span className="text-[10px] font-semibold uppercase leading-tight text-gg-pink-soft">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-6 space-y-3">
          <Link
            href="/bag"
            className="flex w-full items-center justify-center rounded-xl gg-gradient-pink py-4 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Add to Bag
          </Link>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-1 rounded-xl bg-white py-4 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            <span aria-hidden="true"></span>
            Pay
          </button>
          <p className="text-center text-xs text-gg-muted">
            🔒 Secure checkout · Easy returns
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-8 divide-y divide-gg-border border-t border-gg-border">
          {accordionItems.map((item) => (
            <div key={item.id}>
              <button
                type="button"
                onClick={() =>
                  setOpenAccordion(openAccordion === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between py-4 text-sm font-bold uppercase tracking-wider text-white"
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 text-gg-muted transition-transform ${
                    openAccordion === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === item.id && (
                <p className="pb-4 text-sm leading-relaxed text-gg-muted">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
