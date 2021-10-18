import React, { FC } from "react";
// import classNames from "classnames";
import { Listbox, Transition } from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { Typography } from "./Typography";
import classNames from "classnames";

export interface IOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: IOption[];
  selectedOption: IOption;
  setSelectedOption: (option: IOption) => void;
  label?: string;
  // LeadingIcon?: React.ReactElement;
}

// TODO options from outside component
// TODO LeadingIcon
// TODO icons, avatars
export const Select: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  label,
  // LeadingIcon,
}) => {
  return (
    <>
      {label ? (
        <Typography
          variant="sm"
          customWeight="medium"
          customColor="text-gray-700 dark:text-white"
        >
          {label}
        </Typography>
      ) : null}
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={classNames(
                "flex items-center text-md border border-gray-300 h-11 px-3.5 rounded-lg focus:outline-none focus:ring focus:border-primary-100 dark:focus:border-gray-100 dark:focus:border-opacity-10",
                {
                  "text-gray-900 dark:text-white": selectedOption,
                  "text-gray-500 dark:text-gray-300": !selectedOption,
                },
              )}
            >
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
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="inline-flex flex-col bg-white rounded-lg shadow-lg dark:bg-gray-800">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className={classNames(
                      "flex items-center px-3.5 justify-between h-11 text-gray-900 dark:text-white text-md cursor-pointer hover:bg-primary-25 dark:hover:bg-gray-100 dark:hover:bg-opacity-10",
                      {
                        "bg-primary-25 dark:bg-gray-100 dark:bg-opacity-10":
                          option.value === selectedOption.value,
                      },
                    )}
                  >
                    {option.label}
                    {option.value === selectedOption.value ? (
                      <FiCheck className="ml-5 text-primary-600 dark:text-white" />
                    ) : null}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </>
  );
};
