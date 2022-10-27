import { proofOfConcepts } from '../../data'
import GithubAnchor from '../../components/github-anchor'
import { getHtmlContent } from '../../lib/content-parser'

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
      </footer>
    </>
  )
}

export async function getStaticProps(context) {
  const repoLink = proofOfConcepts.find(
    (poc) => poc.name == 'Authentication',
  ).repoLink
  const authenticationContentHtml = await getHtmlContent(
    'proof-of-concepts/authentication.md',
  )
  return {
    props: { repoLink, authenticationContentHtml },
  }
}
