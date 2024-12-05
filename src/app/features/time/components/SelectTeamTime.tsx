"use client";

import { ArrowDown2 } from "iconsax-react";
import React from "react";
import clsx from "clsx";

import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import { Option } from "@/app/types";
import Link from "next/link";

interface SelectTeamTimeProp {
  title: string;
  option: {
    title?: string;
    options: Option[];
  };
  icon?: React.ReactNode;

  teamId: string;
}
export const SelectTeamTime = ({
  title,
  option,
  icon,
  teamId: teamMemberId,
}: SelectTeamTimeProp) => {
  const {
    ref: SelectTeamTimeRef,
    isComponentVisible: isSelectTeamTimeVisible,
    dropDownButtonRef: SelectTeamTimeButtonRef,
    handleClickOnDropDownButton,
  } = useComponentVisible();

  const teamMemberOption = option.options.find(
    (opt) => opt.id === teamMemberId
  );

  return (
    <div className="relative" ref={SelectTeamTimeRef}>
      <button
        onClick={handleClickOnDropDownButton}
        ref={SelectTeamTimeButtonRef}
        type="button"
        className="flex items-center justify-between bg-white-2 px-3 gap-2 py-2 rounded-[5px] border border-gray-200 w-fit text-sm"
      >
        <p className="text-sm">
          {title}
          <span className="capitalize">
            {(teamMemberOption && teamMemberOption.name) || "Team mates"}
          </span>
        </p>
        {icon ? icon : <ArrowDown2 size="16" color="#292D32" />}
      </button>
      {isSelectTeamTimeVisible && (
        <div className="mt-2 text-black min-w-[200px] max-h-[300px] overflow-auto bg-white-2 rounded-[10px] border border-gray-200 absolute z-10 ">
          {option.options.map((multiOptLink, index) => {
            return (
              <Link
                href={`/time/${multiOptLink.id}`}
                key={multiOptLink.id}
                className={clsx(
                  "block text-sm py-3 px-4 w-full text-start hover:bg-gray-100",
                  index > 0 && "border-t border-t-200"
                )}
              >
                {multiOptLink.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
