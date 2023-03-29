import { GetStaticProps } from 'next'
import Tagline from '../components/tagline'
import Expertise from '../components/expertise'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Blog from '../components/blog'
import ContactMe from '../components/contact-me'
import { jobs } from '../data/experience'
import { blogThumbnails } from '../data/blog'
import { projects } from '../data/projects'

export default function Home(props) {
  return (
    <>
      <header></header>
      <main>
        <Tagline />
        <Expertise />
        <Experience experience={props.jobs} />
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
      jobs: jobs,
    },
  }
}
