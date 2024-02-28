import { Slot } from "@radix-ui/react-slot";
import type { HeadingProps } from "./Heading.types";
import { cn } from "../../../utils/helpers.ts";
import { Sizes } from "../../../types";

export const Heading = (props: HeadingProps) => {
  const {
    variant = "h1",
    size = "lg",
    className,
    children,
    asChild = false,
    ...domProps
  } = props;
  // Explicitly define the type for Comp to accommodate both Slot and native HTML elements
  const Comp = asChild
    ? Slot
    : (variant as keyof JSX.IntrinsicElements | React.ComponentType<any>);

  let font: Record<Sizes, string> = {
    sm: "heading-600-semi",
    md: "heading-900-semi",
    lg: "heading-1000",
  };

  return (
    <Comp {...domProps} className={cn(font[size], className)}>
      {children}
    </Comp>
  );
};
