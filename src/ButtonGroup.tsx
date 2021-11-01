import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}

export interface ButtonGroupProps<T> {
  active: T;
  setActive: Dispatch<SetStateAction<T>>; // or if you prefer a function use (active: T) => void
  options: IButtonItem<T>[];
}

export const ButtonGroup = <T extends unknown>({
  active,
  setActive,
  options,
}: ButtonGroupProps<T>) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={option.value as string}
            className={classNames(
              "inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-sm focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-500",
              {
                "rounded-l-lg border-r-0": index === 0,
                "border-r-0": index !== 0 && index !== options.length - 1,
                "rounded-r-lg": index === options.length - 1,
                "bg-gray-50 dark:bg-gray-700": active === option.value,
              },
            )}
            onClick={() => setActive(option.value)}
          >
            {option.content}
          </button>
        );
      })}
    </>
  );
};
