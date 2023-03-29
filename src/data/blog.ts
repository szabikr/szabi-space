import { BlogThumbnail } from '../types'

export const blogThumbnails: BlogThumbnail[] = [
  {
    title: 'Babel, a JavaScript Compiler',
    date: '2022-11-20',
    summary:
      'Babel is one of those tools that made JavaScript development in the 2010s approachable and contributed so much to the state of the language today.',
    url: '/blog/babel-a-javascript-compiler',
  },

  // TODO: Separate this out later
  // This Refactoring User Input Importer work is hardly a blog post.
  // It is a project specific finding and a case study.
  // It is about how to refactor code and why don't we just write the right code at first.
  {
    title: 'Refactoring User Input Importer in My Habit Tracker CLI',
    date: '2022-11-11',
    summary:
      'Writing self-explanatory, maintainable, testable, scalable and DRY code is difficult, specially when the requirements are still a bit cloudy and the product is still evolving. Follow me on this journey where I refactor my Habit Tracker CLI code.',
    url: '/blog/refactoring-user-input-importer-in-my-habit-tracker-cli',
  },
]
