import { projects, proofOfConcepts, tutorials, sandboxes } from '../data'

import Spaces from '../components/spaces'
import Profiles from '../components/profiles'
import { getHtmlContent } from '../lib/content-parser'
import BackToHomeButton from '../components/back-to-home-button'

export default function MyWork(props) {
  return (
    <main>
      <Profiles />
      <Spaces {...props.projects} />
      <Spaces {...props.proofOfConcepts} />
      <Spaces {...props.tutorials} />
      <Spaces {...props.sandboxes} />
      <BackToHomeButton />
    </main>
  )
}

export async function getStaticProps(context) {
  const [
    projectsContentHtml,
    proofOfConceptsContentHtml,
    tutorialsContentHtml,
    sandboxesContentHtml,
  ] = await Promise.all([
    getHtmlContent('projects.md'),
    getHtmlContent('proof-of-concepts.md'),
    getHtmlContent('tutorials.md'),
    getHtmlContent('sandboxes.md'),
  ])

  return {
    props: {
      projects: {
        spaces: projects,
        content: projectsContentHtml,
      },
      proofOfConcepts: {
        spaces: proofOfConcepts,
        content: proofOfConceptsContentHtml,
      },
      tutorials: {
        spaces: tutorials,
        content: tutorialsContentHtml,
      },
      sandboxes: {
        spaces: sandboxes,
        content: sandboxesContentHtml,
      },
    },
  }
}
