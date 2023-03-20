import Blog from '../../components/blog'
import { blogThumbnails } from '../../data/blog'

export default function BlogPage({ thumbnails }) {
  return (
    <main>
      <Blog thumbnails={thumbnails} />
    </main>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      thumbnails: blogThumbnails,
    },
  }
}
