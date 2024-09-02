import { IconProps, iconSizes } from "./index";

export const Arrow = ({ size = "sm", ...props }: IconProps) => {
  return (
    <svg
      width={iconSizes[size as keyof typeof iconSizes]}
      height={iconSizes[size as keyof typeof iconSizes]}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 21"
      fill="none"
      {...props}
    >
      <path
        d="M10 5.25L14.375 9.625L10 14M14.375 9.625H4.25"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
