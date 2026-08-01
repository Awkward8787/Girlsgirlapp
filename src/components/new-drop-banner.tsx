import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PINK_SHINE_IMAGE = "/products/pink-shine-girl-transparent.png";

export function NewDropBanner() {
  return (
    <Link
      href="/product/pink-shine-girl-set"
      data-od-id="new-drop"
      className="group relative block overflow-hidden rounded-2xl border border-gg-pink/20 gg-gradient-banner p-6 md:p-10"
    >
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gg-pink/10 blur-3xl" />
      <div className="relative flex items-center gap-6 md:gap-10">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-gg-ink md:h-36 md:w-36">
          <Image
            src={PINK_SHINE_IMAGE}
            alt="Pink Shine Girl Set"
            fill
            sizes="144px"
            className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <p className="gg-editorial-label text-white/70">New Drop</p>
          <h3 className="gg-display mt-2 text-2xl uppercase md:text-3xl">
            Pink Shine Girl Set
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/45">
            #WTTB — What They Talkin Bout
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gg-white transition-all group-hover:gap-3">
            Shop the Collection
            <ArrowUpRight className="h-4 w-4 text-gg-pink" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}
