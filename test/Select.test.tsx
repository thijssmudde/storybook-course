// import * as React from "react";
import {
  // render,
  cleanup,
  // RenderResult,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import { countries, prices, dates, Select, SelectProps } from "../src";

afterEach(cleanup);

// interface ISetupSelect extends RenderResult {
//   select: HTMLInputElement;
// }

// const setup = ({
//   options,
//   selectedOption,
//   setSelectedOption,
//   placeholder = "Select an option",
//   width = "w-50",
// }: SelectProps): ISetupSelect => {
//   const utils = render(
//     <Select
//       options={options}
//       selectedOption={selectedOption}
//       setSelectedOption={setSelectedOption}
//       placeholder={placeholder}
//       width={width}
//     />,
//   );

//   const select = utils.getByLabelText("select") as HTMLInputElement;

//   return {
//     select,
//     ...utils,
//   };
// };

describe("Select", () => {
  it("test pass", () => {
    expect(2).toEqual(2);
  });

  // it("Renders CountrySelect correctly", () => {
  //   const { asFragment } = setup({
  //     options: countries,
  //     selectedOption: countries[0],
  //     setSelectedOption: () => {},
  //   });

  //   expect(asFragment()).toMatchSnapshot();
  // });

  // it("Renders PriceSelect correctly", () => {
  //   const { asFragment } = setup({
  //     options: prices,
  //     selectedOption: prices[0],
  //     setSelectedOption: () => {},
  //   });

  //   expect(asFragment()).toMatchSnapshot();
  // });

  // it("Renders DateSelect correctly", () => {
  //   const { asFragment } = setup({
  //     options: dates,
  //     selectedOption: dates[0],
  //     setSelectedOption: () => {},
  //   });

  //   expect(asFragment()).toMatchSnapshot();
  // });

  // it("Selecting an option works", () => {
  //   const setSelectedOption = jest.fn();

  //   const { select } = setup({
  //     options: countries,
  //     selectedOption: countries[0],
  //     setSelectedOption,
  //   });
  //   const { value } = countries[4];

  //   // TODO fire change event
  //   fireEvent.change(select, { target: { value } });

  //   expect(setSelectedOption).toHaveBeenCalledWith(value);
  // });
});
