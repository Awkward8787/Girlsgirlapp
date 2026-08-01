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
    <div
      data-od-id="product-detail"
      className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:gap-16 md:px-8 md:py-10"
    >
      <div className="relative">
        <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/[0.06] bg-gg-surface md:rounded-2xl">
          <Image
            src={product.images[activeImage] ?? product.imageUrl}
            alt={product.name}
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-contain p-6 md:p-10"
          />
          <div className="gg-image-vignette absolute inset-0" />
        </div>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {product.images.map((_, i) => (
            <button
              key={product.images[i]}
              type="button"
              aria-label={`View image ${i + 1}`}
              onClick={() => setActiveImage(i)}
              className={`h-px transition-all duration-300 ${
                i === activeImage ? "w-8 bg-gg-pink" : "w-3 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-8 md:px-0 md:py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="gg-editorial-label">{product.subtitle}</p>
            <h1 className="gg-display mt-2 text-3xl uppercase md:text-4xl">{product.name}</h1>
          </div>
          <button
            type="button"
            aria-label="Add to wishlist"
            className="shrink-0 rounded-full border border-white/10 p-2.5 text-white/50 transition-colors hover:border-gg-pink/30 hover:text-gg-pink"
          >
            <Heart className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <p className="mt-4 text-2xl font-medium tabular-nums tracking-wide text-gg-pink">
          {formatPrice(product.price)}
        </p>

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
        <div className="mt-8 flex divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06]">
          {product.features.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <div
                key={feature.label}
                className="flex flex-1 flex-col items-center gap-2 px-3 py-5 text-center"
              >
                <Icon className="h-4 w-4 text-gg-champagne" strokeWidth={1.5} />
                <span className="text-[9px] font-medium uppercase leading-tight tracking-wider text-white/45">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 space-y-3">
          <Link href="/bag" className="gg-btn-primary w-full">
            Add to Bag
          </Link>
          <button type="button" className="gg-btn-ghost w-full">
            <span aria-hidden="true"></span>
            Pay
          </button>
          <p className="pt-1 text-center text-[11px] uppercase tracking-wider text-white/35">
            Secure checkout · Easy returns
          </p>
        </div>

        <div className="mt-10 divide-y divide-white/[0.06] border-t border-white/[0.06]">
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
