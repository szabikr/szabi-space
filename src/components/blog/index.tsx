import Link from 'next/link'
import { BlogProps } from '../../types/props'
import { formatDate } from '../../utils'

export default function Blog({ thumbnails }: BlogProps) {
  return (
    <section>
      <h3 id="blog">Blog</h3>
      {thumbnails.map((thumbnail) => (
        <section key={thumbnail.title}>
          <h4>{thumbnail.title}</h4>
          <div>
            <em>{formatDate(thumbnail.date)}</em>
          </div>
          <p>{thumbnail.summary}</p>
          <p>
            <Link href={thumbnail.url}>
              <a aria-label={thumbnail.title}>Read the article</a>
            </Link>
          </p>
        </section>
      ))}
    </section>
  )
}
