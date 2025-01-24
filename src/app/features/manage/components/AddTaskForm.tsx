"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";

import { AddTaskFormType, addTaskSchema } from "../utils/validationSchema";
import FormCheckbox from "@/app/components/form/FormCheckbox";
import { InputField } from "@/app/components/form/InputField";
import { useAddTask } from "../api/useAddTask";
import { Button } from "@/app/elements/Button";
import { AddTaskPayload } from "../types";

interface AddTaskFormProps {
  handleCloseNewTask: () => void;
}

export const AddTaskForm = ({ handleCloseNewTask }: AddTaskFormProps) => {
  const route = useRouter();
  const { mutate, isPending: isPendingAddTask } = useAddTask();
  const goToPrevPage = () => {
    route.back();
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTaskFormType>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      is_default_billable: false,
      is_common_and_future_adding: false,
      is_added_to_all_existing_project: false,
      billable_rate: 0,
    },
  });

  const CHECKBOX_QUESTIONS = [
    {
      id: "is_default_billable",
      question: "This task is billable by default",
    },
    {
      id: "is_common_and_future_adding",
      question:
        "This is a common task, and should be added to all future projects",
    },
    {
      id: "is_added_to_all_existing_project",
      question: "Add this task to all existing projects",
    },
  ];

  const onSubmit = (values: AddTaskFormType) => {
    const payload: AddTaskPayload = {
      name: values.name,
      billable_rate: values.billable_rate.toString() || "0",
      is_default_billable: values.is_default_billable || false,
      is_common_and_future_adding: values.is_common_and_future_adding || false,
      is_added_to_all_existing_project:
        values.is_added_to_all_existing_project || false,
    };

    mutate(payload, {
      onSuccess: () => {
        handleCloseNewTask();
      },
    });
  };

  //what's left -  Saheed will readjust the task endpoint removing all the unecessities and also make sure only name is required

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-primary mb-6 border rounded-[10px] py-8 px-6 bg-white-3"
    >
      <InputField
        hasError={errors.name}
        label="Task name"
        registration={{ ...register("name") }}
        className="mt-[6px] !w-full"
        isRequired
        placeholder=""
      />
      <div className="mt-4 gap-10">
        <label
          htmlFor="billableRate"
          className="block font-medium text-sm text-black min-w-[150px] whitespace-nowrap mt-3"
        >
          Default billable rate
        </label>
        <div>
          <div className="flex items-center gap-2">
            <span>$</span>
            <div className="w-[121px]">
              <InputField
                hasError={errors.billable_rate}
                label=""
                registration={{
                  ...register("billable_rate", { valueAsNumber: true }),
                }}
                className="mt-[6px] !w-full"
                isRequired
                placeholder=""
                type="number"
              />
            </div>
            <p className="text-sm ml-2">per hour</p>
          </div>
          <p className="text-gray-4 text-sm mt-1">
            Adding a default billable rate will improve the accuracy of your
            reports.
          </p>
        </div>
      </div>
      <div className="">
        {CHECKBOX_QUESTIONS.map((option) => (
          <div className="mt-4" key={option.id}>
            <FormCheckbox
              label={option.question}
              id={option.id}
              name={option.id}
              registration={{ ...register(option.id as keyof AddTaskFormType) }}
              control={control as unknown as Control}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-2 mt-4">
        <Button
          isLoading={isPendingAddTask}
          disabled={isPendingAddTask}
          type="submit"
          size="md"
        >
          Save task
        </Button>
        <Button
          type="button"
          onClick={goToPrevPage}
          variant="outline"
          size="md"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
