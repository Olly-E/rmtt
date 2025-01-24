import React from "react";
import Navbar from "../layout/Navbar";

export const metadata = {
  title: "",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen gap-5 p-5 flex w-full bg-white-2">
      <Navbar />
      {children}
    </div>
  );
}
