import React from "react";
import { Meta, Story } from "@storybook/react";
// import { FiSearch } from "react-icons/fi";
import { TextInput, TextInputProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "TextInput",
  component: TextInput,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=12%3A21913",
    },
  },
};

export default meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

const StoryTextInput: Story<Props> = (args) => {
  return (
    <StoryLayout {...args} className="">
      <TextInput />
    </StoryLayout>
  );
};

export const Default = StoryTextInput.bind({});

Default.args = {
  darkMode: false,
};
