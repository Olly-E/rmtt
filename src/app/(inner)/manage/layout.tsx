"use client";

import { usePathname } from "next/navigation";
import React from "react";

import SubNav from "@/app/layout/SubNav";

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    { href: "/manage/clients", name: "Clients", id: "1" },
    { href: "/manage/tasks", name: "Tasks", id: "2" },
    { href: "/manage/expense-categories", name: "Expense categories", id: "3" },
    { href: "/manage/roles", name: "Roles", id: "4" },
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
