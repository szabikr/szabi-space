import {
  buildExperienceBodyProps,
  buildExperienceHeaderProps,
} from '../../lib/build-props'
import {
  ExperienceBodyProps,
  ExperienceHeaderProps,
  ExperienceProps,
} from '../../types/props'

import ExperienceComponentFactory from './content/factory'
import ExperiencePeriodFull from './experience-period-full'
import TechTags from './tech-tags'

function ExperienceHeader({
  roles,
  organizations,
  showYear,
  startYear,
  endYear,
}: ExperienceHeaderProps) {
  return (
    <h5>
      {roles.join(', ')} @ {organizations.join(', ')}{' '}
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
      {descriptions.map((description) => (
        <div key={description}>{ExperienceComponentFactory(description)()}</div>
      ))}
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
      <ExperienceHeader {...buildExperienceHeaderProps(exp)} showYear={true} />

      <h4>Accordion Body</h4>
      <ExperienceBody {...buildExperienceBodyProps(exp)} />
    </section>
  )
}
