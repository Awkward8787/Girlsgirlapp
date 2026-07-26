import { ShopClient } from "@/components/shop-client";

export const metadata = {
  title: "Shop | Girls Girl by Bigg Britt",
  description: "Browse sets, tops, bottoms, and new drops from Girls Girl.",
};

export default function ShopPage() {
  return (
    <div className="py-2 md:py-6">
      <ShopClient />
    </div>
  );
}
