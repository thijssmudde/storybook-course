import React from "react";
import { Meta, Story } from "@storybook/react";

import StoryLayout from "./StoryLayout";
import { SideNav, ISideNavProps } from "../src";
import { navItemsTop, navItemsBottom } from "../src/data";

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

interface Props extends ISideNavProps {
  darkMode: boolean;
}

const StorySideNav: Story<Props> = (args) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <StoryLayout {...args} className="h-screen" noPadding>
      <SideNav
        navItemsTop={navItemsTop}
        navItemsBottom={navItemsBottom}
        open={open}
        setOpen={setOpen}
        username="Veronica Woods"
        email="veronica@example.com"
      />
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
