import { JOB_CONTENT } from '../constants/experience'

export interface Technology {
  id: string
  name: string
}

export type JobContentType = typeof JOB_CONTENT[keyof typeof JOB_CONTENT]

// == Future improvement ==
// Potentially, I could extend this type to contain a client property
// Client property would describe a client that I was serving as part of that job
export interface Job {
  id: string
  role: string
  organization: string
  startDate: string
  endDate: string

  // TODO: change description to content if it feels like a better name
  description: JobContentType
  technologies: Technology[]
}

export interface BlogThumbnail {
  title: string
  date: string
  summary: string
  url: string
}

export interface Project {
  name: string
  summary: string
  url: string
  repoLink: string
}
