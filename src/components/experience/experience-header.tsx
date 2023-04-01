import { ExperienceHeaderProps } from '../../types/props'

export default function ExperienceHeader({
  jobs,
  showYear,
}: ExperienceHeaderProps) {
  const earliestStartYear = new Date(
    jobs.reduce(
      (minDate, job) => (minDate > job.startDate ? job.startDate : minDate),
      jobs[0].startDate,
    ),
  )
    .getFullYear()
    .toString()

  const latestEndYear = new Date(
    jobs.reduce(
      (maxDate, job) => (maxDate < job.endDate ? job.endDate : maxDate),
      jobs[0].endDate,
    ),
  )
    .getFullYear()
    .toString()

  const roles = jobs
    .map((job) => job.role)
    .filter((role, index, roles) => roles.indexOf(role) === index)
  const organizations = jobs
    .map((job) => job.organization)
    .filter(
      (organization, index, organizations) =>
        organizations.indexOf(organization) === index,
    )

  return (
    <h5>
      {roles.join(', ')} @ {organizations.join(', ')}{' '}
      {showYear &&
        earliestStartYear +
          (earliestStartYear !== latestEndYear ? ' - ' + latestEndYear : '')}
    </h5>
  )
}
