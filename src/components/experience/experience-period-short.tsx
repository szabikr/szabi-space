import { formatYearDate } from '../../utils'

// DEPRICATED: Soon this will become depricated when the V2 of Experience is out
export default function ExperiencePeriodShort({
  start,
  end,
}: {
  start: string
  end: string
}) {
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
