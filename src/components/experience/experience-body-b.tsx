import { Fragment } from 'react'
import { ExperienceBodyProps } from '../../types/props'

import ExperiencePeriodFull from './experience-period-full'
import JobDescriptionComponentFactory from './content/factory'
import TechTags from './tech-tags'
import { Technology } from '../../types/models'

// TODO: Potentially remove this
// A-B TESTING:
// This component displays a merged list of technical stack at the end of the fragment

export default function ExperienceBodyB({ jobs }: ExperienceBodyProps) {
  const jobDescriptions = jobs.map((job) => (
    <Fragment key={job.id}>
      <ExperiencePeriodFull start={job.startDate} end={job.endDate} />
      {JobDescriptionComponentFactory(job.description)()}
    </Fragment>
  ))

  const technologies: Technology[] = jobs.reduce(
    (acc, job) => [...acc, ...job.technologies],
    [],
  )

  return (
    <>
      {jobDescriptions}
      <TechTags technologies={technologies} />
    </>
  )
}
