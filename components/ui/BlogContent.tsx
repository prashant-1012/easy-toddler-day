import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import type { BlogBlock } from "@/lib/types/blog";

// Inline text supports **bold** only.
function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-charcoal">
        {part}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5 text-lg leading-relaxed text-warm-gray">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="mt-6 font-display text-2xl font-semibold leading-snug text-charcoal sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul
                key={index}
                className="flex list-disc flex-col gap-2 pl-6 marker:text-coral"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "cta":
            return (
              <div key={index} className="mt-4">
                <Button href={block.href} size="lg">
                  {block.label}
                </Button>
              </div>
            );
          default:
            return <p key={index}>{renderInline(block.text)}</p>;
        }
      })}
    </div>
  );
}
