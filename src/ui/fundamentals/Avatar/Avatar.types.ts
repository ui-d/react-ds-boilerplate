import { HTMLAttributes } from "react"

type AvatarBaseProps = {
  children: React.ReactNode
  className?: string
}

export type AvatarProps = AvatarBaseProps & HTMLAttributes<HTMLDivElement>
