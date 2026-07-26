"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CreditCard, Heart, Lock, MapPin, Minus, Plus, Truck } from "lucide-react";
import type { CartItem, Product } from "@/models/product";
import { getCartTotal } from "@/services/product-service";

interface CartClientProps {
  items: Array<CartItem & { product: Product }>;
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function CartClient({ items }: CartClientProps) {
  const { subtotal, shipping, total } = getCartTotal(
    items.map(({ productId, color, size, quantity }) => ({
      productId,
      color,
      size,
      quantity,
    })),
  );

  return (
    <div className="mx-auto max-w-7xl md:grid md:grid-cols-[1fr_380px] md:gap-8 md:px-6">
      {/* Cart items */}
      <div>
        <div className="flex items-center justify-between px-4 py-4 md:px-0">
          <h1 className="text-lg font-black uppercase tracking-wide text-white">
            My Bag ({items.length})
          </h1>
          <button type="button" className="text-sm font-semibold text-gg-pink">
            Edit
          </button>
        </div>

        <div className="divide-y divide-gg-border">
          {items.map((item) => (
            <div key={`${item.productId}-${item.color}-${item.size}`} className="flex gap-4 px-4 py-4 md:px-0">
              <Link
                href={`/product/${item.product.slug}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gg-surface"
              >
                <Image
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="text-sm font-bold uppercase text-white hover:text-gg-pink"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-xs text-gg-muted">
                      Color: {item.color} · Size: {item.size}
                    </p>
                  </div>
                  <button type="button" aria-label="Save to wishlist" className="text-gg-pink">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center rounded-lg bg-gg-surface-elevated">
                    <button type="button" className="px-3 py-1.5 text-gg-pink">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[24px] text-center text-sm">{item.quantity}</span>
                    <button type="button" className="px-3 py-1.5 text-gg-pink">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="text-sm font-bold text-gg-pink">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout sidebar */}
      <div className="mt-4 space-y-4 px-4 pb-8 md:mt-0 md:px-0">
        <div className="rounded-xl bg-gg-surface p-4 md:sticky md:top-24">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 rounded-lg bg-gg-surface-elevated px-4 py-3 text-sm text-white placeholder:text-gg-muted focus:outline-none focus:ring-1 focus:ring-gg-pink"
            />
            <button
              type="button"
              className="rounded-lg bg-gg-pink px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Apply
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-gg-muted">
            <Truck className="h-4 w-4 text-gg-pink" />
            Est. delivery May 24 – May 28
          </div>

          <div className="mt-4 space-y-2 border-t border-gg-border pt-4 text-sm">
            <div className="flex justify-between text-gg-muted">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gg-muted">
              <span>Shipping (est.)</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between text-base font-bold">
              <span className="text-white">Total</span>
              <span className="text-gg-pink">{formatPrice(total)}</span>
            </div>
            <p className="text-[10px] text-gg-muted">
              or 4 interest-free payments with Afterpay
            </p>
          </div>

          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl gg-gradient-pink py-4 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <Lock className="h-4 w-4" />
            Checkout
          </button>
          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-1 rounded-xl bg-white py-4 text-sm font-semibold text-black"
          >
            <span aria-hidden="true"></span>
            Pay
          </button>

          <div className="mt-4 space-y-2">
            {[
              { icon: MapPin, label: "123 Main St, Atlanta, GA 30303" },
              { icon: Truck, label: "Standard Shipping (3–5 business days)" },
              { icon: CreditCard, label: "Visa ···· 4242" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center gap-3 rounded-xl bg-gg-surface-elevated px-4 py-3 text-left text-xs text-white/80 transition-colors hover:bg-gg-border/30"
              >
                <Icon className="h-4 w-4 shrink-0 text-gg-pink" />
                <span className="flex-1">{label}</span>
                <ChevronRight className="h-4 w-4 text-gg-muted" />
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-[10px] text-gg-muted">
            🔒 Secure checkout · Physical goods only
          </p>
        </div>
      </div>
    </div>
  );
}
