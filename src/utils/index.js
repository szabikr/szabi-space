const months_short = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const months_full = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function formatDate(date) {
  const d = new Date(date)
  return `${d.getDate()} ${months_short[d.getMonth()]} ${d.getFullYear()}`
}

export function formatMonthYearDate(date) {
  const d = new Date(date)
  return `${months_full[d.getMonth()]} ${d.getFullYear()}`
}

export function formatYearDate(date) {
  const d = new Date(date)
  return `${d.getFullYear()}`
}

export function formatMonthDate(date) {
  const d = new Date(date)
  return `${months_full[d.getMonth()]}`
}
