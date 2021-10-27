import React from "react";
import { Meta, Story } from "@storybook/react";

import StoryLayout from "./StoryLayout";
import { MobileNavbar, MobileNavbarProps, SideNav } from "../src";
import { navItemsTop, navItemsBottom } from "../src/data";
import { FiX } from "react-icons/fi";

const meta: Meta = {
  title: "MobileNavbar",
  component: MobileNavbar,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/My-Travel-App?node-id=88%3A24089",
    },
  },
};

export default meta;

interface Props extends MobileNavbarProps {
  darkMode: boolean;
}

const StoryMobileNavbar: Story<Props> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StoryLayout {...args} className="" noPadding>
      <MobileNavbar open={open} toggleOpen={handleToggle} />

      {open ? (
        <div
          className="fixed top-0 left-0 z-40 w-screen h-screen bg-gray-500 cursor-pointer bg-opacity-80"
          onClick={() => setOpen(false)}
        >
          <FiX size={40} className="fixed text-white top-6 right-4" />
        </div>
      ) : null}

      {open ? (
        <SideNav
          className="relative z-50 h-screen -mt-20"
          navItemsTop={navItemsTop}
          navItemsBottom={navItemsBottom}
          open={true}
          setOpen={handleToggle}
          username="Veronica Woods"
          email="veronica@example.com"
        />
      ) : null}
    </StoryLayout>
  );
};

export const Default = StoryMobileNavbar.bind({});

Default.args = {
  darkMode: false,
  open: false,
};

Default.parameters = {
  controls: { exclude: ["open", "toggleOpen"] },
};
