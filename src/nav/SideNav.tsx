import React, { FC } from "react";
import classNames from "classnames";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { Typography } from "../Typography";
import { TextInput } from "../TextInput";
import { images, ISideNavProps } from "../";
import { NavItem } from "./NavItem";

export const renderLogo = () => (
  <img src={images.logo} className="w-8 h-8" alt="logo" />
);

export const SideNav: FC<ISideNavProps> = ({
  navItemsTop,
  navItemsBottom,
  open,
  setOpen,
  username,
  email,
}) => {
  const [searchString, setSearchString] = React.useState<string>("");
  const [activeNavItem, setActiveNavItem] = React.useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
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

      <div
        className={classNames("px-4 mb-8", {
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
          "w-full": open,
        })}
      >
        <ul className="flex flex-col items-center space-y-1">
          {navItemsTop.map((item) => (
            <NavItem
              item={item}
              isActive={activeNavItem === item.label}
              open={open}
              setOpen={setOpen}
              onClick={() => setActiveNavItem(item.label)}
            />
          ))}
        </ul>
        <ul className="flex flex-col items-center mb-6 space-y-1">
          {navItemsBottom.map((item) => (
            <NavItem
              item={item}
              isActive={activeNavItem === item.label}
              open={open}
              setOpen={setOpen}
              onClick={() => setActiveNavItem(item.label)}
            />
          ))}
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
          src={images.demoAvatar}
          alt=""
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <div
          className={classNames("ml-3 flex justify-between flex-grow", {
            "opacity-0 hidden": !open,
          })}
        >
          <div>
            <Typography
              variant="sm"
              customWeight="medium"
              customColor="text-gray-700 dark:text-white"
            >
              {username}
            </Typography>

            <Typography variant="sm" customColor="text-gray-500">
              {email}
            </Typography>
          </div>

          <FiLogOut size={24} className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
