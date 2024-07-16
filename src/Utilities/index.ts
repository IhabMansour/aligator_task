import { BodyData } from '../Interfaces'

export const formatDate = (timestamp: number, isFullDate = false) => {
  const date = new Date(timestamp)
  let options = {
    day: 'numeric',
    month: 'short'
  } as Intl.DateTimeFormatOptions

  if (isFullDate) {
    options = {
      ...options,
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    } as Intl.DateTimeFormatOptions
  }

  return date.toLocaleString('en-US', options)
}

export const getXAxis = (lineData: BodyData[]) => {
  return [...new Set(lineData?.map((item: BodyData) => item.date))]
}
