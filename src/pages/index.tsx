import { GetStaticProps } from 'next'
import { useRef } from 'react'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Expertise from '../components/expertise'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Blog from '../components/blog'
import Contact from '../components/contact'

import { NavItemIdType } from '../types/ui'
import { NAV_ITEM_ID } from '../constants/ui'

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

  const handleNavItemClick = (itemId: NavItemIdType) => {
    history.pushState({}, '', `#${itemId}`)
    if (itemId === NAV_ITEM_ID.expertise) {
      expertiseSectionRef.current.scrollIntoView()
    }
    if (itemId === NAV_ITEM_ID.experience) {
      experienceSectionRef.current.scrollIntoView()
    }
    if (itemId === NAV_ITEM_ID.projects) {
      projectsSectionRef.current.scrollIntoView()
    }
    if (itemId === NAV_ITEM_ID.blog) {
      blogSectionRef.current.scrollIntoView()
    }
    if (itemId === NAV_ITEM_ID.contact) {
      contactSectionRef.current.scrollIntoView()
    }
  }

  return (
    <>
      <Header onNavItemClick={handleNavItemClick} />
      <main>
        <Tagline
          onNextSectionClick={() => handleNavItemClick(NAV_ITEM_ID.expertise)}
        />
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
