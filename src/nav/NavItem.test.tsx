import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NavItem } from "./NavItem";
import { navItemsTop, navItemsBottom } from "../data/navItems";

afterEach(cleanup);

// TODO test clicking on NavItem
// TODO test clicking on SubNavItem

const setup = () => {
  const navItems = [...navItemsTop, ...navItemsBottom];
  const activeNavItem = "rentals";
  const activeSubNavItem = "all";
  const openDropdowns = ["rentals"];

  return {
    navItems,
    activeNavItem,
    activeSubNavItem,
    openDropdowns,
  };
};

describe("NavItem", () => {
  it("Renders NavItems with open SideNav correctly", () => {
    const { navItems, activeNavItem, activeSubNavItem, openDropdowns } =
      setup();

    const { asFragment } = render(
      <>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            isActive={activeNavItem === item.label}
            activeSubNavItem={activeSubNavItem}
            open
            openDropdown={openDropdowns.includes(item.label)}
            onClick={() => {}}
          />
        ))}
      </>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders NavItems with closed SideNav correctly", () => {
    const { navItems, activeNavItem, activeSubNavItem, openDropdowns } =
      setup();

    const { asFragment } = render(
      <>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            isActive={activeNavItem === item.label}
            activeSubNavItem={activeSubNavItem}
            open={false}
            openDropdown={openDropdowns.includes(item.label)}
            onClick={() => {}}
          />
        ))}
      </>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
