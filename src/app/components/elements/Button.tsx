import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { Loader } from "./Loader";
import Image from "next/image";

import back from "../../../../public/assets/icons/backArrow.svg";
import close from "../../../../public/assets/icons/close.svg";

interface ButtonProps {
  variant?:
    | "primary"
    | "outline"
    | "backdrop"
    | "close"
    | "back"
    | "none"
    | "secondary";

  className?: string;
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  as?: "button" | "link";
  href?: string | undefined;
  target?: string;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  isLoading = false,
  size = "lg",
  type = "button",
  className,
  children,
  onClick,
  as = "button",
  href,
  target,
  ariaLabel,
}) => {
  const Tag = as === "button" ? "button" : Link;

  if (as === "link" && !href) {
    throw new Error("href is required when button is used as link");
  }

  const sizeClass = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-3 sm:px-8 sm:py-3 text-xs sm:text-base",
  };

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      href={as === "link" ? href : undefined}
      target={as === "link" ? target : undefined}
      aria-label={ariaLabel}
      className={clsx(
        className,
        "rounded-[4px] justify-center font-normal whitespace-nowrap w-fit focus:outline-blue-state disabled:cursor-not-allowed gap-2 disabled:opacity-70 cursor-pointer flex items-center transition-colors duration-100",
        variant === "primary" && "bg-black text-white font-[400]",
        variant === "secondary" && "bg-white text-black",
        variant === "outline" && "border border-black text-black",
        "bg-none border border-black justify-center",
        (variant === "close" || variant === "back") &&
          "text-black bg-white border border-black overflow-hidden rounded-[8px] w-[39.9px] min-w-[39.9px] h-[39.9px]",
        variant !== "close" && variant !== "back" && sizeClass[size]
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading && <Loader size="md" className="text-current" />}
      {variant === "close" ? (
        <Image src={close} alt="bullet" className="w-[12.67px] h-auto" />
      ) : variant === "back" ? (
        <Image src={back} alt="back" className="" />
      ) : (
        children
      )}
    </Tag>
  );
};
