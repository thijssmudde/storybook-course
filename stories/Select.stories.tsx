import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiCalendar, FiDollarSign } from "react-icons/fi";
import { Select, SelectProps, IOption } from "../src";
import StoryLayout from "./StoryLayout";

import { countries, dates, Figma, prices } from "../src/data";

const meta: Meta = {
  title: "Select",
  component: Select,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Select,
    },
  },
};

export default meta;

interface Props extends SelectProps {
  darkMode: boolean;
}

const StorySelect: Story<Props> = (args) => {
  const [selectedCountry, setSelectedCountry] = React.useState<IOption>(
    countries[0],
  );
  const [selectedDate, setSelectedDate] = React.useState<IOption>();
  const [selectedPrice, setSelectedPrice] = React.useState<IOption>();

  const handleSelectCountry = (countryValue: string) => {
    const country = countries.find((p) => p.value === countryValue) as IOption;
    setSelectedCountry(country);
  };

  const handleSelectDate = (dateValue: string) => {
    const date = dates.find((p) => p.value === dateValue) as IOption;
    setSelectedDate(date);
  };

  const handleSelectPrice = (priceValue: string) => {
    const price = prices.find((p) => p.value === priceValue) as IOption;
    setSelectedPrice(price);
  };

  return (
    <StoryLayout darkMode={args.darkMode} className="space-x-3 space-y-3">
      <Select
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={handleSelectCountry}
        placeholder="Select a country"
        width="w-50"
      />

      <Select
        options={dates}
        LeadingIcon={<FiCalendar />}
        selectedOption={selectedDate}
        setSelectedOption={handleSelectDate}
        placeholder="Select a date"
        width="w-50"
      />

      <Select
        options={prices}
        LeadingIcon={<FiDollarSign />}
        selectedOption={selectedPrice}
        setSelectedOption={handleSelectPrice}
        placeholder="Select a price"
        width="w-50"
      />
    </StoryLayout>
  );
};

export const Default = StorySelect.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: {
    exclude: ["options", "selectedOption", "setSelectedOption", "LeadingIcon"],
  },
};
