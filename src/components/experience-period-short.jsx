import { formatYearDate } from '../utils'

export default function ExperiencePeriodShort({ start, end }) {
  const startDate = new Date(start)
  const endDate = new Date(end)

  return (
    <>
      {formatYearDate(start)}
      {startDate.getFullYear() !== endDate.getFullYear() &&
        ` - ${formatYearDate(end)}`}
    </>
  )
}
