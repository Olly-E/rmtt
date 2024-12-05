import relativeTime from "dayjs/plugin/relativeTime";
import { AxiosError } from "axios";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export const transformError = (error: AxiosError) => {
  const errorMessage = (error.response?.data as AxiosError).message;
  if (Array.isArray(errorMessage)) {
    return errorMessage[0];
  }
  return errorMessage;
};

export const getFormattedTimeAgoText = (date: string | undefined) => {
  if (!date) return "";
  return dayjs().to(dayjs(date));
};

export const getFormattedDate = (date: Date | string) => {
  return dayjs(date ? date : new Date()).format("DD MMM, YYYY");
};
export const getFormattedDateWithoutYear = (date: Date | string) => {
  return dayjs(date ? date : new Date()).format("dddd, DD MMM");
};
export const getFormattedDayMonthYear = (date: Date | null) => {
  if (!date) return "";
  return dayjs(date).format("YYYY-MM-DD");
};

export const getFormattedHourMinSec = (date: Date | null) => {
  if (!date) return "";
  return dayjs(date).format("HH:mm:ss");
};

export const getFormattedDayMonthYearHourMinSec = (date: Date | null) => {
  if (!date) return "";
  return dayjs(date).format("D MMMM YYYY HH:mm a"); // 1 January 2021 12:00 AM
};
