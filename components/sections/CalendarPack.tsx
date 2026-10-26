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
    fullDetail:
      "Each weekly calendar page dedicates space to writing and practising your toddler's name. They learn letter recognition, letter sounds, and spelling through daily repetition, building strong self-identity and early handwriting readiness.",
    image: "/calendar-pack/name.png",
    headingClass: coral,
  },
  {
    heading: "26 Letters",
    description:
      "Explore uppercase & lowercase letters through familiar objects and playful activities.",
    fullDetail:
      "Covers one letter per week (A through Z) in both uppercase and lowercase. Connected to everyday objects, sensory play, and sound matching so toddlers grasp letters naturally without stress.",
    image: "/calendar-pack/letters.png",
    headingClass: sky,
  },
  {
    heading: "Numbers 0–25",
    description: "Count, match & recognise numbers with dots and everyday objects.",
    fullDetail:
      "Builds intuitive numeracy from 0 to 25. Toddlers count visual dots, match quantities to real objects (like blocks, spoons, or snacks), and develop strong foundational number sense.",
    image: "/calendar-pack/numbers.png",
    headingClass: sage,
  },
  {
    heading: "14 Shapes",
    description: "Discover 14 2D shapes through objects, matching, creating & play.",
    fullDetail:
      "Introduces 14 geometric shapes — from circles and triangles to octagons and crescents. Activities encourage toddlers to spot shapes around the home and create their own drawings.",
    image: "/calendar-pack/shapes.png",
    headingClass: coral,
  },
  {
    heading: "11 Colours",
    description: "Learn colours through everyday objects your toddler already knows.",
    fullDetail:
      "Features a dedicated colour focus each week. Taught through real-world examples like yellow bananas, blue skies, and green leaves to make colour recognition effortless.",
    image: "/calendar-pack/colours.png",
    headingClass: sky,
  },
  {
    heading: "26 Animals",
    description: "Meet familiar animals through pictures, movement, sounds & play.",
    fullDetail:
      "26 animals introduced with their characteristic sounds, movements, and habitats. Encourages creative imitation, expanding vocabulary, and developing empathy for living creatures.",
    image: "/calendar-pack/animals.png",
    headingClass: sage,
  },
  {
    heading: "26 Body Parts",
    description: "Learn about the body through movement, songs and playful activities.",
    fullDetail:
      "Toddlers explore and identify 26 body parts through interactive games, mirror play, and movement songs, reinforcing body awareness and coordination.",
    image: "/calendar-pack/body-parts.png",
    headingClass: coral,
  },
  {
    heading: "Action & Movement Songs",
    description: "Sing, dance & move with a new theme-based song every week.",
    fullDetail:
      "Every week features a high-energy action song or rhyme. Combines singing, dancing, and rhythmic motion to boost gross-motor coordination, language cadence, and listening skills.",
    image: "/calendar-pack/songs.png",
    headingClass: sky,
  },
  {
    heading: "2 Daily Chores",
    description: "Build independence by practising two simple chores every day.",
    fullDetail:
      "Simple, fun at-home chores like wiping the table, sorting socks, or watering plants. Cultivates a sense of responsibility, pride, and executive function early on.",
    image: "/calendar-pack/chores.png",
    headingClass: sage,
  },
  {
    heading: "Theme-Based Play",
    description:
      "Play-based activities connected to the week's letter, number, shape, colour & theme.",
    fullDetail:
      "Six no-prep play activities woven around each week's central theme. Designed to use everyday household items so parents don't need to spend time prepping or buying supplies.",
    image: "/calendar-pack/theme-play.png",
    headingClass: coral,
  },
  {
    heading: "Role Play",
    description: "Pretend to be someone new each week and learn through real-life play.",
    fullDetail:
      "Weekly imaginative role-play scenarios — like Doctor, Chef, Grocery Shopper, or Gardener. Encourages emotional intelligence, storytelling, problem-solving, and conversational confidence.",
    image: "/calendar-pack/role-play.png",
    headingClass: sky,
  },
  {
    heading: "Tracing & Cutting",
    description:
      "Build fine-motor skills through simple tracing, cutting & tearing activities.",
    fullDetail:
      "Gentle fine-motor practice including straight, wavy, and zig-zag tracing, tearing paper strips, and beginner scissors cutouts. Strengthens little hand muscles for smooth pencil grip.",
    image: "/calendar-pack/tracing-cutting.png",
    headingClass: sage,
  },
];

export function CalendarPack() {
  return (
    <section id="calendar-pack" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading
          title="What's your toddler going to explore?"
          subtitle="26 weeks of structured learning, woven into twelve activity types every week"
        />

        <CalendarPackCarousel slides={slides} />
      </div>
    </section>
  );
}
