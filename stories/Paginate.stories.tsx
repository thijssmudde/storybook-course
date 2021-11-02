import React from "react";
import { Meta, Story } from "@storybook/react";

import { Figma, Paginate, PaginationProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Paginate",
  component: Paginate,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Paginate,
    },
  },
};

export default meta;

interface Props extends PaginationProps {
  darkMode: boolean;
}

const StoryPagination: Story<Props> = (args) => {
  const [page, setPage] = React.useState<number>(args.page);

  React.useEffect(() => {
    if (page >= 0 && page <= 10) {
      setPage(args.page);
    }
  }, [args.page]);

  return (
    <StoryLayout {...args} className="space-y-4">
      <Paginate
        page={page}
        setPage={setPage}
        totalPages={10}
        isMobile={args.isMobile}
      />
    </StoryLayout>
  );
};

export const Default = StoryPagination.bind({});

Default.args = {
  darkMode: false,
  page: 0,
  totalPages: 10,
  isMobile: false,
};

Default.parameters = {
  controls: { exclude: ["setPage"] },
};
