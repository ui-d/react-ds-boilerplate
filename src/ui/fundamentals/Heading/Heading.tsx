import { HeadingProps } from "./Heading.ts"

export const Heading = (props: HeadingProps) => {
  const { children, className, ...domProps } = props

  return (
    <div className={`container mx-auto px-5 xl:px-10 ${className}`} {...domProps}>
      {children}
    </div>
  )
}
