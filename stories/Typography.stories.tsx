import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends TypographyProps {
  darkMode: boolean;
}

// variant
// {args.customWeight}

const StoryTypography: Story<Props> = (args) => {
  const isHeading = args.variant.startsWith("h");

  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args}>
        {isHeading ? "Display" : "Text"} {args.variant} <br />{" "}
        {args.customWeight}
      </Typography>
    </StoryLayout>
  );
};

export const Default = StoryTypography.bind({});

Default.args = {
  variant: "h1",
  customColor: "text-primary-600 dark:text-white",
  customWeight: "regular",
  darkMode: false,
};
