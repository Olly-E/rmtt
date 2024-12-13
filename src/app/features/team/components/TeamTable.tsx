"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import React from "react";

import { ProgressBar } from "@/app/components/elements/ProgressBar";
import { DropDown } from "@/app/components/DropDownOpt";
import { Table } from "@/app/components/table/Table";
import { Avatar } from "@/app/components/Avatar";
import { TeamData } from "../types";

interface TeamTableProps {
  teamData: TeamData[];
  teamIsPending: boolean;
}
const TeamTable = ({ teamData, teamIsPending }: TeamTableProps) => {
  const teamId = React.useRef<null | string>(null);

  const DROPDOWN_OPTIONS = [
    {
      name: "Edit",
      id: "edit",
      action: () => {},
    },
    {
      name: "Pin",
      id: "pin",
      action: () => {},
    },
    {
      name: "Archive",
      id: "archive",
      action: () => {},
    },
    {
      name: "Delete",
      id: "delete",
      action: () => {},
    },
  ];

  const columns: ColumnDef<TeamData>[] = [
    {
      header: "Employees",
      accessorKey: "firstName",
      cell: ({ row }) => {
        const { firstName, lastName, role } = row.original;
        return (
          <div className="font-medium flex items-center gap-4">
            <Avatar className="w-[34px] min-w-[34px] !text-primary aspect-square bg-black-2">
              {firstName[0]}
            </Avatar>
            <p className="capitalize">
              {firstName} {lastName}
            </p>
            <p className="capitalize text-xs text-gray-4 px-2 py-1 rounded-full border border-gray-5">
              {role}
            </p>
          </div>
        );
      },
    },
    {
      header: "Hours",
      accessorKey: "hoursDone",
      cell: ({ row }) => {
        const { hoursDone, acceptedInvite } = row.original;
        return (
          acceptedInvite && (
            <div className="text-xs capitalize flex items-center gap-4">
              <p className="">{`${hoursDone}:00`}</p>
              <ProgressBar progress={100} className="h-[20px] w-[150px] border border-black/10" />
            </div>
          )
        );
      },
    },
    {
      header: "Capacity",
      accessorKey: "capacity",
      cell: ({ row }) => {
        const { capacity, acceptedInvite } = row.original;

        return acceptedInvite ? (
          <p className="">{`${capacity}:00`}</p>
        ) : (
          <p className="italic">
            Hasn&apos;t signed in yet{" "}
            <Link
              className="text-blue-state underline underline-offset-2"
              href="/"
            >
              Resend invitation
            </Link>
          </p>
        );
      },
    },
    {
      header: "Billable hours",
      accessorKey: "billable",
      cell: ({ row }) => {
        const { billable, id, acceptedInvite } = row.original;
        const handleOpenOptionsMenu = (e: React.MouseEvent) => {
          e.stopPropagation();
          teamId.current = id;
        };
        return (
          <div className="capitalize flex items-center gap-8 justify-end">
            {acceptedInvite && <p className="">{`${billable}:00`}</p>}
            <div className="cursor-pointer" onClick={handleOpenOptionsMenu}>
              <DropDown options={DROPDOWN_OPTIONS} deleteIndex={3} />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="container pt-6">
      <Table
        isLoading={teamIsPending}
        isTableEmpty={!teamIsPending && teamData.length === 0}
        isPaginated={false}
        columns={columns}
        data={teamData}
        tableHeight="max-h-[calc(100vh-232px)]"
        emptyNotice="No Teams"
        deleteButton
        emptyNoticeSubheading="Team will show up here"
      />
    </div>
  );
};

export default TeamTable;
