import clsx from "clsx";
import { ArrowLeft, Calendar } from "lucide-react";
import React from "react";

interface TimeSheetActionBarProps {
  handlePrevTime: () => void;
  handleNextTime: () => void;
  activeView: "day" | "week";
  handleChangeView: (view: "day" | "week") => void;
}

const TimeSheetActionBar = ({
  handlePrevTime,
  handleNextTime,
  activeView,
  handleChangeView,
}: TimeSheetActionBarProps) => {
  return (
    <div className="flex items-center justify-between gap-4 !mt-2 container">
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
        <h1 className="font-normal text-[32px]">
          <span className="font-bold">Today:</span> Friday, 29 Nov
        </h1>
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
      </div>
    </div>
  );
};

export default TimeSheetActionBar;
