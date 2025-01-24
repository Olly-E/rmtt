import React from "react";

import WeekViewGoToDayBar from "./WeekViewGoToDayBar";
import WeeklyViewTimeCard from "./WeeklyViewTimeCard";

const DUMMY_WEEK_TIME_SHEET = [
  {
    task: "Design",
    title: "Equnix Infrastructure Expansion",
    id: "1",
  },
  {
    task: "Development",
    title: "Equnix Infrastructure Expansion",
    id: "2",
  },
];
const WeekTypeView = () => {
  return (
    <div className="w-full">
      <WeekViewGoToDayBar activeDay={1} />
      <div className="p-3 w-full border-black/5 border bg-white-3 max-h-[calc(100vh-282px)] mt-4 rounded-[15px]">
        {DUMMY_WEEK_TIME_SHEET.map((timeSheet, index) => (
          <WeeklyViewTimeCard
            key={timeSheet.id}
            index={index}
            task={timeSheet.task}
            title={timeSheet.title}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekTypeView;
