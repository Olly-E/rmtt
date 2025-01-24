"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Timer1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  SignInInputType,
  SignInSchema,
} from "@/app/features/auth/utils/validationSchema";
import { InputField } from "@/app/components/form/InputField";
import { useLogin } from "@/app/features/auth/api/useLogin";
import { LoginForm } from "@/app/features/auth/types";
import { useToggle } from "@/app/hooks/useToggle";
import { Button } from "@/app/elements/Button";

import logoYellow from "../../../../../public/assets/logo-yellow.svg";
import googleLogo from "../../../../../public/assets/googleLogo.svg";
import loginPic from "../../../../../public/assets/loginPic.webp";

const Page = () => {
  const { mutate, isPending } = useLogin();
  const { show, handleToggle } = useToggle();

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInInputType>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = (values: LoginForm) => {
    mutate(values, {
      onSuccess: () => {
        router.push("/time");
      },
    });
  };

  return (
    <div className="h-screen flex">
      <div className="min-w-[57.20%] w-[57.20%] bg-white-2 relative px-16 py-14">
        <div className="h-full w-full relative z-[4] flex flex-col justify-between">
          <Link href="/" className="">
            <Image
              src={logoYellow}
              alt="reboot-monkey-logo"
              style={{ width: "182px", height: "auto" }}
            />
          </Link>
          <div>
            <div className="w-[50px] h-[50px] min-w-[50px] aspect-square rounded-full bg-black centered">
              <Timer1 size="32" color="#F7E001" variant="Bold" />
            </div>
            <h1 className="text-[40px] text-white-2 leading-[44.4px] font-[500] w-[567px] mt-8">
              Finally, <i className="font-[300]">time tracker </i> &nbsp;your
              team actually wants to use.
            </h1>
          </div>
        </div>
        <Image
          src={loginPic}
          alt="login-picture"
          fill
          priority
          sizes="(max-width: 768px) 100vw"
          className="object-cover"
        />
      </div>
      <div className="w-[42.80%] bg-white-2">
        <div className="w-[356px] mx-auto flex flex-col h-full justify-center">
          <h2 className="text-black text-center text-[44px] leading-[44px]">
            Welcome Back!
          </h2>
          <p className="text-gray-4 mt-4 text-center">
            Don’t have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="text-primary underline underline-offset-[3px]"
            >
              {" "}
              Sign up
            </Link>
          </p>
          <Button className="bg-transparent mt-8 border-[#191919] border rounded-[5px] flex items-center h-[50px] text-black gap-6 px-6 justify-center text-center w-full">
            <Image src={googleLogo} alt="google" className="w-[24px] h-auto" />
            Sign up with google
          </Button>
          <div className="flex w-full items-center gap-6 my-6">
            <div className="h-[1px] border-t border-t-gray-7 w-full" />
            <p className="text-gray-4">Or</p>
            <div className="h-[1px] border-t border-t-gray-7 w-full" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="">
              <InputField
                registration={{ ...register("email") }}
                hasError={errors.email}
                className="mt-[6px]"
                isRequired
                label="Email"
                placeholder="Email"
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
            <div className="flex justify-end">
              <Link href="/auth/forgot-password" className="text-[#817D7C]">
                Forgot password?
              </Link>
            </div>
            {/* <Button
              isLoading={isPending}
              className="w-full"
              as="link"
              href="/time"
            >
              Sign in
            </Button> */}
            <Button
              isLoading={isPending}
              disabled={isPending}
              className="w-full"
              type="submit"
              // as="link"
              // href="/time"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
