import { ArrowLeft, Calendar } from "lucide-react";
import { ArrowRight } from "iconsax-react";
import React from "react";
import clsx from "clsx";

import {
  getFormattedDate,
  getFormattedDateWithoutYear,
  getFormattedDayAlone,
  isCurrentWeek,
} from "@/app/utils/utils";
import { TEAM_MEMBER_OPTIONS } from "@/app/utils/constants";
import { SelectTeamTime } from "./SelectTeamTime";

interface TimeSheetActionBarProps {
  selectDate: Date;
  handlePrevTime: () => void;
  handleNextTime: () => void;
  activeView: "day" | "week";
  handleChangeView: (view: "day" | "week") => void;
  handleGotoToday: () => void;
  handleIncreaseWeek: () => void;
  handleDecreaseWeek: () => void;
  handleGoToThisWeek?: () => void;
  showView?: boolean;
  teamId?: string;
  weekInterval: {
    startOfWeek: Date;
    endOfWeek: Date;
  };
}

const TimeSheetActionBar = ({
  selectDate,
  handlePrevTime,
  handleNextTime,
  activeView,
  showView = true,
  handleChangeView,
  handleGotoToday,
  handleDecreaseWeek,
  handleIncreaseWeek,
  handleGoToThisWeek,
  teamId,
  weekInterval,
}: TimeSheetActionBarProps) => {
  const convertedDate = getFormattedDateWithoutYear(selectDate);
  const convertedWeekStart = getFormattedDayAlone(weekInterval?.startOfWeek);
  const convertedWeekEnd = getFormattedDate(weekInterval?.endOfWeek);

  const isNotToday = selectDate.toDateString() !== new Date().toDateString();
  const isPresentWeek = isCurrentWeek(
    weekInterval?.startOfWeek,
    weekInterval?.endOfWeek
  );
  const check = activeView === "week" && !isPresentWeek;
  console.log(check);
  return (
    <div className="flex items-center justify-between gap-4 !mt-2 h-[80px]">
      <div className="flex items-center gap-6">
        <div className="flex items-center shadow-sm">
          <button
            type="button"
            onClick={activeView === "day" ? handlePrevTime : handleDecreaseWeek}
            className="border-black/10 border border-r-0 rounded-l-[5px] w-[34px] min-w-[34px] aspect-square centered"
          >
            <ArrowLeft size={13} color="#050505" />
          </button>
          <button
            type="button"
            onClick={activeView === "day" ? handleNextTime : handleIncreaseWeek}
            className="border-black/10 border rounded-r-[5px] w-[34px] min-w-[34px] aspect-square centered"
          >
            <ArrowRight size={13} color="#050505" />
          </button>
        </div>
        <div className="flex items-end gap-6">
          <h1 className="font-normal text-[32px] leading-[32px]">
            {activeView === "day"
              ? convertedDate
              : `${
                  isPresentWeek ? "This week:" : ""
                } ${convertedWeekStart} - ${convertedWeekEnd}`}
          </h1>

          {(isNotToday || !isPresentWeek) && (
            <button
              type="button"
              className="text-blue-state underline text-sm"
              onClick={
                activeView === "week" && !isPresentWeek
                  ? handleGoToThisWeek
                  : handleGotoToday
              }
            >
              {activeView === "week" && !isPresentWeek && "Return to this week"}
              {activeView === "day" && isNotToday && "Go to today"}
            </button>
          )}
        </div>
      </div>
      {showView && (
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
      )}
    </div>
  );
};

export default TimeSheetActionBar;
