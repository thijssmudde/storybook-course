import React, { FC } from "react";
import classNames from "classnames";
import { Typography } from ".";

export interface InputProps {
  type: "text" | "email";
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
}

export const Input: FC<InputProps> = ({
  type,
  value,
  handleChange,
  label,
  placeholder,
  LeadingIcon,
  TrailingIcon,
}) => {
  return (
    <div className={classNames("w-80 relative")}>
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

      <div className="h-11 w-full absolute flex items-center justify-between px-3.5 pointer-events-none">
        {LeadingIcon ? <LeadingIcon.type className="text-gray-400" /> : <div />}
        {TrailingIcon ? <TrailingIcon.type className="text-gray-400" /> : null}
      </div>

      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={classNames(
          "w-80 text-gray-900 text-md border border-gray-300 rounded-lg h-11 ",
          {
            "pl-9": LeadingIcon,
            "pr-9": TrailingIcon,
          },
        )}
      />
    </div>
  );
};
