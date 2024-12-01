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
} & UseControllerProps;

const ButtonSelects = ({
  options,
  control,
  name,
  label,
  isRequired,
  labelClass,
}: ButtonSelectsProps) => {
  return (
    <div>
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
            <div className="grid grid-cols-4 gap-4 mt-4">
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
    </div>
  );
};

export default ButtonSelects;
