"use client";

import React from "react";

import TimeSheetActionBar from "@/app/features/time/components/TimeSheetActionBar";
import { SelectDropDown } from "@/app/components/SelectDropDown";
import { useDateHook } from "@/app/hooks/useDateHook";
import { Button } from "@/app/elements/Button";
import TeamTable from "@/app/features/team/components/TeamTable";

const TEMP_TEAM_DATA = [
  {
    id: "1",
    firstName: "Olivia",
    lastName: "Smith",
    role: "Designer",
    hoursDone: 40,
    capacity: 50,
    billable: 30,
    acceptedInvite: true,
  },
  {
    id: "2",
    firstName: "Liam",
    lastName: "Johnson",
    role: "Developer",
    hoursDone: 35,
    capacity: 40,
    billable: 25,
    acceptedInvite: true,
  },
  {
    id: "3",
    firstName: "Emma",
    lastName: "Williams",
    role: "Project Manager",
    hoursDone: 45,
    capacity: 50,
    billable: 40,
    acceptedInvite: false,
  },
  {
    id: "4",
    firstName: "Noah",
    lastName: "Brown",
    role: "Tester",
    hoursDone: 30,
    capacity: 35,
    billable: 20,
    acceptedInvite: true,
  },
  {
    id: "5",
    firstName: "Ava",
    lastName: "Jones",
    role: "Designer",
    hoursDone: 50,
    capacity: 55,
    billable: 45,
    acceptedInvite: true,
  },
];
const TEAM_FILTER = [
  {
    id: "1",
    name: "Everyone",
  },
  {
    id: "2",
    name: "My pinned teammates",
  },
  {
    id: "3",
    name: "My pinned projects",
  },
];

const Page = () => {
  const [viewTeam, setViewTeam] = React.useState(TEAM_FILTER[0]);
  const {
    selectDate,
    weekInterval,
    handleGotoToday,
    handleIncreaseDate,
    handleDecreaseDate,
    handleIncreaseWeek,
    handleDecreaseWeek,
    handleGoToThisWeek,
  } = useDateHook();

  const TEAM_DETAILS = [
    {
      id: "total-hours",
      title: "Total hours",
      value: "75:00",
    },
    {
      id: "team-capacity",
      title: "Team capacity",
      value: "75:00",
    },
  ];

  return (
    <div className="h-[calc(100vh-126px)] mt-5">
      <div className="flex items-center gap-4 container pb-4">
        <Button size="md" as="link" href="/team/new">
          Invite Person
        </Button>
        <Button size="md" variant="outline">
          Import
        </Button>
        <Button size="md" variant="outline">
          Export
        </Button>
      </div>
      <hr className="h-[1px] border-t-black/10" />
      <div className="container flex items-center justify-between border-b border-b-black/10">
        <TimeSheetActionBar
          handlePrevTime={handleDecreaseDate}
          handleNextTime={handleIncreaseDate}
          handleIncreaseWeek={handleIncreaseWeek}
          handleDecreaseWeek={handleDecreaseWeek}
          activeView="week"
          showView={false}
          handleChangeView={() => {}}
          selectDate={selectDate}
          handleGotoToday={handleGotoToday}
          weekInterval={weekInterval}
          handleGoToThisWeek={handleGoToThisWeek}
        />
        <SelectDropDown
          title=""
          option={{ options: TEAM_FILTER }}
          selectedId={viewTeam}
          setSelectedId={setViewTeam}
        />
      </div>
      <div className="container flex items-center justify-between py-4">
        {TEAM_DETAILS.map((detail) => {
          return (
            <div key={detail.id} className="">
              <p className="text-sm text-gray-4">{detail.title}</p>
              <p className="text-[24px] font-bold text-black">{detail.value}</p>
            </div>
          );
        })}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-[14px] min-w-[14px] aspect-square rounded-[3px] bg-primary" />
            <p className="text-sm text-black">Billable</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[14px] min-w-[14px] aspect-square rounded-[3px] bg-white-3" />
            <p className="text-sm text-black">Non Billable</p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <p className=" text-black">40:00</p>
            <div className="w-[300px] h-[14px] rounded-[3px] bg-primary" />
          </div>
          <div className="flex items-center gap-2">
            <p className=" text-black">35:00</p>
            <div className="w-[300px] h-[14px] rounded-[3px] bg-white-3" />
          </div>
        </div>
      </div>
      <div>
        <TeamTable teamIsPending={false} teamData={TEMP_TEAM_DATA} />
      </div>
    </div>
  );
};

export default Page;
