import classNames from "classnames";
import React, { FC, ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryGray"
  | "tertiary"
  | "tertiaryGray";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement;
  variant: ButtonVariant;
  size?: ButtonSize;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  IconOnly?: React.ReactElement;
  disabled?: boolean;
}

const ButtonBaseClasses =
  "flex items-center rounded-lg font-medium focus:outline-none";

type ButtonState = "default" | "hover" | "focus" | "disabled";

const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: "bg-primary-600 dark:bg-gray-800 text-white dark:text-white",
    hover: "hover:bg-primary-700",
    focus: "focus:ring focus:border-primary-100",
    disabled: "bg-primary-200 text-white",
  },
  secondary: {
    default: "bg-primary-50 text-primary-700",
    hover: "hover:bg-primary-100",
    focus: "focus:ring focus:border-primary-100",
    disabled: "bg-primary-25 text-primary-300",
  },
  secondaryGray: {
    default: "bg-white text-gray-700 border border-gray-300",
    hover: "hover:bg-gray-50 hover:text-gray-800",
    focus: "focus:ring focus:border-gray-100",
    disabled: "border border-gray-200 text-gray-300",
  },
  tertiary: {
    default: "bg-white text-primary-700",
    hover: "hover:bg-primary-50",
    focus: "",
    disabled: "bg-white text-gray-300",
  },
  tertiaryGray: {
    default: "bg-white text-gray-500",
    hover: "hover:bg-gray-50 hover:text-gray-600",
    focus: "",
    disabled: "bg-white text-gray-300",
  },
};

const ButtonSizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-4.5 text-md",
  xl: "h-12 px-5 text-md",
  "2xl": "h-15 px-7 text-lg",
};

const ButtonIconSizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-11 w-11",
  xl: "h-12 w-12",
  "2xl": "h-15 w-15",
};

// Dark Mode
export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  disabled,
  ...buttonProps
}) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];
  const ButtonIconSizeClassName = ButtonIconSizeClasses[size];

  return (
    <button
      {...buttonProps}
      className={classNames(ButtonBaseClasses, {
        [ButtonSizeClasses[size]]: !IconOnly,
        [classNames(ButtonIconSizeClassName, "justify-center")]: IconOnly,
        [classNames(
          ButtonVariantClassName.default,
          ButtonVariantClassName.hover,
          ButtonVariantClassName.focus,
        )]: !disabled,
        [classNames(ButtonVariantClassName.disabled, "cursor-not-allowed")]:
          disabled,
      })}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames({
            "mr-2": size !== "2xl",
            "mr-3": size === "2xl",
          })}
        />
      ) : null}
      {children}
      {IconOnly ? (
        <IconOnly.type {...IconOnly.props} size={size === "2xl" ? 24 : 20} />
      ) : null}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames({
            "ml-2": size !== "2xl",
            "ml-3": size === "2xl",
          })}
        />
      ) : null}
    </button>
  );
};
