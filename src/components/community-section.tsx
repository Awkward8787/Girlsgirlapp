import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CommunitySection() {
  return (
    <section className="overflow-hidden rounded-2xl bg-gg-surface">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 w-full md:h-auto md:w-2/5">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop"
            alt="Girls Girl community"
            fill
            sizes="(max-width:768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Community Style. Share. Inspire.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Join the Girls Girl community. Tag @biggbritt and use #WTTB to be featured.
          </p>
          <Link
            href="/style"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gg-pink transition-colors hover:text-gg-pink-soft"
          >
            See the Community
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="hidden flex-col items-center justify-center border-l border-gg-border bg-gg-surface-elevated p-8 md:flex md:w-48">
          <span className="text-3xl font-black text-gg-pink">GG</span>
          <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-wider text-gg-muted">
            Girls Girl Club
            <br />
            Members Only
          </p>
        </div>
      </div>
    </section>
  );
}
