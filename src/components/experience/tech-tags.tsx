import { TechTagsProps } from '../../types/props'

export default function TechTags({ technologies }: TechTagsProps) {
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
