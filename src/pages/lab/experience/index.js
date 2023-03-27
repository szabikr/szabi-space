import Experience from '../../../components/experience'
import { experience } from '../../../data/experience'

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
      experience: experience,
    },
  }
}
