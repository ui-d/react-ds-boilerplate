import { HTMLAttributes } from "react"

type SpacerBaseProps = {
  children: React.ReactNode
  className?: string
}

export type SpacerProps = SpacerBaseProps & HTMLAttributes<HTMLDivElement>
