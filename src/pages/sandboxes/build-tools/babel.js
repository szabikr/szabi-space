import BackToHomeButton from '../../../components/back-to-home-button'
import GithubAnchor from '../../../components/github-anchor'
import { getHtmlContent } from '../../../lib/content-parser'

export default function Babel({ repoLink, babelContentHtml }) {
  return (
    <>
      <main>
        <section dangerouslySetInnerHTML={{ __html: babelContentHtml }} />
      </main>
      <footer>
        <GithubAnchor repoLink={repoLink} />
        <BackToHomeButton />
      </footer>
    </>
  )
}

export async function getStaticProps(context) {
  const repoLink =
    'https://github.com/szabikr/sandbox-build-tools/tree/main/babel'
  const withSyntaxHl = true
  const babelContentHtml = await getHtmlContent(
    'sandboxes/build-tools/babel.md',
    withSyntaxHl,
  )

  return {
    props: {
      repoLink,
      babelContentHtml,
    },
  }
}
