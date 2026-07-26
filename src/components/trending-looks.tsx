import Image from "next/image";
import Link from "next/link";
import { trendingLooks } from "@/services/product-service";

export function TrendingLooks() {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar md:justify-between">
      {trendingLooks.map((look) => (
        <Link
          key={look.id}
          href="/shop"
          className="flex shrink-0 flex-col items-center gap-2 transition-transform hover:scale-105 md:shrink"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gg-pink/30 md:h-20 md:w-20">
            <Image
              src={look.imageUrl}
              alt={look.label}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <span className="max-w-[80px] text-center text-[10px] font-medium text-white/80 md:max-w-none md:text-xs">
            {look.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
