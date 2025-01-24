"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React from "react";


import { useAcceptInvite } from "@/app/features/auth/api/useAcceptInvite";
import { UpdateProfileProps } from "@/app/features/auth/types";
import { InputField } from "@/app/components/form/InputField";
import { useToggle } from "@/app/hooks/useToggle";
import AuthHeader from "@/app/layout/AuthHeader";
import { Button } from "@/app/elements/Button";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileProps>({});

  const router = useRouter();
  const { mutate } = useAcceptInvite();

  const { show, handleToggle } = useToggle();
  const onSubmit = (values: UpdateProfileProps) => {
    mutate(values, {
      onSuccess: () => {
        router.push("/time")
      },
    });
  };

  return (
    <div className="">
      <AuthHeader />
      <div className="w-[509px] mx-auto mt-10">
        <h1 className="text-black text-center text-[44px] leading-[44px]">
          You&apos;re invited to RMTT🎉
        </h1>
        <p className="text-gray-4 mt-2 text-center">
          You&apos;re  invited to join the Reboot Monkey Team. Let’s get you
          signed in!
        </p>
      </div>
      <div className="w-[452px] mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <div className="">
            <InputField
              registration={{ ...register("firstName") }}
              hasError={errors.firstName}
              className="mt-[6px]"
              isRequired
              label="First name"
              placeholder=""
            />
          </div>
          <div className="">
            <InputField
              registration={{ ...register("lastName") }}
              hasError={errors.lastName}
              className="mt-[6px]"
              isRequired
              label="Last name"
              placeholder=""
            />
          </div>
          <div className="">
            <InputField
              registration={{ ...register("email") }}
              hasError={errors.email}
              type="email"
              className="mt-[6px]"
              isRequired
              label="Work email"
              placeholder=""
            />
          </div>
          <div className="">
            <InputField
              registration={{ ...register("password") }}
              hasError={errors.password}
              className="mt-[6px]"
              isRequired
              label="Password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              handleShowPassword={handleToggle}
              withIcon
            />
          </div>
          <Button className="w-full ">Sign in</Button>
          <p className="text-center">
            By creating an account, you agree to the RMTT Terms of
            service and Privacy policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
