import { usePathname } from "next/navigation";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface SidebarLinkProps {
  nav: {
    title: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    href: string | null;
    id: string;
    subLinks: {
      title: string;
      link: string;
      id: string;
    }[];
  };
  index: number;
}
export const SidebarLink = ({ nav, index }: SidebarLinkProps) => {
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "flex relative h-[34px] px-5 items-center my-4 group text-sm transition-colors duration-150",
        index === 4 && "",
        pathname === (nav.subLinks && nav.subLinks[0]?.link)
          ? "bg-primary rounded-[2px] text-black"
          : "text-white opacity-50 bg-none hover:text-black hover:bg-primary/80 hover:opacity-85"
      )}
    >
      <Link
        href={nav.subLinks[0]?.link || (nav.href ?? "#")}
        className="py-[10px] flex items-center px-2 gap-4 w-full"
      >
        <nav.icon size={20} strokeWidth={1.5} className="" />
        <p className="font-normal text-sm">{nav.title}</p>
      </Link>
      <div className="hidden left-[240px] pl-4 group-hover:block z-10 absolute top-0">
        {!!nav.subLinks.length && (
          <div className="min-w-[172px] bg-black rounded group-hover:border border-white-2/10  ">
            {nav.subLinks.map((subLink) => (
              <Link
                className="flex px-8 items-center gap-4 py-3 text-white hover:text-primary text-sm "
                key={subLink.id}
                href={subLink.link}
              >
                {subLink.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
