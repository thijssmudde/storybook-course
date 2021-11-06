import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Badge, images } from "../src";
import { FiArrowRight, FiStar } from "react-icons/fi";

afterEach(cleanup);

describe("Badge", () => {
  it("Renders badges correctly", () => {
    const { asFragment } = render(
      <>
        <Badge variant="gray" size="sm" LeadingIcon={<FiStar />}>
          Label
        </Badge>

        <Badge
          variant="primary"
          size="md"
          LeadingIcon={<img src={images.NL} alt="nl" className="w-4 h-4" />}
        >
          Label
        </Badge>

        <Badge variant="error" size="lg" TrailingIcon={<FiArrowRight />}>
          Label
        </Badge>

        <Badge variant="warning" size="sm">
          Label
        </Badge>

        <Badge variant="error" size="sm">
          Label
        </Badge>
      </>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
