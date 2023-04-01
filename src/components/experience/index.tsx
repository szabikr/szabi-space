import { ExperienceProps } from '../../types/props'
import ExperienceHeader from './experience-header'
import ExperienceBodyA from './experience-body-a'
import ExperienceBodyB from './experience-body-b'
import Accordion from './accordion'

export default function Experience({
  experiences,
  openByDefault,
}: ExperienceProps) {
  const items = experiences.map((exp) => ({
    id: exp.id,
    header: (isOpen = true) => (
      <ExperienceHeader
        jobs={exp.jobs}
        showYear={isOpen}
        showOrganization={isOpen}
      />
    ),
    body: () => <ExperienceBodyA jobs={exp.jobs} />,
  }))

  return (
    <section>
      <h3>Professional Experience</h3>
      <Accordion items={items} openByDefault={openByDefault} />
    </section>
  )
}
