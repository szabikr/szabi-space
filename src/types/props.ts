import {
  JobContentType,
  Technology,
  Experience,
  Project,
  BlogThumbnail,
} from './models'

export interface GithubAnchorProps {
  repoLink: string
}

export interface AccordionProps {
  items: {
    id: string
    header: (show?: boolean) => JSX.Element

    // TODO: Could probably be just a JSX.Element and not a function that returns one
    body: () => JSX.Element
  }[]
}

export interface ExperienceHeaderProps {
  roles: string[]
  organizations: string[]
  startYear: string
  endYear: string

  // Conditional rendering props
  showYear?: boolean
}

export interface ExperienceBodyProps {
  startDate: string
  endDate: string
  descriptions: JobContentType[]
  technologies: Technology[]
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
