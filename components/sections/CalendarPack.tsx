import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CalendarPackCarousel,
  type CalendarPackSlide,
} from "@/components/sections/CalendarPackCarousel";

const sky = "text-sky-dark";
const sage = "text-sage-dark";
const coral = "text-coral-dark";

const slides: CalendarPackSlide[] = [
  {
    heading: "My Name",
    description: "Make learning personal by learning to recognise and build their own name.",
    image: "/calendar-pack/name.png",
    headingClass: coral,
  },
  {
    heading: "26 Letters",
    description:
      "Explore uppercase & lowercase letters through familiar objects and playful activities.",
    image: "/calendar-pack/letters.png",
    headingClass: sky,
  },
  {
    heading: "Numbers 0–25",
    description: "Count, match & recognise numbers with dots and everyday objects.",
    image: "/calendar-pack/numbers.png",
    headingClass: sage,
  },
  {
    heading: "14 Shapes",
    description: "Discover 14 2D shapes through objects, matching, creating & play.",
    image: "/calendar-pack/shapes.png",
    headingClass: coral,
  },
  {
    heading: "11 Colours",
    description: "Learn colours through everyday objects your toddler already knows.",
    image: "/calendar-pack/colours.png",
    headingClass: sky,
  },
  {
    heading: "26 Animals",
    description: "Meet familiar animals through pictures, movement, sounds & play.",
    image: "/calendar-pack/animals.png",
    headingClass: sage,
  },
  {
    heading: "26 Body Parts",
    description: "Learn about the body through movement, songs and playful activities.",
    image: "/calendar-pack/body-parts.png",
    headingClass: coral,
  },
  {
    heading: "Action & Movement Songs",
    description: "Sing, dance & move with a new theme-based song every week.",
    image: "/calendar-pack/songs.png",
    headingClass: sky,
  },
  {
    heading: "2 Daily Chores",
    description: "Build independence by practising two simple chores every day.",
    image: "/calendar-pack/chores.png",
    headingClass: sage,
  },
  {
    heading: "Theme-Based Play",
    description:
      "Play-based activities connected to the week's letter, number, shape, colour & theme.",
    image: "/calendar-pack/theme-play.png",
    headingClass: coral,
  },
  {
    heading: "Role Play",
    description: "Pretend to be someone new each week and learn through real-life play.",
    image: "/calendar-pack/role-play.png",
    headingClass: sky,
  },
  {
    heading: "Tracing & Cutting",
    description:
      "Build fine-motor skills through simple tracing, cutting & tearing activities.",
    image: "/calendar-pack/tracing-cutting.png",
    headingClass: sage,
  },
];

export function CalendarPack() {
  return (
    <section id="calendar-pack" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading
          title="Meet the Toddlers Calendar Pack"
          subtitle="A complete 26-week learning journey. Just print, play, and watch them grow"
        />

        <CalendarPackCarousel slides={slides} />
      </div>
    </section>
  );
}
