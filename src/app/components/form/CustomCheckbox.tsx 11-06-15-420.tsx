import React from "react";

interface CheckboxProps {
  checked: boolean;
  // onChange: () => void;
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({
  checked,
  // onChange,
}) => {
  return (
    <button type="button" className="relative w-fit h-fit" >
      <div
        className={`bg-[#ffe6d5] overflow-hidden rounded-[4px] cursor-pointer w-4 h-4 ${checked ? "border-primary-100 bg-primary-100" : "border-primary-200"}`}
      />
      {checked && (
        <div className="absolute text-white-200 inset-0 flex items-center justify-center">
          <svg
            width="9"
            height="8"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2999 1.90002C14.1999 2.10002 14.1999 2.3 13.9999 2.5C13.7999 2.8 13.4999 3.10002 13.1999 3.40002C11.8999 4.70002 10.7999 6.1 9.79989 7.5C8.69989 9 7.49988 10.6 6.59988 12.3C6.49988 12.5 6.39992 12.6 6.19992 12.8C5.79992 13.2 5.4999 13.3 4.9999 13C4.6999 12.8 4.39988 12.4999 4.09988 12.1999C2.99988 10.8999 1.89992 9.59997 1.19992 8.09997C1.09992 7.89997 1.0999 7.79997 0.999904 7.59997C0.899904 7.29997 0.999892 7.10002 1.29989 6.90002L1.39993 6.80004C2.19993 6.40004 2.59988 6.39997 3.09988 7.09997C3.69988 7.89997 4.29993 8.7 4.89993 9.5C5.09993 9.8 5.29988 9.8 5.59988 9.5C5.79988 9.3 5.89988 8.99995 6.09988 8.69995C7.09988 7.29995 8.09992 5.9 9.19992 4.5C10.0999 3.4 11.0999 2.40002 11.9999 1.40002C12.1999 1.10002 12.4999 0.899947 12.8999 0.699947C13.2999 0.499947 13.4999 0.50002 13.7999 0.90002C14.0999 1.20002 14.1999 1.50002 14.2999 1.90002Z"
              fill="#E4792F"
            />
          </svg>
        </div>
      )}
    </button>
  );
};
