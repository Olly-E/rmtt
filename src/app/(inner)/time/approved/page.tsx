"use client";
import Link from "next/link";
import React from "react";

import { SelectDropDown } from "@/app/components/SelectDropDown";
import { TEAM_MEMBER_OPTIONS } from "@/app/utils/constants";

const TIME_SHEET_DATA = [
  {
    dateInterval: "23 Dec 2024 - 29 Dec 2024",
    id: "1",
  },
  {
    dateInterval: "16 Dec 2024 - 22 Dec 2024",
    id: "2",
  },
  {
    dateInterval: "09 Dec 2024 - 15 Dec 2024",
    id: "3",
  },
];

const ApprovedTime = () => {
  
  const [viewMemberTime, setViewMemberTime] = React.useState(
    TEAM_MEMBER_OPTIONS[0]
  );
  return (
    <div className="container">
      <div className="w-[743px] mx-auto mt-10">
        <h1 className="text-[32px] leading-[32px] font-medium">
          Approved timesheets
        </h1>
        <div className="mt-4">
          <SelectDropDown
            title=""
            option={{ options: TEAM_MEMBER_OPTIONS }}
            selectedId={viewMemberTime}
            setSelectedId={setViewMemberTime}
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center rounded h-[39px] w-full justify-between bg-gray-7 px-5">
            <p className="min-w-[200px] text-gray-4 text-sm">Time Period</p>
          </div>
          {TIME_SHEET_DATA.map((timeSheet) => (
            <div
              key={timeSheet.id}
              className="flex rounded group items-center h-[39px] mt w-full justify-between mt-2 border border-black/ px-5"
            >
              <Link
                href={`/time/${viewMemberTime.id}?approved=${timeSheet.dateInterval}`}
                className="text-sm group-hover:underline underline-offset-1"
              >
                {timeSheet.dateInterval}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovedTime;
