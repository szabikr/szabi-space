import { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'Habit Tracker',
    summary:
      'A CLI tool that I use to track my habits. It is based on a well defined file parser.',
    url: 'blog/refactoring-user-input-importer-in-my-habit-tracker-cli',
    repoLink: 'https://github.com/szabikr/habit-tracker',
  },
  {
    name: 'Szabi.space',
    summary:
      'My personal website that showcases my work, hosts my blog and describes my past software engineering experience.',
    url: 'https://szabi.space/',
    repoLink: 'https://github.com/szabikr/szabi-space',
  },
  {
    name: 'Authentication in Single Page Application',
    summary:
      'A proof of concept for implementing authentication using the MERN tech stack.',
    url: '/proof-of-concepts/authentication',
    repoLink: 'https://github.com/szabikr/poc-authentication',
  },
  {
    name: 'React Boilerplate Using Webpack',
    summary:
      'A project from scratch that builds React applications with lates JS features and CSS support.',
    url: 'https://react-boilerplate-szabikr.vercel.app/',
    repoLink: 'https://github.com/szabikr/sandbox-react/tree/main/boilerplate',
  },
  {
    name: 'Quote Analyser',
    summary:
      'A funny little app that uses public APIs to take a quote apart and defined the words that are present.',
    url: 'https://quote-analyser-szabikr.vercel.app/',
    repoLink:
      'https://github.com/szabikr/sandbox-react/tree/main/quote-analyser',
  },
  {
    name: 'Todo List',
    summary:
      'Basic todo list application that persists your list so that you can make sure to complete every todo item.',
    url: 'https://todo-list-szabikr.vercel.app/',
    repoLink: 'https://github.com/szabikr/sandbox-react/tree/main/todo-list',
  },
]
