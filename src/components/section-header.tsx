import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeader({ title, href, linkLabel = "View All" }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-xs font-semibold uppercase tracking-wide text-gg-pink transition-colors hover:text-gg-pink-soft"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
