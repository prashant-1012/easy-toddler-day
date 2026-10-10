export interface HowToUseStep {
  id: string
  image: string
  // The artwork already contains the step number, title and description, so
  // the alt text carries the same wording for screen readers.
  alt: string
}

export const howToUseSteps: HowToUseStep[] = [
  {
    id: 'step-1',
    image: '/how-to-use/step-1-pick-your-product.png',
    alt: 'Step 1, Pick your product: choose the wall calendar, the digital workbook, or the bundle of both.',
  },
  {
    id: 'step-2',
    image: '/how-to-use/step-2-one-theme-a-week.png',
    alt: "Step 2, Stick to one theme a week: follow that week's alphabet, number, shape or animal focus.",
  },
  {
    id: 'step-3',
    image: '/how-to-use/step-3-daily-activity.png',
    alt: 'Step 3, Do the daily activity: 5 to 10 minutes a day of a worksheet, a song, a chore or pretend play.',
  },
  {
    id: 'step-4',
    image: '/how-to-use/step-4-reuse-and-repeat.png',
    alt: 'Step 4, Reuse and repeat: print digital pages again anytime, or revisit favourite weeks.',
  },
]
