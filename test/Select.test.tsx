import * as React from "react";
import {
  fireEvent,
  render,
  cleanup,
  RenderResult,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { countries, prices, dates, Select, SelectProps } from "../src";

afterEach(cleanup);

interface ISetupSelect extends RenderResult {
  select: HTMLSelectElement;
}

const setup = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder = "Select an option",
  width = "w-50",
}: SelectProps): ISetupSelect => {
  const utils = render(
    <Select
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      placeholder={placeholder}
      width={width}
    />,
  );

  const select = utils.getByTestId("selectContainer") as HTMLSelectElement;

  return {
    select,
    ...utils,
  };
};

// TODO try to create snapshot of opened dropdown
describe("Select", () => {
  it("Renders CountrySelect correctly", () => {
    const { asFragment } = setup({
      options: countries,
      selectedOption: countries[0],
      setSelectedOption: () => {},
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders PriceSelect correctly", () => {
    const { asFragment } = setup({
      options: prices,
      selectedOption: undefined,
      placeholder: "Select a price",
      setSelectedOption: () => {},
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders DateSelect correctly", () => {
    const { asFragment } = setup({
      options: dates,
      selectedOption: dates[0],
      setSelectedOption: () => {},
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Selecting an option works", () => {
    const setSelectedOption = jest.fn();

    const { getByText, getByTestId } = setup({
      options: countries,
      selectedOption: countries[0],
      setSelectedOption,
    });
    const { value } = countries[4];

    // Click on button
    fireEvent.click(getByTestId("selectButton"));
    // Panel opens, select US
    fireEvent.click(getByText("Washington, US"));

    expect(setSelectedOption).toHaveBeenCalledWith(value);
  });
});
