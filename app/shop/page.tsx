import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop Workbooks",
  description:
    "Browse our full collection of screen-free, Montessori-inspired toddler workbooks.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Shop"
        title="All Workbooks"
        subtitle="Every workbook is designed for little hands, short attention spans, and big learning moments."
        align="left"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 0.06}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
