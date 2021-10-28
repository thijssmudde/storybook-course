import React from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";
import { Typography } from "../src";
import { colors } from "../src/data";

const meta: Meta = {
  title: "Colors",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=5%3A15",
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const StoryColors: Story<Props> = (args) => (
  <StoryLayout
    {...args}
    className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11"
  >
    {colors.map((color) => (
      <div
        key={color.bgClass}
        className="flex flex-col rounded-lg shadow-lg w-26 h-39 dark:bg-white"
      >
        <div className={`h-20 ${color.bgClass} rounded-t-lg`} />
        <div className="mx-3 my-3">
          <Typography
            variant="lg"
            customWeight="medium"
            customColor="text-gray-900"
          >
            {color.code}
          </Typography>
          <Typography variant="md" customColor="text-gray-500">
            {color.hex}
          </Typography>
        </div>
      </div>
    ))}
  </StoryLayout>
);

export const Default = StoryColors.bind({});

Default.args = {
  darkMode: false,
};
