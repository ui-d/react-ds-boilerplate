import { HTMLAttributes } from "react"

type FeatureSectionBaseProps = {
  children: React.ReactNode
  className?: string
}

export type FeatureSectionProps = FeatureSectionBaseProps & HTMLAttributes<HTMLDivElement>
