"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, MoreHorizontal, Share2, ShoppingBag } from "lucide-react";
import type { StylePost } from "@/models/product";

interface StyleFeedGridProps {
  posts: StylePost[];
}

export function StyleFeedGrid({ posts }: StyleFeedGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-gg-surface transition-opacity hover:opacity-95"
        >
          <div className="flex items-center gap-2 px-3 py-2.5">
            <div className="relative h-7 w-7 overflow-hidden rounded-full">
              <Image
                src={post.avatarUrl}
                alt={post.username}
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">{post.username}</p>
              <p className="text-[10px] text-gg-muted">{post.timeAgo}</p>
            </div>
            <button type="button" aria-label="More options" className="text-gg-muted">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="relative aspect-[3/4]">
            <Image
              src={post.imageUrl}
              alt={post.caption}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-cover"
            />
            {post.galleryCount && (
              <span className="absolute right-2 top-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                1/{post.galleryCount}
              </span>
            )}
          </div>

          <div className="px-3 py-2.5">
            <p className="text-xs leading-relaxed text-white/90">{post.caption}</p>
            <Link
              href={`/product/${post.productSlug}`}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full border border-white/15 py-2.5 text-[10px] font-medium uppercase tracking-wider text-white/70 transition-colors hover:border-gg-pink/30 hover:text-gg-pink"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Shop This Look
            </Link>
            <div className="mt-2.5 flex items-center justify-between text-gg-muted">
              <div className="flex items-center gap-3">
                <button type="button" className="flex items-center gap-1 text-gg-pink">
                  <Heart className="h-4 w-4 fill-gg-pink" />
                  <span className="text-xs">{post.likes}</span>
                </button>
                <button type="button" className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">{post.comments}</span>
                </button>
              </div>
              <button type="button" aria-label="Share">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
