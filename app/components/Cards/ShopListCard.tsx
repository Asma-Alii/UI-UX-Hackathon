import React from 'react'
import Image from 'next/image'

type ShopListCardProps = {
    imageSrc: string;
    title: string;
}
export default function ShopListCard({imageSrc, title } : ShopListCardProps) {
  return (
    <div className=' w-full flex justify-center lg:flex '>
        <div className="w-[65vw]   overflow-hidden lg:flex 
        lg:w-[80vw] lg:h-[22vw] 
        xl:w-[75vw] xl:h-[13vw]">
      {/* Image */}
      <div className="relative h-[45vw] w-[65vw] lg:h-[22vw] lg:w-[60vw] xl:w-[20vw] xl:h-[13vw]  ">
       <Image
       src={imageSrc}
       alt=''
       layout="fill" 
       objectFit="cover"
      />
      </div>

      {/* Product Info */}
      <div className=" lg:flex lg:flex-col  lg:pl-10 lg:pt-8 xl:pl-5 ">
        {/* Main Heading */}

        <div className='flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-[4vw]  '>
        <h2 className="text-[3.5vw] pt-[2vw] lg:pt-0 font-semibold text-[#111C85]
        lg:text-[2.5vw]
        xl:text-[1.5vw]">{title}</h2>

        <div className="flex gap-1  ">
            <span className="w-3 h-3 xl:w-3 xl:h-3 rounded-full bg-orange-500"></span>
            <span className="w-3 h-3 xl:w-3 xl:h-3  rounded-full bg-purple-500"></span>
            <span className="w-3 h-3 xl:w-3 xl:h-3 rounded-full bg-pink-500"></span>
        </div>
        </div>


       
<div className='flex flex-row-reverse justify-between pt-[2vw] xl:pr-10 xl:pt-1'>
        
        

        <div className=" flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-5 h-5 xl:w-[1vw] xl:h-[1vw] text-yellow-400"
              fill={star <= 4 ? "currentColor" : "none"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          ))}
        </div> 
        <div className='flex gap-4 text-[3vw] lg:text-[2vw] xl:text-[1.2vw] '>
        <h3 className='text-[#111C85]'>$26.00</h3>
        <h3 className='text-[#FF2AAA]'>$52.00</h3></div>
        </div>
        
         {/* Paragraph */}
        <p className="text-[#9295AA] mt-2 text-[2.7vw] lg:text-[1.8vw] xl:text-[1.2vw] xl:mt-1 xl:w-[40vw]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.
        </p>
        </div>

        
       
        
        {/* Star Rating */}
        
      </div>
    </div>
    
  )
}
