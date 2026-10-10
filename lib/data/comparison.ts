export interface ComparisonRow {
  feature: string
  us: string
  them: string
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Weekly theme structure',
    us: 'One theme a week, fully planned',
    them: 'Random, unordered pages',
  },
  {
    feature: 'Prep needed',
    us: 'No-prep, ready to use',
    them: 'Needs you to plan & print',
  },
  {
    feature: 'Format',
    us: 'Hard copy calendar + digital PDF',
    them: 'Usually one format only',
  },
  {
    feature: 'Beyond paper',
    us: 'Songs, chores & pretend play included',
    them: 'Worksheets only',
  },
  {
    feature: 'Age targeting',
    us: 'Built specifically for 2–4 years',
    them: 'Broad, generic age range',
  },
]

export const brandPillars = [
  { label: 'Play', className: 'text-coral-dark' },
  { label: 'Learn', className: 'text-sky-dark' },
  { label: 'Grow', className: 'text-sage-dark' },
] as const
