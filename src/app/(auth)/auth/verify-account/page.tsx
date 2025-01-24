"use client";

import OtpInput from "react-otp-input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useVerification } from "@/app/features/auth/utils/useVerification";
import { Button } from "@/app/elements/Button";

import logoAlone from "../../../../../public/assets/logoAlone.svg";


const VerifyAccountPage = () => {
  const {
    value,
    setValue,
    mutationVerification,
    isVerificationButtonDisabled,
  } = useVerification();
  return (
    <>
      <div className="absolute top-0 left-0 z-[100] flex h-[100vh] w-full items-center  justify-center bg-black bg-opacity-40 text-left text-black backdrop-blur-sm">
        <div className="scrollbar-hide w-full absolute mx-auto sm:w-[524px] overflow-y-auto rounded-lg bg-white px-8 pb-8 pt-16">
          <div className="flex items-center justify-center">
            <Image
              src={logoAlone}
              alt="reboot-monkey-logo"
              style={{ width: "62px", height: "auto" }}
            />
          </div>
          <h2 className="mt-7 text-center text-[32px]">
            Enter verification code
          </h2>
          <p className="text-center">
            A 6-digit code has been sent to your email, please check to access
            account
          </p>
          <div className="verification-input-container mx-auto my-7 max-w-[350px] w-full">
            <OtpInput
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus
              inputType="text"
              inputStyle="h-[46px] flex-1 mx-1 rounded-md border border-gray-400 outline-primary focus:border-secondary"
              value={value}
              onChange={setValue}
              numInputs={6}
            />
          </div>
          <Button
            disabled={
              isVerificationButtonDisabled || mutationVerification.isPending
            }
            isLoading={mutationVerification.isPending}
            className="mx-auto w-52"
          >
            {mutationVerification.isPending ? "Verifying..." : "Verify"}
          </Button>
          {/* <p className="mt-6 text-center text-base">
            Didn’t get code?{" "}
            <button className="text-primary" onClick={handleResendCode}>
              {mutationResendCode.isPending ? "Resending..." : "Resend Code"}
            </button>{" "}
          </p> */}
          <p className="mt-8 text-center  text-sm">
            Need help? contact us at{" "}
            <Link className="underline" href="https://www.rebootmonkey.com/">
              www.rebootmonkey.com
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyAccountPage;
