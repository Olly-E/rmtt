"use client";

import { useForm } from "react-hook-form";
import React from "react";

import { AddTaskForm } from "@/app/features/manage/components/AddTaskForm";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import { TaskCard } from "@/app/features/manage/components/TaskCard";
import FormCheckbox from "@/app/components/form/FormCheckbox";
import { DropDown } from "@/app/components/DropDownOpt";
import { Button } from "@/app/elements/Button";
import { useAllTasks } from "@/app/features/manage/api/useAllTasks";
import { FullPageLoader } from "@/app/components/FullPageLoader";

const DROPDOWN_OPTIONS = [
  {
    name: "Import Client from CSV",
    id: "import-client-csv",
    action: () => {},
  },
  {
    name: "Import Contacts from CSV",
    id: "import-contacts-csv",
    action: () => {},
  },
  {
    name: "Export Client to CSV",
    id: "export-client-csv",
    action: () => {},
  },
  {
    name: "Export Contacts to CSV",
    id: "export-contacts-csv",
    action: () => {},
  },
];

const Page = () => {
  const { data: taskData, isPending: taskIsPending } = useAllTasks();
  const commonTasks = taskData?.filter(
    (task) => task.is_common_and_future_adding
  );
  const otherTasks = taskData?.filter(
    (task) => !task.is_common_and_future_adding
  );
  const { register, control } = useForm();

  const {
    isComponentVisible: openNewTask,
    handleClickOnDropDownButton: handleOpenNewTask,
    handleCloseDropDown: handleCloseNewTask,
  } = useComponentVisible();

  return (
    <div className="w-[743px] mx-auto mt-10">
      <h1 className="text-[32px] leading-[32px] font-medium">Tasks</h1>
      <div className="flex items-center gap-4 pb-4 mt-4">
        <Button onClick={handleOpenNewTask} size="md">
          + New task
        </Button>
        <DropDown text="Import/Export" options={DROPDOWN_OPTIONS} />
      </div>
      {openNewTask && <AddTaskForm handleCloseNewTask={handleCloseNewTask} />}
      <div>
        {taskIsPending ? (
          <FullPageLoader height="h-[30vh]" />
        ) : (
          <div>
            <div className="flex items-center h-[69px] w-full justify-between bg-gray-7 px-5 rounded-[10px] border border-black/5">
              <div className="flex items-center gap-4">
                <FormCheckbox
                  id="selectAll"
                  name="selectAll"
                  registration={{ ...register("selectAll") }}
                  control={control}
                />
                <div>
                  <p className="text-black font-medium">Common tasks</p>
                  <p className="text-gray-4 mt-1 text-sm">
                    These tasks are automatically added to all new projects.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-4">Default billable rate</p>
            </div>
            <div className="">
              {commonTasks?.length === 0 ? (
                <div className="flex items-center justify-center h-[100px]">
                  <p className="text-center">No common task added</p>
                </div>
              ) : (
                commonTasks?.map((task) => {
                  const convertedRate = parseFloat(task.billable_rate).toFixed(
                    2
                  );
                  return (
                    <TaskCard
                      key={task.id}
                      control={control}
                      name={task.name}
                      id={task.id}
                      rate={task.billable_rate}
                      register={register}
                      isBillable={parseInt(convertedRate, 10) > 0}
                    />
                  );
                })
              )}
            </div>
            <div className="flex items-center h-[69px] w-full justify-between bg-gray-7 px-5 rounded-[10px] border border-black/5 mt-6">
              <div className="flex items-center gap-4">
                <FormCheckbox
                  id="selectAll"
                  name="selectAll"
                  registration={{ ...register("selectAll") }}
                  control={control}
                />
                <div>
                  <p className="text-black font-medium">Other tasks</p>
                  <p className="text-gray-4 mt-1 text-sm">
                    These tasks are automatically added to all new projects.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-4">Default billable rate</p>
            </div>
            <div>
              {otherTasks?.length === 0 ? (
                <div className="flex items-center justify-center h-[100px]">
                  <p className="text-center">No task added</p>
                </div>
              ) : (
                otherTasks?.map((task) => {
                  const convertedRate = parseFloat(task.billable_rate).toFixed(
                    2
                  );
                  return (
                    <TaskCard
                      key={task.id}
                      control={control}
                      name={task.name}
                      id={task.id}
                      rate={task.billable_rate}
                      register={register}
                      isBillable={parseInt(convertedRate, 10) > 0}
                    />
                  );
                })
              )}
            </div>
          </div>
        )}
        {!taskData && !taskIsPending && (
          <div className="flex items-center justify-center h-[300px]">
            <p className="text-center">No task added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
