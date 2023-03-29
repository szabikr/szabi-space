import { projects } from '../../data/projects'
import GithubAnchor from '../../components/common/github-anchor'
import { getHtmlContent } from '../../lib/content-parser'
import BackToHomeButton from '../../components/common/back-to-home-button'
import { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async (context) => {
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
