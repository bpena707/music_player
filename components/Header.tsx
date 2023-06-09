/* this header component is what displays at the top of the main page */

'use client'

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Button from "./Button"

interface HeaderProps {
    children: React.ReactNode
    className?: string
  }

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter()

    const handleLogout = () => {
        // TODO: function to handle logout
    }
  return (
    // this div creates the shading on the top of the header component
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
        {/* this div is for the items at the top of the header which centers it all  */}
        <div className="w-full mb-4 flex items-center justify-between">
            {/* the buttons use the router to go back and forth within the application.  */}
            <div className="hidden md:flex gap-x-2 items-center">
                <button 
                    onClick={() => router.back()}
                    className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                >
                    <RxCaretLeft className="text-white" size={35} />
                </button>
                <button 
                    onClick={() => router.forward()}
                    className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                >
                    <RxCaretRight className="text-white" size={35} />
                </button>
            </div>
            {/* this div appears when the user is in modbile view which replaces the back and forward buttons with home and search */}
            <div className="flex md:hidden gap-x-2 items-center">
                <button
                    className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
                >
                    <HiHome className="text-black" size={20}/>
                </button>
                <button
                    className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
                >
                    <BiSearch className="text-black" size={20}/>
                </button>
            </div>
            <div className="flex justify-between items-center gap-x-4" >
                {/* this content will be dynamic whether we are logged in or not which is why its fragmented both buttons have thier own divs */}
                <>
                    <div>
                        <Button
                            onClick={() => {}}
                            className="bg-transparent text-neutral-300 font-medium"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => {}}
                            className="bg-white px-6 py-2"
                        >
                            Log in
                        </Button>
                    </div>
                </>
            </div>
        </div>
        {/* this is where the page.tsx is rendered which is under the header */}
        {children}
    </div>
  )
}

export default Header