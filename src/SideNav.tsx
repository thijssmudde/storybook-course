import React, { FC } from "react";
import classNames from "classnames";
import { Typography } from ".";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";
import {
  FiBarChart2,
  FiCheckSquare,
  // FiFlag,
  FiHome,
  FiLayers,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

export interface SideNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const renderLogo = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#paint0_linear_194:16330)"
      />
      <line x1="16.1" x2="16.1" y2="32" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="11.1" x2="11.1" y2="32" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="26.1" x2="26.1" y2="32" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="6.1" x2="6.1" y2="32" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="21.1" x2="21.1" y2="32" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="32" y1="16.1" y2="16.1" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="32" y1="11.1" y2="11.1" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="32" y1="26.1" y2="26.1" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="32" y1="6.1" y2="6.1" stroke="#E9EBEF" strokeWidth="0.2" />
      <line x1="32" y1="21.1" y2="21.1" stroke="#E9EBEF" strokeWidth="0.2" />
      <rect
        x="2.1"
        y="2.1"
        width="27.8"
        height="27.8"
        rx="13.9"
        stroke="#E9EBEF"
        strokeWidth="0.2"
      />
      <rect x="8" y="8" width="16" height="16" rx="8" fill="#1570EF" />
      <g filter="url(#filter0_b_194:16330)">
        <path
          d="M0 16H32V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V16Z"
          fill="#DDDDDD"
          fillOpacity="0.01"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_194:16330"
          x="-6"
          y="10"
          width="44"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="3" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_194:16330"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_194:16330"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_194:16330"
          x1="16"
          y1="0"
          x2="16"
          y2="32.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#DCE0E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

interface INavItem {
  label: string;
  icon: JSX.Element;
  toggleSidebar?: boolean;
}

const navItems: INavItem[] = [
  {
    label: "Home",
    icon: <FiHome />,
  },
  {
    label: "Dashboard",
    icon: <FiBarChart2 />,
  },
  {
    label: "Projects",
    icon: <FiLayers />,
  },
  {
    label: "Tasks",
    icon: <FiCheckSquare />,
  },
  {
    label: "Reporting",
    icon: <FiUsers />,
  },
];

const navItems2: INavItem[] = [
  {
    label: "Settings",
    icon: <FiSettings />,
  },
  {
    label: "Close Navbar",
    icon: <FiArrowLeft />,
    toggleSidebar: true,
  },
];

export const SideNav: FC<SideNavProps> = ({ open, setOpen }) => {
  const renderNavItem = (item: INavItem) => {
    return (
      <li
        className="flex items-center h-10 px-2 py-2 transition duration-100 ease-out rounded-lg cursor-pointer hover:bg-primary-50 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 group"
        onClick={item.toggleSidebar ? () => setOpen(!open) : () => {}}
      >
        <item.icon.type
          size={24}
          className="group-hover:text-primary-600 dark:group-hover:text-white dark:text-white"
          {...item.icon.props}
        />
        {open ? (
          <>
            <Typography
              variant="md"
              className="flex-grow ml-3"
              customColor="text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-white"
            >
              {item.label}
            </Typography>
            <FiChevronDown
              size={20}
              className="text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white"
            />
          </>
        ) : null}
      </li>
    );
  };

  return (
    <div
      className={classNames(
        "py-8 flex flex-col items-center bg-white dark:bg-gray-900 transform ease-out duration-100",
        {
          "w-80 px-9 ": open,
          "w-24": !open,
          "border border-gray-900": true,
        },
      )}
    >
      <div className="flex items-center w-full mb-8">
        {renderLogo()}
        {open ? (
          <Typography variant="xl" className="ml-2.5" customWeight="medium">
            My Travel App
          </Typography>
        ) : null}
      </div>

      {/* TODO search input */}

      <ul className="w-full space-y-1">
        {navItems.map((item) => renderNavItem(item))}
      </ul>
      <ul className="w-full mb-6 space-y-1">
        {navItems2.map((item) => renderNavItem(item))}
      </ul>

      {/* TODO avatar */}

      <hr className="w-full mb-3 border border-t border-gray-300" />

      <div className="flex">
        <div></div>
        {open ? (
          <div className="">
            <Typography
              variant="sm"
              customWeight="medium"
              customColor="text-gray-700 dark:text-white"
            >
              Veronica Woods
            </Typography>

            <Typography variant="sm" customColor="text-gray-500">
              veronicawoods@example.com
            </Typography>
          </div>
        ) : null}
      </div>
    </div>
  );
};
