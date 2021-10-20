import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiUser } from "react-icons/fi";
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
  { value: "1", label: "Gary Johnson" },
  { value: "2", label: "Andrew Clarke" },
  { value: "3", label: "Billie Hinds" },
  { value: "4", label: "Charles Smith" },
  { value: "5", label: "Landon Salls" },
];

const usernames: IOption[] = [
  {
    value: "1",
    label: (
      <>
        Gary Johnson <span className="ml-2 text-gray-500">@gjohnson</span>
      </>
    ),
  },
  {
    value: "2",
    label: (
      <>
        Andrew Clarke <span className="ml-2 text-gray-500">@aclark</span>
      </>
    ),
  },
  {
    value: "3",
    label: (
      <>
        Billie Hinds <span className="ml-2 text-gray-500">@bhinds</span>
      </>
    ),
  },
  {
    value: "4",
    label: (
      <>
        Charles Smith <span className="ml-2 text-gray-500">@csmith</span>
      </>
    ),
  },
  {
    value: "5",
    label: (
      <>
        Landon Salls <span className="ml-2 text-gray-500">@lsalls</span>
      </>
    ),
  },
];
// TODO add option with flags

const StorySelect: Story<Props> = (args) => {
  const [selectedPerson, setSelectedPerson] = React.useState<IOption>();
  const [selectedUsername, setSelectedUsername] = React.useState<IOption>();

  const handleSelectPerson = (value: IOption) => {
    const personValue = value as unknown as string;
    const person = people.find((p) => p.value === personValue);
    setSelectedPerson(person);
  };

  const handleSelectUsername = (value: IOption) => {
    const usernameValue = value as unknown as string;
    const username = usernames.find((p) => p.value === usernameValue);
    setSelectedUsername(username);
  };

  return (
    <StoryLayout {...args}>
      {/* <Select
        {...args}
        options={people}
        selectedOption={selectedPerson}
        setSelectedOption={handleSelectPerson}
        LeadingIcon={<FiUser />}
        leadingIconInMenu={args.leadingIconInMenu}
      /> */}
      <div className="my-2" />
      <Select
        {...args}
        options={usernames}
        selectedOption={selectedUsername}
        setSelectedOption={handleSelectUsername}
        LeadingIcon={<FiUser />}
        leadingIconInMenu={args.leadingIconInMenu}
      />
    </StoryLayout>
  );
};

export const Default = StorySelect.bind({});

Default.args = {
  label: "Team member",
  darkMode: false,
  leadingIconInMenu: false,
};

Default.parameters = {
  controls: {
    exclude: ["options", "selectedOption", "setSelectedOption", "LeadingIcon"],
  },
};
