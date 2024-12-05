import React from "react";
import GotoDateBar from "./GotoDateBar";
import TimeView from "./TimeView";

interface DayTypeProps {
  selectDate: Date;
  setSelectDate: React.Dispatch<React.SetStateAction<Date>>;
}
const DayTypeView = ({ selectDate, setSelectDate }: DayTypeProps) => {

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
      <TimeView />
    </div>
  );
};

export default DayTypeView;
