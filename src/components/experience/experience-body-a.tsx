import { Fragment } from 'react'
import { ExperienceBodyProps } from '../../types/props'

import ExperiencePeriodFull from './experience-period-full'
import JobDescriptionComponentFactory from './content/factory'
import TechTags from './tech-tags'

// A-B TESTING:
// This version displays technical tags after each job description

export default function ExperienceBodyA({ jobs }: ExperienceBodyProps) {
  return (
    <>
      {jobs.map((job) => (
        <Fragment key={job.id}>
          <ExperiencePeriodFull start={job.startDate} end={job.endDate} />
          {JobDescriptionComponentFactory(job.description)()}
          <TechTags technologies={job.technologies} />
        </Fragment>
      ))}
    </>
  )
}
