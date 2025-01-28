import { taskKeys } from "@/app/utils/query-key-factory";
import { fetchData } from "@/app/utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import { TaskDataTypeResponse } from "../types";

export const useProjectTasks = ({ projectId }: { projectId: string }) => {
  console.log(projectId);
  return useQuery<TaskDataTypeResponse[]>({
    queryKey: taskKeys.lists(),
    queryFn: async () => fetchData(`/manage-dashboard/tasks/`),
  });
};
