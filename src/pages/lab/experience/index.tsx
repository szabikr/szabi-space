import { GetStaticProps } from 'next'
import Experience from '../../../components/experience'
import { experience } from '../../../data/experience'

export default function ExperiencePage({ experience }) {
  return (
    <main>
      <Experience experience={experience} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      experience: experience,
    },
  }
}
