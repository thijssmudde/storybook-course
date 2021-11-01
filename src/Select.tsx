import React, { FC } from "react";
import { Listbox } from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import classNames from "classnames";
import { IOption } from "./@interfaces";

export interface SelectProps {
  options: IOption[];
  selectedOption: IOption | undefined;
  setSelectedOption: (option: string) => void;
  placeholder?: string;
  LeadingIcon?: React.ReactElement;
  width?: string;
}

export const Select: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  LeadingIcon,
  width,
}) => {
  return (
    <div className={classNames("relative inline-block", width)}>
      <Listbox
        value={selectedOption && selectedOption.value}
        onChange={setSelectedOption}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={classNames(
                "shadow-sm flex items-center text-md border border-gray-300 dark:border-gray-500 h-11 px-3.5 rounded-lg bg-white dark:bg-gray-800",
                "focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20 whitespace-nowrap",
                {
                  "text-gray-900 dark:text-white": selectedOption,
                  "text-gray-500 dark:text-gray-300": !selectedOption,
                },
                width,
              )}
            >
              {LeadingIcon ? (
                <div className="w-5 h-5 mr-2 overflow-hidden">
                  <LeadingIcon.type size={20} className="text-gray-400" />
                </div>
              ) : null}

              {selectedOption ? selectedOption.label : placeholder}
              <FiChevronDown
                size={20}
                className={classNames(
                  "text-gray-500 dark:text-gray-300 transform duration-100 ease-out",
                  {
                    "-rotate-180": open,
                    "ml-auto": width,
                    "ml-3.5": !width,
                  },
                )}
              />
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 inline-flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-lg top-13 dark:border-gray-500 dark:bg-gray-800">
              {options.map((option, index) => (
                <Listbox.Option
                  as={React.Fragment}
                  key={option.value}
                  value={option.value}
                >
                  {({ active, selected }) => (
                    <li
                      className={classNames(
                        "flex items-center pl-3.5 pr-3 justify-between h-11 text-gray-900 dark:text-white text-md cursor-pointer hover:bg-primary-25 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 whitespace-nowrap",
                        {
                          "bg-primary-25 dark:bg-gray-100 dark:bg-opacity-10":
                            active,
                          "rounded-t-lg": index === 0,
                          "rounded-b-lg": index === options.length - 1,
                        },
                      )}
                    >
                      <div className="flex items-center">{option.label}</div>
                      {selected ? (
                        <FiCheck className="ml-5 text-primary-600 dark:text-white" />
                      ) : null}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};
