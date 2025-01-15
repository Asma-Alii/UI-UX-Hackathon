import React from "react";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import Image from "next/image";
import RelatedProducts from "../components/Cards/Relatedproducts";

export default function productDeatils() {
  return (
    <>
      <div>
        <PagesHeader heading="Product Details" paragraph="Product Details" />
      </div>

      <div className="flex items-center justify-center min-h-screen lg:h-[20vw] bg-white ">
        <div className="flex flex-col lg:flex-row lg:gap-x-5 bg-[#FFFFFF] shadow-lg rounded-lg  w-[80vw] p-[2vw] xl:p-3 xl:w-[65vw] xl:h-[28vw]">
          {/* Left Side: Image Gallery */}

          <div className="">
            <div className="flex gap-x-4 xl:gap-x-0 ">
              <div className="space-y-3 md:space-y-5 lg:space-y-5 xl:space-y-2 ">
                <Image
                  src="/images/handbag2.svg"
                  alt="Thumbnail 1"
                  width={100}
                  height={100}
                  className=" cursor-pointer w-[22vw] h-[22vw] sm:h-[20vw] lg:h-[12vw] xl:w-[15vw] xl:h-[8.3vw]"
                />

                <Image
                  src="/images/handbag3.svg"
                  alt="Thumbnail 1"
                  width={100}
                  height={100}
                  className=" cursor-pointer w-[22vw] h-[22vw] sm:h-[20vw] lg:h-[12vw] xl:w-[15vw] xl:h-[8.3vw]"
                />

                <Image
                  src="/images/handbag4.svg"
                  alt="Thumbnail 1"
                  width={100}
                  height={100}
                  className=" cursor-pointer w-[22vw] h-[22vw] sm:h-[20vw] lg:h-[12vw] xl:w-[15vw] xl:h-[8.3vw]"
                />
              </div>

              <div className="">
                <Image
                  src="/images/handbag-img.svg"
                  alt="Main Product"
                  width={400}
                  height={400}
                  className=" w-[100%] h-auto md:w-[50vw] xl:w-[31vw]  "
                />
              </div>
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="flex flex-col space-y-2 pt-[4vw] w-[50vw]">
            <h1
              className="text-[5vw] font-semibold text-[#0D134E]
          lg:text-[3vw] xl:text-[2vw]"
            >
              Playwood Arm Chair
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-xl">★★★★★</span>
              <span className="text-[#151875]">(22)</span>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className="text-[4vw] font-semibold text-[#151875]
            lg:text-[2.5vw] xl:text-[1.3vw]"
              >
                $32.00
              </span>
              <span
                className="text-[4vw] font-semibold text-[#FB2E86] line-through
            lg:text-[2.5vw] xl:text-[1.3vw]"
              >
                $32.00
              </span>
            </div>
            <p className="text-[#A9ACC6] text-[3vw] lg:text-[1.5vw] xl:text-[1vw]">
              Lorem ipsum dolor sit amet,Mauris tellus porttitor purus, et
              volutpat sit.
            </p>
            <button
              className="bg-white text-[#151875] py-2 px-4 rounded-sm w-[20vw]
            md:h-[6vw] lg:h-[4vw] lg:w-[13vw] xl:w-[10vw] xl:h-[2vw] xl:text-[1vw]"
            >
              Add To Cart
            </button>
            <div>
              <p className="text-[#151875] font-semibold text-[3vw] lg:text-[1.5vw]  xl:text-[1vw]">
                Categories:
              </p>
            </div>
            <div>
              <p className="text-[#151875] font-semibold text-[3vw] lg:text-[1.5vw] xl:text-[1vw]  ">
                Tags:
              </p>
            </div>
            <div className="flex gap-x-[2vw] items-center">
              <p className="text-[#151875] font-semibold text-[3vw] lg:text-[1.5vw] xl:text-[1vw] ">
                Share:
              </p>
              <div className="flex space-x-2 ">
                <span className="text-blue-600 cursor-pointer">🔵</span>
                <span className="text-pink-600 cursor-pointer">🔴</span>
                <span className="text-purple-600 cursor-pointer">🟣</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  py-8 px-4 bg-[#F9F8FE] md:p-[5vw]   ">
        <div className=" lg:w-[80vw] xl:w-[70vw] xl:m-auto lg:m-auto ">
          {/* Tabs Navigation */}
          <div className="flex space-x-[6vw] md:space-x-[7vw] border-b border-gray-200 ">
            <a
              href="#description"
              className="pb-2 text-[3.5vw] font-medium border-b-2 border-[#151875] text-[#151875]
         sm:text-[3.2vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[1.5vw]"
            >
              Description
            </a>
            <a
              href="#additional-info"
              className="pb-2 text-[3.5vw] font-medium border-b-2 border-transparent text-[#151875] hover:text-blue-70
        sm:text-[3.2vw] md:text-[3vw] lg:text-[2.5vw]  xl:text-[1.5vw]"
            >
              Additional Info
            </a>
            <a
              href="#reviews"
              className="pb-2 text-[3.5vw] font-medium border-b-2 border-transparent text-[#151875] hover:text-blue-700
        sm:text-[3.2vw] md:text-[3vw] lg:text-[2.5vw]  xl:text-[1.5vw]"
            >
              Reviews
            </a>
            <a
              href="#video"
              className="pb-2 text-[3.5vw] font-medium border-b-2 border-transparent text-[#151875] hover:text-blue-700
        sm:text-[3.2vw] md:text-[3vw] lg:text-[2.5vw]  xl:text-[1.5vw]"
            >
              Video
            </a>
          </div>

          {/* Tab Content */}
          <div id="description" className="mt-6 text-[#A9ACC6]">
            <h2
              className="text-[3vw] font-semibold mb-4
        sm:text-[3.2vw] md:text-[3vw] lg:text-[2.5vw]  xl:text-[1.5vw] text-[#151875]"
            >
              Varius tempor.
            </h2>
            <p className="text-[2.6vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[1vw]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
            <h3
              className="text-[3vw] font-semibold mt-6 mb-3
        sm:text-[3.2vw] md:text-[3vw] lg:text-[2.5vw]  xl:text-[1.5vw] text-[#151875]"
            >
              More details
            </h3>
            <ul className="space-y-2  text-[2.6vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[1vw]">
              <li className="flex items-center  ">
                <span className="mr-2 text-blue-500 ">&rarr;</span>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-500">&rarr;</span>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-500">&rarr;</span>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-500">&rarr;</span>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        <RelatedProducts />
      </div>
    </>
  );
}
