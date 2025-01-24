"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { axiosInstance, setAxiosDefaultToken } from "@/app/lib/axios";
import { tokenStorage, userIDStorage } from "@/app/utils/storage";
import { LoginFormProps, LoginSuccessResponse } from "../types";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AxiosError } from "axios";


export const useLogin = () => {
  return useMutation<LoginSuccessResponse, AxiosError, LoginFormProps>({
    mutationFn: (payload) =>
      fetchData<LoginFormProps>("/users/login-user/", "POST", payload),

    onSuccess: async (response) => {
      const { token, id, first_name, last_name } = response;
      const miniUserObject = {
        id,
        firstName: first_name,
        lastName: last_name,
      };
      tokenStorage.setToken(token);
      userIDStorage.setUserID(id);
      setAxiosDefaultToken(token, axiosInstance);
      window.localStorage.setItem("userData", JSON.stringify(miniUserObject));
    },
    onError: async (error) => {
      toast.error(transformError(error));
    },
  });
};
