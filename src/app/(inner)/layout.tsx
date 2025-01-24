import React from "react";
import Navbar from "../layout/Navbar";

export const metadata = {
  title: "",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen gap-5 flex w-full bg-white-2">
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
