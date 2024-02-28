import type { ReactNode } from "react";
import { ComponentPropsWithRef } from "react";
import type { Sizes, HeadingVariants } from "../../../types.ts";

export type HeadingBaseProps = {
  /** Set heading variant which determinses the size.
   * @default h1
   */
  variant?: HeadingVariants;
  /** Font size */
  size: Sizes;
  /** Font weight */
  weight?: "normal" | "bold";
  /** CSS classes. */
  className?: string;
  /** Heading content */
  children: ReactNode;
  asChild?: boolean;
};

export type HeadingProps = HeadingBaseProps &
  ComponentPropsWithRef<HeadingVariants>;
