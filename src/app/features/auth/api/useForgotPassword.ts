import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { ForgotPasswordProps } from "../types";

export const useForgotPassword = () => {
  return useMutation<Response, AxiosError, ForgotPasswordProps>({
    mutationFn: (payload) =>
      fetchData<ForgotPasswordProps>(
        "/auth/forgot-password",
        "POST",
        payload
      ),
    onSuccess: () => {
      toast.success("Password reset link has been sent to your email");
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
