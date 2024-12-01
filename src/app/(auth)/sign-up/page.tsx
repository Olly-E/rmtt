"use client";

import { useForm } from "react-hook-form";
import { Timer1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { InputField } from "@/app/components/form/InputField";
import { useToggle } from "@/app/hooks/useToggle";
import { Button } from "@/app/elements/Button";

import logoYellow from "../../../../public/assets/logo-yellow.svg";
import googleLogo from "../../../../public/assets/googleLogo.svg";
import signUpPic from "../../../../public/assets/signUpPic.webp";
import { SignUpForm } from "@/app/features/auth/types";

const Page = () => {
  const { show, handleToggle } = useToggle();
  const {
    register,
    formState: { errors },
  } = useForm<SignUpForm>({});

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
          src={signUpPic}
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
            Get Started!
          </h2>
          <p className="text-gray-4 mt-4 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary underline underline-offset-[3px]"
            >
              {" "}
              Sign in
            </Link>
          </p>
          <Link
            href="/login"
            className="bg-transparent mt-8 border-[#191919] border rounded-[5px] flex items-center h-[50px] text-black gap-6 px-6 justify-center text-center w-full"
          >
            <Image src={googleLogo} alt="google" className="w-[24px] h-auto" />
            Sign up with google
          </Link>
          <div className="flex w-full items-center gap-6 my-6">
            <div className="h-[1px] border-t border-t-gray-7 w-full" />
            <p className="text-gray-4">Or</p>
            <div className="h-[1px] border-t border-t-gray-7 w-full" />
          </div>
          <div className="gap-y-8 grid grid-cols-2 gap-x-4">
            <div className="">
              <InputField
                registration={{ ...register("firstName") }}
                hasError={errors.firstName}
                className="mt-[6px]"
                isRequired
                label="First name"
                placeholder="First name"
              />
            </div>
            <div className="">
              <InputField
                registration={{ ...register("lastName") }}
                hasError={errors.lastName}
                className="mt-[6px]"
                isRequired
                label="Last name"
                placeholder="Last name"
              />
            </div>
            <div className="">
              <InputField
                registration={{ ...register("company") }}
                hasError={errors.company}
                className="mt-[6px]"
                isRequired
                label="Company"
                placeholder="Company"
              />
            </div>
            <div className="">
              <InputField
                registration={{ ...register("email") }}
                hasError={errors.email}
                className="mt-[6px]"
                isRequired
                label="Work email"
                placeholder="Work email"
              />
            </div>
            <div className="col-span-2">
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
            <Button className="w-full col-span-2">Sign up</Button>
            <p className="text-gray-4 text-sm col-span-2 text-center -mt-2">
              By creating an account, you agree to the RMTT 
              <Link
                href="/"
                className="text-blue-state underline underline-offset-2"
              >
                Terms of service 
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="text-blue-state underline underline-offset-2"
              >
                Privacy policy.
              </Link>
               
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
