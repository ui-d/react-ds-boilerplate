import { TextProps } from "./Text.types.ts";
import { Slot } from "@radix-ui/react-slot";
import { Sizes } from "../../../types.ts";
import { cn } from "../../../utils/helpers.ts";

export const Text = (props: TextProps) => {
  const { children, size, asChild, className, ...domProps } = props;
  const Comp = asChild ? Slot : "p";

  let font: Record<Sizes, string> = {
    sm: "text-500",
    md: "text-600",
    lg: "text-700",
  };

  return (
    <Comp {...domProps} className={cn(font[size], className)}>
      {children}
    </Comp>
  );
};
