import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { timeKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AxiosError } from "axios";
import { CreateTimePayload } from "../types";

export const useCreateTimeLog = ({ projectId }: { projectId: string }) => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, CreateTimePayload>({
    mutationFn: (payload) =>
      fetchData<CreateTimePayload>(
        `/trackers/projects/start-tracking/`,
        "POST",
        payload
      ),
    onSuccess: () => {
      toast.success("Time created.");
      queryClient.invalidateQueries({
        queryKey: timeKeys.list(projectId),
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
