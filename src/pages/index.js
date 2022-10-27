import { projects, proofOfConcepts, tutorials, sandboxRepos } from '../data'

import Profiles from '../components/profiles'
import Projects from '../components/projects'
import ProofOfConcepts from '../components/proof-of-concepts'
import SandboxRepos from '../components/sandbox-repos'
import Tutorials from '../components/tutorials'
import { getHtmlContent } from '../lib/content-parser'

export default function App(props) {
  return (
    <>
      <header>
        <h1>Hi. I'm Szabi. A Software Engineer.</h1>
      </header>
      <main>
        <Profiles />
        <Projects
          projects={props.projects}
          content={props.projectsContentHtml}
        />
        <ProofOfConcepts
          proofOfConcepts={props.proofOfConcepts}
          content={props.proofOfConceptsContentHtml}
        />
        <Tutorials
          tutorials={props.tutorials}
          content={props.tutorialsContentHtml}
        />
        <SandboxRepos
          sandboxRepos={props.sandboxRepos}
          content={props.sandboxesContentHtml}
        />
      </main>
      <footer></footer>
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
      projects,
      projectsContentHtml,
      proofOfConcepts,
      proofOfConceptsContentHtml,
      tutorials,
      tutorialsContentHtml,
      sandboxRepos,
      sandboxesContentHtml,
    },
  }
}
