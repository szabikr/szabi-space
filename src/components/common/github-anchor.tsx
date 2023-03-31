import { GithubAnchorProps } from '../../types/props'

export default function GithubAnchor({ repoLink }: GithubAnchorProps) {
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
