import { GetStaticProps } from 'next'
import ExperienceV2 from '../../../components/experience/experience-v2'
import { experiences } from '../../../data/experience'
import { experienceOpenByDefault } from '../../../data/ui'

export default function ExperiencePage({ experiences, openByDefault }) {
  return (
    <main>
      <ExperienceV2 experiences={experiences} openByDefault={openByDefault} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      experiences: experiences,
      openByDefault: experienceOpenByDefault,
    },
  }
}
