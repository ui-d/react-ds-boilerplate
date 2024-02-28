import { FeatureSectionProps } from "./CardList.types.ts";

export const CardList = (props: FeatureSectionProps) => {
  const { children, className, ...domProps } = props;

  return (
    <div
      className={`container mx-auto px-5 xl:px-10 ${className}`}
      {...domProps}
    >
      {children}
    </div>
  );
};
