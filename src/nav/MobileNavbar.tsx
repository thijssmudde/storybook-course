import classNames from "classnames";
import React, { FC } from "react";
import { Typography } from "../Typography";
import { renderLogo } from "./SideNav";

export interface MobileNavbarProps {
  open: boolean;
  toggleOpen: () => void;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({ open, toggleOpen }) => (
  <div className="z-40 flex items-center justify-between h-20 py-6 bg-white shadow-md dark:bg-gray-900 px-9">
    {renderLogo()}
    <Typography variant="h6" customWeight="medium" className="select-none">
      My Travel App
    </Typography>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        "text-gray-500 transition-all duration-100 ease-out cursor-pointer stroke-current hover:text-gray-900 dark:text-white dark:hover:text-gray-200",
        {
          "opacity-0": open,
        },
      )}
      onClick={toggleOpen}
    >
      <path
        d="M4 16H22.6667M4 8H28M4 24H28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
