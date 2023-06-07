/* this sidebar component wraps around the children from the react node  we are passing server components which are the 
children but we have use client to do some dynamic operations too */
'use client'

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box"
 
interface SidebarProps{
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname()

    // declares an array of possible routes in the project
    const routes = useMemo(() => [
        {
            // the home pathname will be active as long as we are not in the search
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ], [pathname])
  return (
    <div className="flex h-full">
        <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
            <Box>
                Sidebar Navigation
            </Box>
        </div>
    </div>
  )
}

export default Sidebar