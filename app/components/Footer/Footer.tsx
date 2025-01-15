import React from 'react'
import FBIcon from "@/public/icons/icons8-facebook.svg"
import Instaicon from "@/public/icons/icons8-instagram.svg"
import Twitter from "@/public/icons/twitter-icon.svg"

export default function Footer() {
  return (
    <footer className="footer w-full h-auto bg-[#E7E4F8] pt-[5vw] ">
      <div className="container pl-[9vw] flex flex-col gap-[5vw] lg:grid lg:grid-cols-2 lg:space-x-20 
      xl:grid-cols-4 xl:space-x-0 xl:w-[80vw] xl:mx-auto xl:gap-0 xl:pb-[6vw] ">

         <div className='flex flex-col gap-[3vw] xl:gap-1'>
        <h1 className='text-[5vw] font-bold xl:text-[2vw]'>Hekto</h1>
        <div className='xl:w-[20vw]'>
            <input className='text-black w-[30vw] h-[5vw] text-[2vw] pl-[2vw] lg:w-[20vw]
            lg:h-[4vw] lg:text-[1.5vw]
            xl:h-[2.2vw] xl:w-[13vw] xl:text-[0.8vw]' type="email" placeholder='Enter Email Address'/>
            <button className='bg-[#FB4997] text-[2vw] text-white w-[10vw] h-[5vw]  
          lg:h-[4vw] lg:text-[1.5vw]
          xl:h-[2.2vw] xl:text-[0.8vw] xl:w-[7vw]  '>Sign Up</button>
        </div>
        <p className='text-[2vw] text-[#8A8FB9] lg:text-[1.7vw]  xl:text-[0.9vw]'>Contact Info</p>
        <p className='text-[2vw] text-[#8A8FB9] lg:text-[1.7vw]  xl:text-[0.9vw]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
       </div>

       <div className='flex flex-col gap-[3vw] xl:gap-[1vw] xl:w-[20vw] xl:pl-[5vw] 2xl:pl-[5vw]'>
        <h2 className='font-bold lg:text-[2vw] xl:text-[1.4vw]'>Catogeries</h2>
        <div className='text-[2vw] leading-loose text-[#8A8FB9]
        lg:text-[1.7vw] xl:text-[0.9vw] '>
        <p>Laptops & Computers</p>
        <p>Cameras & Photography</p>
        <p>Smart Phones & Tablets</p>
        <p>Video Games & Consoles</p>
        <p>Waterproof Headphones</p></div>
       </div>

       <div className='flex flex-col gap-[3vw] xl:gap-[1vw] xl:pl-[4vw] 2xl:pl-[4vw]'>
        <h2 className='font-bold lg:text-[2vw] xl:text-[1.4vw]'>Customer Care</h2>
        <div className='text-[2vw] leading-loose text-[#8A8FB9]
         lg:text-[1.7vw] xl:text-[0.9vw]' >
        <p>My Account</p>
        <p>Discount</p>
        <p>Returns</p>
        <p>Orders History</p>
        <p>Order Tracking</p></div>
       </div>

       <div className='flex flex-col gap-[3vw] xl:gap-[1vw]'>
        <h2 className='font-bold lg:text-[2vw] xl:text-[1.4vw]'>Pages</h2>
        <div className='text-[2vw] leading-loose text-[#8A8FB9]
         lg:text-[1.7vw] xl:text-[0.9vw] ]'>
        <p>Blog</p>
        <p>Browse the Shop</p>
        <p>Category</p>
        <p>Pre-Built Pages</p>
        <p>Visual Composer Elements</p>
        <p>WooCommerce Pages</p></div>
       </div>
      </div> 

      <div className='flex justify-around items-center text-[#9DA0AE] h-[10vw] lg:h-[5vw] lg:pt-14 lg:pb-10 xl:h-[3vw] lg:text-[1.5vw] xl:text-[1vw]'>
        <p>©Webecy - All Rights Reserved</p>
        <div className='flex gap-[1vw] '>
        <FBIcon/>
        <Instaicon/>
        <Twitter/>
        </div>
      </div>
    </footer>
  )
}
