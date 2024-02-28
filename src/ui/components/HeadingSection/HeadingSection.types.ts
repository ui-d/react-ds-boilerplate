import { ComponentPropsWithoutRef, ReactComponentElement } from "react";
import { Sizes } from "../../../types.ts";
import { InternalSpacer } from "../../fundamentals";

type headingVariants = "h1" | "h2" | "h3" | "h4";

type HeadingSectionBaseProps = {
  size: Sizes;
  variant?: headingVariants;
  header: string;
  topSpace?: ReactComponentElement<typeof InternalSpacer>;
  bottomSpace?: ReactComponentElement<typeof InternalSpacer>;
  description: string;
  className?: string;
};

export type HeadingSectionProps = HeadingSectionBaseProps &
  ComponentPropsWithoutRef<headingVariants>;
