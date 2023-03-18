export default function GithubAnchor({ repoLink }) {
  return (
    <section>
      <p>
        Check out the{' '}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          code repository
        </a>{' '}
        on GitHub for more details.
      </p>
    </section>
  )
}