import Image from "next/image";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { renderInline } from "@/components/ui/RichText";
import { creatorStory } from "@/lib/data/creatorStory";

export function CreatorStory() {
  const { eyebrow, title, intro, blocks, signature } = creatorStory;

  return (
    <section
      aria-labelledby="creator-story-heading"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Single soft accent behind the column — one playful element per view. */}
      <Blob
        color="var(--color-coral)"
        className="-top-16 right-[-10%] h-[28rem] w-[28rem] opacity-[0.12]"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={intro}
            className="[&>h2]:text-balance"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-prose flex-col gap-6 text-lg leading-relaxed text-warm-gray">
            {blocks.map((block, index) => {
              switch (block.type) {
                case "cadence":
                  return (
                    <p
                      key={index}
                      className="flex flex-col gap-1 border-l-2 border-coral/40 pl-5 text-charcoal/80"
                    >
                      {block.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </p>
                  );
                case "highlight":
                  return (
                    <p
                      key={index}
                      className="font-display text-2xl font-semibold leading-snug text-charcoal sm:text-3xl"
                    >
                      {block.text}
                    </p>
                  );
                default:
                  return <p key={index}>{renderInline(block.text)}</p>;
              }
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <figure className="mx-auto mt-10 flex max-w-prose items-center gap-4">
            {signature.portrait && (
              <Image
                src={signature.portrait}
                alt={`${signature.name}, ${signature.role}`}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-full object-cover shadow-soft"
              />
            )}
            <figcaption>
              <p className="font-display text-xl font-semibold text-coral">
                &mdash; {signature.name}
              </p>
              <p className="text-sm text-warm-gray">{signature.role}</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
