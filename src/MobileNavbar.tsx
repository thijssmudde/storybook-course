import React, { FC } from "react";
import { Typography } from "./Typography";
import { renderLogo } from "./SideNav";

export interface MobileNavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({ open, setOpen }) => {
  return (
    <div className="mobile-nav">
      {renderLogo()}
      <Typography variant="h6" customWeight="medium">
        My Travel App
      </Typography>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-500 dark:text-white"
        onClick={() => setOpen(!open)}
      >
        <path
          d="M4 16H22.6667M4 8H28M4 24H28"
          stroke="#667085"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
