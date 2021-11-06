import React from "react";
import { Meta, Story } from "@storybook/react";
import { images } from "../src/data/images/index";

const meta: Meta = {
  title: "Tailwind",
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

const TailwindStory: Story<Props> = () => {
  return (
    <div className="flex mt-6 ml-6 w-70">
      <img
        src={images.demoAvatar}
        alt="avatar"
        className="w-10 h-10 rounded-full cursor-pointer select-none"
      />
      <div className="flex flex-col justify-between ml-3">
        <p className="text-sm font-medium text-gray-700 dark:text-white">
          Veronica Woods
        </p>
        <p className="text-sm font-normal text-gray-500">
          veronica@example.com
        </p>
      </div>
    </div>
  );
};

export const Default = TailwindStory.bind({});
