import React from "react";
import { Meta, Story } from "@storybook/react";

import { Pagination, PaginationProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Pagination",
  component: Pagination,
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
  const totalPages = 10;

  React.useEffect(() => {
    if (page >= 0 && page <= 10) {
      setPage(args.page);
    }
  }, [args.page]);

  return (
    <StoryLayout {...args} className="space-y-4">
      <Pagination page={page} setPage={setPage} />
      {/* <div>
        <Pagination
          {...args}
          active={activeItem1}
          setActive={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <Pagination
          {...args}
          active={activeItem2}
          setActive={setActiveItem2}
          options={options2}
        />
      </div> */}
    </StoryLayout>
  );
};

export const Default = StoryPagination.bind({});

Default.args = {
  darkMode: false,
  page: 0,
};
