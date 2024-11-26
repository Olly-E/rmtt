import React from "react";

export const metadata = {
  title: "",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen">{children}</div>;
}
