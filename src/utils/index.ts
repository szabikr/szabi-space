const months_short: string[] = [
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

const months_full: string[] = [
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

export function formatDate(date: string): string {
  const d = new Date(date)
  return `${d.getDate()} ${months_short[d.getMonth()]} ${d.getFullYear()}`
}

export function formatMonthYearDate(date: string): string {
  const d = new Date(date)
  return `${months_full[d.getMonth()]} ${d.getFullYear()}`
}

export function formatYearDate(date: string): string {
  const d = new Date(date)
  return `${d.getFullYear()}`
}

export function formatMonthDate(date: string): string {
  const d = new Date(date)
  return `${months_full[d.getMonth()]}`
}
