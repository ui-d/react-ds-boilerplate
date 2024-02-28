import { HTMLAttributes, ReactNode } from "react";
import { Sizes } from "../../../types.ts";

type TextBaseProps = {
  children: ReactNode;
  size: Sizes;
  className?: string;
  asChild?: boolean;
};

export type TextProps = TextBaseProps &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLElement>;
