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

export function getCurrentTime() {
  const weekdayArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return {
    year: dayjs().year(),
    month: dayjs().month() + 1,
    day: dayjs().date(),
    hour: dayjs().hour(),
    minute: dayjs().minute(),
    second: dayjs().second(),
    weekday: weekdayArr[dayjs().day()],
  }
}

export const dayText = {
  day: '今日',
  week: '本周',
  month: '本月',
  year: '本年',
}

export function getTimeDifference(unit: keyof typeof dayText) {
  const now = dayjs()
  // 获取当前时间单位的开始时间
  const start = now.startOf(unit)
  // 获取当前时间单位的结束时间
  const end = now.endOf(unit)
  // 计算总的天数或小时数
  const total = end.diff(start, unit === 'day' ? 'hour' : 'day') + 1
  // 计算已经过去的天数或小时数
  let passed = now.diff(start, unit === 'day' ? 'hour' : 'day')
  if (unit === 'week' && now.day() === 0) {
    // 如果是星期日
    passed = total - 1
  }
  // 计算剩余的天数或小时数
  const remaining = total - passed
  // 计算已经过去的天数或小时数占比
  const percentage = Number(((passed / total) * 100).toFixed(2))

  return {
    name: dayText[unit],
    total,
    passed,
    remaining,
    percentage,
  }
}

export function getTimeCapsule() {
  return {
    day: getTimeDifference('day'),
    week: getTimeDifference('week'),
    month: getTimeDifference('month'),
    year: getTimeDifference('year'),
  }
}

/**
 * 计算当前日期距离指定日期的天数
 * @param {string} dateStr - 指定的日期，格式为 'YYYY-MM-DD'
 * @return {number} 返回的天数
 */
export function getDaysUntil(dateStr: string): number {
  const now = dayjs()
  const targetDate = dayjs(dateStr)
  const daysUntil = targetDate.diff(now, 'day')
  return daysUntil
}
