import { sandboxRepos } from '../data'

export default function Work() {
  return (
    <section>
      <h3>Sandbox repos</h3>
      <p>
        This list of repositories represent my trial work. Just as you would sit
        down next to a pyhisical sandbox and start modifying its content, I try
        out <strong>software technologies</strong>,{' '}
        <strong>programming languages</strong> with the sole purpose of creating
        and learning.
      </p>
      <p>
        Some of the repositories contain work that was inspired by tutorials,
        courses, articles or videos. So you can dig into the{' '}
        <code>README.md</code> files and see if you find something useful for
        yourself to explore.
      </p>
      <p>
        I itend to come back to the code that's in these repos in case I want to
        look things up or expand my knowledge by implementing new ideas.
      </p>
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
