import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const internalSpacer = cva("div", {
  variants: {
    size: {
      i200: ["h-8"],
      i300: ["h-10"],
      i400: ["h-12"],
      i500: ["h-12 md:h-14"],
      i600: ["h-12 md:h-16 lg:h-16 xl:h-20 2xl:h-20"],
    },
  },
  defaultVariants: {
    size: "i200",
  },
});

export interface InternalSpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof internalSpacer> {}

export const InternalSpacer: React.FC<InternalSpacerProps> = ({
  size,
  ...props
}) => <div {...props} className={internalSpacer({ size })} />;
