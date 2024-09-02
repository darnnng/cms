import * as Separator from "@radix-ui/react-separator";
import clsx from "clsx";
import { DividerProps } from "./Divider.types";
import "./styles.css";

export const Divider = ({ className, orientation }: DividerProps) => {
  return (
    <Separator.Root
      className={clsx("SeparatorRoot", className)}
      decorative
      orientation={orientation}
      // style={{ margin: "0 15px" }}
    />
  );
};
