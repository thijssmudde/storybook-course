import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}

export interface ButtonGroupProps<T> {
  active: T;
  setActive: Dispatch<SetStateAction<T>>;
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
