import { HTMLAttributes } from "react"

type HeadingBaseProps = {
  children: React.ReactNode
  className?: string
}

export type HeadingProps = HeadingBaseProps & HTMLAttributes<HTMLDivElement>
