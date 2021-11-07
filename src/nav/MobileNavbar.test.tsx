import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MobileNavbar } from "./MobileNavbar";

afterEach(cleanup);

describe("MobileNavbar", () => {
  it("Renders MobileNavbar open correctly", () => {
    const { asFragment } = render(<MobileNavbar open toggleOpen={() => {}} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders MobileNavbar closed correctly", () => {
    const { asFragment } = render(
      <MobileNavbar open={false} toggleOpen={() => {}} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Can open/close MobileNavbar", () => {
    let open = true;

    const { rerender, getByTestId } = render(
      <MobileNavbar
        open={open}
        toggleOpen={() => {
          open = !open;
        }}
      />,
    );

    // Close
    fireEvent.click(getByTestId("toggleOpen"));

    rerender(
      <MobileNavbar
        open={open}
        toggleOpen={() => {
          open = !open;
        }}
      />,
    );

    expect(open).toEqual(false);

    // Open
    fireEvent.click(getByTestId("toggleOpen"));

    rerender(
      <MobileNavbar
        open={open}
        toggleOpen={() => {
          open = !open;
        }}
      />,
    );

    expect(open).toEqual(true);
  });
});
