import React from "react";
import classNames from "classnames";

interface IButtonItem {
  value: string;
  content: React.ReactNode;
}

export interface ButtonGroup1Props {
  active: string;
  setActive: (active: string) => void;
  options: IButtonItem[];
}

export const ButtonGroup1 = ({
  active,
  setActive,
  options,
}: ButtonGroup1Props) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={option.value as string}
            className={classNames("btn-group", {
              "rounded-l-lg border-r-0": index === 0,
              "border-r-0": index !== 0 && index !== options.length - 1,
              "rounded-r-lg": index === options.length - 1,
              "bg-gray-50 dark:bg-gray-700": active === option.value,
            })}
            onClick={() => setActive(option.value)}
          >
            {option.content}
          </button>
        );
      })}
    </>
  );
};
