import React, { FC } from "react";
// import classNames from "classnames";
// import { FiArrowLeft, FiArrowRight, FiCircle, FiPlus } from "react-icons/fi";

export interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
}) => {
  // Create array of length 10
  const pages = Array(totalPages)
    .fill(0)
    .map((_, index) => index + 1);
  const prevPages = pages.slice(0, page);
  const nextPages = pages.slice(page + 1);

  console.log({ pages });

  return (
    <div>
      {pages.map((p) => (
        <span key={p} onClick={() => setPage(p)}>
          {p}
        </span>
      ))}
    </div>
  );
};
