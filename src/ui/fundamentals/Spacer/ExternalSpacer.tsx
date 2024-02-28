import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const externalSpacer = cva("div", {
  variants: {
    size: {
      400: ["h-10 md:h-12 lg:h-12 xl:h-16 2xl:h-16"],
      500: ["h-20 md:h-20 lg:h-16 xl:h-16 2xl:h-10"],
      600: ["h-24 md:h-24 lg:h-20 xl:h-20 2xl:h-12"],
    },
  },
  defaultVariants: {
    size: 400,
  },
});

export interface ExternalSpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof externalSpacer> {}

export const ExternalSpacer: React.FC<ExternalSpacerProps> = ({
  size,
  ...props
}) => <div {...props} className={externalSpacer({ size })} />;
