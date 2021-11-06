import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ColorBox, colors } from "../src";

afterEach(cleanup);

describe("ColorBox", () => {
  it("Renders ColorBox correctly", () => {
    const { asFragment } = render(
      <>
        <ColorBox key={colors[0].bgClass} color={colors[0]} />
        <ColorBox key={colors[1].bgClass} color={colors[1]} />
        <ColorBox key={colors[2].bgClass} color={colors[2]} />
        <ColorBox key={colors[3].bgClass} color={colors[3]} />
      </>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
