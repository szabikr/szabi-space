import { GetStaticProps } from 'next'
import BackToHomeButton from '../../components/common/back-to-home-button'
import GithubAnchor from '../../components/common/github-anchor'
import { getHtmlContent } from '../../lib/content-parser'

export default function Babel({ repoLink, babelContentHtml }) {
  return (
    <>
      <main className="blog">
        <section dangerouslySetInnerHTML={{ __html: babelContentHtml }} />
      </main>
      <footer>
        <GithubAnchor repoLink={repoLink} />
        <BackToHomeButton />
      </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
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
