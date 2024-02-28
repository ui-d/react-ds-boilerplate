import { HTMLAttributes } from "react"

type HeadingSectionBaseProps = {
  children: React.ReactNode
  className?: string
}

export type HeadingSectionProps = HeadingSectionBaseProps & HTMLAttributes<HTMLDivElement>
