import { HeadingSectionProps } from "./HeadingSection.types.ts"

export const HeadingSection = (props: HeadingSectionProps) => {
  const { children, className, ...domProps } = props

  return (
    <div className={`container mx-auto px-5 xl:px-10 ${className}`} {...domProps}>
      {children}
    </div>
  )
}
