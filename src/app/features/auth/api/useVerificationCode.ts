import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { VerificationResponse } from "../types";
import { AxiosError } from "axios";

interface Payload {
  token: string;
}

export const useVerificationCode = () => {
  const router = useRouter();

  return useMutation<VerificationResponse, AxiosError, Payload>({
    mutationFn: (payload) =>
      fetchData<Payload>("/users/verify-account/", "POST", payload),

    onSuccess: () => {
      toast.success("Account verified, Redirecting to login page...");
      router.push("/auth/login");
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
