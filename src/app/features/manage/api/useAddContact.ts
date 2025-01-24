import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { contactKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AddContactsPayload } from "../types";
import { AxiosError } from "axios";

export const useAddContacts = () => {
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, AddContactsPayload>({
    mutationFn: (payload) =>
      fetchData<AddContactsPayload>(
        "/manage-dashboard/contacts/",
        "POST",
        payload
      ),
    onSuccess: () => {
      toast.success("Contact added.");
      queryClient.invalidateQueries({
        queryKey: contactKeys.lists(),
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
