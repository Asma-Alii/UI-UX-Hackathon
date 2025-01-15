import React from 'react'
import PagesHeader from '../components/PagesHeader/PagesHeader'
import Image from 'next/image'
import DeliveryIcon from "@/public/icons/free-delivery 1.svg";
import CashBack from "@/public/icons/cashback 1.svg";
import Quality from "@/public/icons/premium-quality 1.svg";
import Support from "@/public/icons/24-hours-support 1.svg";

export default function aboutPage() {
  return (
    <>
    <div>
        <PagesHeader heading='About Us' paragraph='About Us'/>
    </div>


   
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-[3vw] p-[4vw] m-auto 
      mt-[10vw] lg:w-[85vw] lg:p-0 h-auto lg:pb-[8vw] 
      xl:w-[70vw] "
      
    >
      {/* Left Side: Image */}
      <div
        className="w-[70vw] h-[50vw] rounded-sm overflow-hidden shadow-lg relative
        lg:w-[65vw] lg:h-[30vw]
        xl:w-[65vw] xl:h-[23vw]"
       
      >
        <Image
          src="/images/bussiness-img.svg" // Replace with your image path
          alt="Business"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Makes sure the image fits the container
          className="rounded-sm"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-[70vw] lg:mt-[2vw] ">
        <h2 className="text-[4vw] font-bold text-[#151875] mb-[1vw]
        lg:text-[3vw] xl:text-[2vw] ">
          Know About Our Ecommerce <br /> Business, History
        </h2>
        <p className="text-[3vw] text-[#8A8FB9] mb-[2vw] leading-[1.2] md:text-[2.8vw]
        lg:text-[1.5vw] xl:text-[1vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <button
          className="px-[2vw] py-[1vw] text-[3vw] bg-[#FB2E86] text-white rounded-sm hover:bg-pink-600
          md:text-[2.8vw] lg:text-[1.5vw] lg:mt-[2vw] lg:h-[4vw] lg:w-[12vw]
          xl:h-[3vw] xl:w-[9vw] xl:text-[1vw] xl:mt-[1vw]"
        >
          Contact us
        </button>
      </div>
    </div>

    <section className="py-8  sm:mx-16 lg:mx-24 xl:mx-56 mb-[10vw]"> 
  {/* Section Heading */}
  <div className=  "text-center py-4 font-bold text-3xl text-black" >
    <h1>Our Features</h1>
  </div>

  {/* Boxes Grid */}
  <div className="grid grid-cols-2  lg:grid-cols-4 gap-8 w-[80vw] mx-auto xl:w-[65vw] 2xl:w-[70vw]">
    {/* Box 1 */}
    <div className="flex flex-col items-center text-center   p-6 shadow-md">
      <div className=" mb-4">
        <DeliveryIcon/> 
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">Free Delivery</h3>
      <p className="text-gray-600 xl:text-[1vw]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida..
      </p>
    </div>

    {/* Box 2 */}
    <div className="flex flex-col items-center text-center   p-6 shadow-md border border-b-2 border-b-[#FF9100]">
      <div className=" mb-4">
        <CashBack /> 
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875] ">100% Cash Back</h3>
      <p className="text-gray-600 xl:text-[1vw]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>

    {/* Box 3 */}
    <div className="flex flex-col items-center text-center  p-6 shadow-md">
      <div className=" mb-4">
        <Quality /> 
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">Quality Product</h3>
      <p className="text-gray-600 xl:text-[1vw]  ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>

    {/* Box 4 */}
    <div className="flex flex-col items-center text-center  p-6 shadow-md">
      <div className="  mb-4">
        <Support /> 
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">24/7 Support</h3>
      <p className="text-gray-600 xl:text-[1vw] ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
  </div>
 
</section>


<div className="flex flex-col items-center text-center bg-[#FBFBFF] py-[5vw] px-[4vw] mb-[15vw]">
      {/* Title */}
      <h2 className="text-[5vw] font-bold text-black mb-[2vw] lg:text-[2.5vw] xl:text-[2.5vw]">
        Our Client Say!
      </h2>

      {/* Client Images */}
      <div className="flex justify-center gap-[2vw] mb-[2vw]">
        <div className="w-[6vw] h-[6vw] overflow-hidden  shadow-md relative mt-[1vw]">
          <Image
            src="/images/man-img.svg" 
            alt="Client 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[6vw] h-[6vw] overflow-hidden shadow-md relative ">
          <Image
            src="/images/Mask Group.svg" 
            alt="Client 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[6vw] h-[6vw] overflow-hidden  shadow-md relative mt-[1vw] ">
          <Image
             src="/images/man2-img.svg" 
            alt="Client 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

    
      <h3 className="text-[3.5vw] font-semibold text-gray-800 lg:text-[2vw] xl:text-[1.5vw]">
        Selina Gomez
      </h3>
      <p className="text-[2vw] text-[#8A8FB9] mb-[2vw] lg:text-[1.5vw] xl:text-[1vw]">
        CEO At Webwey Digital
      </p>

      
      <p className="text-[1.8vw] text-[#8A8FB9] mb-[2vw] max-w-[50vw] lg:text-[1.4vw] xl:text-[1vw]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
        ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
        nunc; sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus
        volutpat praesent.
      </p>

      {/* Decorative Underline */}
      <div className="relative">
        <div className="w-[6vw] h-[0.8vw] lg:w-[4vw] lg:h-[0.2vw] bg-pink-500"></div>
        <div className="w-[6vw] lg:w-[2vw] h-[0.8vw] lg:h-[0.2vw] bg-pink-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
      </div>
    </div>
    </>
    
  )
}
