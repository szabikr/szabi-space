import {
  ExperienceBodyProps,
  ExperienceHeaderProps,
  ExperienceProps,
} from '../../types/props'

import ExperienceComponentFactory from './content/factory'
import ExperiencePeriodFull from './experience-period-full'
import TechTags from './tech-tags'

function ExperienceHeader({
  role,
  organizations,
  showYear,
  startYear,
  endYear,
}: ExperienceHeaderProps) {
  return (
    <h5>
      {role} @ {organizations[0]}{' '}
      {showYear && startYear + (startYear !== endYear ? ' - ' + endYear : '')}
    </h5>
  )
}

function ExperienceBody({
  startDate,
  endDate,
  descriptions,
  technologies,
}: ExperienceBodyProps) {
  return (
    <>
      <ExperiencePeriodFull start={startDate} end={endDate} />
      {descriptions.map((description) =>
        ExperienceComponentFactory(description)(),
      )}
      <TechTags technologies={technologies} />
    </>
  )
}

export default function ExperienceV2({
  experiences,
  openByDefault,
}: ExperienceProps) {
  const exp = experiences.find((e) => e.id === openByDefault)
  return (
    <section>
      <h3>Professional Experience</h3>

      <h4>Accordion Header</h4>
      <ExperienceHeader
        role={exp.jobs[0].role}
        organizations={[exp.jobs[0].organization]}
        showYear={true}
        startYear={new Date(exp.jobs[0].startDate).getFullYear()}
        endYear={new Date(exp.jobs[0].endDate).getFullYear()}
      />

      <h4>Accordion Body</h4>
      <ExperienceBody
        startDate={exp.jobs[0].startDate}
        endDate={exp.jobs[0].endDate}
        descriptions={[exp.jobs[0].description]}
        technologies={exp.jobs[0].technologies}
      />
    </section>
  )
}
