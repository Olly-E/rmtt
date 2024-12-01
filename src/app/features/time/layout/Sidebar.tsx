"use client";

import {
  Timer,
  FolderDot,
  UsersRound,
  ScrollText,
  Settings,
  ClipboardMinus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import logoYellow from "../../../../../public/assets/logo-yellow.svg";
import { SidebarLink } from "./SidebarLink";

export const Sidebar = () => {
  const NAV_LINKS = [
    {
      title: "Timer",
      icon: Timer,
      id: "timer",
      href: null,
      subLinks: [],
    },
    // {
    //   title: "Expenses",
    //   icon: Banknote,
    //   id: "expenses",
    //   subLinks: [],
    //   href: "/expenses",
    // },
    {
      title: "Projects",
      icon: FolderDot,
      id: "projects",
      subLinks: [],
      href: "/projects",
    },
    {
      title: "Clients",
      icon: ClipboardMinus,
      id: "clients",
      subLinks: [],
      href: "/clients",
    },
    {
      title: "Team",
      icon: UsersRound,
      id: "team",
      subLinks: [],
      href: "/team",
    },
    // {
    //   title: "Reports",
    //   icon: FolderDot,
    //   id: "reports",
    //   subLinks: [],
    //   href: "/reports",
    // },
    {
      title: "Invoices",
      icon: ScrollText,
      id: "invoices",
      subLinks: [],
      href: "/invoices",
    },
  ];

  const NAV_LINKS_2 = [
    {
      title: "Settings",
      icon: Settings,
      id: "settings",
      href: null,
      subLinks: [],
    },
    {
      title: "Help",
      icon: Timer,
      id: "help",
      href: "/help",
      subLinks: [],
    },
  ];

  return (
    <div className="min-w-[260px] w-[260px] border border-white-2/5 rounded-md bg-gray-2 h-full pt-[20px]">
      <Link className={clsx("w-full")} href="/">
        <Image
          src={logoYellow}
          alt="reboot-monkey-logo"
          className="w-[178px] h-auto mx-auto"
        />
      </Link>
      <div className="mt-8 flex flex-col justify-between h-[calc(100%-65.27px)]">
        <div>
          {NAV_LINKS.map((nav, index) => (
            <SidebarLink nav={nav} index={index} key={nav.id} />
          ))}
        </div>
        <div>
          <hr className="h-[1px] border-t-gray-200/15" />
          {NAV_LINKS_2.map((nav, index) => (
            <SidebarLink nav={nav} index={index} key={nav.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
