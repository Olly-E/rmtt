"use client";
import React from "react";

import { TimerIcons } from "@/app/components/TimerIcons";
import clsx from "clsx";

const HeaderTimer = () => {
  const [play, setPlay] = React.useState(true);
  const handleClickPlay = () => {
    setPlay(!play);
  };

  return (
    <div className="flex items-center gap-4">
      <p className="text-gray-4/50 font-medium text-[18px]">04:02:20</p>
      <button
        type="button"
        onClick={handleClickPlay}
        className={clsx(
          "w-[48px] relative min-w-9 aspect-square rounded-full border border-white-2/5 centered",
          play ? "bg-primary/10" : "bg-white-2/10"
        )}
      >
        {/* <div
          className={clsx(
            "w-[48px] transform min-w-9 aspect-square absolute rounded-full",
            play ? "opacity-0" : "animate-ping bg-white-2/10"
          )}
        /> */}
        <div
          className={clsx(
            "relative z-2 centered w-[36px] min-w-[36px] aspect-square rounded-full",
            play ? "bg-primary" : "bg-black"
          )}
        >
          <TimerIcons play={play} />
        </div>
      </button>
    </div>
  );
};

export default HeaderTimer;
