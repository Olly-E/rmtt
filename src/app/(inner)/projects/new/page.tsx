"use client";

import { Control, useForm } from "react-hook-form";
import React from "react";

import { InputDateField } from "@/app/components/form/InputDateField";
import { TextAreaField } from "@/app/components/form/TextAreaField";
import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import { AddNewPojectForm } from "@/app/features/project/types";
import { InputField } from "@/app/components/form/InputField";
import { Avatar } from "@/app/components/Avatar";
import { Button } from "@/app/elements/Button";
import { Option } from "@/app/types";
import { X } from "lucide-react";

const PREDEFINED_TASKS = [
  {
    id: "Business Development",
    name: "Business Development",
  },
  {
    id: "Design",
    name: "Design",
  },
  {
    id: "Programming",
    name: "Programming",
  },
];

const TEAM_OPTS = [
  {
    id: "1",
    name: "Olivia Smith",
  },
  {
    id: "2",
    name: "David Johnson",
  },
];

const CreateNewProjectPage = () => {
  const [tasks, setTasks] = React.useState<Option[]>(PREDEFINED_TASKS);
  const [selectedTasks, setSelectedTasks] = React.useState<string[]>([]);
  const [team, setTeam] = React.useState<Option[]>([TEAM_OPTS[0]]);
  const [selectedTeam, setSelectedTeam] = React.useState<string[]>([]);

  const handleRemoveTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  //   const handleAddTask = (task: Option) => {
  //     setTasks((prev) => [...prev, task]);
  //   };

  const handleSelectTask = (id: string) => {
    setSelectedTasks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskId) => taskId !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelectAllTasks = () => {
    setSelectedTasks(tasks.map((task) => task.id));
  };

  const handleRemoveTeam = (id: string) => {
    setTeam((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSelectTeam = (id: string) => {
    setSelectedTeam((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskId) => taskId !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelectAllTeam = () => {
    setSelectedTeam(team.map((task) => task.id));
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<AddNewPojectForm>();

  const onSubmit = (values: AddNewPojectForm) => {
    console.log(values);
  };

  return (
    <div className="container">
      <div className="max-w-[1184px] mx-auto pb-10">
        <h1 className="text-black leading-[44px] mt-4 text-[32px] font-medium border-b border-b-gray-6 pb-3">
          New Project
        </h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 flex w-full items-center gap-10">
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
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="projectName"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Project name
            </label>
            <InputField
              hasError={errors.projectName}
              registration={{ ...register("projectName") }}
              className="mt-[6px] !w-full"
              isRequired
              placeholder=""
            />
          </div>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="projectName"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Project code
            </label>
            <div>
              <InputField
                hasError={errors.projectName}
                registration={{ ...register("projectCode") }}
                className="!w-[130px]"
                isRequired
                placeholder=""
              />
              <p className="text-gray-4 text-sm mt-1">
                Optional. A code can help identify your project. You can use any
                combination of numbers or letters.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="projectName"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Dates
            </label>
            <div>
              <div className="flex items-center gap-4">
                <div className="flex items-center !w-[130px]">
                  <InputDateField
                    hasError={errors.startDate}
                    name="startDate"
                    className="!w-[130px]"
                    placeholderText="Starts on"
                    dateFormat="dd/MM/yyyy"
                    isRequired
                    placeholder=""
                    control={control as unknown as Control}
                  />
                </div>
                <p className="font-medium text-sm">to</p>
                <div className="flex items-center !w-[130px]">
                  <InputDateField
                    hasError={errors.endDate}
                    name="endDate"
                    className="!w-[130px]"
                    placeholderText="Ends on"
                    dateFormat="dd/MM/yyyy"
                    isRequired
                    placeholder=""
                    control={control as unknown as Control}
                  />
                </div>
              </div>
              <p className="text-gray-4 text-sm mt-1">
                Optional. Youʼll still be able to track time outside of this
                date range.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="note"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Notes
            </label>
            <div>
              <TextAreaField
                id="note"
                hasError={errors.firstName}
                registration={{ ...register("firstName") }}
                className="mt-[6px] !w-full resize-none"
                rows={2}
                isRequired
                placeholder=""
              />
              <p className="text-gray-4 text-sm mt-1">
                Optional. Notes are great for anything you need to reference
                later, like invoice schedules, which you can see when creating
                an invoice for Fixed Fee projects. Currently, notes can only be
                seen by Administrators. Administrators can control who has
                access to notes in Settings.
              </p>
            </div>
          </div>
          <div className="bg-gray-7 flex items-center h-[66px] rounded-[5px] justify-between px-6 mt-4">
            <p className="font-medium text-[18px]">Tasks</p>

            <div className="flex items-center gap-1 text-sm">
              <span>Select</span>
              <button
                onClick={handleSelectAllTasks}
                className="text-blue-state"
                type="button"
              >
                All
              </button>
              /
              <button
                onClick={() => setSelectedTasks([])}
                className="text-blue-state"
                type="button"
              >
                None
              </button>
            </div>
          </div>
          <div>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between border-b border-gray-6 py-3"
              >
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleRemoveTask(task.id)}
                    className="text-red-500 h-6 w-6 rounded-[3px] min-w-6 bg-gray-7 centered"
                  >
                    <X size={14} color="#000000" />
                  </button>
                  <label htmlFor={task.id} className="text-black text-sm">
                    {task.name}
                  </label>
                </div>
                <CustomCheckbox
                  checked={selectedTasks.includes(task.id)}
                  setChecked={() => handleSelectTask(task.id)}
                  id={task.id}
                  label=""
                />
              </div>
            ))}
          </div>
          <div className="bg-gray-7 flex items-center h-[66px] rounded-[5px] justify-between px-6 mt-8">
            <p className="font-medium text-[18px]">Team</p>

            <div className="flex items-center gap-1 text-sm">
              <span>Select</span>
              <button
                onClick={handleSelectAllTeam}
                className="text-blue-state"
                type="button"
              >
                All
              </button>
              /
              <button
                onClick={() => setSelectedTeam([])}
                className="text-blue-state"
                type="button"
              >
                None
              </button>
            </div>
          </div>
          <div>
            {team.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between border-b border-gray-6 py-3"
              >
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleRemoveTeam(member.id)}
                    className="text-red-500 h-6 w-6 rounded-[3px] min-w-6 bg-gray-7 centered"
                  >
                    <X size={14} color="#000000" />
                  </button>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-[34px] min-w-[34px] !text-primary aspect-square bg-black-2">
                      {member.name[0]}
                    </Avatar>
                    <label htmlFor={member.id} className="text-black text-sm">
                      {member.name}
                    </label>
                  </div>
                </div>
                <CustomCheckbox
                  checked={selectedTeam.includes(member.id)}
                  setChecked={() => handleSelectTeam(member.id)}
                  id={member.id}
                  label=""
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Button type="submit" size="md" className="mt-4">
              Save Project
            </Button>
            <Button type="button" variant="outline" size="md" className="mt-4">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewProjectPage;
