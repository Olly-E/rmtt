import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface LinksProps {
  links: { name: string; href: string; id: string }[];
  activeLink: string;
}
const SubNav = ({ links, activeLink }: LinksProps) => {
  return (
    <div className="flex items-end gap-5 ">
      {links.map((nav) => {
        const isActive = activeLink === nav.href;
        return (
          <Link
            href={nav.href}
            className={clsx(
              "py-3 text-sm font-medium text-gray-4",
              isActive && "border-b-2 border-b-primary !text-black"
            )}
            key={nav.id}
          >
            {nav.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SubNav;
