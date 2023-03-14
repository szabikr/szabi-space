import Projects from '../components/projects'
import BlogPostThumbnails from '../components/blog-post-thumbnails'
import { blogThumbnails } from '../data/blog'
import { projects } from '../data/projects'

export default function Home(props) {
  return (
    <>
      <header>
        <h1>
          Hi. I'm Szabi.
          <br />A Software Engineer.
        </h1>
      </header>
      <main>
        <h4>Projects</h4>
        <Projects projects={props.projects} />
        <h4>Blog</h4>
        <BlogPostThumbnails thumbnails={props.thumbnails} />
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
