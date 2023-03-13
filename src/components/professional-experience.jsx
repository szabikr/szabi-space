import Accordion from './accordion'
import ExperienceComponentFactory from './experience/factory'

export default function ProfessionalExperience({ experience }) {
  const items = experience.map((exp) => ({
    id: exp.id,
    header: () => (
      <h5>
        {exp.jobTitle} @ {exp.organization}
      </h5>
    ),
    body: ExperienceComponentFactory(exp.description),
  }))

  return (
    <section>
      <Accordion items={items} />
    </section>
  )
}
