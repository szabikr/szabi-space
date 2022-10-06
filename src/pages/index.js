import Profiles from '../components/profiles'
import Projects from '../components/projects'
import ProofOfConcepts from '../components/proof-of-concepts'
import SandboxRepos from '../components/sandbox-repos'
import Tutorials from '../components/tutorials'

export default function App() {
  return (
    <>
      <header>
        <h1>Hi. I'm Szabi. A Software Engineer.</h1>
      </header>
      <main>
        <Profiles />
        <Projects />
        <ProofOfConcepts />
        <Tutorials />
        <SandboxRepos />
      </main>
      <footer></footer>
    </>
  )
}
