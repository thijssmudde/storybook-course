import classNames from "classnames";
import React from "react";

import { FiChevronDown } from "react-icons/fi";
import { INavItem, Typography } from "..";
import { SubNavItem } from "./SubNavItem";

interface INavItemProps {
  item: INavItem;
  isActive: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  onClick: (item: string) => void;
}

export const NavItem = ({
  item,
  isActive,
  open,
  setOpen,
  onClick,
}: INavItemProps) => (
  <>
    <li
      key={item.label}
      className={classNames("navItem group", {
        "px-4": open,
        "px-2": !open,
        "bg-primary-50 dark:bg-gray-100 dark:hover:bg-opacity-10": isActive,
      })}
      onClick={
        item.toggleSidebar ? () => setOpen(!open) : () => onClick(item.label)
      }
    >
      <item.icon.type
        size={24}
        className={classNames(
          "group-hover:text-primary-600 dark:group-hover:text-white dark:text-white transform duration-100 ease-out",
          {
            "-rotate-180": item.toggleSidebar && !open,
            "text-gray-900": !isActive,
            "text-primary-600 dark:text-white": isActive,
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
          customColor={classNames(
            "navItemLabel group-hover:text-primary-600 dark:group-hover:text-white",
            {
              "text-primary-600 dark:text-white": isActive,
            },
          )}
        >
          {item.label}
        </Typography>
        {item.subItems && item.subItems.length > 0 ? (
          <FiChevronDown
            size={20}
            className={classNames(
              "text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white",
              {
                "opacity-0 hidden": !open,
                "text-primary-600 dark:text-white": isActive,
              },
            )}
          />
        ) : null}
      </>
    </li>

    {open && item.subItems && item.subItems.length > 0
      ? item.subItems.map((subItem) => <SubNavItem subItem={subItem} />)
      : null}
  </>
);
