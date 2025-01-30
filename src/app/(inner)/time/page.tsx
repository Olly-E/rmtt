"use client";

import { Plus } from "lucide-react";
import React from "react";
import clsx from "clsx";

import NewTimeEntryModal from "@/app/features/time/components/modals/NewTimeEntryModal";
import TimeSheetActionBar from "@/app/features/time/components/TimeSheetActionBar";
import { useAllTimeLogs } from "@/app/features/time/api/useAllTimeLogs";
import WeekTypeView from "@/app/features/time/components/WeekTypeView";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import DayTypeView from "@/app/features/time/components/DayTypeView";
import { timeKeys } from "@/app/utils/query-key-factory";
import { useQueryClient } from "@tanstack/react-query";
import { useDateHook } from "@/app/hooks/useDateHook";

const TimePage = () => {
  const [activeView, setActiveView] = React.useState<"day" | "week">("day");
  const isDailyView = activeView === "day";

  const { data: timeLogData, isPending: timeLogPending } = useAllTimeLogs();
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries({
      queryKey: timeKeys.all,
    });
  };

  const {
    selectDate,
    setSelectDate,
    weekInterval,
    handleGotoToday,
    handleIncreaseDate,
    handleDecreaseDate,
    handleIncreaseWeek,
    handleDecreaseWeek,
    handleGoToThisWeek,
  } = useDateHook();

  const {
    ref: newTimeEntryRef,
    isComponentVisible: newTimeEntryVisible,
    setIsComponentVisible: setNewTimeEntryVisible,
    handleClickOnDropDownButton: handleNewTimeEntryClick,
  } = useComponentVisible();

  const handleChangeView = (view: "day" | "week") => {
    setActiveView(view);
  };

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      invalidate();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="">
      <div className="container">
        <TimeSheetActionBar
          handlePrevTime={handleDecreaseDate}
          handleNextTime={handleIncreaseDate}
          handleIncreaseWeek={handleIncreaseWeek}
          handleDecreaseWeek={handleDecreaseWeek}
          activeView={activeView}
          handleChangeView={handleChangeView}
          selectDate={selectDate}
          handleGotoToday={handleGotoToday}
          weekInterval={weekInterval}
          handleGoToThisWeek={handleGoToThisWeek}
        />
      </div>
      <div
        className={clsx("container", isDailyView && "flex items-start gap-7")}
      >
        {isDailyView && (
          <button type="button" className="" onClick={handleNewTimeEntryClick}>
            <div className="w-[64px] min-w-[64px] aspect-square centered bg-black rounded-full">
              <Plus size={34} strokeWidth={3} color="#F7E001" />
            </div>
            <p className="text-black font-medium text-sm whitespace-nowrap mt-2">
              Track time
            </p>
          </button>
        )}

        {isDailyView ? (
          <DayTypeView
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            timeLogData={timeLogData || []}
            isPending={timeLogPending}
          />
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
