import { GetStaticProps } from 'next'
import { useRef } from 'react'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Expertise from '../components/expertise'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Blog from '../components/blog'
import Contact from '../components/contact'

import { experiences } from '../data/experience'
import { experienceOpenByDefault } from '../data/ui'
import { blogThumbnails } from '../data/blog'
import { projects } from '../data/projects'

// TODO: Define type for HomePageProps
export default function HomePage(props) {
  const expertiseSectionRef = useRef<HTMLElement>(null)
  const experienceSectionRef = useRef<HTMLElement>(null)
  const projectsSectionRef = useRef<HTMLElement>(null)
  const blogSectionRef = useRef<HTMLElement>(null)
  const contactSectionRef = useRef<HTMLElement>(null)

  const handleNextSectionClick = () => {
    history.pushState({}, '', `#expertise`)
    expertiseSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        expertiseSectionRef={expertiseSectionRef}
        experienceSectionRef={experienceSectionRef}
        projectsSectionRef={projectsSectionRef}
        blogSectionRef={blogSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <main>
        <Tagline onNextSectionClick={handleNextSectionClick} />
        <Expertise sectionRef={expertiseSectionRef} />
        <Experience
          sectionRef={experienceSectionRef}
          experiences={props.experiences}
          openByDefault={props.experienceOpenByDefault}
        />
        <Projects sectionRef={projectsSectionRef} projects={props.projects} />
        <Blog sectionRef={blogSectionRef} thumbnails={props.thumbnails} />
        <Contact sectionRef={contactSectionRef} />
      </main>
      <footer></footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      thumbnails: blogThumbnails,
      projects: projects,
      experiences: experiences,
      experienceOpenByDefault: experienceOpenByDefault,
    },
  }
}
