import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NewDropBanner() {
  return (
    <Link
      href="/product/pink-shine-girl-set"
      className="group block overflow-hidden rounded-2xl gg-gradient-banner p-5 md:p-8"
    >
      <div className="flex items-center gap-4 md:gap-8">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:h-32 md:w-32">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop"
            alt="Pink Shine Girl Set"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-white/90">New Drop</p>
          <h3 className="mt-1 text-lg font-black uppercase text-white md:text-xl">
            Pink Shine Girl Set
          </h3>
          <p className="mt-1 text-xs text-white/80 md:text-sm">#WTTB — What They Talkin Bout</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase text-white transition-transform group-hover:translate-x-1 md:text-sm">
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
