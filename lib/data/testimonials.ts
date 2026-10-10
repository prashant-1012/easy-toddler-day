export interface Testimonial {
  id: string
  name: string
  relation?: string
  title?: string
  // Paragraphs separated by a blank line ("\n\n").
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
  avatar?: string
}

// Avatars are placeholder portraits (/public/images); reviews without one
// fall back to initials.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: "Jaiveer's Mom",
    relation: 'Mom of a 3-year-old',
    quote:
      "I absolutely love this learning calendar for my 3-year-old! ❤️\n\nWhat I really appreciate is how thoughtfully each week is planned. Every week focuses on one thing to learn — an alphabet, number, shape, colour, animal, body part, action & movement. It makes learning feel simple, structured, and fun for kids.\n\nThe best part is that the activities are connected to what is being taught that week. So my little one gets to learn the concept and then reinforce it through fun activities. He genuinely enjoys doing them, which makes learning much more engaging and exciting. 🥰\n\nI also got the workbook along with it, and it has been such a wonderful addition. The tracing, colouring, cutting and other hands-on activities keep him occupied while also helping develop his fine motor skills and coordination.\n\nIt's so nice to see him learning while having fun! As a parent, I really appreciate resources that make my child enjoy his learning time instead of feeling like he is \"studying.\" This calendar and workbook do exactly that! ❤️\n\nA big thank you for putting so much thought and effort into making learning fun, interactive and development-focused. And I can say that this is why it's Easy Toddler Day! Highly recommended for little learners! ✨",
    rating: 5,
    avatar: '/images/ananya.webp',
  },
  {
    id: 't2',
    name: "Dhriti's Mom",
    relation: 'Mom of a 3-year-old',
    title: 'A Game Changer for Daily Revision!',
    quote:
      "I bought this Weekly Calendar for my 3-year-old daughter and it's the best decision! It has alphabets, numbers, shapes and activities - all in one place.\n\nEarlier I had to search for different worksheets for each topic, now everything is together. We just need 10 minutes to revise everything.\n\nWe use it daily during our circle time from 6:30 to 6:45 PM after her playtime in the evening. She enjoys it so much and it has become a lovely routine for us. The quality is excellent and very useful for daily practice.\n\nI highly recommend it for all parents with kids in the 2-5 years age group. Worth every penny!",
    rating: 5,
  },
  {
    id: 't3',
    name: "Atharv's Mom",
    quote:
      "I wanted to send a quick note to say a huge thank you for the wonderful calendar!\n\nThe quality is absolutely amazing, and the design is so thoughtful and perfect for little ones. It is already adding so much joy to our daily routine.\n\nThank you for creating such beautiful and helpful resources for parents and toddlers. Keep up the fantastic work!",
    rating: 5,
  },
  {
    id: 't4',
    name: 'Sanchita',
    relation: 'Mom',
    quote:
      'Calendar is too pretty and nicely organised. Worksheets are very well designed. My child is enjoying it 👌',
    rating: 5,
  },
  {
    id: 't5',
    name: "Divyanka's Mom",
    quote:
      "I was looking for simple, productive activities to do with my little one so that the time we spend together feels both fun and meaningful. That's when I came across the Instagram page Easy Toddler Day.\n\nThe concept of pairing a calendar with matching worksheets immediately caught my attention. I never planned on starting anything formal, but my daughter began enjoying the activities so much that we naturally slipped into a gentle homeschooling rhythm.\n\nIf you're looking for a place to begin, this is a must buy. It gives you a clear, ready made blueprint for how to structure your days. Each week focuses on an alphabet letter, a shape, a colour, an animal, a body part, and an action/movement song. This consistent weekly theme creates a lovely flow that keeps both you and your child focused, while the matching worksheets make everything feel connected and relatable for little ones.\n\nHighly recommend for any parent wanting low-pressure, purposeful playtime that actually teaches!",
    rating: 5,
    avatar: '/images/sneha.webp',
  },
  {
    id: 't6',
    name: "Mitharn's Mom",
    relation: 'Mom of a 2.6-year-old',
    quote:
      "I'm a mom of a 2.6-year-old boy, and I was actually looking for some fun and engaging activities for him. I came across your page on Instagram by chance.\n\nMy son really enjoys doing the activities you share, and they are so much fun for him. Thank you so much for sharing such wonderful and creative activities. Please keep sharing more activities like these, ma'am. They are truly helpful and enjoyable for us.",
    rating: 5,
  },
  {
    id: 't7',
    name: "Krithvik's Mom",
    quote:
      "Thank you so much for making this product. It is really helpful to teach my toddler numbers, alphabets, shapes, colours and body parts.\n\nEverything is printed on a single page, which makes it easy for us to teach and for them to understand. I have already recommended this product to fellow mothers 🙂",
    rating: 5,
  },
]

export function getHomepageTestimonials(): Testimonial[] {
  return testimonials
}
