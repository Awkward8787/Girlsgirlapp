import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Girls Girl WTTB | by Bigg Britt",
  description:
    "Sophisticated luxury urbanwear. Support women. Stay loyal. Keep shining. Shop Girls Girl WTTB.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="relative min-h-dvh font-sans gg-grain">
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-gg-pink/[0.03] via-transparent to-transparent" />
        <div className="relative">
          <AppHeader />
          <BottomNav />
          <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
