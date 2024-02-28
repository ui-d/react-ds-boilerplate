import { HTMLAttributes } from "react";

type CardListBaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type FeatureSectionProps = CardListBaseProps &
  HTMLAttributes<HTMLDivElement>;
