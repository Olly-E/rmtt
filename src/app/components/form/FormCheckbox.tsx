"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import React from "react";
import clsx from "clsx";
import {
  Controller,
  UseControllerProps,
  UseFormRegisterReturn,
} from "react-hook-form";

type FormCheckboxProps = {
  label?: string;
  labelClass?: string;
  errorMessage?: string;
  id: string;
  registration: Partial<UseFormRegisterReturn>;
} & UseControllerProps;

const FormCheckbox = ({
  label,
  labelClass,
  id,
  control,
}: FormCheckboxProps) => {
  return (
    <div>
      <Controller
        name={id}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <div className="flex items-center">
              <Checkbox.Root
                checked={value}
                onCheckedChange={(e) => onChange(e)}
                className={clsx(
                  "flex size-[20px] appearance-none items-center justify-center rounded ",
                  value
                    ? "bg-primary text-black"
                    : "bg-transparent border border-black/20"
                )}
                id={id}
              >
                <Checkbox.Indicator className="text-black bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </Checkbox.Indicator>
              </Checkbox.Root>
              {label && (
                <label
                  className={clsx(
                    "pl-[15px] text-[15px] leading-none text-black",
                    labelClass
                  )}
                  htmlFor={id}
                >
                  {label}
                </label>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default FormCheckbox;
