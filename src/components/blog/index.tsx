import { forwardRef, useRef, useImperativeHandle } from 'react'

import Link from 'next/link'
import { BlogProps } from '../../types/props'
import { formatDate } from '../../utils'

const Blog = forwardRef(function Blog({ thumbnails }: BlogProps, ref) {
  const sectionRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      scrollIntoView() {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
      },
    }
  })

  return (
    <section id="blog" ref={sectionRef}>
      <h3>Blog</h3>
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
})

export default Blog
