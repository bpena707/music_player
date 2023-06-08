'use client'

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft } from "react-icons/rx"

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
            <div className="hidden md:flex gap-x-2 items-center">
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                    <RxCaretLeft className="text-white" size={35} />
                </button>

            </div>
        </div>
    </div>
  )
}

export default Header