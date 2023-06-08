/* this sidebar component wraps around the children from the react node  we are passing server components which are the 
children but we have use client to do some dynamic operations too */
'use client'

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box"
import SidebarItem from "./SidebarItem"
import Library from "./Library"
 
//the interface props passes the children as React node which is a type that defines what nodes can be rendered
interface SidebarProps{
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname()

    // declares an array of possible routes in the project based on the sidebar
    const routes = useMemo(() => [
        {
            // the home pathname will be active as long as we are not in the search
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
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
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((item) => (
                        <SidebarItem 
                            key={item.label}
                            {...item}
                        />
                    ))}
                </div>
            </Box>
            {/* this box is for the song library that sits under the navigation and fills the side which is passed into sidebar component */}
            <Box className="overflow-y-auto h-full">
                <Library />
            </Box>
        </div>
        {/* the main element renders the children onto the page */}
        <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
  )
}

export default Sidebar