import React from "react";
import { Meta, Story } from "@storybook/react";
// import { FiSearch } from "react-icons/fi";
import { Navbar, NavbarProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Navbar",
  component: Navbar,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=14%3A22794",
    },
  },
};

export default meta;

interface Props extends NavbarProps {
  darkMode: boolean;
}

const StoryNavbar: Story<Props> = (args) => {
  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <StoryLayout {...args} className="">
      <Navbar open={open} setOpen={setOpen} />
    </StoryLayout>
  );
};

export const Default = StoryNavbar.bind({});

Default.args = {
  darkMode: false,
};
