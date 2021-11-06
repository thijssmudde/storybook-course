import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../src";
import { FiArrowRight, FiStar } from "react-icons/fi";

afterEach(cleanup);

describe("Button", () => {
  it("Renders buttons correctly", () => {
    const { asFragment } = render(
      <>
        <Button variant="primary" disabled>
          Button CTA
        </Button>

        <Button variant="primary" size="sm">
          Button CTA
        </Button>

        <Button variant="secondary" size="md" LeadingIcon={<FiStar />}>
          Button CTA
        </Button>

        <Button
          variant="secondaryGray"
          size="lg"
          TrailingIcon={<FiArrowRight />}
        >
          Button CTA
        </Button>

        <Button variant="tertiary" size="xl" IconOnly={<FiArrowRight />} />

        <Button variant="tertiaryGray" size="2xl" IconOnly={<FiStar />} />
      </>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
