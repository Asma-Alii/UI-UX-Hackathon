
import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google"

const joseFin = Josefin_Sans({
  subsets: ["latin"],
});

type shopCardsProps ={
  imageSrc:string;
  title: string;
}
export default function ShoppingCard({imageSrc, title} :shopCardsProps) {
    return (
      <>
      <div className=" space-y-10  pt-[5vw] pb-[10vw] md:pb-[4vw]   xl:w-[15vw] xl:h-auto xl:space-y-2 
      xl:pb-0"> {/*main div*/}
{/* Product Image */}
      <div className=" bg-[#F6F7FB] w-[35vw] h-[35vw] m-auto  overflow-hidden hover:shadow-xl transition-shadow duration-300
      md:w-[26vw] md:h-[28vw] lg:w-[20vw] lg:h-[20vw] xl:w-[15vw] xl:h-[15vw]   
     
      ">
        
        <div className=" w-[30vw] h-[30vw] bg-[#F6F7FB] relative md:right-7 flex justify-center m-auto
        lg:h-[20vw] lg:w-[30vw]  lg:right-14 xl:w-[20vw] xl:h-[15vw] xl:right-7 xl:m-0  ">
        <Image src={imageSrc}
         alt=""
         height={150}
         width={150}
        
         
        
         className="md:w-[18vw]  lg:w-[15vw] lg:m-auto xl:w-[10vw] xl:m-0"
         
         />
        </div>
        </div>
  

        {/* Product Details */}
        {/* Product Title */}
         <div className=" text-center space-y-2 lg:space-y-3 xl:space-y-1 ">
          
          <h2 className={`xl:w-[16vw] text-base xl:text-[1vw] font-bold text-[#151875] md:text-[2vw] ${joseFin.className}`}>{title}</h2> 
  
          {/* Color Options */}
          <div className="flex justify-center gap-2  ">
            <span className="w-3 h-3 xl:w-2 xl:h-2 rounded-full bg-orange-500"></span>
            <span className="w-3 h-3 xl:w-2 xl:h-2  rounded-full bg-purple-500"></span>
            <span className="w-3 h-3 xl:w-2 xl:h-2 rounded-full bg-pink-500"></span>
          </div>
  
          {/* Price Section */}
          <div className="flex justify-center space-x-2 text-sm xl:text-[0.9vw] md:text-[1.5vw] lg:text-[1.7vw] ">
            <span className="text-[#151875] ">$26.00</span>
            <span className="text-[#FB2E86] ">$42.00</span>
          </div>
        </div> 

        </div>
        </>
      
    );
  }
  