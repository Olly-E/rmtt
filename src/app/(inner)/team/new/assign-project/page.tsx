"use client";
import { SelectFieldWithInput } from "@/app/components/form/SelectFieldWithInput";

import { Control, useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/app/elements/Button";

const AssignProject = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  // const assignedProjects = watch("project");

  return (
    <form className="w-[743px] mx-auto mt-10">
      <div className=" pb-4 border-b border-b-gray-6">
        <h1 className="text-black leading-[44px] text-[32px] font-medium  ">
          What project is Olivia working on?
        </h1>
        <p className="text-black text-sm mt-4 w-[544px]">
          Add Olivia to projects so that they can track time.
        </p>
      </div>
      <div className="w-full bg-primary/10 border border-primary px-4 py-2 rounded-[10px] mt-6">
        <SelectFieldWithInput
          isMultiple
          hasError={errors.project}
          name="project"
          arr={[
            { name: "Project Silver", id: "1" },
            { name: "Project Gold", id: "2" },
          ]}
          className=" !w-full border bg-white-2"
          placeholder="Find and select projects to assign"
          control={control as unknown as Control}
        />

        <div className="flex items-center gap-2 mt-4">
          <Button as="link" href="/team/new/assign-project" size="md">
            Assign projects
          </Button>
          <Button size="md" variant="outline">
            Skip
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AssignProject;
