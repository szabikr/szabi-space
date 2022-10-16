export default function Tutorials({ tutorials }) {
  return (
    <section>
      <h3>Tutorials</h3>
      <p>Challenges to enhance skills of different technologies.</p>
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
