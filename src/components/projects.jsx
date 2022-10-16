export default function Projects({ projects }) {
  return (
    <section>
      <h3>Projects</h3>
      <p>
        Work that I'm doing or have done in the past and I consider them usable
        pieces of software.
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h4>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
            </h4>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
