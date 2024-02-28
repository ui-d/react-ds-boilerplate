import { ComponentPropsWithoutRef } from "react";

type CardBaseProps = {
  category: string;
  title: string;
  description: string;
  featureImage: string;
  alt: string;
  avatarImage: string;
  author: string;
  className?: string;
};

export type CardProps = CardBaseProps & ComponentPropsWithoutRef<"article">;
