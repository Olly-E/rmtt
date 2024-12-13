"use client";

import React from "react";

import { ProgressBar } from "@/app/components/elements/ProgressBar";
import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import { DropDown } from "@/app/components/DropDownOpt";

const ProjectRow = ({}) => {

  const DROPDOWN_OPTIONS = [
    {
      name: "Edit",
      id: "edit",
      action: () => {},
    },
    {
      name: "Pin",
      id: "pin",
      action: () => {},
    },
    {
      name: "Archive",
      id: "archive",
      action: () => {},
    },
    {
      name: "Delete",
      id: "delete",
      action: () => {},
    },
  ];
  return (
    <div className="grid grid-cols-3 h-[61px] items-center gap-6 border-b border-b-black/5 px-4">
      <div className="min-w-[25px] flex items-center justify-start gap-4">
        <CustomCheckbox checked={false} setChecked={() => {}} label="" id="" />
        <p className="whitespace-nowrap truncate text-sm font-medium">Data Center Demolishing</p>
      </div>
      <div className="flex items-center justify-between gap-6">
        <p>$20,000.00</p>
        <div className="flex items-center gap-4">
          <p>$10,000.00</p>
          <ProgressBar
            progress={30}
            className="h-[20px] w-[150px] border border-black/10"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 justify-between">
          <p>$10,000.00 (50%)</p>
          <p>$1000.00</p>
          <DropDown options={DROPDOWN_OPTIONS} deleteIndex={3} />
      </div>
    </div>
  );
};

export default ProjectRow;
