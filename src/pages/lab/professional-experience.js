import ProfessionalExperience from '../../components/professional-experience'
import { professionalExperience } from '../../data/professional-experience'

export default function ProfessionalExperiencePage(props) {
  return (
    <main>
      <h1>Professional Experience Page</h1>
      <ProfessionalExperience experience={props.experience} />
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
