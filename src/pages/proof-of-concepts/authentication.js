import { projects } from '../../data'
import GithubAnchor from '../../components/github-anchor'
import { getHtmlContent } from '../../lib/content-parser'
import BackToHomeButton from '../../components/back-to-home-button'

export default function Authentication({
  repoLink,
  authenticationContentHtml,
}) {
  return (
    <>
      <header>
        <h1>Authentication in a Single Page Application</h1>
        <GithubAnchor repoLink={repoLink} />
      </header>
      <main>
        <section
          dangerouslySetInnerHTML={{ __html: authenticationContentHtml }}
        />
      </main>
      <footer>
        <GithubAnchor repoLink={repoLink} />
        <BackToHomeButton />
      </footer>
    </>
  )
}

export async function getStaticProps(context) {
  const repoLink = projects.find(
    (poc) => poc.name == 'Authentication in Single Page Application',
  ).repoLink
  const authenticationContentHtml = await getHtmlContent(
    'proof-of-concepts/authentication.md',
  )
  return {
    props: { repoLink, authenticationContentHtml },
  }
}
