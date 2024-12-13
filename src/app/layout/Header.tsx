"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

const Header = () => {
  
  const NAV_LINKS = [
    {
      name: "Time",
      href: "/time",
      id: "time",
    },
    {
      name: "Expenses",
      href: "/expenses",
      id: "expenses",
    },
    {
      name: "Projects",
      href: "/projects",
      id: "projects",
    },
    {
      name: "Team",
      href: "/team",
      id: "team",
    },
    {
      name: "Reports",
      href: "/reports",
      id: "reports",
    },
    {
      name: "Invoice",
      href: "/invoice",
      id: "invoice",
    },
    {
      name: "Estimates",
      href: "/estimates",
      id: "estimates",
    },
    {
      name: "Manage",
      href: "/manage",
      id: "manage",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="h-[60px] overflow-hidden flex items-center gap-[20px] bg-primary">
      <div className="flex items-center gap-4 container h-full">
        {NAV_LINKS.map((link) => {
          const deactivateLink =
            link.id === "expenses" ||
            link.id === "reports" ||
            link.id === "invoice" ||
            link.id === "estimates" ||
            link.id === "manage";
          const isActiveLink = pathname === link.href;
          return (
            <Link
              key={link.id}
              href={link.href}
              className={clsx(
                "text-black text-sm h-full flex items-center justify-center px-4",
                isActiveLink && "bg-black text-white",
                deactivateLink && "opacity-50 cursor-not-allowed pointer-events-none"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
