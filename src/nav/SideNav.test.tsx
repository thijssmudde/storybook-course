import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SideNav } from "./SideNav";
import { navItemsTop, navItemsBottom } from "../data/navItems";

afterEach(cleanup);

// TODO test opening/closing of SideNav
describe("SideNav", () => {
  it("Renders SideNav (open) correctly", () => {
    const { asFragment } = render(
      <SideNav
        className="relative z-50 h-screen -mt-20"
        navItemsTop={navItemsTop}
        navItemsBottom={navItemsBottom}
        open
        setOpen={() => {}}
        username="Veronica Woods"
        email="veronica@example.com"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders SideNav (closed) correctly", () => {
    const { asFragment } = render(
      <SideNav
        className="relative z-50 h-screen -mt-20"
        navItemsTop={navItemsTop}
        navItemsBottom={navItemsBottom}
        open={false}
        setOpen={() => {}}
        username="Veronica Woods"
        email="veronica@example.com"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
