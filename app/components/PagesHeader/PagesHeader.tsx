import React from 'react'

import { Josefin_Sans } from "next/font/google"

const joseFin = Josefin_Sans({
  subsets: ["latin"],
});

interface Props {
  heading: string; 
  paragraph: string; 
}


 const PagesHeader = ({ heading, paragraph } :Props) => {
  return (
    <div className="w-full bg-[#F6F5FF] h-[30vw] flex justify-center pt-[6vw]
    lg:flex lg:justify-start lg:h-[20vw] xl:h-[18vw] ">
       
      <div className="lg:ml-[12vw] xl:ml-[13vw]">
        <h1 className={`text-[5vw] font-bold text-[#101750] ${joseFin.className}
        sm:text-[4.5vw]
        lg:text-[3vw]
        xl:text-[2.2vw]`}>{heading}</h1>
        <div className="flex gap-[3vw] sm:text-[2.5vw] lg:text-[1.7vw] xl:text-[1vw] xl:gap-[1vw]">
        <p>Home</p>
        <p>Pages</p>
        <p className="text-[#FB2E86]">{paragraph}</p></div>
      </div>
   
    </div>
    
  );
};

export default PagesHeader;
