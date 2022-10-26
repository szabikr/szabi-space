export default function Tutorials({ tutorials, content }) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ul>
        {tutorials.map((tutorial) => (
          <li key={tutorial.name}>
            <h4>
              <a
                href={tutorial.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tutorial.name}
              </a>
            </h4>
            <p>{tutorial.technology}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
