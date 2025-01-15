
"use client"

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "@/public/icons/akar-icons_chevron-down.svg"
import Link from "next/link";







export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (

   
  <nav className="bg-white">

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:flex">

        <div className="flex items-center justify-between h-16 lg:w-[50vw] lg:ml-[10vw]
         xl:justify-around xl:w-[50vw] xl:ml-[9vw]
         2xl:ml-[16vw] 2xl:w-[50vw] xl:gap-9">
          <div className={"flex items-center" }>
            <span className="text-[#0D0E43] font-bold text-[6vw] md:text-[4vw] pl-9 lg:text-[3vw] lg:p-0 
            xl:text-[34px]  ">Hekto</span>
          </div>
          <div className="flex items-center ">
            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
               
              className="inline-flex items-center justify-center p-2 pr-9 rounded-md  text-[#0D0E43] hover:text-[#0D0E43] hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
            >
              <svg
                className={`h-8 w-8 md:h-9 md:w-9  ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <div className="hidden lg:flex">
            <Link href={"/"}><p className="text-[#0D0E43] hover:text-[#FB2E86]  px-3 py-2 rounded-md text-sm font-normal">
              Home
            </p></Link>
            <div
              className="relative"
              
             
            >
              <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
               className="text-[#FB2E86] hover:text-[#0D0E43] px-3 py-2 rounded-md text-sm font-normal flex items-center gap-1">
                Pages
               
                <Dropdown/>
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-[10vw] text-sm">
                  <Link href={"/shoplist"}><p
                   
                    className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                  >
                    Shop List
                  </p></Link>

                  <Link href={"/shopsidebar"}><p
                   
                   className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                 >
                   Shop Left Sidebar
                 </p></Link>

                 <Link href={"/product-details"}>
                <p
                  className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                >
                  Product Details
                </p></Link>
                  <Link href={"/aboutus"}>
                   <p className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]">
                    About Us
                   </p>
                    </Link>
                    <Link href={"/faq"}> 
                  <p
                  
                    className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                  >
                    FAQs
                  </p></Link> 
                </div>
              )}
            </div>
            <p className="text-[#0D0E43] hover:text-[#FB2E86] px-3 py-2 rounded-md text-sm font-normal">
             Products
            </p>
            <Link href={"/blog"}>
            <p  className="text-[#0D0E43] hover:text-[#FB2E86] px-3 py-2 rounded-md text-sm font-normal">
             Blog
            </p></Link>
            <Link href={"/shop"}>
            <p  className="text-[#0D0E43] hover:text-[#FB2E86] px-3 py-2 rounded-md text-sm font-normal">
             Shop
            </p></Link>
            <Link href={"/contact"}>
            <p  className="text-[#0D0E43] hover:text-[#FB2E86] px-3 py-2 rounded-md text-sm font-normal">
             Contact
            </p></Link>
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-[20vw]  lg:pl-10
        xl:pl-[8vw]
        2xl:pl-[22vw]">
      <input
        type="text"
        placeholder="Search..."
        className="lg:h-[2.9vw] xl:h-[2.5vw]  xl:w-[18vw] lg:text-[1.5vw] xl:text-[1vw] lg:flex-1 lg:px-4 lg:py-2 lg:rounded-l-md lg:border lg:border-gray-300 lg:focus:outline-none lg:focus:ring-1 lg:focus:ring-[#FB2E86]"
      />
      <button
        className="lg:bg-[#FB2E86] lg:p-2 lg:rounded-r-md lg:flex lg:items-center lg:justify-center"
        aria-label="Search"
      >
        <FaSearch className="lg:text-white lg:h-[1.3vw] lg:w-5" />
      </button>
       </div>
      
    </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <Link href={"/"}>
          <p className="block px-4 py-2 text-black hover:text-white hover:bg-gray-700">
            Home
          </p></Link>
          <div className="block px-4 py-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-[#FB2E86] hover:text-white focus:outline-none flex items-center gap-1"
            >
             Pages
              <Dropdown/>
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white rounded-md">
                <Link href={"/shoplist"}>
                <p
                  className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                >
                  Shop List
                </p></Link>
                <Link href={"/product-details"}>
                <p
                  className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                >
                  Product Details
                </p></Link>

                <Link href={"/aboutus"}>
                <p
                  className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                >
                  About Us
                </p></Link>
                <Link href={"/faq"}>
                <p
                  className="block px-4 py-2 text-[#0D0E43] hover:text-white hover:bg-[#FB2E86]"
                >
                  FAQs
                </p></Link>
              </div>
            )}
          </div>
        
          <p  className="block px-4 py-2 text-black hover:text-white hover:bg-[#FB2E86]">
           Products
          </p>


<Link href={"/blog"}>
          <p className="block px-4 py-2 text-black hover:text-white hover:bg-[#FB2E86]">
           Blog
          </p></Link>

          <Link href={"/shop"}>
          <p  className="block px-4 py-2 text-black hover:text-white hover:bg-[#FB2E86]">
           Shop
          </p></Link>
          <Link href={"/contact"}>
          <p  className="block px-4 py-2 text-black hover:text-white hover:bg-[#FB2E86]">
           Contact
          </p></Link>
        </div>
      )}
    </nav>
















   
   
  )
}
