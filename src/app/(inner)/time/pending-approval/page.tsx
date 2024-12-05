"use client";
import { Button } from "@/app/elements/Button";
import Link from "next/link";
import React from "react";

import { SelectDropDown } from "@/app/components/SelectDropDown";

const TEMP_TIME_FOR_APPROVAL = [
  {
    date: "02 Dec 2024 - 08 Dec 2024",
    id: "1",
    teamMember: [
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
    ],
  },
  {
    date: "09 Dec 2024 - 15 Dec 2024",
    id: "2",
    teamMember: [
      {
        name: "Emma Brown",
        id: "3",
        totalTime: "12:45",
        billablePercentage: "90%",
      },
      {
        id: "4",
        name: "Liam Davis",
        totalTime: "14:30",
        billablePercentage: "95%",
      },
    ],
  },
  {
    date: "16 Dec 2024 - 22 Dec 2024",
    id: "3",
    teamMember: [
      {
        name: "Sophia Wilson",
        id: "5",
        totalTime: "13:50",
        billablePercentage: "85%",
      },
      {
        id: "6",
        name: "James Martinez",
        totalTime: "16:10",
        billablePercentage: "100%",
      },
    ],
  },
];

const SORT_BY_OPTIONS = {
  title: "Sort by",
  options: [
    { id: "week", name: "Week" },
    { id: "projects", name: "Projects" },
    { id: "people", name: "People" },
  ],
};

const SHOW_OPTIONS = {
  title: "Show",
  options: [
    { id: "everyone", name: "Everyone" },
    { id: "my pinned teammates", name: "My pinned teammates" },
    { id: "my pinned project", name: "My pinned projects" },
  ],
};

const PendingApprovalPage = () => {
  const [sort, setSort] = React.useState(SORT_BY_OPTIONS.options[0]);
  const [show, setShow] = React.useState(SHOW_OPTIONS.options[0]);

  return (
    <div className="max-h-[calc(100vh-186px)]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] font-medium">Pending approval</h1>
          <div className="flex items-center gap-4">
            <SelectDropDown
              title="Sort by: "
              option={SORT_BY_OPTIONS}
              selectedId={sort}
              setSelectedId={setSort}
            />
            <SelectDropDown
              title="Show: "
              option={SHOW_OPTIONS}
              selectedId={show}
              setSelectedId={setShow}
            />
          </div>
        </div>
        <div>
          {TEMP_TIME_FOR_APPROVAL.map((data) => {
            return (
              <div key={data.id}>
                <div className="border border-black/[3px] bg-gray-7 h-[39px] flex items-center w-full px-8 mt-4">
                  <p className="text-gray-4 text-sm">{data.date}</p>
                </div>
                <div className="">
                  {data.teamMember.map((teamMember) => {
                    return (
                      <Link
                        href={`/time/pending-approval/${teamMember.id}`}
                        className="flex items-center justify-between h-[61px] border border-black/5 mt-2 px-6 rounded-[10px] transition-colors hover:bg-gray-7/50"
                        key={teamMember.id}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-[18px] min-w-[18px] aspect-square centered rounded-full bg-primary/10">
                            <div className="w-[9px] min-w-[9px] aspect-square rounded-full bg-primary" />
                          </div>
                          <p className="text-black">{teamMember.name}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[16px]">
                            {teamMember.totalTime}
                          </span>
                          <span className="bg-gray-6 px-2 py-[2px] w-fit text-black text-sm rounded-full">
                            {teamMember.billablePercentage} billable
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container flex items-center !mt-4 justify-end">
        <Button size="md">Approve timesheet</Button>
      </div>
    </div>
  );
};

export default PendingApprovalPage;
