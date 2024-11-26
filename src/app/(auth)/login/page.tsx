"use client";

import { useForm } from "react-hook-form";
import { Timer1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import loginPic from "../../../../public/assets/loginPic.webp";
import { InputField } from "@/app/components/form/InputField";
import { useToggle } from "@/app/hooks/useToggle";
import { Button } from "@/app/elements/Button";

import logoYellow from "../../../../public/assets/logo-yellow.svg";
import googleLogo from "../../../../public/assets/googleLogo.svg";

const Page = () => {
  const { show, handleToggle } = useToggle();
  const {
    register,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>({});
  return (
    <div className="h-screen flex">
      <div className="min-w-[57.20%] w-[57.20%] bg-black relative px-16 py-14">
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
      <div className="w-[42.80%] bg-black">
        <div className="w-[356px] mx-auto flex flex-col h-full justify-center">
          <h2 className="text-white-2 text-[44px] leading-[44px]">
            Welcome Back!
          </h2>
          <p className="text-gray-4 mt-4">
            Don’t have and account?{" "}
            <Link
              href="/sign-up"
              className="text-primary underline underline-offset-[3px]"
            >
              {" "}
              Sign up
            </Link>
          </p>
          <Link
            href="/login"
            className="bg-gray-2/50 mt-8 border-gray-2 border rounded-[5px] flex items-center h-[50px] text-white/30 gap-6 px-6 justify-center text-center w-full"
          >
            <Image src={googleLogo} alt="google" className="w-[24px] h-auto" />
            Sign up with google
          </Link>
          <div className="flex w-full items-center gap-6 my-6">
            <div className="h-[1px] border border-gray-2 w-full" />
            <p className="text-gray-4">Or</p>
            <div className="h-[1px] border-t border-t-gray-2 w-full" />
          </div>
          <div className="space-y-6">
            <div className="">
              <InputField
                registration={{ ...register("email") }}
                hasError={errors.email}
                className="mt-[6px]"
                isRequired
                label="Email"
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
            <Button className="w-full">Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
