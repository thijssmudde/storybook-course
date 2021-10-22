import React, { FC } from "react";
import classNames from "classnames";
import { TextInput, Typography } from ".";
import { FiArrowLeft, FiChevronDown, FiLogOut, FiSearch } from "react-icons/fi";
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

export const renderLogo = () => (
  <img
    src="https://res.cloudinary.com/tailwindcss/image/upload/v1634916081/Logo_Icon_dq276z.png"
    className="w-8 h-8"
    alt="logo"
  />
);

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
  const [searchString, setSearchString] = React.useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const renderNavItem = (item: INavItem) => {
    return (
      <li
        className="flex items-center w-full h-10 px-4 py-2 transition duration-100 ease-out rounded-lg cursor-pointer hover:bg-primary-50 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 group"
        onClick={item.toggleSidebar ? () => setOpen(!open) : () => {}}
      >
        <item.icon.type
          size={24}
          className={classNames(
            "text-gray-900 group-hover:text-primary-600 dark:group-hover:text-white dark:text-white transform duration-100 ease-out",
            {
              "-rotate-180": item.toggleSidebar && !open,
            },
          )}
          {...item.icon.props}
        />
        <>
          <Typography
            variant="md"
            className={classNames("flex-grow ml-3", {
              "opacity-0 hidden": !open,
            })}
            customColor="text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-white"
          >
            {item.label}
          </Typography>
          <FiChevronDown
            size={20}
            className={classNames(
              "text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white",
              {
                "opacity-0 hidden": !open,
              },
            )}
          />
        </>
      </li>
    );
  };

  return (
    <div
      className={classNames(
        "h-full py-8 flex flex-col items-center bg-white dark:bg-gray-900 transform ease-out duration-100",
        {
          "w-80 px-5": open,
          "w-24": !open,
          "border-r border-gray-300 dark:border-opacity-20": true,
        },
      )}
    >
      <div
        className={classNames("flex items-center w-full mb-8", {
          "justify-center": !open,
          "pl-4": open,
        })}
      >
        {renderLogo()}

        <Typography
          variant="xl"
          className={classNames("ml-2.5", {
            "opacity-0 hidden": !open,
          })}
          customWeight="medium"
        >
          My Travel App
        </Typography>
      </div>

      {/* TODO search input */}
      <div
        className={classNames("w-62 mb-8", {
          "opacity-0": !open,
        })}
      >
        <TextInput
          type="text"
          value={searchString}
          handleChange={handleSearch}
          placeholder="Search"
          LeadingIcon={<FiSearch />}
        />
      </div>

      <div
        className={classNames("flex flex-col justify-between h-full", {
          " w-full": open,
        })}
      >
        <ul className="flex flex-col items-center space-y-1">
          {navItems.map((item) => renderNavItem(item))}
        </ul>
        <ul className="flex flex-col items-center mb-6 space-y-1">
          {navItems2.map((item) => renderNavItem(item))}
        </ul>
      </div>

      <hr
        className={classNames(
          "mb-3 border-t border-gray-300 dark:border-opacity-20",
          {
            "w-full": open,
            "w-14": !open,
          },
        )}
      />

      <div
        className={classNames("flex w-full mt-3", {
          "pl-4 pr-1": open,
          "justify-center px-4": !open,
        })}
      >
        <img
          src="https://res.cloudinary.com/tailwindcss/image/upload/v1634915122/Knipsel_jooj6y.png"
          alt=""
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <div
          className={classNames("ml-3 flex justify-between flex-grow", {
            "opacity-0 hidden": !open,
          })}
        >
          <div className="">
            <Typography
              variant="sm"
              customWeight="medium"
              customColor="text-gray-700 dark:text-white"
            >
              Veronica Woods
            </Typography>

            <Typography variant="sm" customColor="text-gray-500">
              veronica@example.com
            </Typography>
          </div>

          <FiLogOut size={24} className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
