"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

import { useVerificationCode } from "../api/useVerificationCode";

export const useVerification = () => {
  const params = useSearchParams();
  const [value, setValue] = React.useState("");
  const token = params.get("token") as string | undefined;

  const mutationVerification = useVerificationCode();

  const isVerificationButtonDisabled = React.useMemo(() => {
    return value.length !== 6;
  }, [value]);

  React.useEffect(() => {
    if (token && !value) {
      setValue(token);
    }
  }, [token, value]);

  // Trigger the mutation when the value has 6 characters
  React.useEffect(() => {
    if (value.length === 6) {
      const payload = {
        token: value,
      };
      mutationVerification.mutate(payload);
    }
  }, [value]);

  return {
    value,
    setValue,
    mutationVerification,
    isVerificationButtonDisabled,
  };
};
