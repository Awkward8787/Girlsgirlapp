import Link from "next/link";
import { Bell, Heart, Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { NavItem } from "@/models/product";

interface AppHeaderProps {
  activeNav?: NavItem;
  showMenu?: boolean;
  variant?: "default" | "minimal";
  backHref?: string;
}

export function AppHeader({
  showMenu = true,
  variant = "default",
}: AppHeaderProps) {
  if (variant === "minimal") {
    return (
      <header className="sticky top-0 z-40 border-b border-gg-border/50 bg-gg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3">
          <BrandLogo size="sm" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gg-border/50 bg-gg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {showMenu ? (
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-lg p-2 text-white transition-colors hover:bg-gg-surface-elevated md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        ) : (
          <div className="w-9 md:hidden" />
        )}

        <BrandLogo size="sm" className="md:mr-auto md:ml-0" />

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-lg p-2 text-white transition-colors hover:bg-gg-surface-elevated hover:text-gg-pink"
          >
            <Bell className="h-5 w-5" />
          </button>
          <Link
            href="/bag"
            aria-label="Wishlist"
            className="rounded-lg p-2 text-white transition-colors hover:bg-gg-surface-elevated hover:text-gg-pink"
          >
            <Heart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
