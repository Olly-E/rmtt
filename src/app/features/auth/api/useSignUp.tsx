"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { SignUpPayload, SignUpResponse } from "../types";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";

export const useSignUp = () => {
  return useMutation<SignUpResponse, AxiosError, SignUpPayload>({
    mutationFn: (payload) =>
      fetchData<SignUpPayload>("/users/register-user/", "POST", payload),

    onSuccess: async () => {
      toast.success("Account created successfully");
    },
    onError: async (error) => {
      toast.error(transformError(error));
    },
  });
};
