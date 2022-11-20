import Link from 'next/link'

import { projects, proofOfConcepts, tutorials, sandboxes } from '../data'

import Spaces from '../components/spaces'
import { getHtmlContent } from '../lib/content-parser'

export default function Work(props) {
  return (
    <>
      <header>
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
      </header>
      <main>
        <h1>My work</h1>
        <Spaces {...props.projects} />
        <Spaces {...props.proofOfConcepts} />
        <Spaces {...props.tutorials} />
        <Spaces {...props.sandboxes} />
      </main>
    </>
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
