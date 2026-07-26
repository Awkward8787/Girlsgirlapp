import { StyleClient } from "@/components/style-client";

export const metadata = {
  title: "Style Feed | Girls Girl by Bigg Britt",
  description: "Discover community looks and shop the style feed.",
};

export default function StylePage() {
  return (
    <div className="py-2 md:py-6">
      <StyleClient />
    </div>
  );
}
