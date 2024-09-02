import { ReactNode } from "react";
import { IconsMapItem } from "../../Icons";
import { sizes } from "./utils/constants";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  icon?: IconsMapItem;
  element?: "link" | "button";
  size?: (typeof sizes)[number];
  variant?: "outlined" | "filled";
  iconPosition?: "left" | "right";
  handleClick?: () => void;
};
