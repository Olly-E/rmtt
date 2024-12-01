"use client";
import { Controller, FieldError, UseControllerProps } from "react-hook-form";
import { CountryCode } from "libphonenumber-js/core";
import PhoneInput from "react-phone-number-input";
import clsx from "clsx";

import { ErrorMessage } from "../ErrorMessage";
import { Label } from "../elements/Label";

type InputFieldPhoneNoProps = {
  label?: string;
  className?: string;
  hasError: FieldError | undefined;
  defaultCountry?: CountryCode | undefined;
  errorMessage?: string | undefined;
  isRequired?: boolean;
  labelClass?: string;
} & UseControllerProps;

export const InputFieldPhoneNo: React.FC<InputFieldPhoneNoProps> = ({
  label,
  defaultValue,
  className,
  defaultCountry = "US",
  isRequired,
  control,
  hasError,
  errorMessage,
  name,
  labelClass,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div>
            {!!label && (
              <Label
                htmlFor={name}
                isRequired={isRequired}
                className={labelClass}
              >
                {label}
              </Label>
            )}
            <PhoneInput
              className={clsx(
                "bg-[#434343] h-10 w-full appearance-none bg-transparent border-b font-WorkSans outline-none px-4 focus-within:border-b-black placeholder:text-gray-250",
                hasError ? "border-red-500" : "border-b-black",
                className
              )}
              id={name}
              defaultCountry={defaultCountry}
              {...field}
              value={defaultValue}
              onChange={(newValue) => field.onChange(newValue)}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </div>
        )}
      />
    </>
  );
};
