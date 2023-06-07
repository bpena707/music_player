/* this is the box component that is passed into the sidebar and holds the children component that is wrapped */

interface BoxProps {
    children: React.ReactNode
    className?: string
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Box