import { forwardRef } from 'react'
import { useScrollIntoViewRef } from '../../hooks'

import Link from 'next/link'
import { ProjectsProps } from '../../types/props'

const Projects = forwardRef(function Projects(
  { projects }: ProjectsProps,
  ref,
) {
  const sectionRef = useScrollIntoViewRef(ref)

  return (
    <section id="projects" ref={sectionRef}>
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
})

export default Projects
