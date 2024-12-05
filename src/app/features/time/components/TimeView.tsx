import React from "react";

import EmptyState from "@/app/components/EmptyState";
import TimeEntryCard from "./TimeEntryCard";

import emptyTime from "../../../../../public/assets/emptyTime.svg";

const TEMP_TIME_DATA = [
  {
    hours: "5:08:00",
    tag: "Design",
    projectTitle: "Project Hawk",
    id: "1",
    notes: "Designing the new landing page",
    date: "2024-12-02",
    elapsedTime: 0,
  },
  {
    hours: "1:30:00",
    tag: "Development",
    projectTitle: "Project Hawk",
    id: "2",
    notes: "Fixing the bug in the login page",
    date: "2024-12-02",
    elapsedTime: 0,
  },
  {
    hours: "2:00:00",
    tag: "Development",
    projectTitle: "Project Hawk",
    id: "3",
    notes: "Adding the new feature",
    date: "2024-12-02",
    elapsedTime: 0,
  },
];

const TimeView = () => {
  const [activeTimerId, setActiveTimerId] = React.useState<string | null>(null);
  const [timeData, setTimeData] = React.useState(TEMP_TIME_DATA);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (activeTimerId) {
      intervalRef.current = setInterval(() => {
        setTimeData((prevData) =>
          prevData.map((item) =>
            item.id === activeTimerId
              ? { ...item, elapsedTime: item.elapsedTime + 1 }
              : item
          )
        );
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTimerId]);

  const handleToggle = (id: string) => {
    setActiveTimerId((prevId) => (prevId === id ? null : id));
  };

  if (TEMP_TIME_DATA.length === 0) {
    return (
      <EmptyState
        description="This is the Day view of your timesheet. Keep track of where your time goes, down to the minute."
        image={emptyTime}
      />
    );
  }
  return (
    <div className="p-3 w-full border-black/5 border bg-white-3 h-[calc(100vh-282px)] mt-4 rounded-[15px]">
      {timeData.map((time, index) => (
        <TimeEntryCard
          key={time.id}
          index={index}
          time={time}
          isActive={time.id === activeTimerId}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default TimeView;
