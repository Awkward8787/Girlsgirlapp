import Image from "next/image";
import Link from "next/link";
import { trendingLooks } from "@/services/product-service";

export function TrendingLooks() {
  return (
    <div className="flex gap-6 overflow-x-auto hide-scrollbar md:justify-between md:gap-4">
      {trendingLooks.map((look) => (
        <Link
          key={look.id}
          href="/shop"
          className="group flex shrink-0 flex-col items-center gap-3 md:shrink md:flex-1"
        >
          <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border border-white/10 p-0.5 transition-colors group-hover:border-gg-pink/40 md:h-20 md:w-20">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={look.imageUrl}
                alt={look.label}
                fill
                sizes="80px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <span className="max-w-[88px] text-center text-[10px] font-medium uppercase tracking-wider text-white/50 transition-colors group-hover:text-white/80 md:max-w-none">
            {look.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
