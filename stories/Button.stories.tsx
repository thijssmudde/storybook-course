import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiStar, FiArrowRight } from "react-icons/fi";
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

const StoryButton: Story<Props> = (args) => (
  <StoryLayout {...args} className="space-y-2">
    <Button {...args}>Button CTA</Button>

    <Button {...args} LeadingIcon={<FiStar />}>
      Button CTA
    </Button>

    <Button {...args} TrailingIcon={<FiArrowRight />}>
      Button CTA
    </Button>

    <Button {...args} IconOnly={<FiArrowRight />} />
  </StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
  disabled: false,
};
