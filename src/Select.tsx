import React, { FC } from "react";
import { Listbox } from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import classNames from "classnames";
import { Typography } from "./Typography";
import { IOption } from "./@interfaces";

export interface SelectProps {
  options: IOption[];
  selectedOption: IOption;
  setSelectedOption: (option: IOption) => void;
  label?: string;
  LeadingIcon?: React.ReactElement;
  leadingIconInMenu?: boolean;
}

export const Select: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  label,
  LeadingIcon,
  leadingIconInMenu,
}) => {
  return (
    <div className="relative inline-block">
      {label ? (
        <Typography
          variant="sm"
          customWeight="medium"
          customColor="text-gray-700 dark:text-white"
          className="mb-1.5"
        >
          {label}
        </Typography>
      ) : null}

      <Listbox value={selectedOption} onChange={setSelectedOption}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={classNames(
                "shadow-sm flex items-center text-md border border-gray-300 dark:border-gray-500 h-11 px-3.5 rounded-lg bg-white dark:bg-gray-800",
                "focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20",
                {
                  "text-gray-900 dark:text-white": selectedOption,
                  "text-gray-500 dark:text-gray-300": !selectedOption,
                },
              )}
            >
              {LeadingIcon ? (
                <LeadingIcon.type
                  {...LeadingIcon.props}
                  size={20}
                  className="mr-2 text-gray-400"
                />
              ) : null}

              {selectedOption ? selectedOption.label : "Select team member"}
              <FiChevronDown
                size={20}
                className={classNames(
                  "ml-3.5 text-gray-500 dark:text-gray-300 transform duration-100 ease-out",
                  {
                    "-rotate-180": open,
                  },
                )}
              />
            </Listbox.Button>
            <Listbox.Options
              className={classNames(
                "absolute z-10 inline-flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-lg dark:border-gray-500 dark:bg-gray-800",
                {
                  "top-13": !label,
                  "top-19.5": label,
                },
              )}
            >
              {options.map((option, index) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={classNames(
                    "flex items-center pl-3.5 pr-3 justify-between h-11 text-gray-900 dark:text-white text-md cursor-pointer hover:bg-primary-25 dark:hover:bg-gray-100 dark:hover:bg-opacity-10",
                    {
                      "bg-primary-25 dark:bg-gray-100 dark:bg-opacity-10":
                        selectedOption && option.value === selectedOption.value,
                      "rounded-t-lg": index === 0,
                      "rounded-b-lg": index === options.length - 1,
                    },
                  )}
                >
                  <div className="flex items-center">
                    {LeadingIcon && leadingIconInMenu ? (
                      <LeadingIcon.type
                        {...LeadingIcon.props}
                        size={20}
                        className="mr-2 text-gray-500"
                      />
                    ) : null}
                    {option.label}
                  </div>
                  {selectedOption && option.value === selectedOption.value ? (
                    <FiCheck className="ml-5 text-primary-600 dark:text-white" />
                  ) : null}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};
