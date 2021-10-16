import React, { FC } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import classNames from "classnames";

export interface PaginationProps {
  isMobile: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({
  isMobile,
  page,
  setPage,
  totalPages,
}) => {
  // Create array of length 10
  const pages = Array(totalPages)
    .fill(0)
    .map((_, index) => index + 1);

  // middlepages (active)

  const prevPage = () => {
    if (page + 1 > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page + 1 < totalPages) {
      setPage(page + 1);
    }
  };

  // TODO hide parts of pagination
  return (
    <div className="flex items-center w-full h-10 text-sm select-none">
      <span
        className="flex items-center mr-2 text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-200"
        onClick={() => prevPage()}
      >
        <FiArrowLeft
          size={20}
          className={classNames("mr-3", { "dark:text-white": isMobile })}
        />
        {!isMobile ? "Previous" : null}
      </span>
      <span className="flex items-center justify-center flex-grow">
        {!isMobile
          ? pages.map((p) => (
              <span
                key={p}
                className={classNames(
                  "flex items-center justify-center h-10 w-10 rounded-full cursor-pointer",
                  {
                    "text-gray-500": p !== page + 1,
                    "bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white":
                      p === page + 1,
                  },
                )}
                onClick={() => setPage(p - 1)}
              >
                {p}
              </span>
            ))
          : null}

        {isMobile ? (
          <span className="text-gray-700 dark:text-white">
            Page {page + 1} of {totalPages}
          </span>
        ) : null}
      </span>
      <span
        className="flex items-center ml-2 text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-200"
        onClick={() => nextPage()}
      >
        {!isMobile ? "Next" : null}
        <FiArrowRight
          size={20}
          className={classNames("ml-3", { "dark:text-white": isMobile })}
        />
      </span>
    </div>
  );
};
