import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductPurchasePanel } from "@/components/shop/ProductPurchasePanel";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const gallery = [product.image, ...(product.gallery ?? [])];
  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-3 pb-12 sm:px-6 lg:px-8 lg:pt-4 lg:pb-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.shortDescription,
          image: `${SITE_URL}${product.image}`,
          category: product.category,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "INR",
            availability: product.comingSoon
              ? "https://schema.org/PreOrder"
              : product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
          },
        }}
      />

      <Link
        href="/shop"
        className="inline-flex items-center gap-1.5 py-1.5 text-sm font-semibold text-sky-dark transition-colors hover:text-sky"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Shop
      </Link>

      <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <ProductGallery images={gallery} productName={product.name} />
        <ProductPurchasePanel product={product} />
      </div>

      {/* Product Details Section */}
      <div className="mt-10 max-w-3xl border-t border-warm-gray-light/60 pt-8 lg:mt-14 lg:pt-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-sky-dark">
          Details
        </span>
        <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-charcoal">
          {product.details?.title ?? "About This Product"}
        </h2>

        {product.details?.intro ? (
          <p className="mt-3 text-xs sm:text-sm text-warm-gray leading-relaxed whitespace-pre-line">
            {product.details.intro}
          </p>
        ) : (
          <p className="mt-3 text-xs sm:text-sm text-warm-gray leading-relaxed">
            {product.description}
          </p>
        )}

        {product.details?.bullets && product.details.bullets.length > 0 && (
          <ul className="mt-4 space-y-2.5 border-t border-warm-gray-light/40 pt-4">
            {product.details.bullets.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                <span>
                  <strong className="font-semibold text-charcoal">{item.label}:</strong>{" "}
                  <span className="text-warm-gray">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        )}

        {product.details?.notes && product.details.notes.length > 0 && (
          <div className="mt-5 rounded-xl bg-warm-gray-light/20 border border-warm-gray-light/60 p-3 sm:p-3.5 text-xs text-warm-gray space-y-1">
            {product.details.notes.map((note, idx) => (
              <p key={idx} className="italic">
                {note}
              </p>
            ))}
          </div>
        )}
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-10 border-t border-warm-gray-light/60 pt-8 lg:mt-12 lg:pt-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-sky-dark">
              Keep Exploring
            </span>
            <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-charcoal">
              You Might Also Like
            </h2>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 max-w-4xl">
            {relatedProducts.map((related, index) => (
              <Reveal key={related.id} delay={(index % 3) * 0.05} className="h-full">
                <ProductCard product={related} compact />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
