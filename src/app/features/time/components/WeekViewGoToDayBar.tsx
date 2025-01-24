import clsx from "clsx";
import React from "react";

const DUMMY_DAY = [
  {
    id: "1",
    date: "Mon",
    fullDay: "Monday",
  },
  {
    id: "2",
    date: "Tue",
    fullDay: "Tuesday",
  },
  {
    id: "3",
    date: "Wed",
    fullDay: "Wednesday",
  },
  {
    id: "4",
    date: "Thu",
    fullDay: "Thursday",
  },
  {
    id: "5",
    date: "Fri",
    fullDay: "Friday",
  },
  {
    id: "6",
    date: "Sat",
    fullDay: "Saturday",
  },
  {
    id: "7",
    date: "Sun",
    fullDay: "Sunday",
  },
];

interface WeekViewGoToDayBarProps {
  activeDay: number;
}

const WeekViewGoToDayBar = ({ activeDay }: WeekViewGoToDayBarProps) => {
  return (
    <div className="grid grid-cols-12 border-b gap-4 w-full px-8 mb-6">
      <div className="col-span-3" />
      <div className="col-span-7 grid grid-cols-7 gap-4">
        {DUMMY_DAY.map((date, index) => (
          <button
            // onClick={() => handleSelectDate(index)}
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
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeekViewGoToDayBar;
