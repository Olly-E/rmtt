"use client";

import { Plus } from "lucide-react";
import React from "react";

import NewTimeEntryModal from "@/app/features/time/components/modals/NewTimeEntryModal";
import TimeSheetActionBar from "@/app/features/time/components/TimeSheetActionBar";
import WeekTypeView from "@/app/features/time/components/WeekTypeView";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import DayTypeView from "@/app/features/time/components/DayTypeView";

const TimePage = () => {
  const [activeView, setActiveView] = React.useState<"day" | "week">("day");
  const [selectDate, setSelectDate] = React.useState<Date>(new Date());

  const handleIncreaseDate = () => {
    setSelectDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setDate(nextDate.getDate() + 1);
      return nextDate;
    });
  };

  const handleDecreaseDate = () => {
    setSelectDate((prevDate) => {
      const prevDateCopy = new Date(prevDate);
      prevDateCopy.setDate(prevDateCopy.getDate() - 1);
      return prevDateCopy;
    });
  };

  const {
    ref: newTimeEntryRef,
    isComponentVisible: newTimeEntryVisible,
    setIsComponentVisible: setNewTimeEntryVisible,
    handleClickOnDropDownButton: handleNewTimeEntryClick,
  } = useComponentVisible();

  const handleChangeView = (view: "day" | "week") => {
    setActiveView(view);
  };
  const handleGotoToday = () => {
    setSelectDate(new Date());
  };

  return (
    <div className="">
      <TimeSheetActionBar
        handlePrevTime={handleDecreaseDate}
        handleNextTime={handleIncreaseDate}
        activeView={activeView}
        handleChangeView={handleChangeView}
        selectDate={selectDate}
        handleGotoToday={handleGotoToday}
      />
      <div className="container flex items-start gap-7">
        <button type="button" className="" onClick={handleNewTimeEntryClick}>
          <div className="w-[64px] min-w-[64px] aspect-square centered bg-black rounded-full">
            <Plus size={34} strokeWidth={3} color="#F7E001" />
          </div>
          <p className="text-black font-medium text-sm whitespace-nowrap mt-2">
            Track time
          </p>
        </button>

        {activeView === "day" ? (
          <DayTypeView selectDate={selectDate} setSelectDate={setSelectDate} />
        ) : (
          <WeekTypeView />
        )}
      </div>
      <NewTimeEntryModal
        setModalOpen={setNewTimeEntryVisible}
        modalOpen={newTimeEntryVisible}
        modalRef={newTimeEntryRef}
      />
    </div>
  );
};

export default TimePage;
