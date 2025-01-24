"use client";

import { Control, useForm } from "react-hook-form";
import React from "react";

import { SelectField } from "@/app/components/form/SelectField";
import { InputField } from "@/app/components/form/InputField";
import { BasicInfoFormProps } from "../types";
import { Button } from "@/app/elements/Button";

const BasicInfoForm = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm<BasicInfoFormProps>();
  return (
    <form>
      <div className="mt-4 flex w-full items-center gap-6">
        <label
          htmlFor="firstName"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          First name
        </label>
        <InputField
          hasError={errors.firstName}
          registration={{ ...register("firstName") }}
          className="mt-[6px] !w-full"
          isRequired
          placeholder=""
        />
      </div>
      <div className="mt-4 flex w-full items-center gap-6">
        <label
          htmlFor="lastName"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          Last name
        </label>
        <InputField
          hasError={errors.lastName}
          registration={{ ...register("lastName") }}
          className="mt-[6px] !w-full"
          isRequired
          placeholder=""
        />
      </div>
      <div className="mt-4 flex w-full items-center gap-6 border-b pb-6">
        <label
          htmlFor="email"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          Work email
        </label>
        <InputField
          hasError={errors.email}
          registration={{ ...register("email") }}
          className="mt-[6px] !w-full"
          isRequired
          placeholder=""
        />
      </div>
      <div className="mt-4 flex w-full items-center gap-6">
        <label
          htmlFor="projectName"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          Roles
        </label>
        <div className="w-full">
          <InputField
            hasError={errors.roles}
            registration={{ ...register("roles") }}
            className="mt-[6px] !w-full"
            isRequired
            placeholder=""
          />
          <p className="text-gray-4 text-sm mt-1">
            How you would describe this person, like Designer, Senior, NYC, etc.
            Roles help organize the Team section and other reports.
          </p>
        </div>
      </div>
      <div className="mt-4 flex w-full items-center gap-6 pb-6 border-b">
        <label
          htmlFor="capacity"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          Capacity
        </label>
        <div>
          <div className="flex items-center gap-4 w-[121px]">
            <SelectField
              hasError={errors.capacity}
              name="capacity"
              arr={[
                { name: "35", id: "1" },
                { name: "40", id: "2" },
              ]}
              className="mt-[6px] !w-full"
              placeholder=""
              control={control as unknown as Control}
            />
          </div>
          <p className="text-gray-4 text-sm mt-1">
            The number of hours per week this person is available to work.
          </p>
        </div>
      </div>
      <div className="mt-4 flex w-full items-center gap-6 pb-6 border-b">
        <label
          htmlFor="capacity"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          Timezone
        </label>
        <div className="flex items-center gap-4 w-[313px]">
          <SelectField
            hasError={errors.capacity}
            name="timezone"
            arr={[]}
            className="mt-[6px] !w-full"
            placeholder=""
            control={control as unknown as Control}
          />
        </div>
      </div>
      <div className="flex items-center mt-8 justify-start gap-2">
        <Button as="link" href="/team/new/permissions" size="md">
          Update info
        </Button>
        <Button variant="outline" size="md">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
