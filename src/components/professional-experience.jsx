import Accordion from './accordion'
import ExperienceComponentFactory from './experience/factory'
import ExperiencePeriod from './experience-period'
import TechTags from './tech-tags'
import { formatYearDate } from '../utils'

export default function ProfessionalExperience({ experience }) {
  const items = experience.map((exp) => ({
    id: exp.id,
    header: () => (
      <h5>
        {exp.jobTitle} @ {exp.organization} {formatYearDate(exp.startDate)}
        {new Date(exp.startDate).getFullYear() !==
          new Date(exp.endDate).getFullYear() &&
          ` - ${formatYearDate(exp.endDate)}`}
      </h5>
    ),
    body: () => (
      <>
        <ExperiencePeriod start={exp.startDate} end={exp.endDate} />
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
