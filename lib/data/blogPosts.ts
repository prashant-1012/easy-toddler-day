import type { BlogBlock, BlogPost } from '@/lib/types/blog'

const AUTHOR = 'Easy Toddler Day Team'
const CTA_HREF = '/shop/calendar-workbook-bundle'
const CTA_LABEL = 'Explore Easy Toddler Day →'

// Average adult reading speed, rounded up so a post never claims "0 min".
function estimateReadTime(content: BlogBlock[]): number {
  const text = content
    .map((block) => {
      if (block.type === 'ul') return block.items.join(' ')
      if (block.type === 'cta') return ''
      return block.text
    })
    .join(' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

// coverImage files are the original blog photos in /public/images (blog1.jpeg
// still shows a small third-party school logo — the owner chose to keep it,
// see 20_CLAUDE_NOTES.md).
const posts: Omit<BlogPost, 'readTimeMinutes'>[] = [
  {
    id: 'b1',
    slug: '5-signs-your-toddler-is-ready-for-structured-activities',
    title: '5 Signs Your Toddler Is Ready for Structured Activities',
    excerpt:
      'Does your toddler run away the moment you bring out an activity? Here are 5 signs it may be time to add a little playful structure to their day.',
    category: 'Structured play',
    coverImage: '/images/blog3.jpg',
    accentColor: 'sage',
    author: AUTHOR,
    tags: ['structured activities', 'toddler readiness', 'free play'],
    content: [
      {
        type: 'p',
        text: "**Does your toddler run away the moment you bring out an activity? Or are you wondering if it's time to introduce a little more structure into their day?**",
      },
      {
        type: 'p',
        text: "The good news is—you don't need your toddler to sit quietly for 30 minutes or complete a worksheet perfectly before introducing structured activities.",
      },
      {
        type: 'p',
        text: 'For toddlers, structured learning can simply mean a **short, playful activity with a clear beginning and end.** And it can work alongside plenty of free play, which is an important part of how young children explore, imagine and learn.',
      },
      { type: 'p', text: 'So, how do you know if your toddler is ready?' },
      { type: 'p', text: 'Here are **5 signs to look for.**' },

      { type: 'h2', text: '1. They can stay with an activity for a few minutes' },
      {
        type: 'p',
        text: 'Maybe your toddler sits with a puzzle, colours a picture, builds with blocks or looks through a book for a few minutes.',
      },
      { type: 'p', text: "They don't have to sit perfectly still." },
      {
        type: 'p',
        text: 'The fact that they can **focus on something they enjoy for a short time** is a good starting point.',
      },
      {
        type: 'p',
        text: 'Start small. Even 5–10 minutes of a fun activity can be enough.',
      },

      { type: 'h2', text: '2. They are starting to follow simple instructions' },
      {
        type: 'ul',
        items: [
          '“Give me the red crayon.”',
          '“Put the blocks in the box.”',
          '“Find the circle.”',
        ],
      },
      {
        type: 'p',
        text: 'If your toddler is beginning to understand and follow simple instructions, you can start introducing simple structured activities.',
      },
      {
        type: 'p',
        text: 'Keep your instructions **short, simple and clear.**',
      },

      { type: 'h2', text: '3. They love doing the same activity again and again' },
      {
        type: 'p',
        text: 'Toddlers often want to hear the same song, read the same book or play the same game **over and over again.**',
      },
      {
        type: 'p',
        text: 'It may feel repetitive to you, but repetition is a natural part of toddler learning.',
      },
      {
        type: 'p',
        text: 'So instead of constantly looking for something new, use their favourite activities as your starting point.',
      },
      {
        type: 'p',
        text: '**If they loved matching animals yesterday, do it again today.**',
      },

      { type: 'h2', text: '4. They start copying what you do' },
      {
        type: 'ul',
        items: [
          'Does your toddler pretend to talk on the phone because they see you doing it?',
          "Do they pick up a cloth when you're cleaning?",
          'Do they copy your actions during songs?',
        ],
      },
      {
        type: 'p',
        text: 'This growing interest in imitation and pretend play is a great opportunity for structured activities.',
      },
      { type: 'p', text: "You don't always need a special learning toy." },
      {
        type: 'p',
        text: 'Sometimes, **your everyday routine is the activity.**',
      },

      { type: 'h2', text: '5. They want to “do it myself”' },
      { type: 'p', text: '“Let me do it!”' },
      { type: 'p', text: 'Sound familiar? 😄' },
      {
        type: 'p',
        text: 'That growing independence can actually be a great opportunity for learning.',
      },
      {
        type: 'p',
        text: 'Let your toddler help with simple tasks—putting toys away, matching socks, helping wash fruits, carrying something safe or choosing which activity they want to do.',
      },
      {
        type: 'p',
        text: 'Everyday activities can become playful learning moments while also encouraging independence.',
      },

      { type: 'h2', text: "What if my toddler doesn't show all 5 signs?" },
      { type: 'p', text: "**That's completely okay.**" },
      {
        type: 'p',
        text: "Children develop at different rates, and you don't need to wait for a perfect checklist before playing and learning together.",
      },
      { type: 'p', text: 'Start with what your toddler already enjoys.' },
      { type: 'p', text: 'Try:' },
      {
        type: 'p',
        text: '**5 minutes → one simple activity → lots of encouragement → done.**',
      },
      {
        type: 'p',
        text: "If they lose interest, don't force it. Come back another day.",
      },
      {
        type: 'p',
        text: "And don't forget **free play**. Structured activities shouldn't replace it. Children also need time to choose what they want to play with, explore and use their imagination.",
      },

      { type: 'h2', text: 'Start small. Keep it playful.' },
      {
        type: 'p',
        text: "You don't need a complicated timetable or hours of preparation.",
      },
      { type: 'p', text: 'A little bit of structure can simply mean:' },
      {
        type: 'ul',
        items: [
          '**One activity.**',
          '**A few minutes.**',
          '**A playful approach.**',
          '**Then back to play.**',
        ],
      },
      {
        type: 'p',
        text: "That's exactly the idea behind **Easy Toddler Day**—making it easier for parents to know what to do each day without turning toddlerhood into school.",
      },
      {
        type: 'p',
        text: '**Looking for simple activities to do with your toddler?**',
      },
      {
        type: 'p',
        text: 'Explore the **Easy Toddler Day Weekly Learning Calendar + Toddler Workbook** and make learning part of your everyday play.',
      },
      { type: 'cta', label: CTA_LABEL, href: CTA_HREF },
    ],
  },
  {
    id: 'b2',
    slug: 'how-to-build-a-10-minute-learning-habit-with-your-toddler',
    title: 'How to Build a 10-Minute Learning Habit With Your Toddler',
    excerpt:
      "You don't need an hour-long activity plan. Ten playful minutes a day can be enough to build a simple learning habit.",
    category: 'Routines',
    coverImage: '/images/blog2.webp',
    accentColor: 'sky',
    author: AUTHOR,
    tags: ['routine', 'learning habit', 'daily activities'],
    content: [
      {
        type: 'p',
        text: "You don't need an hour-long activity plan to make learning part of your toddler's day.",
      },
      {
        type: 'p',
        text: 'In fact, 10 minutes can be enough to create a simple learning habit—especially when those 10 minutes feel like play rather than school.',
      },
      { type: 'p', text: "The key isn't doing more." },
      { type: 'p', text: "It's making it simple enough to repeat every day." },

      { type: 'h2', text: 'Why 10 minutes?' },
      {
        type: 'p',
        text: 'Toddlers have short attention spans, and expecting them to sit through a long activity can quickly turn learning into a struggle.',
      },
      {
        type: 'p',
        text: "Instead, think of learning as a small part of your everyday routine.",
      },
      {
        type: 'p',
        text: '**10 minutes of focused play + the rest of the day for free play.**',
      },
      { type: 'p', text: "That's it." },
      {
        type: 'p',
        text: "You don't need to finish a worksheet, teach five concepts or keep your toddler sitting at a table.",
      },
      {
        type: 'p',
        text: 'The goal is simply to spend a few minutes doing something together.',
      },

      { type: 'h2', text: '1. Pick the same time every day' },
      {
        type: 'p',
        text: 'A routine becomes easier when your toddler knows what to expect.',
      },
      {
        type: 'p',
        text: 'Choose a time that naturally fits into your day. It could be:',
      },
      {
        type: 'ul',
        items: [
          'After breakfast',
          'Before afternoon play',
          'After nap time',
          'Before dinner',
        ],
      },
      {
        type: 'p',
        text: "You don't have to choose the “perfect” time. Choose a time that works for your family.",
      },

      { type: 'h2', text: '2. Keep the activity ready' },
      {
        type: 'p',
        text: 'One of the biggest reasons parents skip activities? Preparation takes too long.',
      },
      {
        type: 'p',
        text: "If you need to search Pinterest, print something, collect materials and figure out what to do every day, it's difficult to stay consistent.",
      },
      {
        type: 'p',
        text: 'Instead, keep everything you need in one place.',
      },
      {
        type: 'p',
        text: 'When activity time comes, you should be able to simply say: “Come, let\'s do our activity!”',
      },

      { type: 'h2', text: '3. Follow one simple theme' },
      {
        type: 'p',
        text: "You don't need to teach everything every day. Choose one small focus. For example:",
      },
      {
        type: 'ul',
        items: [
          '**Monday:** Letter A',
          '**Tuesday:** Number 1',
          '**Wednesday:** Colour red',
          '**Thursday:** Shape circle',
          '**Friday:** Animal theme',
        ],
      },
      {
        type: 'p',
        text: 'You can also connect the theme to songs, toys, books or everyday activities.',
      },
      {
        type: 'p',
        text: 'This makes the activity feel like play rather than a lesson.',
      },

      { type: 'h2', text: '4. Start with just 5 minutes' },
      {
        type: 'p',
        text: "Don't feel like you have to reach 10 minutes from day one. Start with 5 minutes.",
      },
      { type: 'p', text: 'If your toddler wants to continue, great!' },
      {
        type: 'p',
        text: "If they want to stop after five minutes, that's okay too.",
      },
      {
        type: 'p',
        text: 'Over time, those few minutes can naturally become part of your daily routine.',
      },

      { type: 'h2', text: '5. Let your toddler move' },
      {
        type: 'p',
        text: "Structured activity doesn't mean your toddler has to sit in one place. You can learn while:",
      },
      {
        type: 'ul',
        items: [
          'Jumping',
          'Singing',
          'Matching',
          'Sorting',
          'Dancing',
          'Finding objects',
          'Pretending',
          'Helping with simple chores',
        ],
      },
      { type: 'p', text: 'Learning can happen anywhere.' },

      { type: 'h2', text: "6. Don't worry about finishing" },
      {
        type: 'p',
        text: 'This is probably one of the hardest things for parents to remember.',
      },
      {
        type: 'p',
        text: "If you planned three activities but your toddler only wants to do one, that's okay.",
      },
      {
        type: 'p',
        text: "If they colour half the worksheet and run away, that's okay.",
      },
      {
        type: 'p',
        text: "If they want to repeat the same activity tomorrow, that's okay too.",
      },
      { type: 'p', text: 'The goal is not to complete a checklist.' },
      {
        type: 'p',
        text: 'The goal is to build a positive learning habit.',
      },

      { type: 'h2', text: 'A simple 10-minute routine' },
      { type: 'p', text: "Here's an easy routine you can try:" },
      {
        type: 'ul',
        items: [
          '**2 minutes → Get ready.** Choose the activity and let your toddler help.',
          '**5 minutes → Activity.** Do one simple playful activity together.',
          '**2 minutes → Repeat or extend.** Sing a song, talk about what you did or let them try again.',
          '**1 minute → Finish.** Pack away together and move on.',
        ],
      },
      { type: 'p', text: "That's your 10 minutes." },
      {
        type: 'ul',
        items: ['No pressure.', 'No perfect setup.', 'No long lessons.'],
      },
      {
        type: 'p',
        text: '**Just 10 minutes of intentional play together.**',
      },

      { type: 'h2', text: 'Make it easy enough to repeat' },
      {
        type: 'p',
        text: "The best routine isn't the one that looks perfect on paper. It's the one you can actually follow.",
      },
      {
        type: 'p',
        text: "Some days you'll manage 10 minutes. Some days you'll manage 5. And some days you'll skip it completely.",
      },
      { type: 'p', text: "That's real life." },
      { type: 'p', text: 'The next day, simply start again.' },
      {
        type: 'p',
        text: 'At Easy Toddler Day, that\'s why we created a simple weekly learning calendar—with activities planned around one theme so you don\'t have to spend every night figuring out “What should I do with my toddler tomorrow?”',
      },
      {
        type: 'p',
        text: '**Ready to make learning part of your everyday routine?**',
      },
      {
        type: 'p',
        text: 'Explore the **Easy Toddler Day Weekly Learning Calendar + Toddler Workbook** and make those little 10-minute moments count.',
      },
      { type: 'cta', label: CTA_LABEL, href: CTA_HREF },
    ],
  },
  {
    id: 'b3',
    slug: 'what-to-expect-from-your-child-at-age-2-4-years',
    title: 'What to Expect From Your Child at Age 2–4 Years',
    excerpt:
      "Every child develops at their own pace. Here's what you can generally expect from your child between 2 and 4 years.",
    category: 'Milestones',
    coverImage: '/images/blog1.jpeg',
    accentColor: 'coral',
    author: AUTHOR,
    tags: ['milestones', 'child development', 'ages 2-4'],
    source: {
      label: 'CDC: Developmental milestones',
      url: 'https://www.cdc.gov/act-early/milestones/index.html',
    },
    content: [
      { type: 'p', text: 'Every child develops at their own pace.' },
      {
        type: 'p',
        text: 'One toddler may be talking nonstop while another is still finding their words. One may love puzzles and drawing, while another would rather run, climb and explore.',
      },
      { type: 'p', text: 'That is completely normal.' },
      {
        type: 'p',
        text: 'Developmental milestones are skills that most children—around 75% or more—can do by a certain age. They are useful for understanding your child\'s development, but they are not a test that your child needs to “pass.”',
      },
      {
        type: 'p',
        text: 'So, what can you generally expect between 2 and 4 years?',
      },

      { type: 'h2', text: 'Around 2 Years: Exploring Everything' },
      {
        type: 'p',
        text: 'At around 2, your toddler is becoming more independent and curious about the world around them.',
      },
      { type: 'p', text: 'You may notice them:' },
      {
        type: 'ul',
        items: [
          'Following simple instructions',
          'Saying two or more words together',
          'Pointing to things in books when you ask',
          'Running and kicking a ball',
          'Using a spoon',
          'Beginning simple pretend play',
          'Trying buttons, switches and other objects',
          'Playing with more than one toy at a time',
        ],
      },
      {
        type: 'p',
        text: 'They are also becoming more interested in copying what adults do.',
      },
      {
        type: 'p',
        text: 'This is a wonderful age for songs, pretend play, simple matching activities, books and everyday helping.',
      },

      {
        type: 'h2',
        text: 'Around 3 Years: Talking, Pretending & Doing More Independently',
      },
      {
        type: 'p',
        text: 'By 3, many children are becoming much more confident communicators and are beginning to interact more with other children.',
      },
      { type: 'p', text: 'You may notice your child:' },
      {
        type: 'ul',
        items: [
          'Having short back-and-forth conversations',
          'Asking “who,” “what,” “where” or “why” questions',
          'Saying their first name',
          'Joining other children to play',
          'Drawing a circle when shown how',
          'Using a fork',
          'Putting on some clothing independently',
          'Beginning to use more imaginative play',
        ],
      },
      {
        type: 'p',
        text: 'This is also a great age for introducing simple structured activities because children are becoming more able to follow instructions, participate in pretend play and stay engaged with an activity.',
      },

      { type: 'h2', text: 'Around 4 Years: Growing Independence & Imagination' },
      {
        type: 'p',
        text: 'By 4, many children are becoming more independent and are developing stronger language, social and motor skills.',
      },
      { type: 'p', text: 'You may notice your child:' },
      {
        type: 'ul',
        items: [
          'Answering simple questions',
          'Naming some colours',
          'Telling simple stories',
          'Enjoying pretend and imaginative play',
          'Following simple rules in games',
          'Helping with everyday tasks',
          'Becoming more confident with dressing',
          'Developing drawing and hand skills',
          'Playing more cooperatively with other children',
        ],
      },
      {
        type: 'p',
        text: 'At this age, children can often participate in activities that involve simple rules, creating, sorting, drawing, storytelling and imaginative play.',
      },

      { type: 'h2', text: 'What About Learning Letters, Numbers & Shapes?' },
      { type: 'p', text: 'You may be wondering:' },
      {
        type: 'ul',
        items: [
          '“Should my 2-year-old know the alphabet?”',
          '“Should my 3-year-old be writing?”',
          '“Should my 4-year-old know all their numbers?”',
        ],
      },
      {
        type: 'p',
        text: 'There is no need to turn these questions into a race.',
      },
      {
        type: 'p',
        text: 'At this age, learning can happen through play, conversation, books, songs, movement and everyday activities.',
      },
      { type: 'p', text: 'You can introduce:' },
      {
        type: 'ul',
        items: [
          '**Letters** through familiar objects and songs',
          '**Numbers** through counting toys, snacks or steps',
          '**Shapes** through objects around the house',
          '**Colours** through clothes, toys and food',
          '**Animals** through books, sounds and pretend play',
          '**Body parts** through songs and movement',
          '**Fine-motor activities** through drawing, tracing, tearing and safe cutting',
        ],
      },
      {
        type: 'p',
        text: "The goal isn't to make your toddler “school ready” as quickly as possible.",
      },
      { type: 'p', text: '**The goal is to make learning enjoyable.**' },

      { type: 'h2', text: "Don't Compare Your Toddler" },
      {
        type: 'p',
        text: 'This is one of the most important things to remember.',
      },
      {
        type: 'ul',
        items: [
          "Your friend's 3-year-old may know all their letters.",
          'Your child may be amazing at puzzles.',
          'Another child may be talking more.',
          'Another may be incredibly active and physically confident.',
        ],
      },
      { type: 'p', text: 'All children develop differently.' },
      {
        type: 'p',
        text: 'Milestones can help you notice how your child is developing, but they should not become a source of daily comparison or pressure.',
      },
      {
        type: 'p',
        text: "If your child is not meeting one or more milestones, has lost a skill they previously had, or you have concerns about their development, talk to your child's doctor.",
      },

      { type: 'h2', text: 'Learning at 2–4 Should Still Feel Like Play' },
      {
        type: 'p',
        text: "Your toddler doesn't need hours of worksheets.",
      },
      {
        type: 'p',
        text: 'They need opportunities to move, talk, explore, pretend, create and play.',
      },
      {
        type: 'p',
        text: 'Even a simple 5–10 minute activity can become part of your day.',
      },
      {
        type: 'p',
        text: "That's the idea behind **Easy Toddler Day**—giving parents simple, age-appropriate activities they can actually do at home without spending hours planning what to teach next.",
      },
      {
        type: 'p',
        text: '**Want simple learning activities for your 2–4-year-old?**',
      },
      {
        type: 'p',
        text: 'Explore the **Easy Toddler Day Weekly Learning Calendar + Toddler Workbook** and make learning part of your everyday play.',
      },
      { type: 'cta', label: CTA_LABEL, href: CTA_HREF },
    ],
  },
]

export const blogPosts: BlogPost[] = posts.map((post) => ({
  ...post,
  readTimeMinutes: estimateReadTime(post.content),
}))

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
