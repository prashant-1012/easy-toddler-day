import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getFeaturedProducts } from "@/lib/data/products";

export function FeaturedWorkbooks() {
  const products = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Featured Workbooks"
        title="Our Most-Loved Learning Adventures"
        subtitle="Hand-picked workbooks toddlers keep coming back to — screen-free, mess-friendly, and genuinely fun."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 0.08} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button href="/shop" variant="secondary" size="lg">
          View All Workbooks
        </Button>
      </div>
    </section>
  );
}
