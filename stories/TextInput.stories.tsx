import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiAlertCircle, FiHelpCircle, FiMail } from "react-icons/fi";
import { TextInput, TextInputProps } from "../src";
import { Figma } from "../src/data";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "TextInput",
  component: TextInput,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.TextInput,
    },
  },
};

export default meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

const StoryTextInput: Story<Props> = (args) => {
  const [text1, setText1] = React.useState<string>(args.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText1(e.target.value);
  };

  return (
    <StoryLayout {...args} className="flex space-x-8">
      <div>
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          error="This is an error message."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
      <div>
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message."
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryTextInput.bind({});

Default.args = {
  darkMode: false,
  disabled: false,
  value: "",
};

Default.parameters = {
  controls: {
    exclude: [
      "value",
      "type",
      "handleChange",
      "label",
      "leadingText",
      "placeholder",
      "error",
      "helperText",
      "LeadingIcon",
      "TrailingIcon",
    ],
  },
};
