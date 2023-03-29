import { Technology } from '../../types'

export default function TechTags({
  technologies,
}: {
  technologies: Technology[]
}) {
  return (
    <p>
      {technologies.map((technology) => (
        <span key={technology.id} className="tech-tag">
          {technology.name}
        </span>
      ))}
    </p>
  )
}
