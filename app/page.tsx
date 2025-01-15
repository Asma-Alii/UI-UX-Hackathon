import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import Icon from "@/public/icons/Group 141.svg";
import Icon2 from "@/public/icons/Group 169.svg";
import DeliveryIcon from "@/public/icons/free-delivery 1.svg";
import CashBack from "@/public/icons/cashback 1.svg";
import Quality from "@/public/icons/premium-quality 1.svg";
import Support from "@/public/icons/24-hours-support 1.svg";

const joseFin = Josefin_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section
        className="bg-[#F2F0FF] w-full h-auto pb-12 overflow-hidden overflow-y-hidden
xl:pb-0 lg:pb-0
    "
      >
        {" "}
        {/* Hero Section */}
        <div className="lg:flex">
          <div className=" flex">
            {" "}
            {/* Heading + Image Div */}
            {/* Image Div */}
            <div className="flex justify-center lg:mt-0 h-[35vw] lg:h-[20vw] ">
              <Image
                src={"/images/image 32.svg"}
                alt="light image"
                height={450}
                width={450}
                className="lg:w-[30vw] xl:w-[40vw] "
              />
            </div>
            {/* Heading Div */}
            <div
              className="flex flex-col gap-y-5 mt-[12vw] px-4 lg:mt-[8vw] lg:w-[70%] lg:gap-y-3
        lg:relative lg:right-20 xl:right-[5vw]"
            >
              <p className="text-[#FB2E86] font-bold md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] xl:font-normal ">
                Best Furniture For Your Castle....
              </p>
              <h1
                className="font-bold text-4xl font-serif md:text-[4.5vw] lg:text-[3.5vw] lg:leading-none
          xl:w-[50vw] xl:leading-snug "
              >
                New Furniture Collection Trends in 2020
              </h1>
              <p className="text-[#8A8FB9] font-bold md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] xl:font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-[8vw] lg:mt-[3vw] lg:[30%] lg:mr-[9vw] xl:mr-[5vw] ">
            <Image
              src={"/images/sofa promotional header.svg"}
              alt="sofa"
              height={200}
              width={200}
              className="w-[55vw] lg:w-[60vw]"
            />
          </div>
        </div>
        <div
          className="flex justify-center mt-[8vw] lg:relative lg:bottom-[10vw] lg:right-[26vw]
       xl:bottom-[19vw] xl:right-[31vw]"
        >
          <button className="bg-[#FB2E86] text-white font-bold py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </section>

      {/*featured product section*/}

      <section className="space-y-8 ">
        {/*product 1*/}

        <div className="text-center py-8 font-bold text-3xl text-[#1A0B5B] xl:pt-16 xl:pb-0">
          <h1>Featured Products</h1>
        </div>

        <div
          className="grid  grid-cols-2 lg:grid-cols-4 gap-8 w-[90vw] xl:w-[65vw] mx-auto 
    xl:h-[30vw]"
        >
          {" "}
          {/*grid-div*/}
          <div
            className="w-[40vw] lg:w-[20vw] xl:w-[15vw] mx-auto border rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition
   xl:h-[23vw]"
          >
            <div className="relative w-full h-64 xl:h-[14vw] bg-[#F6F7FB]">
              <Image
                src="/images/image 1168.svg"
                alt="Product 1"
                layout="fill"
              />
            </div>

            <div
              className="p-4 text-center space-y-2 hover:bg-[#2F1AC4] group transition
     "
            >
              <h3 className="text-lg font-bold text-[#FB2E86]">
                Cantilever chair
              </h3>

              <div className="flex justify-center">
                <Icon />
              </div>
              <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">
                Code - Y523201
              </p>
              <p className="text-[#151875] font-normal  group-hover:text-white">
                $42.00
              </p>
            </div>
          </div>
          {/*product 2*/}
          <div className="w-[40vw] lg:w-[20vw]  xl:w-[15vw] xl:h-[23vw]  mx-auto border rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-64 xl:h-[14vw] bg-[#F6F7FB]">
              <Image src="/images/image 1.svg" alt="Product 2" layout="fill" />
            </div>

            <div className="p-4 text-center space-y-2 hover:bg-[#2F1AC4] group transition">
              <h3 className="text-lg font-bold text-[#FB2E86]">
                Cantilever chair
              </h3>

              <div className="flex justify-center">
                <Icon />
              </div>
              <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">
                Code - Y523201
              </p>
              <p className="text-[#151875] font-normal  group-hover:text-white">
                $42.00
              </p>
            </div>
          </div>
          {/*product 3*/}
          <div className="w-[40vw] lg:w-[20vw]  xl:w-[15vw] xl:h-[23vw]  mx-auto border rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-64 xl:h-[14vw] bg-[#F6F7FB]">
              <Image
                src="/images/image 1169.svg"
                alt="Product 2"
                layout="fill"
              />
            </div>

            <div className="p-4 text-center space-y-2 hover:bg-[#2F1AC4] group transition">
              <h3 className="text-lg font-bold text-[#FB2E86]">
                Cantilever chair
              </h3>

              <div className="flex justify-center">
                <Icon />
              </div>
              <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">
                Code - Y523201
              </p>
              <p className="text-[#151875] font-normal  group-hover:text-white">
                $42.00
              </p>
            </div>
          </div>
          {/*product 4*/}
          <div className="w-[40vw] lg:w-[20vw] xl:w-[15vw]  xl:h-[23vw] mx-auto border rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-64 xl:h-[14vw] bg-[#F6F7FB]">
              <Image src="/images/image 3.svg" alt="Product 2" layout="fill" />
            </div>

            <div className="p-4 text-center space-y-2 hover:bg-[#2F1AC4] group transition">
              <h3 className="text-lg font-bold text-[#FB2E86]">
                Cantilever chair
              </h3>

              <div className="flex justify-center">
                <Icon />
              </div>
              <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">
                Code - Y523201
              </p>
              <p className="text-[#151875] font-normal  group-hover:text-white">
                $42.00
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Icon2 />
        </div>
      </section>

      {/*Latest product section*/}

      <section className="py-8  flex flex-col mx-auto ">
        {/* Section Heading */}
        <div className="text-center py-4 font-bold text-3xl text-[#151875]">
          <h1>Latest Products</h1>
        </div>

        <div>
          <ul className="flex justify-center gap-4">
            <li className="text-[#FB4997] underline underline-offset-4 ">
              New Arrival
            </li>
            <li className="text-[#151875]">Best Seller</li>
            <li className="text-[#151875] ">Featured</li>
            <li className="text-[#151875]">Special Offer</li>
          </ul>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 lg:gap-y-24 lg:gap-x-12
  xl:w-[65vw] 2xl:w-[70vw] "
        >
          {/* Card 1 */}
          <div
            className="border rounded-lg shadow-md overflow-hidden w-[40vw] lg:w-[25vw]
    xl:w-[20vw] 2xl:w-[16.5vw]"
          >
            <div className="relative w-full h-48 bg-gray-100 ">
              <Image
                src="/images/image 1166.svg"
                alt="Product 1"
                layout="fill"
              />
            </div>
            <div className="flex justify-between text-[#151875]">
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                Comfort Handy Craft
              </p>
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                $42.00
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48 bg-white">
              <Image src="/images/image 15.svg" alt="Product 2" layout="fill" />
            </div>
            <div className="flex justify-between text-[#151875]">
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                Comfort Handy Craft
              </p>
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                $42.00
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src="/images/image 1168.svg"
                alt="Product 3"
                layout="fill"
              />
            </div>
            <div className="flex justify-between text-[#151875]">
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw] xl:text-[16px] ">
                Comfort Handy Craft
              </p>
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                $42.00
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48 bg-gray-100">
              <Image src="/images/image 23.svg" alt="Product 4" layout="fill" />
            </div>
            <div className="flex justify-between text-[#151875]">
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                Comfort Handy Craft
              </p>
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                $42.00
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src="/images/image-chair.svg"
                alt="Product 5"
                layout="fill"
              />
            </div>
            <div className="flex justify-between text-[#151875]">
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                Comfort Handy Craft
              </p>
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">
                $42.00
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src="/images/image-white.svg"
                alt="Product 6"
                layout="fill"
              />
            </div>
            <div className="flex justify-between text-[#151875] ">
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw] xl:text-[16px] ">
                Comfort Handy Craft
              </p>
              <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw] xl:text-[16px]  ">
                $42.00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Shopex offer section*/}

      <section className="py-8  sm:mx-16 lg:mx-24 xl:mx-56 mb-[10vw]">
        {/* Section Heading */}
        <div
          className={`text-center py-4 font-bold text-3xl text-[#151875] ${joseFin}`}
        >
          <h1>What Shopex Offer!</h1>
        </div>

        {/* Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80vw] mx-auto xl:w-[65vw] 2xl:w-[70vw]">
          {/* Box 1 */}
          <div className="flex flex-col items-center text-center   p-6 shadow-md">
            <div className=" mb-4">
              <DeliveryIcon />
            </div>
            <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">
              24/7 Support
            </h3>
            <p className="text-gray-600 xl:text-[1vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida..
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center text-center   p-6 shadow-md">
            <div className=" mb-4">
              <CashBack />
            </div>
            <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">
              24/7 Support
            </h3>
            <p className="text-gray-600 xl:text-[1vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center text-center  p-6 shadow-md">
            <div className=" mb-4">
              <Quality />
            </div>
            <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">
              24/7 Support
            </h3>
            <p className="text-gray-600 xl:text-[1vw]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center text-center  p-6 shadow-md">
            <div className="  mb-4">
              <Support />
            </div>
            <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">
              24/7 Support
            </h3>
            <p className="text-gray-600 xl:text-[1vw] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </section>

      {/*Image section*/}

      <section className="w-full  h-auto bg-[#F1F0FF] pb-10 lg:pt-12">
        <div className=" flex flex-col justify-center mx-16 lg:flex lg:flex-row lg:w-[60%] lg:mx-52">
          <div className=" flex justify-center lg:w-[50%] ">
            <Image
              src={"/images/Group 153.svg"}
              alt="sofa"
              height={400}
              width={400}
            />
          </div>

          <div className="lg:w-[50%] ">
            <div
              className="text-center py-8 font-bold text-3xl text-[#151875] md:text-[4vw] md:leading-normal
    lg:text-[2.3vw] lg:leading-none lg:text-start
    xl:text-[1.7vw] xl:leading-snug xl:text-start"
            >
              <h1>Unique Features Of leatest & Trending Poducts</h1>
            </div>
            <div
              className=" flex flex-col gap-y-4 text-[3vw] text-[#ACABC3] mt-8 lg:text-[1.5vw] lg:gap-y-0 lg:mt-0
    xl:text-[1vw]"
            >
              <p>All frames constructed with hardwood solids and laminates</p>
              <p>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
              <p>Arms, backs and seats are structurally reinforced</p>
            </div>

            <div className="lg:flex lg:flex-row-reverse lg:mt-5 lg:w-[30vw] lg:justify-end lg:gap-x-4">
              <div className="flex flex-col items-center mt-8 text-[#151875] lg:mt-0">
                <p
                  className="font-bold text-[3vw] lg:text-[1.5vw]
      xl:text-xs"
                >
                  B&B Italian Sofa
                </p>
                <p className="text-[3vw] lg:text-[1.5vw]  xl:text-xs">$32.00</p>
              </div>

              <div
                className="flex justify-center mt-8 bg-[#FB4997] w-[30vw] h-[8vw] mx-auto py-2 text-white font-normal text-[3vw]
    lg:text-[1.5vw] lg:w-[15vw] lg:h-[4vw]  lg:mt-0 lg:mx-0
    xl:text-[1vw] xl:w-[9vw] xl:h-[2.5vw] "
              >
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*trending product section*/}

      <section className="bg-white py-8 mx-16 md:mx-[17vw] lg:mx-[5vw] xl:mx-56 2xl:mx-[5vw] ">
        <div className="text-center py-4 font-bold text-3xl text-[#151875]">
          <h1>Trending Products</h1>
        </div>
        <div className="container  lg:w-[78vw] lg:m-auto lg:mr-[5vw] text-[#151875] ">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 xl:w-[65vw]">
            {/* Card 1 */}
            <div
              className="bg-white shadow-md  overflow-hidden h-[50vw] md:h-[35vw] md:w-[30vw] lg:w-[18vw] lg:h-[25vw]
      xl:w-[15vw] xl:h-[20vw] "
            >
              <div
                className="bg-[#F5F6F8] h-[35vw] w-[35vw]  flex justify-center items-center m-auto mt-3
        sm:w-[35vw] sm:mt-4
        md:h-[25vw] md:w-[27vw]
        lg:w-[15vw] lg:h-[15vw]
        xl:w-[14vw] xl:h-[14vw]"
              >
                <Image
                  src="/images/image 1171.svg"
                  alt="Image 1"
                  height={150}
                  width={150}
                  layout="cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold lg:text-sm">
                  Cantilever chair
                </h3>
                <p className="lg:text-sm">$26.00 </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white shadow-md  overflow-hidden h-[50vw] md:h-[35vw] md:w-[30vw] lg:w-[18vw] lg:h-[25vw]
      xl:w-[15vw] xl:h-[20vw]"
            >
              <div
                className="bg-[#F5F6F8] h-[35vw] w-[35vw]  flex justify-center items-center m-auto mt-3
       sm:w-[35vw] sm:mt-4
        md:h-[25vw] md:w-[27vw]
        lg:w-[15vw] lg:h-[15vw]
        xl:w-[14vw] xl:h-[14vw]"
              >
                <Image
                  src="/images/image 1170.svg"
                  alt="Image 1"
                  height={150}
                  width={150}
                  layout="cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold lg:text-sm ">
                  Cantilever chair
                </h3>
                <p className="lg:text-sm">$26.00 </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white shadow-md  overflow-hidden h-[50vw] md:h-[35vw] md:w-[30vw] lg:w-[18vw] lg:h-[25vw]
     xl:w-[15vw] xl:h-[20vw]"
            >
              <div
                className="bg-[#F5F6F8] h-[35vw] w-[35vw]   flex justify-center items-center m-auto mt-3
       sm:w-[35vw] sm:mt-4
       md:h-[25vw] md:w-[27vw]
       lg:w-[15vw] lg:h-[15vw] 
       xl:w-[14vw] xl:h-[14vw]"
              >
                <Image
                  src="/images/image 31.svg"
                  alt="Image 1"
                  height={150}
                  width={150}
                  layout="cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold lg:text-sm ">
                  Cantilever chair
                </h3>
                <p className="lg:text-sm">$26.00 </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white shadow-md  overflow-hidden h-[50vw] md:h-[35vw] md:w-[30vw] lg:w-[18vw] lg:h-[25vw]
        xl:w-[15vw] xl:h-[20vw]"
            >
              <div
                className="bg-[#F5F6F8] h-[35vw] w-[35vw] flex justify-center items-center m-auto mt-3
        sm:w-[35vw] sm:mt-4 
       md:h-[25vw] md:w-[27vw]
        lg:w-[15vw] lg:h-[15vw]
        xl:w-[14vw] xl:h-[14vw]"
              >
                <Image
                  src="/images/image 3221.svg"
                  alt="Image 1"
                  height={150}
                  width={150}
                  layout="cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold lg:text-sm ">
                  Cantilever chair
                </h3>
                <p className="lg:text-sm">$26.00 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*discounnt item */}

      <section>
        <div className="text-center py-4 mt-10  text-[#151875]">
          <h1 className="text-[5vw] font-bold sm:text-[4.5vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[2vw]">
            Discount Item
          </h1>
          <ul className="flex justify-center gap-4 mt-4">
            <li className="text-[#FB4997] underline underline-offset-4">
              Wood Chair
            </li>
            <li>Plastic Chair</li>
            <li>Sofa Colletion</li>
          </ul>
        </div>

        <div className="flex items-center justify-center h-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-lg p-6 lg:gap-0  gap-8 md:max-w-[70vw] lg:max-w-[80vw] xl:max-w-[60vw] xl:p ">
            {/* Left Section */}
            <div className="space-y-4  lg:pt-[10vw]">
              <h2 className="text-2xl font-bold text-[#151875] md:text-3xl lg:text-3xl xl:text-[1.9vw]">
                20% Discount Of All Products
              </h2>
              <p className="text-base font-semibold text-[#FB4997] md:text-xl lg:text-xl xl:text-[1.2vw]">
                Earns Sofa Compact
              </p>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-[1vw] xl:leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600">✔</span>
                  <span className="ml-2 text-gray-500 text-sm md:text-base lg:text-lg xl:text-[1vw] ">
                    Material expose like metals
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600">✔</span>
                  <span className="ml-2 text-gray-500 text-sm md:text-base lg:text-lg xl:text-[1vw]">
                    Simple neutral colours
                  </span>
                </li>
              </ul>

              <button
                className="px-6 py-2 text-white bg-[#FB4997] rounded hover:bg-pink-600 text-sm md:text-base lg:text-lg
          xl:text-[1vw] "
              >
                Shop Now
              </button>
            </div>

            {/* Right Section */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-60 h-60 bg-pink-100 rounded-full md:w-52 md:h-52 lg:w-72 lg:h-72"></div>
              <Image
                src="/images/tortuga-sofa.svg"
                alt="Sofa"
                width={300}
                height={300}
                className="z-10 w-[70vw] h-[50vw] md:w-[45vw] md:h-[35vw] lg:w-[50vw] lg:h-[40vw]"
              />
            </div>
          </div>
        </div>
      </section>

      {/*top categories section*/}

      <div className="flex flex-col items-center justify-center h-auto bg-white mt-[10vw] lg:mt-0">
        <h2 className="text-3xl font-bold text-[#151875] mb-7">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6  w-[70vw] md:w-[80vw] xl:w-[65vw] ">
          <div className="relative flex flex-col items-center   ">
            <div className="w-[25vw] h-[25vw] md:w-[18vw] md:h-[18vw] xl:w-[15vw] xl:h-[15vw] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src="/images/image 20.svg"
                alt="Category Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-[#151875] xl:text-[1.2vw]  mt-4">
              Mini LCV Chair
            </h3>
            <p className="text-sm text-[#151875]">$56.00</p>
          </div>
          <div className="relative flex flex-col items-center  ">
            <div className="w-[25vw] h-[25vw]  md:w-[18vw] md:h-[18vw] xl:w-[15vw] xl:h-[15vw]  rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src="/images/image 1168.svg"
                alt="Category Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-[#151875] xl:text-[1.2vw] mt-4">
              Mini LCV Chair
            </h3>
            <p className="text-sm text-[#151875]">$56.00</p>
          </div>

          <div className="relative flex flex-col items-center   ">
            <div className="w-[25vw] h-[25vw] md:w-[18vw] md:h-[18vw] xl:w-[15vw] xl:h-[15vw] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src="/images/image 1171.svg"
                alt="Category Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-[#151875] mt-4 xl:text-[1.2vw]">
              Mini LCV Chair
            </h3>
            <p className="text-sm text-[#151875]">$56.00</p>
          </div>
          <div className="relative flex flex-col items-center  ">
            <div className="w-[25vw] h-[25vw]  md:w-[18vw] md:h-[18vw] xl:w-[15vw] xl:h-[15vw] rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src="/images/image 20.svg"
                alt="Category Image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-[#151875] xl:text-[1.2vw] mt-4">
              Mini LCV Chair
            </h3>
            <p className="text-sm text-[#151875]">$56.00</p>
          </div>
        </div>
        <div className="flex space-x-2 mt-6">
          <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      <section>
        <div className="relative w-full h-[50vw] mt-[10vw] mb-[5vw] xl:mt-[7vw] lg:w-full lg:h-[30vw] xl:h-[20vw] lg:mt-[13vw]">
          {/* Text and Button Wrapper */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#F1F0FF] bg-opacity-50 flex flex-col items-center justify-center z-10">
            <h1 className="text-[#151875] text-lg md:text-2xl lg:text-3xl font-semibold text-center mb-4">
              Get Latest Update By Subscribing <br /> To Our Newsletter
            </h1>
            <button className="bg-[#FB2E86] text-white px-6 py-2 hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
          {/* Background Image */}
          <Image
            src={"/images/Rectangle 102.svg"}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="lg:object-cover z-0"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#151875] mb-12">
            Latest Blog
          </h2>
          <div className="grid gap-6 md:gap-8 mx-[10vw] lg:mx-0 xl:mx-[9vw] 2xl:mx-0 lg:grid-cols-3">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/blog1.svg"
                alt="Blog 1"
                width={500}
                height={320}
                className="w-full h-fit object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-pink-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-9H8V9h3V7H8V5h5v8zm6 0h-3V9h3V7h-3V5h5v8h-2z" />
                    </svg>
                    <span className="xl:text-[0.9vw]">Saber Ali</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18C7.589 4 4 7.589 4 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-1 8h2v2h-2v-2zm0-4h2v3h-2V8z" />
                    </svg>
                    <span className="xl:text-[0.9vw]">21 August, 2020</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#151875] mb-2 xl:text-[1vw]">
                  Top Essential Trends in 2021
                </h3>
                <p className="text-gray-600 text-sm mb-4 xl:text-[0.9vw]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mighty.
                </p>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-600 text-sm font-medium xl:text-[0.9vw]"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/blog2.svg"
                alt="Blog 2"
                width={500}
                height={320}
                className="w-full h-fit object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-pink-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-9H8V9h3V7H8V5h5v8zm6 0h-3V9h3V7h-3V5h5v8h-2z" />
                    </svg>
                    <span className="xl:text-[0.9vw]">Surfauxion</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18C7.589 4 4 7.589 4 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-1 8h2v2h-2v-2zm0-4h2v3h-2V8z" />
                    </svg>
                    <span className="xl:text-[0.9vw]">21 August, 2020</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#151875] mb-2 xl:text-[1vw] ">
                  Top Essential Trends in 2021
                </h3>
                <p className="text-gray-600 text-sm mb-4 xl:text-[0.9vw]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mighty.
                </p>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-600 text-sm font-medium xl:text-[0.9vw] "
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/blog-3.svg"
                alt="Blog 3"
                width={500}
                height={320}
                className="w-full h-fit object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-pink-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-9H8V9h3V7H8V5h5v8zm6 0h-3V9h3V7h-3V5h5v8h-2z" />
                    </svg>
                    <span className="xl:text-[0.9vw]">Saber Ali</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18C7.589 4 4 7.589 4 12s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-1 8h2v2h-2v-2zm0-4h2v3h-2V8z" />
                    </svg>
                    <span className="xl:text-[0.9vw]">21 August, 2020</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#151875] mb-2 xl:text-[1vw]">
                  Top Essential Trends in 2021
                </h3>
                <p className="text-gray-600 text-sm mb-4 xl:text-[0.9vw]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mighty.
                </p>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-600 text-sm font-medium xl:text-[0.9vw]"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
