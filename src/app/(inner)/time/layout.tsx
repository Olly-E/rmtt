"use client";


import { usePathname } from "next/navigation";
import React from "react";

import SubNav from "@/app/layout/SubNav";

export default function TimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    { href: "/time", name: "Timesheet", id: "1" },
    { href: "/time/pending-approval", name: "Pending approval", id: "2" },
    { href: "/time/unsubmitted-time", name: "Unsubmitted", id: "3" },
    { href: "/time/approved", name: "Approved", id: "4" },
  ];
  return (
    <div className="">
      <div className="container">
        <SubNav links={links} activeLink={pathname} />
      </div>
      <div className="border-b-gray-5/30 border-b -mt-[1px]" />
      {children}
    </div>
  );
}
