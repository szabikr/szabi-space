import Link from 'next/link'

export default function Projects({ projects }) {
  return (
    <section>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h5>
              <Link href={project.url}>
                <a>{project.name}</a>
              </Link>
            </h5>
            <p>{project.summary}</p>
            <p>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
