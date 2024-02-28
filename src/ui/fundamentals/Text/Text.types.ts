import { HTMLAttributes } from "react"

type TextBaseProps = {
  children: React.ReactNode
  className?: string
}

export type TextProps = TextBaseProps & HTMLAttributes<HTMLDivElement>
