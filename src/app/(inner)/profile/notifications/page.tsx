"use client";

import FormCheckbox from "@/app/components/form/FormCheckbox";
import { Button } from "@/app/elements/Button";
import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";

const NOTIFICATION_SETTINGS = [
  {
    name: "Timesheet reminders",
    options: ["Help me track my time with daily personal reminders"],
    id: "timesheet-reminders",
  },
  {
    name: "Approval",
    options: [
      "Email me if timesheets are submitted for projects or people I manage",
      "Email me when a timesheet is approved",
    ],
    id: "approval",
  },
  {
    name: "Other notifications",
    options: [
      "Email me if any project is deleted",
      "Email me occasional updates, offers, tips, and interesting stories Update notifications",
    ],
    id: "other-notifications",
  },
];

const Notifications = () => {
  const { register, control } = useForm();
  return (
    <div>
      <h1 className="text-[32px] font-medium leading-none pb-4 border-b">
        Notifications
      </h1>
      {NOTIFICATION_SETTINGS.map((setting) => (
        <div key={setting.id} className="py-4 flex items-start border-b">
          <h2 className="text-[16px] font-medium leading-none w-[210px] min-w-[210px]">
            {setting.name}
          </h2>
          <div className="">
            {setting.options.map((option, index) => (
              <label
                key={option}
                htmlFor={option}
                className={clsx(
                  "flex items-center gap-2",
                  index !== 0 && "mt-4"
                )}
              >
                <FormCheckbox
                  id={option}
                  name={option}
                  registration={{ ...register(setting.name) }}
                  control={control}
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 mt-4">
        <Button as="link" href="/team/new/assign-project" size="md">
          Update permissions
        </Button>
        <Button size="md" variant="outline">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Notifications;
