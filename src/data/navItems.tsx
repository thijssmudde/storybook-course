import React from "react";
import { INavItem } from "../@interfaces";
import {
  FiArrowLeft,
  FiBarChart2,
  FiCheckSquare,
  FiHome,
  FiLayers,
  FiSettings,
  FiUsers,
  FiFlag,
} from "react-icons/fi";

export const navItemsTop: INavItem[] = [
  {
    label: "Home",
    icon: <FiHome />,
  },
  {
    label: "Dashboard",
    icon: <FiBarChart2 />,
    subItems: ["Analytics", "Apps", "Learn"],
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
    icon: <FiFlag />,
  },
  {
    label: "Users",
    icon: <FiUsers />,
    subItems: ["All users", "Popular", "Recently added"],
  },
];

export const navItemsBottom: INavItem[] = [
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
