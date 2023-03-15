import { getHtmlContent } from '../../lib/content-parser'
import { projects } from '../../data/projects'
import GithubAnchor from '../../components/github-anchor'
import BackToHomeButton from '../../components/back-to-home-button'

export default function HabitTracker({ repoLink, refactoringContentHtml }) {
  return (
    <>
      <main>
        <section dangerouslySetInnerHTML={{ __html: refactoringContentHtml }} />
      </main>
      <footer>
        <GithubAnchor repoLink={repoLink} />
        <BackToHomeButton />
      </footer>
    </>
  )
}

export async function getStaticProps(context) {
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
