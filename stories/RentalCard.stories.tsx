import React from "react";
import { Meta, Story } from "@storybook/react";
import { RentalCard, RentalCardProps } from "../src";
import StoryLayout from "./StoryLayout";
import { rentals, Figma } from "../src/data";

const meta: Meta = {
  title: "RentalCard",
  component: RentalCard,
  argTypes: {
    rentalAddress: {
      options: [rentals[0].address, rentals[1].address, rentals[2].address],
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.RentalCard,
    },
  },
};

export default meta;

interface Props extends RentalCardProps {
  darkMode: boolean;
  rentalAddress: string;
  rareFind: boolean;
}

const StoryRentalCard: Story<Props> = (args) => {
  const rentalIndex = rentals.findIndex(
    (rental) => rental.address === args.rentalAddress,
  );

  // adjust badge based on rarefind
  const rental = {
    ...rentals[rentalIndex],
    badge: args.rareFind ? "Rare Find" : "",
  };

  return (
    <StoryLayout {...args}>
      <RentalCard rental={rental} />
    </StoryLayout>
  );
};

export const Default = StoryRentalCard.bind({});

Default.args = {
  darkMode: false,
  rentalAddress: rentals[0].address,
  rareFind: true,
};

Default.parameters = {
  controls: { exclude: ["rental"] },
};
