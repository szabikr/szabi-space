import Link from 'next/link'
import { formatDate } from '../utils'

export default function BlogPostThumbnails({ thumbnails }) {
  return (
    <>
      {thumbnails.map((thumbnail) => (
        <section key={thumbnail.title}>
          <h3>{thumbnail.title}</h3>
          <div>
            <em>{formatDate(thumbnail.date)}</em>
          </div>
          <p>{thumbnail.summary}</p>
          <p>
            Read the article{' '}
            <Link href={thumbnail.url}>
              <a>here</a>
            </Link>
            .
          </p>
        </section>
      ))}
    </>
  )
}
