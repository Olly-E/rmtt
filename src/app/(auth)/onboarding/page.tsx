"use client";
import { Control, useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SelectField } from "@/app/components/form/SelectField";
import { InputField } from "@/app/components/form/InputField";

import onboardingPic from "../../../../public/assets/onboardingPic.webp";
import logoYellow from "../../../../public/assets/logo-yellow.svg";
import ButtonSelects from "@/app/features/auth/components/ButtonSelects";
import { Option } from "@/app/types";

const Page = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<{
    companyName: string;
    role: string;
    companySize: Option;
  }>({});

  const STAFF_SIZE = [
    { name: "Just me", id: "Just me" },
    { name: "2 - 5", id: "2 - 5" },
    { name: "6 - 15", id: "6 - 15" },
    { name: "16 - 25", id: "16 - 25" },
    { name: "26 - 50", id: "26 - 50" },
    { name: "51 - 100", id: "51 - 100" },
    { name: "100+", id: "100+" },
  ];

  return (
    <div className="h-screen flex">
      <div className="min-w-[33.82%] w-[33.82%] bg-black relative px-16 py-14">
        <Link href="/" className="relative z-[1]">
          <Image
            src={logoYellow}
            alt="reboot-monkey-logo"
            style={{ width: "182px", height: "auto" }}
          />
        </Link>
        <Image
          src={onboardingPic}
          alt="onboarding-picture"
          fill
          priority
          sizes="(max-width: 768px) 100%"
          className="object-cover"
        />
      </div>
      <div className="w-[66.18%] bg-white-2 pt-20">
        <div className="w-[452px] mx-auto">
          <h1 className="text-black text-center text-[44px] leading-[44px]">
            Welcome to RMTT🎉
          </h1>
          <p className="text-gray-4 mt-4 text-center">
            We just have a few quick questions that&apos;ll help us customize
            your experience.
          </p>
          <div className="space-y-8 mt-8">
            <div className="">
              <InputField
                registration={{ ...register("companyName") }}
                hasError={errors.companyName}
                className="mt-[6px]"
                isRequired
                label="1. Is this your company name? *"
                placeholder=""
              />
            </div>
            <div className="">
              <SelectField
                arr={[{ name: "Emma", id: "1" }]}
                control={control as unknown as Control}
                name="role"
                hasError={errors.role}
                className="mt-4"
                isRequired
                label="2. What’s your role in your organization? *"
                placeholder=""
              />
            </div>
            <div className="">
              <SelectField
                arr={[{ name: "IT", id: "1" }]}
                control={control as unknown as Control}
                name="role"
                hasError={errors.role}
                className="mt-4"
                isRequired
                label="3. What industry is your organization in? *"
                placeholder=""
              />
            </div>
            <ButtonSelects
              name="companySize"
              control={control as unknown as Control}
              options={STAFF_SIZE}
              hasError={errors.companySize}
              labelClass="!text-[16px]"
              label="4. How many people will you be working with?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
