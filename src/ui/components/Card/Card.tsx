import { CardProps } from "./Card.types.ts"

export const Card = (props: CardProps) => {
  const { children, className, ...domProps } = props

  return (
    <div className={`container mx-auto px-5 xl:px-10 ${className}`} {...domProps}>
      {children}
    </div>
  )
}
