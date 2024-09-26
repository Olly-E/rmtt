import relativeTime from 'dayjs/plugin/relativeTime'
import { AxiosError } from 'axios'
import dayjs from 'dayjs'

dayjs.extend(relativeTime)

export const transformError = (error: AxiosError) => {
  const errorMessage = (error.response?.data as AxiosError).message
  if (Array.isArray(errorMessage)) {
    return errorMessage[0]
  }
  return errorMessage
}

export const getFormattedTimeAgoText = (date: string | undefined) => {
  if (!date) return ''
  return dayjs().to(dayjs(date))
}
