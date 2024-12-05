import clsx from "clsx";
import React from "react";

const DUMMY_DATE_AND_TIME = [
  {
    id: "1",
    time: "00:00",
    date: "Mon",
    fullDay: "Monday",
  },
  {
    id: "2",
    time: "00:00",
    date: "Tue",
    fullDay: "Tuesday",
  },
  {
    id: "3",
    time: "00:00",
    date: "Wed",
    fullDay: "Wednesday",
  },
  {
    id: "4",
    time: "00:00",
    date: "Thu",
    fullDay: "Thursday",
  },
  {
    id: "5",
    time: "00:00",
    date: "Fri",
    fullDay: "Friday",
  },
  {
    id: "6",
    time: "00:00",
    date: "Sat",
    fullDay: "Saturday",
  },
  {
    id: "7",
    time: "00:00",
    date: "Sun",
    fullDay: "Sunday",
  },
];

interface GotoDateBarProps {
  handleSelectDate: (index: number) => void;
  selectDate: Date;
}
const GotoDateBar = ({ handleSelectDate, selectDate }: GotoDateBarProps) => {
  const activeDay = selectDate.getDay();

  return (
    <div className="grid grid-cols-8 border-b gap-4">
      {DUMMY_DATE_AND_TIME.map((date, index) => (
        <button
          onClick={() => handleSelectDate(index)}
          type="button"
          key={date.id}
          className={clsx(
            "text-left w-full pb-3",
            index === 6 && activeDay === 0
              ? "border-b-2 border-b-primary"
              : activeDay - 1 === index && "border-b-[3px] border-b-primary"
          )}
        >
          <p className="font-medium text-black">{date.date}</p>
          <p className="text-gray-4 text-sm">{date.time}</p>
        </button>
      ))}
      <div className="text-right">
        <p className="font-medium text-black">Week total</p>
        <p className="text-gray-4 text-sm">00:00</p>
      </div>
    </div>
  );
};

export default GotoDateBar;
