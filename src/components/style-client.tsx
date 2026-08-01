"use client";

import { useState } from "react";
import { Camera, Crown, Star, TrendingUp, Zap } from "lucide-react";
import { StyleFeedGrid } from "@/components/style-feed-grid";
import type { StyleFilter } from "@/models/product";
import { getStylePostsByFilter } from "@/services/product-service";

const filters: { id: StyleFilter; label: string; icon: typeof Star }[] = [
  { id: "featured", label: "Featured", icon: Star },
  { id: "new", label: "New", icon: Zap },
  { id: "club", label: "Club", icon: Crown },
  { id: "trending", label: "Trending", icon: TrendingUp },
];

export function StyleClient() {
  const [activeTab, setActiveTab] = useState<"feed" | "community">("feed");
  const [activeFilter, setActiveFilter] = useState<StyleFilter>("featured");

  const posts = getStylePostsByFilter(activeFilter);

  return (
    <div data-od-id="style-feed" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="mt-6 md:mt-8">
        <p className="gg-editorial-label">Curated</p>
        <h1 className="gg-display mt-2 text-3xl uppercase md:text-4xl">Style Feed</h1>
      </div>

      <div className="mt-8 flex gap-8 border-b border-white/[0.06]">
        {(["feed", "community"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
              activeTab === tab
                ? "border-b border-gg-pink text-gg-white"
                : "text-gg-muted hover:text-white"
            }`}
          >
            {tab === "feed" ? "Style Feed" : "Community"}
          </button>
        ))}
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto hide-scrollbar">
        {filters.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveFilter(id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2.5 text-[10px] font-medium uppercase tracking-wider transition-all ${
              activeFilter === id
                ? "border-gg-pink/50 bg-gg-pink/10 text-gg-pink"
                : "border-white/[0.08] text-white/50 hover:border-white/15"
            }`}
          >
            <Icon className="h-3 w-3" strokeWidth={1.5} />
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-full border border-white/[0.08] bg-gg-surface px-5 py-3.5">
        <div className="h-8 w-8 shrink-0 rounded-full border border-white/10 bg-gg-ink" />
        <input
          type="text"
          placeholder="Share your look..."
          disabled
          className="flex-1 bg-transparent text-sm text-white/30 placeholder:text-white/20 focus:outline-none"
        />
        <button type="button" aria-label="Upload photo" className="text-white/25" disabled>
          <Camera className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-6 pb-6">
        {activeTab === "feed" ? (
          <StyleFeedGrid posts={posts} />
        ) : (
          <div className="rounded-2xl border border-white/[0.06] py-20 text-center">
            <p className="font-display text-2xl italic text-gg-champagne">Girls Girl Club</p>
            <p className="mx-auto mt-3 max-w-sm text-sm text-white/40">
              Members-only community coming soon. Tag @biggbritt to join the movement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
