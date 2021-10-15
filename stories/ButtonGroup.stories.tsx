import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiArrowLeft, FiArrowRight, FiCircle, FiPlus } from "react-icons/fi";

import { ButtonGroup, ButtonGroupProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/My-Travel-App?node-id=11%3A14583",
    },
  },
};

export default meta;

interface Props extends ButtonGroupProps {
  darkMode: boolean;
}

const StoryButtonGroup: Story<Props> = (args) => {
  const options1 = [
    { value: "Leading", content: "Leading" },
    { value: "Middle", content: "Middle" },
    { value: "Trailing", content: "Trailing" },
  ];
  const [activeItem1, setActiveItem1] = React.useState<string>(
    options1[1].value,
  );

  const options2 = [
    {
      value: "first",
      content: (
        <>
          <FiCircle size={20} className="mr-2" /> First
        </>
      ),
    },
    {
      value: "second",
      content: (
        <>
          <FiCircle size={20} className="mr-2" /> Second
        </>
      ),
    },
    {
      value: "third",
      content: (
        <>
          <FiCircle size={20} className="mr-2" /> Third
        </>
      ),
    },
  ];

  const [activeItem2, setActiveItem2] = React.useState<string>(
    options2[1].value,
  );

  const options3 = [
    { value: "first", content: <FiArrowLeft size={20} /> },
    { value: "second", content: <FiPlus size={20} /> },
    { value: "third", content: <FiArrowRight size={20} /> },
  ];
  const [activeItem3, setActiveItem3] = React.useState<string>(
    options3[1].value,
  );

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          {...args}
          active={activeItem1}
          setActive={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          {...args}
          active={activeItem2}
          setActive={setActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup
          {...args}
          active={activeItem3}
          setActive={setActiveItem3}
          options={options3}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup.bind({});

Default.args = {
  darkMode: false,
};
