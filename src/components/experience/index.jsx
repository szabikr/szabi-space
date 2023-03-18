import Accordion from './accordion'
import ExperienceComponentFactory from './content/factory'
import ExperiencePeriodFull from './experience-period-full'
import ExperiencePeriodShort from './experience-period-short'
import TechTags from './tech-tags'

export default function Experience({ experience }) {
  const items = experience.map((exp) => ({
    id: exp.id,
    header: (showYear = true) => (
      <h5>
        {exp.jobTitle} @ {exp.organization}{' '}
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
      <h4>Professional Experience</h4>
      <Accordion items={items} />
    </section>
  )
}