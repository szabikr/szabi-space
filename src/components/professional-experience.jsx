import Accordion from './accordion'
import ExperienceComponentFactory from './experience/factory'
import TechTags from './tech-tags'

export default function ProfessionalExperience({ experience }) {
  const items = experience.map((exp) => ({
    id: exp.id,
    header: () => (
      <h5>
        {exp.jobTitle} @ {exp.organization}
      </h5>
    ),
    body: () => (
      <>
        {ExperienceComponentFactory(exp.description)()}
        <TechTags technologies={exp.technologies} />
      </>
    ),
  }))

  return (
    <section>
      <Accordion items={items} />
    </section>
  )
}
