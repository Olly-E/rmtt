"use client";

import { useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

import NewTimeEntryModal from "@/app/features/time/components/modals/NewTimeEntryModal";
import TimeSheetActionBar from "@/app/features/time/components/TimeSheetActionBar";
import { useAllTimeLogs } from "@/app/features/time/api/useAllTimeLogs";
import WeekTypeView from "@/app/features/time/components/WeekTypeView";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import DayTypeView from "@/app/features/time/components/DayTypeView";
import { timeKeys } from "@/app/utils/query-key-factory";
import { useDateHook } from "@/app/hooks/useDateHook";
import { Avatar } from "@/app/components/Avatar";

interface PageProps {
  params: {
    teamId: string;
  };
  searchParams: {
    approved?: string;
  };
}
const MembersTimePage = (props: PageProps) => {
  const [activeView, setActiveView] = React.useState<"day" | "week">("day");
  const isDailyView = activeView === "day";

  const { data: timeLogData, isPending: timeLogPending } = useAllTimeLogs();
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries({
      queryKey: timeKeys.all,
    });
  };

  const isApproved = props.searchParams.approved;

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
      {!isApproved && (
        <div className="container bg-white-3 !mt-4 py-4 px-6 border gap-4 border-primary rounded-[7px] flex items-center">
          <Avatar className="w-[49px] min-w-[49px] aspect-square bg-black-2">
            O
          </Avatar>
          <div>
            <p className="text-[20px] text-black">Olivia Smith’s timesheet</p>
            <div className="flex items-center gap-4 w-full">
              <span className="text-sm text-gray-4">
                Changes will save to Bola’s timesheet.{" "}
              </span>
              <Link
                href="/time"
                className="underline underline-offset-1 text-sm text-blue-state"
              >
                Resume editing your own timesheet
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <TimeSheetActionBar
          handleDecreaseWeek={handleDecreaseWeek}
          handleIncreaseWeek={handleIncreaseWeek}
          handleGoToThisWeek={handleGoToThisWeek}
          weekInterval={weekInterval}
          handlePrevTime={handleDecreaseDate}
          handleNextTime={handleIncreaseDate}
          activeView={activeView}
          handleChangeView={handleChangeView}
          selectDate={selectDate}
          handleGotoToday={handleGotoToday}
          teamId={props.params.teamId}
        />
      </div>
      <div className="container flex items-start gap-7">
        <button type="button" className="" onClick={handleNewTimeEntryClick}>
          <div className="w-[64px] min-w-[64px] aspect-square centered bg-black rounded-full">
            <Plus size={34} strokeWidth={3} color="#F7E001" />
          </div>
          <p className="text-black font-medium text-sm whitespace-nowrap mt-2">
            Track time
          </p>
        </button>

        {isDailyView ? (
          <DayTypeView
            timeLogData={timeLogData || []}
            isPending={timeLogPending}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
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

export default MembersTimePage;
