import * as React from "react";
import {
  render,
  cleanup,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TextInput, TextInputProps } from "../src";
import { FiHelpCircle, FiMail } from "react-icons/fi";

afterEach(cleanup);

interface ISetupTextInput extends RenderResult {
  input: HTMLInputElement;
}

const setup = ({
  handleChange = () => {},
  disabled,
  label,
  type = "email",
  error,
  helperText,
  leadingText,
  LeadingIcon,
  TrailingIcon,
}: Partial<TextInputProps>): ISetupTextInput => {
  const utils = render(
    <TextInput
      type={type}
      value=""
      leadingText={leadingText}
      handleChange={handleChange}
      label={label}
      error={error}
      placeholder="veronica@example.com"
      helperText={helperText}
      LeadingIcon={LeadingIcon}
      TrailingIcon={TrailingIcon}
      disabled={disabled}
    />,
  );

  const input = utils.getByLabelText("input") as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

describe("TextInput", () => {
  it("Renders TextInput correctly", () => {
    const { asFragment } = setup({
      label: "Email",
      error: "This is an error message",
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders TextInput with leadingText correctly", () => {
    const { asFragment } = setup({
      type: "text",
      helperText: "This is a hint text to help the user.",
      leadingText: "https://",
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders TextInput with LeadingIcon and TrailingIcon", () => {
    const { asFragment } = setup({
      LeadingIcon: <FiMail />,
      TrailingIcon: <FiHelpCircle />,
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders TextInput with only a TrailingIcon", () => {
    const { asFragment } = setup({
      type: "email",
      TrailingIcon: <FiHelpCircle />,
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders disabled TextInput correctly", () => {
    const { asFragment } = setup({ disabled: true });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Filling in TextInput works", () => {
    const handleChange = jest.fn();

    const { input } = setup({ handleChange });
    const value = "veronica@example.com";

    fireEvent.change(input, { target: { value } });

    expect(handleChange).toHaveBeenCalledWith(value);
  });

  it("Filling in TextInput does not update if disabled", () => {
    const handleChange = jest.fn();

    const { input } = setup({ handleChange, disabled: true });
    const value = "veronica@example.com";

    fireEvent.change(input, { target: { value } });

    expect(handleChange).toHaveBeenCalledTimes(0);
  });
});
