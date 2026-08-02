import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { BlogCoverArt, getBlogPostIcon } from "@/components/ui/BlogCoverArt";
import type { BlogPost } from "@/lib/types/blog";

interface BlogCoverProps {
  post: BlogPost;
  sizes: string;
  className?: string;
  priority?: boolean;
  iconSize?: number;
}

export function BlogCover({
  post,
  sizes,
  className,
  priority = false,
  iconSize,
}: BlogCoverProps) {
  if (post.coverImage) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-warm-gray-light",
          className
        )}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <BlogCoverArt
      icon={getBlogPostIcon(post.slug)}
      accentColor={post.accentColor}
      className={cn("transition-transform duration-300 group-hover:scale-105", className)}
      iconSize={iconSize}
    />
  );
}
