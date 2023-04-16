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
  const expertiseSectionRef = useRef(null)
  const experienceSectionRef = useRef(null)
  const projectsSectionRef = useRef(null)
  const blogSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const handleNextSectionClick = () => {
    history.pushState({}, '', `#expertise`)
    expertiseSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavItemClick = (itemId: string) => {
    console.log(`${itemId}`)
    history.pushState({}, '', `#${itemId}`)
    if (itemId === 'expertise') {
      expertiseSectionRef.current.scrollIntoView()
    }
    if (itemId === 'experience') {
      experienceSectionRef.current.scrollIntoView()
    }
    if (itemId === 'projects') {
      projectsSectionRef.current.scrollIntoView()
    }
    if (itemId === 'blog') {
      blogSectionRef.current.scrollIntoView()
    }
    if (itemId === 'contact') {
      contactSectionRef.current.scrollIntoView()
    }
  }

  return (
    <>
      <Header onNavItemClick={handleNavItemClick} />
      <main>
        <Tagline onNextSectionClick={handleNextSectionClick} />
        <Expertise ref={expertiseSectionRef} />
        <Experience
          ref={experienceSectionRef}
          experiences={props.experiences}
          openByDefault={props.experienceOpenByDefault}
        />
        <Projects ref={projectsSectionRef} projects={props.projects} />
        <Blog ref={blogSectionRef} thumbnails={props.thumbnails} />
        <Contact ref={contactSectionRef} />
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
