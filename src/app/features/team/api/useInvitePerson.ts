import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AddTeamForm } from "../types";
import { AxiosError } from "axios";

export const useInvitePerson = () => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, AddTeamForm>({
    mutationFn: (payload) =>
      fetchData<AddTeamForm>("/invite-person", "POST", payload),
    onSuccess: () => {
      toast.success("Invitation sent.");
      queryClient.invalidateQueries({
        // queryKey: supplierKeys.lists(),
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
