import { Job, Technology, Experience, Project, BlogThumbnail } from './models'

export interface GithubAnchorProps {
  repoLink: string
}

export interface AccordionProps {
  items: {
    id: string
    header: (isOpen?: boolean) => JSX.Element

    // TODO: Could probably be just a JSX.Element and not a function that returns one
    body: () => JSX.Element
  }[]
  openByDefault: string
}

export interface ExperienceHeaderProps {
  jobs: Job[]

  // Conditional rendering props
  showYear?: boolean
  showOrganization?: boolean
}

export interface ExperienceBodyProps {
  jobs: Job[]
}

export interface ExperienceProps {
  experiences: Experience[]
  // this property is for the accordion item to be open when the website loads
  openByDefault: string
}

export interface ExperiencePeriodFullProps {
  start: string
  end: string
}

export interface TechTagsProps {
  technologies: Technology[]
}

export interface ProjectsProps {
  projects: Project[]
}

export interface BlogProps {
  thumbnails: BlogThumbnail[]
}
