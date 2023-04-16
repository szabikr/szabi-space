import { MutableRefObject } from 'react'

import { Job, Technology, Experience, Project, BlogThumbnail } from './models'

export interface HeaderProps {
  expertiseSectionRef: MutableRefObject<HTMLElement>
  experienceSectionRef: MutableRefObject<HTMLElement>
  projectsSectionRef: MutableRefObject<HTMLElement>
  blogSectionRef: MutableRefObject<HTMLElement>
  contactSectionRef: MutableRefObject<HTMLElement>
}

export interface TaglineProps {
  onNextSectionClick: () => void
}

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

export interface ExpertiseProps {
  sectionRef: MutableRefObject<HTMLElement>
}

export interface ExperienceProps {
  sectionRef: MutableRefObject<HTMLElement>
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
  sectionRef: MutableRefObject<HTMLElement>
  projects: Project[]
}

export interface BlogProps {
  sectionRef: MutableRefObject<HTMLElement>
  thumbnails: BlogThumbnail[]
}

export interface ContactProps {
  sectionRef: MutableRefObject<HTMLElement>
}
