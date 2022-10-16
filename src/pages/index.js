import { projects, proofOfConcepts, tutorials, sandboxRepos } from '../data'

import Profiles from '../components/profiles'
import Projects from '../components/projects'
import ProofOfConcepts from '../components/proof-of-concepts'
import SandboxRepos from '../components/sandbox-repos'
import Tutorials from '../components/tutorials'

export default function App(props) {
  return (
    <>
      <header>
        <h1>Hi. I'm Szabi. A Software Engineer.</h1>
      </header>
      <main>
        <Profiles />
        <Projects projects={props.projects} />
        <ProofOfConcepts proofOfConcepts={props.proofOfConcepts} />
        <Tutorials tutorials={props.tutorials} />
        <SandboxRepos sandboxRepos={props.sandboxRepos} />
      </main>
      <footer></footer>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      projects,
      proofOfConcepts,
      tutorials,
      sandboxRepos,
    },
  }
}
