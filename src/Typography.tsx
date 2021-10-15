import classNames from "classnames";
import React, { FC } from "react";

type TypographyVariant =
  // Text
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  // Display
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

type TypographyWeightOption = "regular" | "medium" | "semibold" | "bold";

type TypographyWeightValue =
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold";

export interface TypographyProps {
  variant: TypographyVariant;
  customColor?: string;
  customWeight?: TypographyWeightOption;
  children: string | React.ReactNode;
}

const TypographyVariantClasses: Record<TypographyVariant, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h6: "text-h6",
  h5: "text-h5",
  h4: "text-h4",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1",
};

// regular, medium, semibold, bold
const TypographyWeightClasses: Record<
  TypographyWeightOption,
  TypographyWeightValue
> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Typography: FC<TypographyProps> = ({
  variant = "md",
  customColor,
  customWeight = "regular",
  children,
}) => {
  const TypographyVariantClassName = TypographyVariantClasses[variant];
  const TypographyWeightClassName = TypographyWeightClasses[customWeight];

  // h1-h6 should have correct component
  // others should be p
  const isHeading = variant.startsWith("h");
  const Component = (isHeading ? variant : "p") as keyof JSX.IntrinsicElements;

  const defaultColor = "text-black dark:text-white";

  const trackingClassName = "tracking-tight";

  return (
    <Component
      className={classNames(
        TypographyVariantClassName,
        TypographyWeightClassName,
        {
          [trackingClassName]: ["h1", "h2", "h3"].includes(variant),
          [defaultColor]: !customColor,
        },
        customColor,
      )}
    >
      {children}
    </Component>
  );
};
