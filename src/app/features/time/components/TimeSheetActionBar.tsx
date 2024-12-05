import { ArrowLeft, Calendar } from "lucide-react";
import React from "react";
import clsx from "clsx";

import { getFormattedDateWithoutYear } from "@/app/utils/utils";
import { SelectTeamTime } from "./SelectTeamTime";
import { TEAM_MEMBER_OPTIONS } from "@/app/utils/constants";

interface TimeSheetActionBarProps {
  selectDate: Date;
  handlePrevTime: () => void;
  handleNextTime: () => void;
  activeView: "day" | "week";
  handleChangeView: (view: "day" | "week") => void;
  handleGotoToday: () => void;
  teamId?: string;
}

const TimeSheetActionBar = ({
  selectDate,
  handlePrevTime,
  handleNextTime,
  activeView,
  handleChangeView,
  handleGotoToday,
  teamId,
}: TimeSheetActionBarProps) => {
  const convertedDate = getFormattedDateWithoutYear(selectDate);
  const isNotToday = selectDate.toDateString() !== new Date().toDateString();

  return (
    <div className="flex items-center justify-between gap-4 !mt-2 container h-[80px]">
      <div className="flex items-center gap-6">
        <div className="flex items-center shadow-sm">
          <button
            type="button"
            onClick={handlePrevTime}
            className="border-black/10 border border-r-0 rounded-l-[5px] w-[34px] min-w-[34px] aspect-square centered"
          >
            <ArrowLeft size={13} color="#050505" />
          </button>
          <button
            type="button"
            onClick={handleNextTime}
            className="border-black/10 border rounded-r-[5px] w-[34px] min-w-[34px] aspect-square centered"
          >
            <ArrowLeft size={13} color="#050505" />
          </button>
        </div>
        <div className="flex items-end gap-6">
          <h1 className="font-normal text-[32px] leading-[32px]">
            {/* <span className="font-bold">Today:</span> Friday, 29 Nov */}
            {convertedDate}
          </h1>
          {isNotToday && (
            <button
              type="button"
              className="text-blue-state underline text-sm"
              onClick={handleGotoToday}
            >
              Return to today
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handlePrevTime}
          className="border-black/10 border rounded-[5px] w-[34px] min-w-[34px] aspect-square centered"
        >
          <Calendar size={18} color="#050505" />
        </button>
        <div className="flex items-center shadow-sm text-sm">
          <button
            onClick={() => handleChangeView("day")}
            type="button"
            className={clsx(
              "border-black/10 border border-r-0 rounded-l-[5px] w-[67px] min-w-[67px] h-[34px] centered",
              activeView === "day" && "bg-primary text-black"
            )}
          >
            Day
          </button>
          <button
            onClick={() => handleChangeView("week")}
            type="button"
            className={clsx(
              "border-black/10 border rounded-r-[5px] w-[67px] min-w-[67px] h-[34px] centered",
              activeView === "week" && "bg-primary text-black"
            )}
          >
            Week
          </button>
        </div>
        <SelectTeamTime
          teamId={teamId || ""}
          title=""
          option={{ options: TEAM_MEMBER_OPTIONS }}
        />
      </div>
    </div>
  );
};

export default TimeSheetActionBar;
