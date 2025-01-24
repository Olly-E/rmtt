import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { clientKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AddClientPayload } from "../types";
import { AxiosError } from "axios";

export const useAddClient = () => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, AddClientPayload>({
    mutationFn: (payload) =>
      fetchData<AddClientPayload>("/manage-dashboard/clients/", "POST", payload),
    onSuccess: () => {
      toast.success("Client added.");
      queryClient.invalidateQueries({
        queryKey: clientKeys.lists(),
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
