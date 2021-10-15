import classNames from "classnames";
import React, { FC, ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryGray"
  | "tertiary"
  | "tertiaryGray"
  | "link"
  | "linkGray";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement;
  variant: ButtonVariant;
  size?: ButtonSize;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  disabled?: boolean;
}

const ButtonBaseClasses = "rounded-lg font-medium";

type ButtonState = "default" | "hover" | "focus" | "disabled";

const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: "bg-primary-600 dark:bg-gray-800 text-white dark:text-white",
    hover: "hover:bg-primary-700",
    focus: "focus:ring focus:border-primary-100",
    disabled: "bg-primary-200",
  },
  secondary: {
    default: "bg-primary-50 text-primary-700",
    hover: "hover:bg-primary-100",
    focus: "",
    disabled: "",
  },
  secondaryGray: {
    default: "bg-white text-gray-700 border border-gray-300",
    hover: "",
    focus: "",
    disabled: "",
  },
  tertiary: {
    default: "bg-white text-primary-700",
    hover: "",
    focus: "",
    disabled: "",
  },
  tertiaryGray: {
    default: "bg-white text-gray-500",
    hover: "",
    focus: "",
    disabled: "",
  },
  link: {
    default: "bg-white text-primary-700",
    hover: "",
    focus: "",
    disabled: "",
  },
  linkGray: {
    default: "bg-white text-gray-500",
    hover: "",
    focus: "",
    disabled: "",
  },
};

const ButtonSizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-4.5 text-md",
  xl: "h-12 px-5 text-md",
  "2xl": "h-15 px-7 text-lg",
};

// LeadingIcon
// TrailingIcon
// Icon Only
// Dark Mode

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  LeadingIcon,
  TrailingIcon,
  disabled,
  ...buttonProps
}) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];
  const ButtonSizeClassName = ButtonSizeClasses[size];

  return (
    <button
      {...buttonProps}
      className={classNames(
        ButtonBaseClasses,
        ButtonVariantClassName.default,
        ButtonVariantClassName.hover,
        ButtonVariantClassName.focus,
        {
          [classNames(
            ButtonVariantClassName.focus,
            "cursor-not-allowed pointer-events-none",
          )]: disabled,
        },
        ButtonSizeClassName,
      )}
    >
      {children}
    </button>
  );
};
