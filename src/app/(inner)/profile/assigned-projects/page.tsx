"use client";
import { X } from "lucide-react";
import React from "react";

import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import { Option } from "@/app/types";

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

const BasicInfo = () => {
  const [tasks, setTasks] = React.useState<Option[]>(PREDEFINED_TASKS);
  const [selectedTasks, setSelectedTasks] = React.useState<string[]>([]);

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

  const handleRemoveTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  return (
    <div>
      <h1 className="text-[32px] font-medium leading-none ">
        Your assigned projects
      </h1>
      <p className="tex-sm pb-4 mt-2 border-b">
        As an Administrator, you have access to all projects, but can only track
        time and expenses to the projects you’re assigned.
      </p>
      <div className="mt-6 border-primary border-2 rounded-[10px] px-6 py-2 bg-white-3">
        <p className="text-black font-medium">
          You’re assigned to all projects.
        </p>
        <p className="text-blue-state underline text-sm mt-2">
          Assign to all future projects, too
        </p>
      </div>
      <div className="bg-gray-7 flex items-center h-[55px] rounded-[5px] justify-between px-6 mt-4">
        <p className="font-medium text-sm text-gray-4">Equinix Enterprises</p>
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
            className="flex items-center justify-between mt-2 px-6 border border-black/5 h-[61px] rounded-[10px]"
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
    </div>
  );
};

export default BasicInfo;
