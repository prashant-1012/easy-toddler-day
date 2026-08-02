import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogCover } from "@/components/ui/BlogCover";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blogPosts";
import { formatDate } from "@/lib/utils/format-date";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-dark transition-colors hover:text-sky"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Blog
      </Link>

      <BlogCover
        post={post}
        className="mt-6 aspect-[16/9] w-full rounded-3xl"
        sizes="(min-width: 1024px) 768px, 100vw"
        priority
        iconSize={72}
      />

      <h1 className="mt-8 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-warm-gray">
        By {post.author} · {formatDate(post.date)} · {post.readTimeMinutes} min
        read
      </p>

      <div className="mt-8 flex flex-col gap-5 text-lg text-warm-gray">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
