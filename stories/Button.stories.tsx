import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}

const Template: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Button {...args}>Button CTA</Button>
  </StoryLayout>
);

export const StoryButton = Template.bind({});

StoryButton.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
  disabled: false,
};
