import classNames from "classnames";
import React from "react";

import { Typography, ISubNavItem } from "..";

interface ISubNavItemProps {
  isActive: boolean;
  subItem: ISubNavItem;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

export const SubNavItem = ({
  isActive,
  subItem,
  onClick,
}: ISubNavItemProps) => (
  <li
    key={subItem.label}
    className={classNames("navItem group", {
      "bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10": isActive,
    })}
    onClick={onClick}
  >
    <Typography
      variant="md"
      className={classNames("flex-grow ml-13")}
      customColor={classNames(
        "navItemLabel group-hover:text-primary-600 dark:group-hover:text-white",
        {
          "text-primary-600 dark:text-white": isActive,
        },
      )}
    >
      {subItem.label}
    </Typography>
  </li>
);
