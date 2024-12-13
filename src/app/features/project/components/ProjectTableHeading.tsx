"use client";
import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import React from "react";

const ProjectTableHeading = () => {
  return (
    <div className="grid grid-cols-3 h-[39px] bg-gray-7 text-gray-4 rounded-[5px] items-center gap-6 px-4">
      <div className="min-w-[25px] flex items-center justify-start gap-4">
        <CustomCheckbox checked={false} setChecked={() => {}} label="" id="" />
        <p className="whitespace-nowrap truncate text-sm font-medium">Client</p>
      </div>
      <div className="flex items-center justify-between gap-6 text-sm">
        <p>Budget</p>
        <p>Spend</p>
      </div>
      <div className="flex items-center gap-6 justify-between text-sm">
        <p>Remaining</p>
        <p>Costs</p>
      </div>
    </div>
  );
};

export default ProjectTableHeading;
