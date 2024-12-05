import { Timer } from "lucide-react";
import React from "react";
import clsx from "clsx";


interface TimeEntryCardProp {
  time: {
    id: string;
    hours: string;
    tag: string;
    projectTitle: string;
    notes: string;
    date: string;
    elapsedTime: number;
  };
  index: number;
  isActive: boolean;
  onToggle: (id: string) => void;
}
const TimeEntryCard = ({
  time,
  index,
  isActive,
  onToggle,
}: TimeEntryCardProp) => {
  const formatElapsedTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
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
          {time.tag}
        </p>
        <p className="mt-2 text-black">{time.projectTitle}</p>
        <p className="text-gray-4 text-sm mt-1">{time.notes}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-black mt-2">
          {" "}
          {formatElapsedTime(time.elapsedTime)}
        </p>
        <button
          onClick={() => onToggle(time.id)}
          className={clsx(
            " min-w-[50px] w-[50px] aspect-square centered rounded-full transition-all duration-100",
            isActive ? "text-black bg-primary" : "text-primary bg-black"
          )}
          type="button"
        >
          <Timer
            size={24}
            className={clsx(
              "transition-all duration-300",
              isActive && "transform scale-x-[-1]"
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default TimeEntryCard;
