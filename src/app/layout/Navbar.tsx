"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { ProfileMenuDropdown } from "../components/ProfileMenuDropDown";
import { Usermini } from "../types";

const Navbar = () => {
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
      href: "/manage/clients",
      id: "manage",
    },
  ];

  const pathname = usePathname();
  const [user, setUser] = React.useState<Usermini | null>(null);
  React.useEffect(() => {
    const miniUserData = JSON.parse(
      window.localStorage.getItem("userData") || "{}"
    );
    setUser(miniUserData);
  }, []);
  return (
    <nav className="h-[60px] flex items-center gap-[20px] bg-primary">
      <div className="flex items-center gap-4 container h-full justify-between">
        <div className="flex items-center gap-4 h-full">
          {NAV_LINKS.map((link) => {
            const deactivateLink =
              link.id === "expenses" ||
              link.id === "reports" ||
              link.id === "invoice" ||
              link.id === "estimates";
            const isActiveLink = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={clsx(
                  "text-black text-sm h-full flex items-center justify-center px-4",
                  isActiveLink && "bg-black text-white",
                  deactivateLink &&
                    "opacity-50 cursor-not-allowed pointer-events-none"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/settings" className="text-sm font-medium">
            Settings
          </Link>
          <div className="flex items-center justify-center gap-10">
            <ProfileMenuDropdown
              isLoading={false}
              firstName={user?.firstName || ""}
              lastName={user?.lastName || ""}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
