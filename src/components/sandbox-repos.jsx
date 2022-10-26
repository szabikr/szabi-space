export default function SandboxRepos({ sandboxRepos, content }) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ul>
        {sandboxRepos.map((repo) => (
          <li key={repo.name}>
            <h4>
              <a href={repo.repoLink} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p>{repo.language}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
