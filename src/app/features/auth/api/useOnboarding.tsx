"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { OnboardingPayload } from "../../team/types";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AxiosError } from "axios";

interface OnboardingResponse {
  status: string;
  message: string;
  data: {
    userId: string;
    accessToken: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}
type OnboardingPropType = {
  userId: string;
};
export const useOnboarding = ({ userId }: OnboardingPropType) => {
  return useMutation<OnboardingResponse, AxiosError, OnboardingPayload>({
    mutationFn: (payload) =>
      fetchData<OnboardingPayload>(
        `/users/${userId}/onboarding`,
        "POST",
        payload
      ),

    // onSuccess: async (response) => {},
    onError: async (error) => {
      toast.error(transformError(error));
    },
  });
};
