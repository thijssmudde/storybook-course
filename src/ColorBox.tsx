import React from "react";
import { IColor } from "./@interfaces";
import { Typography } from "./Typography";

export const ColorBox = ({ color }: { color: IColor }) => (
  <div
    key={color.bgClass}
    className="flex flex-col rounded-lg shadow-lg w-26 h-39 dark:bg-white"
  >
    <div className={`h-20 ${color.bgClass} rounded-t-lg`} />
    <div className="mx-3 my-3">
      <Typography
        variant="lg"
        customWeight="medium"
        customColor="text-gray-900"
      >
        {color.code}
      </Typography>
      <Typography variant="md" customColor="text-gray-500">
        {color.hex}
      </Typography>
    </div>
  </div>
);
