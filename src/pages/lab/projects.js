import Projects from '../../components/projects'
import { projects } from '../../data/projects'

export default function ProjectsPage({ projects }) {
  return (
    <main>
      <Projects projects={projects} />
    </main>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      projects: projects,
    },
  }
}
