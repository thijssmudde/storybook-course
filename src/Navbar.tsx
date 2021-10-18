import React, { FC } from "react";
import classNames from "classnames";
import { Typography } from ".";
import { FiHome } from "react-icons/fi";

export interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const renderLogo = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 mr-2.5"
    >
      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#paint0_linear_194:16330)"
      />
      <line x1="16.1" x2="16.1" y2="32" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="11.1" x2="11.1" y2="32" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="26.1" x2="26.1" y2="32" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="6.1" x2="6.1" y2="32" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="21.1" x2="21.1" y2="32" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="32" y1="16.1" y2="16.1" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="32" y1="11.1" y2="11.1" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="32" y1="26.1" y2="26.1" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="32" y1="6.1" y2="6.1" stroke="#E9EBEF" stroke-width="0.2" />
      <line x1="32" y1="21.1" y2="21.1" stroke="#E9EBEF" stroke-width="0.2" />
      <rect
        x="2.1"
        y="2.1"
        width="27.8"
        height="27.8"
        rx="13.9"
        stroke="#E9EBEF"
        stroke-width="0.2"
      />
      <rect x="8" y="8" width="16" height="16" rx="8" fill="#1570EF" />
      <g filter="url(#filter0_b_194:16330)">
        <path
          d="M0 16H32V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V16Z"
          fill="#DDDDDD"
          fill-opacity="0.01"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          <stop stop-color="white" />
          <stop offset="1" stop-color="#DCE0E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

interface INavbarItem {
  label: string;
  icon: JSX.Element;
}

const navbarItems: INavbarItem[] = [
  {
    label: "Home",
    icon: <FiHome />,
  },
];

export const Navbar: FC<NavbarProps> = ({ open, setOpen }) => {
  const renderNavbarItem = (item: INavbarItem) => {
    return (
      <div className="flex h-10">
        <item.icon.type size={24} className="mr-3" {...item.icon.props} />
        <Typography variant="md" customColor="text-gray-800 dark:text-white">
          {item.label}
        </Typography>
      </div>
    );
  };

  return (
    <div
      className={classNames("px-9 py-8 bg-white dark:bg-gray-900", {
        "w-80": open,
      })}
    >
      <div className="flex mb-8">
        {renderLogo()}
        <Typography variant="xl" customWeight="medium">
          My Travel App
        </Typography>
      </div>

      {/* TODO search input */}

      {/* TODO navbar items */}
      {navbarItems.map((item) => renderNavbarItem(item))}

      {/* TODO avatar */}

      <hr className="w-full mb-3 border border-t border-gray-300" />

      <div className="flex">
        <div></div>
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
      </div>
    </div>
  );
};
