import { GetStaticProps } from 'next'
import Experience from '../../../components/experience'
import { experiences } from '../../../data/experience'
import { experienceOpenByDefault } from '../../../data/ui'

export default function ExperiencePage({ experiences, openByDefault }) {
  return (
    <main>
      <Experience experiences={experiences} openByDefault={openByDefault} />
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
