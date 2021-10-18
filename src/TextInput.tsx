import React, { FC } from "react";
import classNames from "classnames";

export interface TextInputProps {}

export const TextInput: FC<TextInputProps> = ({}) => {
  return <div className={classNames()}>Textinput</div>;
};
