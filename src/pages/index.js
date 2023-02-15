import BlogPostThumbnails from '../components/blog-post-thumbnails'
import { blogThumbnails } from '../data'

export default function App(props) {
  return (
    <>
      <header>
        <h1>
          Hi. I'm Szabi.
          <br />A Software Engineer.
        </h1>
      </header>
      <hr />
      <main>
        <h4>Blog:</h4>
        <BlogPostThumbnails thumbnails={props.thumbnails} />
      </main>
      <hr />
      <footer></footer>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      thumbnails: blogThumbnails,
    },
  }
}
