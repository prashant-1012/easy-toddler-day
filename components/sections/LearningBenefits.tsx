import { EyeOff, Flower2, Hand, PenTool, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    icon: EyeOff,
    title: "Screen-Free by Design",
    description:
      "No apps, no screens — just paper, pencils, and real focus, built into every page.",
  },
  {
    icon: PenTool,
    title: "Builds Fine Motor Skills",
    description:
      "Tracing and coloring activities strengthen the muscles behind handwriting, one stroke at a time.",
  },
  {
    icon: Flower2,
    title: "Montessori-Inspired",
    description:
      "Activities designed around how toddlers actually learn — through repetition, hands-on play, and gentle challenge.",
  },
  {
    icon: Sparkles,
    title: "Boosts Focus & Confidence",
    description:
      "Short, achievable pages help toddlers finish what they start — and feel proud of it.",
  },
  {
    icon: Hand,
    title: "Made for Little Hands",
    description:
      "Large print, thick lines, and simple instructions sized right for toddler dexterity.",
  },
  {
    icon: ShieldCheck,
    title: "Parent-Approved Content",
    description:
      "Every workbook is reviewed for age-appropriateness before it reaches your child.",
  },
];

export function LearningBenefits() {
  return (
    <section
      id="learning-benefits"
      className="scroll-mt-24 bg-cloud py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning Benefits"
          title="Why Toddlers (and Parents) Love Our Workbooks"
          subtitle="Every page is built around one idea: real learning happens through hands-on, screen-free play."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={(index % 3) * 0.08} className="h-full">
              <Card className="flex h-full flex-col gap-4 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                  <benefit.icon size={22} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {benefit.title}
                </h3>
                <p className="text-sm text-warm-gray">{benefit.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
