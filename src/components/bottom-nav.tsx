"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Shirt, ShoppingBag, User } from "lucide-react";
import type { NavItem } from "@/models/product";

const navItems: { id: NavItem; label: string; href: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "shop", label: "Shop", href: "/shop", icon: Search },
  { id: "style", label: "Style", href: "/style", icon: Shirt },
  { id: "bag", label: "Bag", href: "/bag", icon: ShoppingBag },
  { id: "profile", label: "Profile", href: "/profile", icon: User },
];

function getActiveNav(pathname: string): NavItem {
  if (pathname.startsWith("/shop")) return "shop";
  if (pathname.startsWith("/style")) return "style";
  if (pathname.startsWith("/bag")) return "bag";
  if (pathname.startsWith("/profile")) return "profile";
  if (pathname.startsWith("/product")) return "shop";
  return "home";
}

export function BottomNav() {
  const pathname = usePathname();
  const active = getActiveNav(pathname);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="hidden border-b border-white/[0.06] bg-gg-black/90 backdrop-blur-xl md:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-8 py-3">
          {navItems.map(({ id, label, href, icon: Icon }) => {
            const isActive = active === id;
            return (
              <Link
                key={id}
                href={href}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-200 ${
                  isActive
                    ? "bg-white/[0.06] text-gg-pink"
                    : "text-gg-muted hover:text-gg-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={isActive ? 2 : 1.5} />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      <nav
        aria-label="Main navigation"
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.06] bg-gg-black/90 backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto flex max-w-lg items-center justify-around px-1 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {navItems.map(({ id, label, href, icon: Icon }) => {
            const isActive = active === id;
            return (
              <Link
                key={id}
                href={href}
                className={`flex min-w-[56px] flex-col items-center gap-1 rounded-lg px-2 py-2 transition-colors ${
                  isActive ? "text-gg-pink" : "text-gg-muted"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.5} />
                <span className="text-[9px] font-medium uppercase tracking-wider">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
