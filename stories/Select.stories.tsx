import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiSearch } from "react-icons/fi";
import { Select, SelectProps, IOption } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Select",
  component: Select,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=11%3A15146",
    },
  },
};

export default meta;

interface Props extends SelectProps {
  darkMode: boolean;
}

const people: IOption[] = [
  { value: "1", label: "Durward Reynolds" },
  { value: "2", label: "Kenton Towne" },
  { value: "3", label: "Therese Wunsch" },
  { value: "4", label: "Benedict Kessler" },
  { value: "5", label: "Katelyn Rohan" },
];

const StorySelect: Story<Props> = (args) => {
  const [selectedPerson, setSelectedPerson] = React.useState<IOption>(
    people[0],
  );

  const handleSelect = (value: IOption) => {
    const personId = value as unknown as string;
    const person = people.find((p) => p.value === personId);
    setSelectedPerson(person);
  };

  return (
    <StoryLayout {...args} className="space-y-2">
      <Select
        {...args}
        options={people}
        selectedOption={selectedPerson}
        setSelectedOption={handleSelect}
        // LeadingIcon={<FiSearch size={20} />}
      />
    </StoryLayout>
  );
};

export const Default = StorySelect.bind({});

Default.args = {
  label: "Team member",
  darkMode: false,
};
