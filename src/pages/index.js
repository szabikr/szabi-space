import Tagline from '../components/tagline'
import Projects from '../components/projects'
import Blog from '../components/blog'
import { blogThumbnails } from '../data/blog'
import { projects } from '../data/projects'

export default function Home(props) {
  return (
    <>
      <header></header>
      <main>
        <Tagline />
        <Projects projects={props.projects} />
        <Blog thumbnails={props.thumbnails} />
      </main>
      <footer></footer>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      thumbnails: blogThumbnails,
      projects: projects,
    },
  }
}
