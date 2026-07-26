import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/product-detail-client";
import { getProductBySlug, products } from "@/services/product-service";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Girls Girl by Bigg Britt`,
    description: product.subtitle,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Link
          href="/shop"
          aria-label="Back to shop"
          className="rounded-lg p-2 text-white transition-colors hover:bg-gg-surface"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <button
          type="button"
          aria-label="Share product"
          className="rounded-lg p-2 text-white transition-colors hover:bg-gg-surface"
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>
      <ProductDetailClient product={product} />
    </div>
  );
}
