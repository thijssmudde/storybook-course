import React from "react";
import { Meta, Story } from "@storybook/react";
// import { FiSearch } from "react-icons/fi";
import { SideNav, SideNavProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "SideNav",
  component: SideNav,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=14%3A22794",
    },
  },
};

export default meta;

interface Props extends SideNavProps {
  darkMode: boolean;
}

const StorySideNav: Story<Props> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <StoryLayout {...args} className="">
      <SideNav open={open} setOpen={setOpen} />
    </StoryLayout>
  );
};

export const Default = StorySideNav.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["open", "setOpen"] },
};
