import type { AxiosInstance } from 'axios'
import Axios from 'axios'

// Use the production API URL in production, and the dev API URL in development
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  (process.env.NEXT_PUBLIC_DEV_API_BASE_URL as string)

export const axiosInstance = Axios.create({
  baseURL: API_BASE_URL,
})

export const setAxiosDefaultToken = (
  token: string,
  axiosInstance: AxiosInstance
) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const deleteAxiosDefaultToken = () => {
  delete axiosInstance.defaults.headers.common['Authorization']
}
