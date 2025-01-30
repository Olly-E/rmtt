import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { timeKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AxiosError } from "axios";


export const useStartTime = () => {
  const queryClient = useQueryClient();

  type PayloadType = {
    time_entry_id: string;
  };

  return useMutation<Response, AxiosError, PayloadType>({
    mutationFn: (payload) =>
      fetchData<PayloadType>(
        `/trackers/projects/play/`,
        "PATCH",
        payload
      ),
    onSuccess: () => {
      toast.success("Time started.");
      queryClient.invalidateQueries({
        queryKey: timeKeys.all,
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
