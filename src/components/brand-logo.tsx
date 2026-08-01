import Link from "next/link";
import { Crown } from "lucide-react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const scriptSizes = {
  sm: "text-[1.35rem]",
  md: "text-[1.65rem]",
  lg: "text-[2rem]",
};

export function BrandLogo({ size = "md", className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`group flex flex-col items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <span className="relative flex items-center gap-1">
        <Crown
          className="h-3 w-3 text-gg-champagne opacity-80 transition-transform group-hover:-translate-y-0.5"
          strokeWidth={1.5}
          aria-hidden
        />
        <span
          className={`font-display italic leading-none text-gg-pink ${scriptSizes[size]}`}
          style={{ textShadow: "0 0 40px rgba(233, 30, 140, 0.35)" }}
        >
          Girls Girl
        </span>
      </span>
      <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.32em] text-white/45">
        by Bigg Britt
      </span>
    </Link>
  );
}
