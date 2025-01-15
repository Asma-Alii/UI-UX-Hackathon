import React from "react";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import Image from "next/image";

export default function contactPage() {
  return (
    <>
      <div>
        <PagesHeader heading="Contact Us" paragraph="Contact Us" />
      </div>

      <div className="lg:flex lg:flex-row w-[90vw] m-auto gap-[5vw] py-[4vw] xl:w-[75vw]">
        {/* Information Section */}
        <div className="w-full lg:w-1/2">
          <h2
            className="text-[5vw] font-bold text-[#151875] md:text-[4vw]
    lg:text-[2.5vw]
    xl:text-[2vw]"
          >
            Information About Us
          </h2>
          <p
            className="text-[3vw] text-[#8A8FB9] md:text-[2.2vw] mt-[2vw]
    lg:text-[1.8vw]
    xl:text-[1.2vw]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="flex gap-[2vw] py-[4vw] lg:gap-[1vw] lg:py-[2vw]">
            {/* Circle 1 */}
            <div
              className="w-[3vw] h-[3vw] lg:w-[2vw] lg:h-[2vw] bg-[#5726DF] rounded-full
      xl:w-[1.5vw] xl:h-[1.5vw]"
            ></div>

            {/* Circle 2 */}
            <div
              className="w-[3vw] h-[3vw] lg:w-[2vw] lg:h-[2vw] bg-pink-500 rounded-full
       xl:w-[1.5vw] xl:h-[1.5vw]"
            ></div>

            {/* Circle 3 */}
            <div
              className="w-[3vw] h-[3vw] lg:w-[2vw] lg:h-[2vw] bg-green-500 rounded-full
       xl:w-[1.5vw] xl:h-[1.5vw]"
            ></div>
          </div>
        </div>

        {/* Contact Way Section */}
        <div className="w-full lg:w-1/2">
          <h2
            className="text-[5vw] font-bold text-[#151875] mb-[2vw] md:text-[4vw]
    lg:text-[2.5vw]
    xl:text-[2vw]"
          >
            Contact Way
          </h2>
          <div className="grid grid-cols-2 gap-[3vw] max-w-[90vw] text-left">
            {/* First Item */}
            <div className="flex gap-[1vw] items-center">
              <div
                className="w-[4vw] h-[4vw] bg-[#5726DF] rounded-full lg:w-[3vw] lg:h-[3vw] 
        xl:w-[2.5vw] xl:h-[2.5vw]"
              ></div>
              <div>
                <p
                  className="text-[2.5vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  Tel: 877-67-88-99
                </p>
                <p
                  className="text-[2.5vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  E-Mail: shop@store.com
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex items-center gap-[1vw]">
              <div
                className="w-[4vw] h-[4vw] bg-[#FB2E86] rounded-full lg:w-[3vw] lg:h-[3vw]
         xl:w-[2.5vw] xl:h-[2.5vw]"
              ></div>
              <div>
                <p
                  className="text-[2.5vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  Support Forum
                </p>
                <p
                  className="text-[2.5vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  For over 24hr
                </p>
              </div>
            </div>

            {/* Third Item */}
            <div className="flex items-center gap-[1vw]">
              <div
                className="w-[4vw] h-[4vw] bg-[#FFB265] rounded-full lg:w-[3vw] lg:h-[3vw]
         xl:w-[2.5vw] xl:h-[2.5vw]"
              ></div>
              <div>
                <p
                  className="text-[2.5vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  20 Margaret st, London
                </p>
                <p
                  className="text-[2.5vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  Great Britain, 3NM98-LK
                </p>
              </div>
            </div>

            {/* Fourth Item */}
            <div className="flex items-center gap-[1vw]">
              <div
                className="w-[4vw] h-[4vw] bg-[#1BE982] rounded-full lg:w-[3vw] lg:h-[3vw]
         xl:w-[2.5vw] xl:h-[2.5vw]"
              ></div>
              <div>
                <p
                  className="text-[3vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  Free standard shipping
                </p>
                <p
                  className="text-[3vw] text-[#8A8FB9] md:text-[2.2vw]
          lg:text-[1.5vw]
          xl:text-[1vw]"
                >
                  on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 w-[90%] mx-auto py-16 mt-10
xl:w-[75vw]"
      >
        {/* Form Section */}
        <div className="w-full xl:w-1/2 lg:w-[55vw]">
          <h1
            className="text-[5vw]  font-bold text-[#151875] md:text-[4vw]  lg:text-[2.5vw]
    xl:text-[2vw]"
          >
            Get In Touch
          </h1>
          <p
            className="text-[3vw] text-[#8A8FB9] mt-4 md:text-base md:text-[2.2vw] lg:text-[1.8vw]
    xl:text-[1.2vw]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor lobortis quis
            bibendum quam.
          </p>
          <form className="mt-6 lg:space-y-10 xl:space-y-8">
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row gap-4 ">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full h-[9vw] md:h-[7vw] lg:h-[5vw]  xl:h-[3.5vw] md:w-1/2 border border-[#E0E0E0] rounded-sm p-4 text-lg placeholder-[#B6B6B6] lg:text-[1.5vw] xl:text-xs"
              />
              <input
                type="email"
                placeholder="Your E-Mail*"
                className="w-full h-[9vw] md:h-[7vw] lg:h-[5vw]  xl:h-[3.5vw]  md:w-1/2 border border-[#E0E0E0] rounded-sm p-4 text-lg placeholder-[#B6B6B6] lg:text-[1.5vw] xl:text-xs"
              />
            </div>

            {/* Subject */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Subject*"
                className="w-full h-[9vw] md:h-[7vw] lg:h-[5vw] xl:h-[3.5vw] border border-[#E0E0E0] rounded-sm p-4 text-lg placeholder-[#B6B6B6] lg:text-[1.5vw] xl:text-xs"
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <textarea
                placeholder="Type Your Message*"
                className="w-full border border-[#E0E0E0] rounded-sm p-4 text-lg placeholder-[#B6B6B6] lg:text-[1.5vw] xl:text-xs"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-[#FB2E86] text-white text-lg py-2 px-8 rounded-sm hover:bg-[#E02070] transition duration-300 lg:text-[1.5vw] xl:text-xs"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div
          className="w-[70vw] flex items-center justify-center relative h-[70vw] md:h-[60vw] md:w-[60vw] lg:h-[50vw] lg:w-[50vw] 
  xl:w-[40vw] xl:h-[40vw]"
        >
          <Image
            src="/images/contact-img.svg" // Replace with actual client image
            alt="Contact"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
