/* this is the box component that is passed into the sidebar and holds the children component that is wrapped */

import { twMerge } from "tailwind-merge"

interface BoxProps {
    children: React.ReactNode
    className?: string
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
  return (
    // this div styles the sidbar as a whole. additional className props can also be passed
    <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
        {children}
    </div>
  )
}

export default Box