import { formatMonthDate, formatMonthYearDate } from '../../utils'

export default function ExperiencePeriodFull({ start, end }) {
  const startDate = new Date(start)
  const endDate = new Date(end)

  return (
    <p>
      <strong>
        {startDate.getFullYear() === endDate.getFullYear()
          ? formatMonthDate(start)
          : formatMonthYearDate(start)}{' '}
        - {formatMonthYearDate(end)}
      </strong>
    </p>
  )
}
