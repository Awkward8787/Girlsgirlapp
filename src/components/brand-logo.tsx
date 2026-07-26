import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

export function BrandLogo({ size = "md", className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`group flex flex-col items-center ${className}`}>
      <span
        className={`font-serif italic tracking-tight text-gg-pink ${sizeClasses[size]} leading-none`}
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        <span className="relative">
          Girls Girl
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px]">👑</span>
        </span>
      </span>
      <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-white/70">
        by Bigg Britt
      </span>
    </Link>
  );
}
