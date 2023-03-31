import { Job } from '../../types/models'
import Accordion from './accordion'
import ExperienceComponentFactory from './content/factory'
import ExperiencePeriodFull from './experience-period-full'
import ExperiencePeriodShort from './experience-period-short'
import TechTags from './tech-tags'

// DEPRICATED: Soon this will become depricated when the V2 of Experience is out
export default function Experience({ experience }: { experience: Job[] }) {
  const items = experience.map((exp) => ({
    id: exp.id,
    header: (showYear = true) => (
      <h5>
        {exp.role} @ {exp.organization}{' '}
        {showYear && (
          <ExperiencePeriodShort start={exp.startDate} end={exp.endDate} />
        )}
      </h5>
    ),
    body: () => (
      <>
        <ExperiencePeriodFull start={exp.startDate} end={exp.endDate} />
        {ExperienceComponentFactory(exp.description)()}
        <TechTags technologies={exp.technologies} />
      </>
    ),
  }))

  return (
    <section>
      <h3>Professional Experience</h3>
      <Accordion items={items} />
    </section>
  )
}
