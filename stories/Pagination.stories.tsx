import React from "react";
import { Meta, Story } from "@storybook/react";

import { Paginate, PaginationProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Paginate",
  component: Paginate,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/?node-id=13%3A24715",
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
  totalPage: 10,
  isMobile: false,
};
