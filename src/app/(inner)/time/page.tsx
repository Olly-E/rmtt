"use client";

import GotoDateBar from "@/app/features/time/components/GotoDateBar";
import TimeSheetActionBar from "@/app/features/time/components/TimeSheetActionBar";
import TimeView from "@/app/features/time/components/TimeView";
import { Plus } from "lucide-react";
import React from "react";

const TimePage = () => {
  const [activeView, setActiveView] = React.useState<"day" | "week">("day");
  const handlePrevTime = () => {
    console.log("Prev time");
  };
  const handleNextTime = () => {
    console.log("Next time");
  };
  const handleChangeView = (view: "day" | "week") => {
    setActiveView(view);
  };
  return (
    <div className="">
      <TimeSheetActionBar
        handlePrevTime={handlePrevTime}
        handleNextTime={handleNextTime}
        activeView={activeView}
        handleChangeView={handleChangeView}
      />
      <div className="container flex items-start gap-4">
        <button type="button" className="">
          <div className="w-[64px] min-w-[64px] aspect-square centered bg-black rounded-full">
            <Plus size={34} strokeWidth={3} color="#F7E001" />
          </div>
          <p className="text-black font-medium text-sm whitespace-nowrap mt-2">
            Track time
          </p>
        </button>
        <div className="w-full">
          <GotoDateBar />

          <TimeView />
        </div>
      </div>
    </div>
  );
};

export default TimePage;
