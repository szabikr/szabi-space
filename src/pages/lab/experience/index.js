import Experience from '../../../components/experience'
import { professionalExperience } from '../../../data/professional-experience'

export default function ExperiencePage(props) {
  return (
    <main>
      <Experience experience={props.experience} />
    </main>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      experience: professionalExperience,
    },
  }
}
