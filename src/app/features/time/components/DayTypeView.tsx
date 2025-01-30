import React from "react";

import { TimeLogDataType } from "../types";
import GotoDateBar from "./GotoDateBar";
import TimeView from "./TimeView";
import { FullPageLoader } from "@/app/components/FullPageLoader";

interface DayTypeProps {
  selectDate: Date;
  setSelectDate: React.Dispatch<React.SetStateAction<Date>>;
  timeLogData: TimeLogDataType[];
  isPending: boolean;
}
const DayTypeView = ({
  selectDate,
  setSelectDate,
  timeLogData,
  isPending,
}: DayTypeProps) => {
  const handleSelectDate = (dayIndex: number) => {
    setSelectDate((prevDate) => {
      const currentDay = (prevDate.getDay() + 6) % 7;
      const diff = dayIndex - currentDay;
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + diff);
      return newDate;
    });
  };

  return (
    <div className="w-full">
      <GotoDateBar
        handleSelectDate={handleSelectDate}
        selectDate={selectDate}
      />
      {isPending ? (
        <div>
          <FullPageLoader height="h-[40vh]" />
        </div>
      ) : (
        <TimeView timeLogData={timeLogData} />
      )}
    </div>
  );
};

export default DayTypeView;
