import Link from 'next/link'

export default function Projects({ projects, content }) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h4>
              {project.pageUrl ? (
                <Link href={project.pageUrl}>
                  <a>{project.name}</a>
                </Link>
              ) : (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              )}
            </h4>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
