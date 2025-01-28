import { timeKeys } from "@/app/utils/query-key-factory";
import { fetchData } from "@/app/utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import { AllTimeLogDataType } from "../types";

export const useAllTimeLogs = () => {
  return useQuery<AllTimeLogDataType>({
    queryKey: timeKeys.lists(),
    queryFn: async () => fetchData(`/trackers/projects/get-all-logs/`),
  });
};
