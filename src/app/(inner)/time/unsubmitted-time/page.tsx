"use client";
import React from "react";

import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import { SelectDropDown } from "@/app/components/SelectDropDown";
import { Button } from "@/app/elements/Button";

const SORT_BY_OPTIONS = {
  title: "",
  options: [
    { id: "23 Dec 2024 - 29 Dec 2024", name: "23 Dec 2024 - 29 Dec 2024" },
    { id: "16 Dec 2024 - 22 Dec 2024", name: "16 Dec 2024 - 22 Dec 2024" },
    { id: "09 Dec 2024 - 15 Dec 2024", name: "09 Dec 2024 - 15 Dec 2024" },
  ],
};

const UnSubmittedTime = () => {
  const [sort, setSort] = React.useState(SORT_BY_OPTIONS.options[0]);
  const [checked, setChecked] = React.useState(false);

  const TEMP_UNSUBMITTED_TIMESHEET = [
    {
      name: "Olivia Smith",
      id: "1",
      totalTime: "15:02",
      billablePercentage: "100%",
    },
    {
      id: "2",
      name: "David Johnson",
      totalTime: "15:02",
      billablePercentage: "100%",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="w-[743px] mx-auto mt-10">
          <h1 className="text-[32px] leading-[32px] font-medium">
            Unsubmitted timesheets
          </h1>
          <p className="text-sm mt-4">
            You can remind people to submit their timesheets from the table
            below. You can also set up automatic timesheet reminders in
            your account settings.
          </p>
          <div className="mt-4">
            <SelectDropDown
              title=""
              option={SORT_BY_OPTIONS}
              selectedId={sort}
              setSelectedId={setSort}
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center h-[39px] w-full justify-between bg-gray-7 px-5">
              <CustomCheckbox
                labelClass="text-gray-4 text-sm"
                id="all"
                checked
                setChecked={setChecked}
                label="Name"
              />
              <p className="min-w-[200px] text-gray-4 text-sm">Time</p>
            </div>
            <div className="mt-2">
              {TEMP_UNSUBMITTED_TIMESHEET.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center h-[39px] w-full justify-between pl-5 pr-2"
                >
                  <div>
                    <CustomCheckbox
                      labelClass="text-black text-sm"
                      id={item.id}
                      checked={checked}
                      setChecked={setChecked}
                      label={item.name}
                    />
                  </div>
                  <div className="flex min-w-[200px] justify-between items-center">
                    <p className="text-sm">{item.totalTime}</p>
                    <Button
                      as="link"
                      href={`/time/${item.id}`}
                      size="sm"
                      variant="outline"
                      className="border border-black/10"
                    >
                      View timesheet
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button size="md" className="ml-auto mt-4">
            Send email remainder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnSubmittedTime;
