import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RentalCard, rentals } from "../src";

afterEach(cleanup);

describe("RentalCard", () => {
  it("Renders RentalCard correctly", () => {
    const { asFragment } = render(<RentalCard rental={rentals[0]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders RentalCard without badge", () => {
    const { asFragment } = render(<RentalCard rental={rentals[1]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
