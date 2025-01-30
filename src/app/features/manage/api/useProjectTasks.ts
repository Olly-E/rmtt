import { taskKeys } from "@/app/utils/query-key-factory";
import { fetchData } from "@/app/utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import { TaskDataTypeResponse } from "../types";

export const useProjectTasks = () => {
  return useQuery<TaskDataTypeResponse[]>({
    queryKey: taskKeys.lists(),
    queryFn: async () => fetchData(`/manage-dashboard/tasks/`),
  });
};
