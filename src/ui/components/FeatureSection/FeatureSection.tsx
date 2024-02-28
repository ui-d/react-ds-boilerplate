import { FeatureSectionProps } from "./FeatureSection.types.ts"

export const FeatureSection = (props: FeatureSectionProps) => {
  const { children, className, ...domProps } = props

  return (
    <div className={`container mx-auto px-5 xl:px-10 ${className}`} {...domProps}>
      {children}
    </div>
  )
}
