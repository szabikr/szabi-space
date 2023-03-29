import { GetStaticProps } from 'next'
import Blog from '../../components/blog'
import { blogThumbnails } from '../../data/blog'

export default function BlogPage({ thumbnails }) {
  return (
    <main>
      <Blog thumbnails={thumbnails} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      thumbnails: blogThumbnails,
    },
  }
}
