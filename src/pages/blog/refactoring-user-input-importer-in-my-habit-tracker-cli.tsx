import { GetStaticProps } from 'next'
import { getHtmlContent } from '../../lib/content-parser'
import { projects } from '../../data/projects'
import GithubAnchor from '../../components/common/github-anchor'
import BackToHomeButton from '../../components/common/back-to-home-button'

export default function HabitTracker({ repoLink, refactoringContentHtml }) {
  return (
    <>
      <main className="blog">
        <section dangerouslySetInnerHTML={{ __html: refactoringContentHtml }} />
      </main>
      <footer>
        <GithubAnchor repoLink={repoLink} />
        <BackToHomeButton />
      </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const repoLink = projects.find((poc) => poc.name == 'Habit Tracker').repoLink
  const withSyntaxHl = true
  const refactoringContentHtml = await getHtmlContent(
    'projects/habit-tracker/refactoring.md',
    withSyntaxHl,
  )

  return {
    props: {
      repoLink,
      refactoringContentHtml,
    },
  }
}
