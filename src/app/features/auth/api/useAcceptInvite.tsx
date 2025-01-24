import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { UpdateProfileProps } from "../types";
import { AxiosError } from "axios";

export const useAcceptInvite = () => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, UpdateProfileProps>({
    mutationFn: (payload) =>
      fetchData<UpdateProfileProps>("/accept-invite", "POST", payload),
    onSuccess: () => {
      toast.success("Invitation accepted.");
      queryClient.invalidateQueries({
        // queryKey: supplierKeys.lists(),
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
