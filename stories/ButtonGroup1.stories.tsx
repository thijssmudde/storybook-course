import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiGrid, FiList } from "react-icons/fi";

import { ButtonGroup1, ButtonGroup1Props, options1, options2 } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "ButtonGroup1",
  component: ButtonGroup1,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/My-Travel-App?node-id=11%3A14583",
    },
  },
};

export default meta;

interface Props extends ButtonGroup1Props {
  darkMode: boolean;
}

const StoryButtonGroup1: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = React.useState<string>(
    options1[1].value,
  );

  const [activeItem2, setActiveItem2] = React.useState<string>(
    options2[1].value,
  );

  type ViewOption = "list" | "grid";
  const [viewOption, setViewOption] = React.useState<ViewOption>("list");

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup1
          {...args}
          active={activeItem1}
          setActive={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup1
          {...args}
          active={activeItem2}
          setActive={setActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup1
          active={viewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
          setActive={(active: string) => setViewOption(active as ViewOption)}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup1.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["active", "setActive", "options"] },
};
