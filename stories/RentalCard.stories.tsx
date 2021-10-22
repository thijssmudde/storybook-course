import React from "react";
import { Meta, Story } from "@storybook/react";
import { IRental, RentalCard, RentalCardProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "RentalCard",
  component: RentalCard,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=257%3A19734",
    },
  },
};

export default meta;

interface Props extends RentalCardProps {
  darkMode: boolean;
}

const rental: IRental = {
  id: 0,
  title: "Single bedroom apartment near Central Station",
  subtitle: "In the heart of the flower market city centre",
  image:
    "https://res.cloudinary.com/tailwindcss/image/upload/v1634674298/image_2_ngqift.png",
  badge: "Rare find",
  rating: "4.8",
  reviews: 20,
  address: "Prinsengracht",
  bed: "1 bed",
  wifi: "Wi-Fi",
  price: "€480",
  currency: "EUR",
};

const StoryRentalCard: Story<Props> = (args) => {
  return (
    <StoryLayout {...args}>
      <RentalCard rental={rental} />
    </StoryLayout>
  );
};

export const Default = StoryRentalCard.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: { exclude: ["rental"] },
};
