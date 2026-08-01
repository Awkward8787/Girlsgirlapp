import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CommunitySection() {
  return (
    <section
      data-od-id="community"
      className="overflow-hidden rounded-2xl border border-white/[0.06] bg-gg-surface"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative h-56 w-full md:h-auto md:min-h-[280px] md:w-[42%]">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&w=600&h=800&fit=crop"
            alt="Girls Girl community"
            fill
            sizes="(max-width:768px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="gg-image-vignette absolute inset-0" />
        </div>
        <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
          <p className="gg-editorial-label">Girls Girl Club</p>
          <h2 className="gg-display mt-3 text-2xl uppercase md:text-3xl">
            Community. Style. Inspire.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Join the movement. Tag @biggbritt and use #WTTB to be featured in our curated feed.
          </p>
          <Link
            href="/style"
            className="mt-6 inline-flex items-center gap-2 gg-link-accent"
          >
            See the Community
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
        <div className="hidden flex-col items-center justify-center border-l border-white/[0.06] bg-gg-ink px-10 md:flex md:w-44">
          <span className="font-display text-4xl italic text-gg-champagne">GG</span>
          <p className="mt-3 text-center text-[9px] font-medium uppercase leading-relaxed tracking-[0.25em] text-white/35">
            Members
            <br />
            Only
          </p>
        </div>
      </div>
    </section>
  );
}
