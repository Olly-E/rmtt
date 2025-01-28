"use client";

import { ArrowLeft2, PasswordCheck } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { ConfirmPasswordProps } from "@/app/features/auth/types";
import { InputField } from "@/app/components/form/InputField";
import { useToggle } from "@/app/hooks/useToggle";
import { Button } from "@/app/elements/Button";

import logoYellow from "../../../../../../public/assets/logo-yellow.svg";
import { useResetPassword } from "@/app/features/auth/api/useResetPassword";

export default function ConfirmPassword() {
  const route = useRouter();
  const params = useSearchParams();
  const token = params.get("token") as string | undefined;

  const { mutate, isPending } = useResetPassword();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ConfirmPasswordProps>({});

  const onSubmit = (value: ConfirmPasswordProps) => {
    const payload = {
      token: token || "",
      new_password: value.password,
    };

    mutate(payload, {
      onSuccess: () => {
        route.push("/auth/login");
      },
    });
  };

  const { show, handleToggle } = useToggle();

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
          <ArrowLeft2
            color="#FAFAFA"
            size={12.6}
            className="transition-transform group-hover:translate-x-[-2px]"
          />
          Back to <span className="text-primary">Login</span>
        </Link>
      </div>
      <div className="w-[399px] mx-auto text-center mt-[197px]">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[50px] min-w-[50px] aspect-square centered rounded-[5px] bg-primary mx-auto mb-4">
            <PasswordCheck color="#050505" variant="Bold" size={32} />
          </div>
          <h1 className="text-white-2 text-[48px] whitespace-nowrap leading-[62.4px]">
            Set new password
          </h1>
          <p className="text-gray-4 mt-3">Must be at least 8 characters.</p>
          <div className="mt-8">
            <InputField
              type={show ? "text" : "password"}
              isRequired
              label="Password"
              placeholder="Enter password"
              hasError={errors.password}
              errorMessage={errors.password?.message}
              withIcon
              registration={{
                ...register("password", {
                  required: "Password is required",
                }),
              }}
              handleShowPassword={handleToggle}
              className="mt-[6px]"
            />
          </div>
          <div className="mt-8">
            <InputField
              type={show ? "text" : "password"}
              isRequired
              label="Confirm Password"
              placeholder="Enter password"
              hasError={errors.confirmPassword}
              withIcon
              errorMessage={errors.confirmPassword?.message}
              registration={{
                ...register("confirmPassword", {
                  required: "Password is required",
                }),
              }}
              handleShowPassword={handleToggle}
              className="mt-[6px]"
            />
          </div>
          <Button
            disabled={isPending}
            isLoading={isPending}
            type="submit"
            className="w-full mt-8"
          >
            Set new password
          </Button>
        </form>
        {/* </Layout> */}
      </div>
    </div>
  );
}
