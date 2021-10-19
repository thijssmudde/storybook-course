import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiHelpCircle, FiMail } from "react-icons/fi";
import { Input, InputProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Input",
  component: Input,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=12%3A21913",
    },
  },
};

export default meta;

interface Props extends InputProps {
  darkMode: boolean;
}

const StoryInput: Story<Props> = (args) => {
  const [text1, setText1] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText1(e.target.value);
  };

  return (
    <StoryLayout {...args} className="">
      <Input
        type="text"
        value={text1}
        handleChange={handleChange}
        placeholder="Placeholder"
        label="Email"
        LeadingIcon={<FiMail />}
        TrailingIcon={<FiHelpCircle />}
      />
    </StoryLayout>
  );
};

export const Default = StoryInput.bind({});

Default.args = {
  darkMode: false,
};
