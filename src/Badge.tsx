import React, { FC } from "react";
import classNames from "classnames";

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: string | React.ReactElement;
  variant: BadgeVariant;
  size?: BadgeSize;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
}

const BadgeBaseClasses = "inline-flex items-center rounded-2xl font-medium";

const BadgeVariantClasses: Record<BadgeVariant, string> = {
  gray: "bg-gray-100 text-gray-700",
  primary: "bg-primary-50 text-primary-700",
  error: "bg-error-50 text-error-700",
  warning: "bg-warning-50 text-warning-700",
  success: "bg-success-50 text-success-700",
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
  sm: "h-5.5 px-2 text-xs",
  md: "h-6 px-2.5 text-xs",
  lg: "h-7 px-3 text-sm",
};

export const Badge: FC<BadgeProps> = ({
  variant,
  size = "md",
  LeadingIcon,
  TrailingIcon,
  children,
}) => {
  const BadgeVariantClassName = BadgeVariantClasses[variant];
  const BadgeSizeClassName = BadgeSizeClasses[size];

  return (
    <div
      className={classNames(
        BadgeBaseClasses,
        BadgeVariantClassName,
        BadgeSizeClassName,
      )}
    >
      {LeadingIcon ? (
        <LeadingIcon.type {...LeadingIcon.props} className="mr-1.5" />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon.type {...TrailingIcon.props} className="ml-1.5" />
      ) : null}
    </div>
  );
};
