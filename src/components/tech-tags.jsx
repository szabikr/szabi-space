export default function TechTags({ technologies }) {
  return (
    <p>
      {technologies.map((technology) => (
        <span className="tech-tag">{technology}</span>
      ))}
    </p>
  )
}
