import { ComponentPropsWithoutRef } from "react";
import { Sizes } from "../../../types.ts";

type headingVariants = "h1" | "h2" | "h3" | "h4";

type HeadingSectionBaseProps = {
  size: Sizes;
  variant?: headingVariants;
  header: string;
  description: string;
  className?: string;
};

export type HeadingSectionProps = HeadingSectionBaseProps &
  ComponentPropsWithoutRef<headingVariants>;
