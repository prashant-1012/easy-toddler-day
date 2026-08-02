import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { BlogCoverArt, getBlogPostIcon } from "@/components/ui/BlogCoverArt";
import { formatDate } from "@/lib/utils/format-date";
import type { BlogPost } from "@/lib/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden">
        <BlogCoverArt
          icon={getBlogPostIcon(post.slug)}
          accentColor={post.accentColor}
          className="aspect-[16/10] w-full rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
          iconSize={44}
        />
        <div className="flex flex-1 flex-col gap-2 p-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-sky-dark">
            {formatDate(post.date)} · {post.readTimeMinutes} min read
          </span>
          <h3 className="font-display text-xl font-semibold text-charcoal transition-colors group-hover:text-coral-dark">
            {post.title}
          </h3>
          <p className="flex-1 text-sm text-warm-gray">{post.excerpt}</p>
          <span className="mt-2 text-sm font-semibold text-coral-dark">
            Read More →
          </span>
        </div>
      </Card>
    </Link>
  );
}
