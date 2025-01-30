import relativeTime from "dayjs/plugin/relativeTime";
import { AxiosError } from "axios";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export const transformError = (error: AxiosError) => {
  const errorMessage = error?.message;
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

export const getFormattedDayAlone = (date: Date | string) => {
  return dayjs(date ? date : new Date()).format("DD");
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

export const getStartOfWeek = (date: Date): Date => {
  const currentDate = new Date(date);
  const day = currentDate?.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  currentDate.setDate(currentDate.getDate() + diff);
  return currentDate;
};

export const getEndOfWeek = (startOfWeek: Date): Date => {
  const endOfWeek = new Date(startOfWeek);
  endOfWeek?.setDate(startOfWeek?.getDate() + 6);
  return endOfWeek;
};

export const isCurrentWeek = (startOfWeek: Date, endOfWeek: Date): boolean => {
  const currentStart = getStartOfWeek(new Date());
  const currentEnd = getEndOfWeek(currentStart);

  return (
    startOfWeek?.toDateString() === currentStart.toDateString() &&
    endOfWeek?.toDateString() === currentEnd.toDateString()
  );
};

export const formatElapsedTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};
