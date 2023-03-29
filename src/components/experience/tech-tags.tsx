import { Technology } from '../../data/technologies'

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
