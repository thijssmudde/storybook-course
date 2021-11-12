// import * as React from "react";
// import { render, cleanup, RenderResult } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { ISideNavProps, SideNav } from "./SideNav";
// import { navItemsTop, navItemsBottom } from "../data/navItems";

// afterEach(cleanup);

// const setup = ({ open }: Partial<ISideNavProps>): ISetupSideNav => {
//   const utils = render(
//     <SideNav
//       className="relative z-50 h-screen -mt-20"
//       navItemsTop={navItemsTop}
//       navItemsBottom={navItemsBottom}
//       open={open ?? false}
//       setOpen={() => {}}
//       username="Veronica Woods"
//       email="veronica@example.com"
//     />,
//   );

//   const sideNav = utils.getByTestId("input") as HTMLElement;

//   return {
//     sideNav,
//     ...utils,
//   };
// };

// // TODO test filling in the searchString
// // TODO test opening/closing of SideNav
// describe("SideNav", () => {
//   it("Renders SideNav (open) correctly", () => {
//     const { asFragment } = setup({ open: true });

//     expect(asFragment()).toMatchSnapshot();
//   });

//   it("Renders SideNav (closed) correctly", () => {
//     const { asFragment } = setup({ open: false });

//     expect(asFragment()).toMatchSnapshot();
//   });

//   // it("Filling in SearchInput works", () => {
//   //   const handleChange = jest.fn();

//   //   const { asFragment } = setup({open: true});
//   //   const value = "veronica@example.com";

//   //   fireEvent.change(input, { target: { value } });

//   //   expect(handleChange).toHaveBeenCalledWith(value);
//   // });
// });
