import type { CreatorStory } from '@/lib/types/creator'

/**
 * Supplied verbatim by the creator (2026-10-11) — her own words, lightly
 * structured into blocks for rendering. Emphasis (`**bold**`) follows the
 * phrases she marked. Keep edits here to formatting only; the voice is hers.
 */
export const creatorStory: CreatorStory = {
  eyebrow: 'Meet the Creator',
  title: 'Why I Made This',
  intro: 'A little story from Sneha, the mum behind Easy Toddler Day.',
  blocks: [
    {
      type: 'p',
      text: 'Before becoming a mum, I was an **engineer**. I had a job, a routine and a completely different picture of what my days would look like.',
    },
    { type: 'p', text: 'Then motherhood happened.' },
    {
      type: 'p',
      text: 'Like many mothers, I stepped away from my job after my little one was born. I loved being there for him, but somewhere along the way, I also felt this little urge to **create something of my own.**',
    },
    {
      type: 'p',
      text: 'I’ve always loved **art, craft and making things with my hands.** So when my son was around 2½, I started making little activities and worksheets for him.',
    },
    {
      type: 'p',
      text: 'There wasn’t really a big plan behind it. I was simply trying things out.',
    },
    {
      type: 'cadence',
      lines: [
        'Some activities he loved.',
        'Some he completely ignored.',
        'Some he wanted to do again and again.',
      ],
    },
    {
      type: 'p',
      text: 'As I kept creating, my engineering side naturally came into it too. I started putting things into a **proper structure** — what we could explore each week, how different activities could connect, and how learning could become a simple part of our everyday routine.',
    },
    {
      type: 'p',
      text: 'One week became another, and eventually I had built **26 weeks of learning**.',
    },
    {
      type: 'p',
      text: 'But it wasn’t just a workbook. I wanted something that could tell a parent **what to explore each week**, while the workbook made it easier to actually sit down and do it.',
    },
    {
      type: 'p',
      text: 'And slowly, the **26-week Learning Calendar and Toddler Workbook** came together.',
    },
    {
      type: 'p',
      text: 'For me, this became a beautiful way to bring together three things I love — **creating, teaching and being involved in my child’s little everyday moments.**',
    },
    {
      type: 'p',
      text: 'Because I don’t think learning with a toddler needs to look like school.',
    },
    {
      type: 'cadence',
      lines: [
        'Sometimes it’s a worksheet.',
        'Sometimes it’s a song.',
        'Sometimes it’s pretend play.',
        'Sometimes it’s helping with a little chore.',
        'And sometimes, it’s simply sitting together and trying something new.',
      ],
    },
    {
      type: 'highlight',
      text: 'Easy Toddler Day grew from those little moments in our home.',
    },
    {
      type: 'p',
      text: 'And if it can make another mum feel a little less overwhelmed about “What should I do with my toddler today?”, then it has found its purpose.',
    },
  ],
  signature: {
    name: 'Sneha',
    role: 'Creator & Mum behind Easy Toddler Day',
  },
}
