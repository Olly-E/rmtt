import React from "react";
import Header from "../layout/Header";


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
        <Header />
        {children}
      </div>
    </div>
  );
}
