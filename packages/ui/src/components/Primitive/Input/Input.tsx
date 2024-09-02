import { clsx } from "clsx";
import { forwardRef } from "react";
import { getIcon } from "../../Icons";
import { BaseInputProps, InputProps } from "./Input.types";

const Base = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      className,
      type,
      disabled,
      display = "regular",
      errorMessage,
      hasIcon,
      hasButton,
      ...props
    },
    reference
  ) => {
    return (
      <div className="relative">
        <input
          className={clsx(
            "appearance-none h-40 text-sm w-full px-16 py-8 mt-4 rounded-full  border-2 border-custom-gray-100 text-primary font-normal text-left",
            errorMessage
              ? "border-custom-red-error border-2 focus:border-custom-red-error hover:border-red"
              : "hover:border-input-hover",
            disabled && "bg-input-disabled border-input-disabled text-disabled",
            !hasButton && "rounded-l-0 rounded-r-full",
            hasIcon && "pl-40",

            className
          )}
          type={type}
          disabled={disabled}
          ref={reference}
          autoComplete="new-password"
          {...props}
        />
        {errorMessage && (
          <p className="text-xs ml-16 text-custom-red-error absolute">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      icon,
      button,
      disabled,
      className,
      containerClass,
      label,
      errorMessage,
      ...props
    },
    reference
  ) => {
    const Icon = getIcon(icon);

    return (
      <div className={clsx("flex items-center content-start", containerClass)}>
        <div className="w-full h-full relative">
          {label && <label className="ml-16  text-sm">{label}</label>}
          {icon && (
            <span className="absolute top-1/2 -translate-y-1/2 left-10 stroke-secondary">
              <Icon />
            </span>
          )}
          <Base
            className={className}
            hasIcon={icon !== undefined}
            hasButton={button !== undefined}
            type={type}
            disabled={disabled}
            errorMessage={errorMessage}
            ref={reference}
            {...props}
          />
        </div>
      </div>
    );
  }
);
