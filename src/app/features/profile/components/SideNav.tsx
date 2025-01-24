import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SideNav = () => {
  const pathname = usePathname();
  const PROFILE_LINKS = [
    {
      name: "Basic info",
      link: "/profile",
    },
    {
      name: "Assigned projects",
      link: "/profile/assigned-projects",
    },
    {
      name: "Permissions",
      link: "/profile/permissions",
    },
    {
      name: "Notifications",
      link: "/profile/notifications",
    },
  ];
  return (
    <div className="w-[272px] mt-7">
      {PROFILE_LINKS.map((link) => {
        const isActive = pathname === link.link;
        return (
          <Link
            key={link.name}
            href={link.link}
            className={clsx(
              "w-full flex items-center px-4 text-sm h-[39px] text-black/50 hover:bg-black/5 hover:text-black transition-colors",
              isActive
                ? "border-l-primary border-l-4 !text-black bg-white-3"
                : "border-l"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
