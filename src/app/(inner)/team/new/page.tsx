"use client";

import { Control, useForm } from "react-hook-form";
import React from "react";

import { SelectFieldWithInput } from "@/app/components/form/SelectFieldWithInput";
import { useInvitePerson } from "@/app/features/team/api/useInvitePerson";
import ButtonSelects from "@/app/features/auth/components/ButtonSelects";
import { SelectField } from "@/app/components/form/SelectField";
import { InputField } from "@/app/components/form/InputField";
import { AddTeamForm } from "@/app/features/team/types";
import { Button } from "@/app/elements/Button";

const AddNewTeam = () => {
  const { mutate } = useInvitePerson();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTeamForm>();

  const onSubmit = (data: AddTeamForm) => {
    mutate(data, {
      onSuccess: () => {
        // route.push('/team')
      },
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[737px] mx-auto mt-10"
      >
        <div className="border-b border-b-black/10 pb-4">
          <h1 className="text-[32px] leading-[32px] font-medium">
            Invite Person
          </h1>
          <p className="text-sm mt-4">
            We’ll email this person an invitation to join your team in RMTT.
          </p>
        </div>
        <div className="mt-4 flex w-full items-center gap-10">
          <label
            htmlFor="firstName"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap"
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
        <div className="mt-4 flex w-full items-center gap-10">
          <label
            htmlFor="lastName"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap"
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
        <div className="mt-4 flex w-full items-center gap-10">
          <label
            htmlFor="email"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap"
          >
            Work Email
          </label>
          <InputField
            hasError={errors.email}
            registration={{ ...register("email") }}
            className="mt-[6px] !w-full"
            isRequired
            placeholder=""
          />
        </div>
        <div className="flex items-center gap-10 w-full">
          <label
            htmlFor="type"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap"
          >
            Type
          </label>
          <ButtonSelects
            className="grid grid-cols-2"
            hasError={errors.type}
            name="type"
            control={control as unknown as Control}
            options={[
              { id: "1", name: "Employee" },
              { id: "2", name: "Contract" },
            ]}
          />
        </div>
        <div className="mt-4 flex w-full items-start gap-10">
          <label
            htmlFor="role"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap"
          >
            Roles
          </label>
          <div className="w-full">
            <SelectFieldWithInput
              hasError={errors.email}
              name="role"
              arr={[
                { name: "Project Manager", id: "1" },
                { name: "Developer", id: "2" },
              ]}
              className="mt-[6px] !w-full"
              placeholder=""
              control={control as unknown as Control}
            />
            <p className="text-gray-4 text-sm mt-1">
              Optional. How you would describe this person, like Designer,
              Senior, NYC, etc. Roles help organize the Team section and other
              reports.
            </p>
          </div>
        </div>
        <div className="mt-4 flex w-full items-start gap-10">
          <label
            htmlFor="capacity"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap mt-3"
          >
            Capacity
          </label>
          <div>
            <div className="flex items-center gap-4">
              <div className="w-[121px]">
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
              <p className="text-sm">hours per week</p>
            </div>
            <p className="text-gray-4 text-sm mt-1">
              Optional. The number of hours per week this person is available to
              work.
            </p>
          </div>
        </div>
        <div className="mt-4 flex w-full items-start gap-10">
          <label
            htmlFor="billableRate"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap mt-3"
          >
            Default billable rate
          </label>
          <div>
            <div className="flex items-center gap-2">
              <span>$</span>
              <div className="w-[121px]">
                <SelectField
                  hasError={errors.capacity}
                  name="billableRate"
                  arr={[
                    { name: "35", id: "1" },
                    { name: "40", id: "2" },
                  ]}
                  className="mt-[6px] !w-full"
                  placeholder=""
                  control={control as unknown as Control}
                />
              </div>
              <p className="text-sm ml-2">per hour</p>
            </div>
            <p className="text-gray-4 text-sm mt-1">
              Optional. The internal cost that this person incurs on your
              business. Only Administrators can see cost rates and amounts.
            </p>
          </div>
        </div>
        <div className="flex items-center mt-8 justify-end gap-2">
          <Button as="link" href="/team/new/permissions" size="md">
            Invite and continue
          </Button>
          <Button variant="outline" size="md">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTeam;
