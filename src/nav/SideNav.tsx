import React, { FC } from "react";
import classNames from "classnames";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { Typography } from "../Typography";
import { TextInput } from "../TextInput";
import { images } from "../data/images";
import { NavItem } from "./NavItem";
import { INavItem } from "../@interfaces";

export const renderLogo = () => (
  <img src={images.logo} className="w-8 h-8 select-none" alt="logo" />
);

export interface ISideNavProps {
  className?: string;
  navItemsTop: INavItem[];
  navItemsBottom: INavItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  username: string;
  email: string;
}

export const SideNav: FC<ISideNavProps> = ({
  className,
  navItemsTop,
  navItemsBottom,
  open,
  setOpen,
  username,
  email,
}) => {
  const [searchString, setSearchString] = React.useState<string>("");
  const [activeNavItem, setActiveNavItem] = React.useState<string>("");
  const [activeSubNavItem, setActiveSubNavItem] = React.useState<string>("");
  const [openDropdowns, setOpenDropdowns] = React.useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const onClickNavItem = (item: INavItem, subNavPath?: string) => {
    if (subNavPath) {
      setActiveSubNavItem(subNavPath);
    }
    if (!item.toggleSidebar) {
      setActiveNavItem(item.label);
    } else if (item.toggleSidebar) {
      setOpen(!open);
    }

    if (item.subItems && openDropdowns.includes(item.label) && !subNavPath) {
      setOpenDropdowns(
        openDropdowns.filter((dropdownItem) => dropdownItem !== item.label),
      );
    } else if (item.subItems && !openDropdowns.includes(item.label)) {
      setOpenDropdowns([...openDropdowns, item.label]);
    }
  };

  return (
    <div
      className={classNames(
        "py-6 flex flex-col flex-grow bg-white dark:bg-gray-900 transform ease-out duration-100 overflow-y-auto xs:overflow-y-visible",
        {
          "w-80": open,
          "w-24": !open,
          "border-r border-gray-300 dark:border-opacity-20": true,
        },
        className,
      )}
    >
      <div className="flex items-center w-full mb-8 ml-9">
        {renderLogo()}

        <Typography
          variant="xl"
          className={classNames("ml-2.5 whitespace-nowrap select-none", {
            "opacity-0 hidden": !open,
          })}
          customWeight="medium"
        >
          My Travel App
        </Typography>
      </div>

      <div className="mb-8 mx-9">
        {open ? (
          <TextInput
            type="text"
            value={searchString}
            handleChange={handleSearch}
            placeholder="Search"
            LeadingIcon={<FiSearch />}
          />
        ) : (
          <div className="h-11" />
        )}
      </div>

      <div
        className={classNames(
          "flex flex-col justify-between h-full ml-5 w-70",
          {
            "w-14": !open,
          },
        )}
      >
        <ul className="flex flex-col space-y-1">
          {navItemsTop.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isActive={activeNavItem === item.label}
              activeSubNavItem={activeSubNavItem}
              open={open}
              openDropdown={openDropdowns.includes(item.label)}
              onClick={onClickNavItem}
            />
          ))}
        </ul>
        <ul className="flex flex-col mb-6 space-y-1">
          {navItemsBottom.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isActive={activeNavItem === item.label}
              activeSubNavItem={activeSubNavItem}
              open={open}
              openDropdown={openDropdowns.includes(item.label)}
              onClick={onClickNavItem}
            />
          ))}
        </ul>
      </div>

      <hr
        className={classNames(
          "ml-5 border-t border-gray-300 dark:border-opacity-20",
          {
            "w-70": open,
            "w-14": !open,
          },
        )}
      />

      <div className="flex mt-6 w-70 ml-7">
        <img
          src={images.demoAvatar}
          alt="avatar"
          className="w-10 h-10 rounded-full cursor-pointer select-none"
        />
        {open ? (
          <div className="flex justify-between ml-3">
            <div className="select-none">
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

            <FiLogOut size={24} className="ml-6 text-gray-400 cursor-pointer" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
