// TODO: This file shouldn't really be part of the lib directory
// Place it somewhere in the component/experience directory

import { Experience } from '../types/models'
import { ExperienceBodyProps, ExperienceHeaderProps } from '../types/props'

export function buildExperienceHeaderProps(
  experience: Experience,
): ExperienceHeaderProps {
  const earliestStartYear = new Date(
    experience.jobs.reduce(
      (minDate, job) => (minDate > job.startDate ? job.startDate : minDate),
      experience.jobs[0].startDate,
    ),
  )
    .getFullYear()
    .toString()

  const latestEndYear = new Date(
    experience.jobs.reduce(
      (maxDate, job) => (maxDate < job.endDate ? job.endDate : maxDate),
      experience.jobs[0].endDate,
    ),
  )
    .getFullYear()
    .toString()

  return {
    roles: experience.jobs
      .map((job) => job.role)
      .filter((role, index, roles) => roles.indexOf(role) === index),
    organizations: experience.jobs
      .map((job) => job.organization)
      .filter(
        (organization, index, organizations) =>
          organizations.indexOf(organization) === index,
      ),
    startYear: earliestStartYear,
    endYear: latestEndYear,
  }
}

export function buildExperienceBodyProps(
  experience: Experience,
): ExperienceBodyProps {
  return {
    startDate: experience.jobs[0].startDate,
    endDate: experience.jobs[0].endDate,
    descriptions: [experience.jobs[0].description],
    technologies: experience.jobs[0].technologies,
  }
}
