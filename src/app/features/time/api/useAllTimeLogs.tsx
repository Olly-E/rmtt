import { timeKeys } from "@/app/utils/query-key-factory";
import { fetchData } from "@/app/utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import { TimeLogDataType } from "../types";

export const useAllTimeLogs = () => {
  return useQuery<TimeLogDataType[]>({
    queryKey: timeKeys.all,
    queryFn: async () => fetchData(`/trackers/projects/get-all-logs/`),
    gcTime: 0,
  });
};
