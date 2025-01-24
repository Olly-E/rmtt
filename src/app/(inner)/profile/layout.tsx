"use client";

import ProfileCard from "@/app/features/profile/components/ProfileCard";
import { SideNav } from "@/app/features/profile/components/SideNav";
import React from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container pt-10 flex gap-6">
      <div className="min-w-[272px] w-[272px]">
        <ProfileCard />
        <SideNav />
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
