"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import clsx from "clsx";
import { FC } from "react";
import { getIcon } from "../../Icons";
import { ButtonProps } from "./Button.type";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  icon,
  element = "button",
  size = "md",
  iconPosition = "right",
  variant = "outlined",
  //handleClick,
  type
}) => {
  const clsName = clsx(
    "mx-auto rounded-full border border-solid border-black dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-custom-gray-100 dark:hover:bg-custom-gray-900  text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
    icon && iconPosition === "left" && "flex-row-reverse",
    variant === "filled" &&
      "border-none text-white bg-black hover:text-white hover:bg-custom-gray-900",
    className
  );

  const Icon = getIcon(icon);

  return (
    <button type={type} className={clsName}>
      {children}
      {icon && (
        <AccessibleIcon.Root label={icon}>
          <Icon size={size} />
        </AccessibleIcon.Root>
      )}
    </button>
  );
};
