import { SpacerProps } from "./Spacer.types.ts"

export const Spacer = (props: SpacerProps) => {
  const { children, className, ...domProps } = props

  return (
    <div className={`container mx-auto px-5 xl:px-10 ${className}`} {...domProps}>
      {children}
    </div>
  )
}
