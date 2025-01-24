
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { taskKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AddTaskPayload } from "../types";
import { AxiosError } from "axios";

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, AddTaskPayload>({
    mutationFn: (payload) =>
      fetchData<AddTaskPayload>("/manage-dashboard/tasks/", "POST", payload),
    onSuccess: () => {
      toast.success("Task added.");
      queryClient.invalidateQueries({
        queryKey: taskKeys.lists(),
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
