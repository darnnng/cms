import { SVGProps } from "react";
import { Arrow } from "./Arrow";
import { Chevron } from "./Chevron";
import { HouseIcon } from "./HouseIcon";
import { Sun } from "./Sun";

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: string | null;
  className?: string;
};

export type IconsMapItem = keyof typeof icons | "" | undefined;

export const iconSizes = {
  sm: 20,
  md: 24,
  lg: 24,
  xl: 32,
  xxl: 40
};

export const icons = {
  arrow: Arrow,
  chevron: Chevron,
  sun: Sun,
  house: HouseIcon
};

export function getIcon(key: IconsMapItem) {
  return key && icons[key] ? icons[key] : icons["arrow"];
}
