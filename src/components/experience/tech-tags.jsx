export default function TechTags({ technologies }) {
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
