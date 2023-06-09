/* this is a custom button we are forwarding the ref and the attributes the normal html button has
this button also contains default classnames for styling which are passed down to child comopnents but 
can be overridden using the classname in the child component
*/

import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

// pass the ref and create a smoder interface. use the attributes that react provides
interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            // adding classname at the end allows to always modify button if needed. 
            className={twMerge(`w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
      )
})

Button.displayName = "Button"
  


export default Button