import React from 'react'

export default function Footer() {
  return (
    <footer className="footer w-full h-auto bg-[#E7E4F8] pt-[5vw] ">
      <div className="container pl-[9vw] flex flex-col gap-[5vw] lg:grid lg:grid-cols-2 lg:space-x-20 
      xl:grid-cols-4 ">

         <div className='flex flex-col gap-[3vw]'>
        <h1 className='text-[5vw] font-bold xl:text-[2vw]'>Hekto</h1>
        <div>
            <input className='text-black w-[30vw] h-[5vw] text-[2vw] pl-[2vw] lg:w-[20vw]
            lg:h-[4vw] lg:text-[1.5vw]
            xl:h-[3vw] xl:w-[18vw]' type="email" placeholder='Enter Email Address'/>
            <button className='bg-[#FB4997] text-[2vw] text-white w-[10vw] h-[5vw]  
          lg:h-[4vw] lg:text-[1.5vw]  '>Sign Up</button>
        </div>
        <p className='text-[2vw] text-[#8A8FB9] lg:text-[1.7vw]'>Contact Info</p>
        <p className='text-[2vw] text-[#8A8FB9] lg:text-[1.7vw]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
       </div>

       <div className='flex flex-col gap-[3vw]'>
        <h2 className='font-bold lg:text-[2vw]'>Catogeries</h2>
        <div className='text-[2vw] leading-loose text-[#8A8FB9]
        lg:text-[1.7vw]'>
        <p>Laptops & Computers</p>
        <p>Cameras & Photography</p>
        <p>Smart Phones & Tablets</p>
        <p>Video Games & Consoles</p>
        <p>Waterproof Headphones</p></div>
       </div>

       <div className='flex flex-col gap-[3vw]'>
        <h2 className='font-bold lg:text-[2vw]'>Customer Care</h2>
        <div className='text-[2vw] leading-loose text-[#8A8FB9]
         lg:text-[1.7vw]' >
        <p>My Account</p>
        <p>Discount</p>
        <p>Returns</p>
        <p>Orders History</p>
        <p>Order Tracking</p></div>
       </div>

       <div className='flex flex-col gap-[3vw]'>
        <h2 className='font-bold lg:text-[2vw]'>Pages</h2>
        <div className='text-[2vw] leading-loose text-[#8A8FB9]
         lg:text-[1.7vw]'>
        <p>Blog</p>
        <p>Browse the Shop</p>
        <p>Category</p>
        <p>Pre-Built Pages</p>
        <p>Visual Composer Elements</p>
        <p>WooCommerce Pages</p></div>
       </div>
      </div>

      <div className='flex justify-center items-center h-[10vw] text-[#8A8FB9]'>
        <p>©Webecy - All Rights Reserved</p>
      </div>
    </footer>
  )
}
