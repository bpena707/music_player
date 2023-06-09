'use client'

import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from "react-icons/ai"
 
const Library = () => {
    const onClick = () => {
        // TODO: handle click functionality
    }
  return (
    // this div is for the overall sidebar component and applies flex 
    <div className='flex flex-col'>
        {/* this div holds the playlist and the plus button */}
        <div className='flex items-center justify-between px-5 pt-4'>
            {/* this div is for the playlist icon and the library */}
            <div className='inline-flex items-center gap-x-2'>
                <TbPlaylist size={26} className='text-neutral-400' />
                <p className='' >Your Library</p>
            </div>
            <AiOutlinePlus 
                onClick={onClick}
                size={20} 
                className='text-neutral-400 cursor-pointer hover:text-white transition'
            />
        </div>
        {/* this div is for the list of songs section */}
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            List of Songs 
        </div>
    </div>
  )
}

export default Library