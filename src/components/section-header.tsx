import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeader({ title, href, linkLabel = "View All" }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between border-b border-white/[0.06] pb-4">
      <h2 className="gg-section-title">{title}</h2>
      {href && (
        <Link href={href} className="gg-link-accent">
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
