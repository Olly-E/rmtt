import clsx from "clsx";
import { X } from "lucide-react";
import React from "react";

interface WeeklyViewTimeCardProps {
  index: number;
  task: string;
  title: string;
}

const WeeklyViewTimeCard = ({
  index,
  task,
  title,
}: WeeklyViewTimeCardProps) => {
  const dayIndex = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      className={clsx(
        "rounded-[10px] bg-white-2 grid grid-cols-12 items-center border-b gap-4 w-full border border-black/5 p-5",
        index > 0 && "mt-3"
      )}
    >
      <div className="col-span-3">
        <p className="bg-black/10 text-xs capitalize w-fit rounded-full px-4 py-1 text-black">
          {task}
        </p>
        <p className="mt-2 text-black">{title}</p>
      </div>
      <div className="col-span-7 grid grid-cols-7 gap-4 items-center">
        {dayIndex.map((day) => (
          <div key={day} className="">
            <input
              type="text"
              className="w-full h-[38px] border border-black-2/20 bg-transparent rounded-[5px] text-center"
            />
          </div>
        ))}
      </div>
      <div className="flex px-4 items-center w-full col-span-2 justify-end gap-4">
        <p className="font-medium">00:00</p>
        <button className="w-[32px] min-w-[32px] border border-black rounded-md aspect-square centered">
          <X size={20} color="#050505" />
        </button>
      </div>
    </div>
  );
};

export default WeeklyViewTimeCard;
