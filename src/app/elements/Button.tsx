import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { Loader } from "./Loader";

interface ButtonProps {
  variant?:
    | "primary"
    | "outline"
    | "backdrop"
    | "close"
    | "back"
    | "none"
    | "secondary"
    | "danger";

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

  const closeIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L17.3137 17.3137"
        stroke="#050505"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17L17.3137 5.68629"
        stroke="#050505"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const backIcon = (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33895 9.87425C8.45052 9.98582 8.5132 10.1371 8.5132 10.2949C8.5132 10.4527 8.45052 10.604 8.33895 10.7156C8.22738 10.8272 8.07605 10.8899 7.91826 10.8899C7.76048 10.8899 7.60915 10.8272 7.49758 10.7156L3.53821 6.75625C3.48284 6.70107 3.43891 6.63551 3.40893 6.56332C3.37896 6.49113 3.36353 6.41373 3.36353 6.33556C3.36353 6.25739 3.37896 6.18 3.40893 6.10781C3.43891 6.03562 3.48284 5.97005 3.53821 5.91488L7.49758 1.9555C7.60915 1.84393 7.76048 1.78125 7.91826 1.78125C8.07605 1.78125 8.22738 1.84393 8.33895 1.9555C8.45052 2.06708 8.5132 2.2184 8.5132 2.37619C8.5132 2.53397 8.45052 2.6853 8.33895 2.79687L4.80075 6.33507L8.33895 9.87425Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      href={as === "link" ? href : undefined}
      target={as === "link" ? target : undefined}
      aria-label={ariaLabel}
      className={clsx(
        className,
        "rounded-[4px] justify-center font-medium whitespace-nowrap w-fit focus:outline-blue-state disabled:cursor-not-allowed gap-2 disabled:opacity-70 cursor-pointer flex items-center transition-colors duration-100",
        variant === "primary" &&
          "bg-primary border border-primary text-black font-[400]",
        variant === "secondary" && "bg-white text-black",
        variant === "outline" && "border border-black text-black",
        variant === "danger" && "bg-red text-white-2 font-[400] px-8",
        (variant === "close" || variant === "back") &&
          "text-black bg-primary overflow-hidden rounded-full border-none w-[33px] min-w-[33px] h-[33px]",
        variant !== "close" && variant !== "back" && sizeClass[size]
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading && <Loader size="md" className="text-current" />}
      {variant === "close"
        ? closeIcon
        : variant === "back"
        ? backIcon
        : children}
    </Tag>
  );
};
