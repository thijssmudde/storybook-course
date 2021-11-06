import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ButtonGroup, options1 } from "../src";
import { FiGrid, FiList } from "react-icons/fi";

afterEach(cleanup);

describe("ButtonGroup", () => {
  it("Renders correctly (no icons)", () => {
    const { asFragment, getByText } = render(
      <ButtonGroup active="Leading" setActive={() => {}} options={options1} />,
    );

    expect(getByText("Leading")).toHaveClass("bg-gray-50 dark:bg-gray-700");
    expect(getByText("Middle")).not.toHaveClass("bg-gray-50 dark:bg-gray-700");
    expect(getByText("Trailing")).not.toHaveClass(
      "bg-gray-50 dark:bg-gray-700",
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders correctly (icons)", () => {
    const { asFragment } = render(
      <ButtonGroup
        active="list"
        setActive={() => {}}
        options={[
          {
            content: <FiList size={20} />,
            value: "list",
          },
          {
            content: <FiGrid size={20} />,
            value: "grid",
          },
        ]}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Clicking on different option applies active classes", () => {
    let active = "Leading";

    const { rerender, getByText } = render(
      <ButtonGroup
        active={active}
        setActive={(newActive: string) => {
          active = newActive;
        }}
        options={options1}
      />,
    );

    fireEvent.click(getByText("Middle"));

    rerender(
      <ButtonGroup active={active} setActive={() => {}} options={options1} />,
    );

    expect(getByText("Leading")).not.toHaveClass("bg-gray-50 dark:bg-gray-700");
    expect(getByText("Middle")).toHaveClass("bg-gray-50 dark:bg-gray-700");
    expect(getByText("Trailing")).not.toHaveClass(
      "bg-gray-50 dark:bg-gray-700",
    );
  });
});
