import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const internalSpacer = cva("div", {
  variants: {
    size: {
      sm: ["h-8"],
      md: ["h-10"],
      lg: ["h-12"],
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface InternalSpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof internalSpacer> {}

export const InternalSpacer: React.FC<InternalSpacerProps> = ({
  size,
  ...props
}) => <div {...props} className={internalSpacer({ size })} />;
