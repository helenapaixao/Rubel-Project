export function getDayOfWeek (day: number, month: number, year: number) {
  return new Date(year, month, day).toLocaleString('pt-Br', {
    weekday: 'long'
  })
}