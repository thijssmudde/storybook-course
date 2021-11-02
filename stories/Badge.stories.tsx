import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Badge, BadgeProps, Figma, images } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Badge,
    },
  },
};

export default meta;

interface Props extends BadgeProps {
  darkMode: boolean;
}

const StoryBadge: Story<Props> = (args) => (
  <StoryLayout {...args} className="inline-flex flex-col space-y-2">
    <Badge {...args} LeadingIcon={<FiStar />}>
      Label
    </Badge>

    <Badge
      {...args}
      LeadingIcon={<img src={images.NL} alt="nl" className="w-4 h-4" />}
    >
      Label
    </Badge>

    <Badge {...args} TrailingIcon={<FiArrowRight />}>
      Label
    </Badge>
  </StoryLayout>
);

export const Default = StoryBadge.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "className"] },
};
