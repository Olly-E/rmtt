import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { timeKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AxiosError } from "axios";
import { CreateTimePayload } from "../types";

export const useStopTime = ({ projectId }: { projectId: string }) => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, CreateTimePayload>({
    mutationFn: (payload) =>
      fetchData<CreateTimePayload>(
        `/trackers/projects/${projectId}/start-tracking/`,
        "PATCH",
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
