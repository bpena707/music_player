'use client'
import { useRouter } from "next/navigation"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

 

interface ListItemProps {
    image: string
    name: string
    href: string
}

const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter()

    const onClick = () => {
        //TODO: add authentication before push
        router.push(href)
    }

  return (
    // group wihtin the button classname is the main parent element that can get modified afterwards
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4" >
        <div className="relative min-h-[64px] min-w-[64px]">
            <Image 
                className="object-cover"
                fill
                src={image}
                alt="image"
            />
        </div>
        <p className="font-medium truncate py-5">
            {name}
        </p>
        <div className="absolute opacity-0 right-5 transition rounded-full flex items-center justify-between bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110">
            <FaPlay className="text-black" />
        </div>
    </button>
  )
}

export default ListItem