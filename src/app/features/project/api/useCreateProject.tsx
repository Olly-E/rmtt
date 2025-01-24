import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { projectKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { CreateProjectPayload } from "../types";
import { AxiosError } from "axios";

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, CreateProjectPayload>({
    mutationFn: (payload) =>
      fetchData<CreateProjectPayload>(
        "/trackers/projects/",
        "POST",
        payload
      ),
    onSuccess: () => {
      toast.success("Project created.");
      queryClient.invalidateQueries({
        queryKey: projectKeys.lists(),
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
