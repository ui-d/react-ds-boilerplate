import { HTMLAttributes } from "react"

type CardBaseProps = {
  children: React.ReactNode
  className?: string
}

export type CardProps = CardBaseProps & HTMLAttributes<HTMLDivElement>
