import Link from 'next/link'

export default function Spaces({ spaces, content }) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ul>
        {spaces.map((space) => (
          <li key={space.name}>
            <h4>
              {space.pageUrl ? (
                <Link href={space.pageUrl}>
                  <a>{space.name}</a>
                </Link>
              ) : (
                <a
                  href={space.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {space.name}
                </a>
              )}
            </h4>
            <p>{space.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
