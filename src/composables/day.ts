import dayjs from 'dayjs'

export const getYear = (a: Date | string | number) => new Date(a).getFullYear()
export const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
export const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)

export function formatDate(d: string | Date, lang = 'en', onlyDate = true) {
  const date = dayjs(d)
  if (onlyDate || date.year() === dayjs().year())
    return lang === 'en' ? date.format('MMM D') : date.format('MM/DD')
  return lang === 'en' ? date.format('MMM D, YYYY') : date.format('YYYY/MM/DD')
}
