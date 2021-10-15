import React from "react";
import classNames from "classnames";
import "../src/styles/tailwind.css";
import "../src/styles/styles.css";
import "@fontsource/inter";

interface IIArgs {
  darkMode: boolean;
  className?: string;
  children: React.ReactElement;
}

const StoryLayout = (args: IIArgs) => {
  return (
    <div
      className={classNames({ dark: args.darkMode }, args.className, "-m-4")}
    >
      <div className={classNames({ "bg-gray-900": args.darkMode }, "p-4")}>
        {args.children}
      </div>
    </div>
  );
};

export default StoryLayout;
