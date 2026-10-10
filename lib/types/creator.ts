/**
 * The founder's story, as ordered blocks. Inline text supports `**bold**`
 * only (rendered by `renderInline` in components/ui/RichText.tsx), matching
 * the convention used by BlogBlock.
 */
export type CreatorStoryBlock =
  /** A normal narrative paragraph. */
  | { type: 'p'; text: string }
  /**
   * A run of short rhythmic lines ("Sometimes it's a song.") that read as one
   * beat rather than as a bulleted list — rendered tighter and set apart.
   */
  | { type: 'cadence'; lines: string[] }
  /** A single emphasised line, rendered as a pull quote. */
  | { type: 'highlight'; text: string }

export interface CreatorStory {
  eyebrow: string
  title: string
  intro: string
  blocks: CreatorStoryBlock[]
  signature: {
    name: string
    role: string
    /** Optional real portrait. Omitted until the creator supplies one. */
    portrait?: string
  }
}
