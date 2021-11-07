import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SubNavItem } from "./SubNavItem";

afterEach(cleanup);

const setup = () => {
  const subItems = [
    {
      order: 0,
      path: "analytics",
      label: "Analytics",
    },
    {
      order: 1,
      path: "apps",
      label: "Apps",
    },
    {
      order: 2,
      path: "learn",
      label: "Learn",
    },
  ];
  const activeSubNavItem = "all";

  return {
    subItems,
    activeSubNavItem,
  };
};

describe("SubNavItem", () => {
  it("Renders SubNavItems correctly", () => {
    const { subItems, activeSubNavItem } = setup();

    const { asFragment } = render(
      <>
        {subItems.map((subItem) => (
          <SubNavItem
            key={subItem.label}
            isActive={activeSubNavItem === subItem.label}
            subItem={subItem}
            onClick={() => {}}
          />
        ))}
      </>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders SubNavItems with inDropdown=true correctly", () => {
    const { subItems, activeSubNavItem } = setup();

    const { asFragment } = render(
      <>
        {subItems.map((subItem) => (
          <SubNavItem
            key={subItem.label}
            inDropdown
            isActive={activeSubNavItem === subItem.label}
            subItem={subItem}
            onClick={() => {}}
          />
        ))}
      </>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
