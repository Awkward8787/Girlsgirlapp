import Link from "next/link";
import { Bell, Heart, Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

interface AppHeaderProps {
  showMenu?: boolean;
  variant?: "default" | "minimal";
}

export function AppHeader({
  showMenu = true,
  variant = "default",
}: AppHeaderProps) {
  const shell = "sticky top-0 z-40 border-b border-white/[0.06] bg-gg-black/80 backdrop-blur-xl";

  if (variant === "minimal") {
    return (
      <header className={shell}>
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
          <BrandLogo size="sm" />
        </div>
      </header>
    );
  }

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {showMenu ? (
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-full p-2.5 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
          >
            <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
        ) : (
          <div className="w-10 md:hidden" />
        )}

        <BrandLogo size="sm" className="md:mr-auto md:ml-0" />

        <div className="flex items-center gap-0.5">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-full p-2.5 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <Bell className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <Link
            href="/bag"
            aria-label="Wishlist"
            className="rounded-full p-2.5 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-gg-pink"
          >
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
