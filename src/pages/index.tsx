import { GetStaticProps } from 'next'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Expertise from '../components/expertise'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Blog from '../components/blog'
import ContactMe from '../components/contact-me'

import { experiences } from '../data/experience'
import { experienceOpenByDefault } from '../data/ui'
import { blogThumbnails } from '../data/blog'
import { projects } from '../data/projects'

// TODO: Define type for HomePageProps
export default function HomePage(props) {
  return (
    <>
      <Header />
      <main>
        <Tagline />
        <Expertise />
        <Experience
          experiences={props.experiences}
          openByDefault={props.experienceOpenByDefault}
        />
        <Projects projects={props.projects} />
        <Blog thumbnails={props.thumbnails} />
        <ContactMe />
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
