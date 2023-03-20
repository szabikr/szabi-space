import Link from 'next/link'

export default function Projects({ projects }) {
  return (
    <section>
      <h3>Projects</h3>
      <ul className="grid projects">
        {projects.map((project) => (
          <li key={project.name}>
            <div>
              <h5>
                <Link href={project.url}>
                  <a>{project.name}</a>
                </Link>
              </h5>
              <p>{project.summary}</p>
            </div>
            <div>
              <p>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
