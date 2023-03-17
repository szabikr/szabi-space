import Accordion from './accordion'
import ExperienceComponentFactory from './experience/factory'
import ExperiencePeriodFull from './experience-period-full'
import ExperiencePeriodShort from './experience-period-short'
import TechTags from './tech-tags'

export default function ProfessionalExperience({ experience }) {
  const items = experience.map((exp) => ({
    id: exp.id,
    header: (showYear = true) => (
      <>
        <h5>{exp.jobTitle}</h5>
        <h5>@ {exp.organization}</h5>
        {showYear && (
          <h5>
            <ExperiencePeriodShort start={exp.startDate} end={exp.endDate} />
          </h5>
        )}
      </>
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
      <Accordion items={items} />
    </section>
  )
}
