import { GetStaticProps } from 'next'
import Experience from '../../../components/experience'
import { jobs } from '../../../data/experience'

export default function ExperiencePage({ jobs }) {
  return (
    <main>
      <Experience experience={jobs} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      jobs: jobs,
    },
  }
}
