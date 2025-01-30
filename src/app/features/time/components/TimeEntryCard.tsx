import React from "react";
import clsx from "clsx";

import { formatElapsedTime } from "@/app/utils/utils";
import { useStartTime } from "../api/useStartTime";
import { useStopTime } from "../api/useStopTime";
import { TimeLogDataType } from "../types";

interface TimeEntryCardProp {
  time: TimeLogDataType;
  index: number;
}
const TimeEntryCard = ({ time, index }: TimeEntryCardProp) => {
  const { mutate: mutateStopTime } = useStopTime();
  const { mutate: mutateStartTime } = useStartTime();

  const timeIsActive = time?.is_active;

  // Function to calculate elapsed time from string
  const getElapsedTime = (timeSpent: string) => {
    if (!timeSpent) return 0;
    const [hrs = 0, mins = 0, secs = 0] = timeSpent.split(":").map(Number);
    return hrs * 3600 + mins * 60 + secs;
  };

  const [elapsedTime, setElapsedTime] = React.useState(() =>
    getElapsedTime(time?.time_spent)
  );

  // Effect to sync elapsedTime with time.time_spent when invalidated/refetched
  React.useEffect(() => {
    setElapsedTime(getElapsedTime(time?.time_spent));
  }, [time?.time_spent]); // Updates when backend data changes

  // Effect to increment elapsedTime every second if time is active
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timeIsActive) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeIsActive]); // Only runs when timeIsActive changes

  const handleTime = () => {
    const payload = {
      time_entry_id: time.id,
    };

    if (time.is_active) {
      mutateStopTime(payload, {
        onSuccess: (response: unknown) => {
          setElapsedTime(
            getElapsedTime((response as { time_spent: string }).time_spent)
          );
        },
      });
    } else {
      mutateStartTime(payload);
    }
  };

  return (
    <div
      className={clsx(
        "rounded-[10px] bg-white-2 border border-black/5 w-full flex p-5 justify-between",
        index > 0 && "mt-3"
      )}
    >
      <div>
        <p className="bg-black/10 text-xs capitalize w-fit rounded-full px-4 py-1 text-black">
          {time.task_name}
        </p>
        <p className="mt-2 text-black capitalize font-medium">
          {time.project_name}
        </p>
        <p className="text-gray-4 text-sm mt-1 capitalize">
          {/* {time.notes} */}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-black mt-2">{formatElapsedTime(elapsedTime)}</p>
        <button
          onClick={handleTime}
          className={clsx(
            "min-w-[50px] w-[50px] aspect-square centered rounded-full transition-all duration-100",
            timeIsActive ? "text-black bg-primary" : "text-primary bg-black"
          )}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-timer"
          >
            <line x1="10" x2="14" y1="2" y2="2" />
            <line
              x1="12"
              x2="15"
              y1="14"
              y2="11"
              className={clsx("", timeIsActive && " transform rotate-line")}
            />
            <circle cx="12" cy="14" r="8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TimeEntryCard;
