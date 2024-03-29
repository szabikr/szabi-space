import { forwardRef } from 'react'

import { useScrollIntoViewRef } from '../../hooks'
import { ExperienceProps } from '../../types/props'
import ExperienceHeader from './experience-header'
import ExperienceBodyA from './experience-body-a'
import ExperienceBodyB from './experience-body-b'
import Accordion from './accordion'

const Experience = forwardRef(function Experience(
  { experiences, openByDefault }: ExperienceProps,
  ref,
) {
  const sectionRef = useScrollIntoViewRef(ref)

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
    <section id="experience" ref={sectionRef}>
      <h3>Professional Experience</h3>
      <Accordion items={items} openByDefault={openByDefault} />
    </section>
  )
})

export default Experience
