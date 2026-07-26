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
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      {/* Tab navigation */}
      <div className="flex gap-6 border-b border-gg-border">
        {(["feed", "community"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${
              activeTab === tab
                ? "border-b-2 border-white text-white"
                : "text-gg-muted hover:text-white"
            }`}
          >
            {tab === "feed" ? "Style Feed" : "Community"}
          </button>
        ))}
      </div>

      {/* Filter pills */}
      <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar">
        {filters.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveFilter(id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              activeFilter === id
                ? "gg-gradient-pink text-white"
                : "border border-gg-border text-white hover:border-gg-pink/50"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Share input */}
      <div className="mt-4 flex items-center gap-3 rounded-full bg-gg-surface px-4 py-3">
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-gg-pink/20" />
        <input
          type="text"
          placeholder="Share your look..."
          className="flex-1 bg-transparent text-sm text-white placeholder:text-gg-muted focus:outline-none"
        />
        <button type="button" aria-label="Upload photo" className="text-gg-pink">
          <Camera className="h-5 w-5" />
        </button>
      </div>

      {/* Feed grid */}
      <div className="mt-4 pb-4">
        {activeTab === "feed" ? (
          <StyleFeedGrid posts={posts} />
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg font-bold text-white">Girls Girl Club</p>
            <p className="mt-2 text-sm text-gg-muted">
              Members-only community coming soon. Tag @biggbritt to join the movement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
