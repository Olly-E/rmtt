"use client";

import { ArrowLeft2, Lock1 } from "iconsax-react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { ForgotPasswordProps } from "@/app/features/auth/types";
import { InputField } from "@/app/components/form/InputField";
import { Button } from "@/app/elements/Button";

import logoYellow from "../../../../public/assets/logo-yellow.svg";

export default function ForgotPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordProps>({});

  const onSubmit = (payload: ForgotPasswordProps) => {
    console.log(payload);
  };

  return (
    <div className="container p-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="">
          <Image
            src={logoYellow}
            alt="reboot-monkey-logo"
            style={{ width: "182px", height: "auto" }}
          />
        </Link>
        <Link
          href="/login"
          className="group flex items-center text-black font-medium gap-[6px] leading-[16px]"
        >
          <ArrowLeft2 color="#FAFAFA" size={12.6} className="transition-transform group-hover:translate-x-[-4px]" />
          Back to <span className="text-primary">Login</span>
        </Link>
      </div>
      <div className="w-[399px] mx-auto text-center mt-[197px]">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[50px] min-w-[50px] aspect-square centered rounded-[5px] bg-primary mx-auto mb-4">
            <Lock1 color="#050505" variant="Bold" size={32} />
          </div>
          <h1 className="text-white-2 text-[48px] whitespace-nowrap leading-[62.4px]">
            Forgot Password?
          </h1>
          <p className="text-gray-4 mt-3">Enter your email for instructions</p>
          <div className="mt-8">
            <InputField
              type="email"
              isRequired
              label="Email"
              placeholder="Enter email"
              hasError={errors.email}
              errorMessage={errors.email?.message}
              registration={{
                ...register("email"),
              }}
              className="mt-[6px]"
            />
          </div>
          <Button type="submit" className="w-full mt-8">
            Send Instructions
          </Button>
          <div className="">
            {/* <p className="text-gray-300 font-medium text-left text-sm">
                Remember Password?{" "}
                <Link
                  href="/login"
                  className="mt-5 inline-block text-secondary-100 text-primary"
                >
                  Login
                </Link>
              </p> */}
          </div>
        </form>
        {/* </Layout> */}
      </div>
    </div>
  );
}
