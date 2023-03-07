import { getHtmlContent } from '../../lib/content-parser'
import { projects } from '../../data'
import GithubAnchor from '../../components/github-anchor'
import BackToHomeButton from '../../components/back-to-home-button'

export default function HabitTracker({
  repoLink,
  refactoringContentHtml,
  changeLogContentHtml,
}) {
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
  const [refactoringContentHtml, changeLogContentHtml] = await Promise.all([
    getHtmlContent('projects/habit-tracker/refactoring.md', withSyntaxHl),
    getHtmlContent('projects/habit-tracker/change-log.md'),
  ])

  return {
    props: {
      repoLink,
      refactoringContentHtml,
      changeLogContentHtml,
    },
  }
}
