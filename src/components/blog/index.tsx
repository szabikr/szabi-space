import Link from 'next/link'
import { BlogThumbnail } from '../../types'
import { formatDate } from '../../utils'

export default function Blog({ thumbnails }: { thumbnails: BlogThumbnail[] }) {
  return (
    <section>
      <h3>Blog</h3>
      {thumbnails.map((thumbnail) => (
        <section key={thumbnail.title}>
          <h4>{thumbnail.title}</h4>
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
    </section>
  )
}
