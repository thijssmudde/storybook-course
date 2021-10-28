import * as React from "react";
import { render } from "@testing-library/react"; // fireEvent
import "@testing-library/jest-dom/extend-expect";

describe("Colors", () => {
  it("Check if primary color 600 corresponds to design system", () => {
    const content = "Content";

    const { getByText } = render(
      <div className="text-primary-600">{content}</div>,
    );

    const textElement = getByText(content);
    const styles = window.getComputedStyle(textElement);
    expect(styles).toMatch("h1");
  });
});
