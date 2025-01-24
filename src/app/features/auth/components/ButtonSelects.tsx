import { Label } from "@/app/elements/Label";
import { Option } from "@/app/types";
import clsx from "clsx";
import React from "react";
import {
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseControllerProps,
} from "react-hook-form";

type HasErrorType = Merge<
  FieldError,
  (
    | Merge<
        FieldError,
        FieldErrorsImpl<{
          name: string;
          id: string;
        }>
      >
    | undefined
  )[]
>;

type ButtonSelectsProps = {
  label?: string;
  options: Option[];
  hasError: HasErrorType | undefined;
  isRequired?: boolean;
  errorMessage?: string;
  labelClass?: string;
  className?: string;
} & UseControllerProps;

const ButtonSelects = ({
  options,
  control,
  name,
  label,
  isRequired,
  hasError,
  labelClass,
  className,
  errorMessage,
}: ButtonSelectsProps) => {
  return (
    <div className="w-full">
      {!!label && (
        <Label className={labelClass} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => {
          const handleSelectOption = (option: Option) => {
            onChange(option.id);
          };

          return (
            <div className={clsx("w-full gap-4 mt-4", className)}>
              {options.map((option) => (
                <button
                  type="button"
                  onClick={() => handleSelectOption(option)}
                  key={option.id}
                  className={clsx(
                    " flex items-center justify-center h-[38px] rounded-[7px]",
                    value === option.id
                      ? "bg-black text-primary"
                      : "border border-[#444444]/50 text-black bg-white-2"
                  )}
                >
                  {option.name}
                </button>
              ))}
            </div>
          );
        }}
      />
      {hasError && <div className="border-b border-b-red-state mt-4"/>}
      {errorMessage && (
        <p className="text-red-state text-[12px] mt-2 block">{errorMessage}</p>
      )}
    </div>
  );
};

export default ButtonSelects;
