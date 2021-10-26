import classNames from "classnames";
import React from "react";

import { Typography } from "..";

export const SubNavItem = ({ subItem }: { subItem: string }) => (
  <li key={subItem} className="navItem group">
    <Typography
      variant="md"
      className={classNames("flex-grow ml-13")}
      customColor="navItemLabel group-hover:text-primary-600 dark:group-hover:text-white"
    >
      {subItem}
    </Typography>
  </li>
);
