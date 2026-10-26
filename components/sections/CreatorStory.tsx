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
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative background blob */}
      <Blob
        color="var(--color-coral)"
        className="-top-16 right-[-10%] h-[28rem] w-[28rem] opacity-[0.10]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={intro}
            className="[&>h2]:text-balance text-center"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
          {/* Creator & Toddler Photo with playful decorative blobs */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal delay={0.1}>
              <div className="relative mx-auto h-[290px] w-[290px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-full max-w-[400px]">
                <Blob
                  color="var(--color-sage)"
                  className="left-[-8%] top-[-8%] h-48 w-48 opacity-80"
                />
                <Blob
                  color="var(--color-coral)"
                  className="bottom-[-8%] right-[-8%] h-52 w-52 opacity-80"
                />
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-lift bg-cream/70">
                  <Image
                    src="/images/about-hero-parent-coach.png"
                    alt="A parent guiding her toddler through learning activities"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 400px, 350px"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-warm-gray">
                {blocks.map((block, index) => {
                  switch (block.type) {
                    case "cadence":
                      return (
                        <p
                          key={index}
                          className="flex flex-col gap-1 border-l-2 border-coral/40 pl-5 text-charcoal/90 font-medium"
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
                          className="font-display text-xl sm:text-2xl font-semibold leading-snug text-charcoal"
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

            {/* Signature */}
            <Reveal delay={0.2}>
              <figure className="mt-10 flex items-center gap-4 border-t border-warm-gray-light/60 pt-6">
                <figcaption>
                  <p className="font-display text-xl font-semibold text-coral">
                    &mdash; {signature.name}
                  </p>
                  <p className="text-sm text-warm-gray">{signature.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
