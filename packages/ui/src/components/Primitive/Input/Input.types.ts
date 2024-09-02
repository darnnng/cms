import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes
} from "react";
import { IconsMapItem } from "../../Icons";

type Display = "small" | "regular";

export type BaseInputProps = {
  display?: Display;
  errorMessage?: string;
  hasIcon?: boolean;
  hasButton?: boolean;
  type: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type InputProps = {
  button?: ButtonProps;
  className?: string;
  containerClass?: string;
  display?: Display;
  errorMessage?: string;
  icon?: IconsMapItem;
  type?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;
