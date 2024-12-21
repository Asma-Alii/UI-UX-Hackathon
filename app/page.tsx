import Image from "next/image";
import { Josefin_Sans } from "next/font/google"
import  Icon  from "@/public/icons/Group 141.svg";
import Icon2 from "@/public/icons/Group 169.svg";
import DeliveryIcon from "@/public/icons/free-delivery 1.svg";
import CashBack from "@/public/icons/cashback 1.svg";
import Quality from "@/public/icons/premium-quality 1.svg";
import Support from "@/public/icons/24-hours-support 1.svg";
import Dot1 from "@/public/icons/dot-blue.svg";
import Dot2 from "@/public/icons/dot-pink.svg";
import Dot3 from "@/public/icons/dot-green.svg";


const joseFin = Josefin_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <section className="bg-[#F2F0FF] w-full h-auto pb-12 overflow-hidden overflow-y-hidden
xl:pb-0 lg:pb-0
    "> {/* Hero Section */}
    <div className="lg:flex" >
      <div className=" flex"> {/* Heading + Image Div */}
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
        <div className="flex flex-col gap-y-5 mt-[12vw] px-4 lg:mt-[8vw] lg:w-[70%] lg:gap-y-3
        lg:relative lg:right-20 xl:right-[5vw]">
          <p className="text-[#FB2E86] font-bold md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] xl:font-normal ">
            Best Furniture For Your Castle....
          </p>
          <h1 className="font-bold text-4xl font-serif md:text-[4.5vw] lg:text-[3.5vw] lg:leading-none
          xl:w-[50vw] xl:leading-snug ">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-[#8A8FB9] font-bold md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] xl:font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
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
       <div className="flex justify-center mt-[8vw] lg:relative lg:bottom-[10vw] lg:right-[26vw]
       xl:bottom-[19vw] xl:right-[31vw]">
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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[90vw] xl:w-[65vw] mx-auto 
    xl:h-[30vw]"> {/*grid-div*/}

   <div className="w-[40vw] lg:w-[20vw] xl:w-[15vw] mx-auto border rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition
   xl:h-[23vw]">
      <div className="relative w-full h-64 xl:h-[14vw] bg-[#F6F7FB]">
        <Image
          src="/images/image 1168.svg"
          alt="Product 1"
          layout="fill"
         
        />
      </div>

      <div className="p-4 text-center space-y-2 hover:bg-[#2F1AC4] group transition
     ">
        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever chair</h3>

        <div className="flex justify-center"><Icon/></div>
        <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">Code - Y523201</p>
        <p className="text-[#151875] font-normal  group-hover:text-white">$42.00</p>
      </div>

    </div>
    

    {/*product 2*/}
   
   <div className="w-[40vw] lg:w-[20vw]  xl:w-[15vw] xl:h-[23vw]  mx-auto border rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-64 xl:h-[14vw] bg-[#F6F7FB]">
        <Image
          src="/images/image 1.svg"
          alt="Product 2"
          layout="fill"
         
        />
      </div>

      <div className="p-4 text-center space-y-2 hover:bg-[#2F1AC4] group transition">
        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever chair</h3>

        <div className="flex justify-center"><Icon/></div>
        <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">Code - Y523201</p>
        <p className="text-[#151875] font-normal  group-hover:text-white">$42.00</p>
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
        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever chair</h3>

        <div className="flex justify-center"><Icon/></div>
        <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">Code - Y523201</p>
        <p className="text-[#151875] font-normal  group-hover:text-white">$42.00</p>
      </div>

    </div>

    {/*product 4*/}

    <div className="w-[40vw] lg:w-[20vw] xl:w-[15vw]  xl:h-[23vw] mx-auto border rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-64 xl:h-[14vw] bg-[#F6F7FB]">
        <Image
          src="/images/image 3.svg"
          alt="Product 2"
          layout="fill"
         
        />
      </div>

      <div className="p-4 text-center space-y-2 hover:bg-[#2F1AC4] group transition">
        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever chair</h3>

        <div className="flex justify-center"><Icon/></div>
        <p className=" mt-2 text-[#151875] font-normal group-hover:text-white ">Code - Y523201</p>
        <p className="text-[#151875] font-normal  group-hover:text-white">$42.00</p>
      </div>

    </div>
   
    </div>
    <div className="flex justify-center"><Icon2/></div>

   </section>





   {/*Latest product section*/}

   <section className="py-8  flex flex-col mx-auto ">
  {/* Section Heading */}
  <div className="text-center py-4 font-bold text-3xl text-[#151875]">
    <h1>Latest Products</h1>
  </div>

  <div>
    <ul className="flex justify-center gap-4">
      <li className="text-[#FB4997] underline underline-offset-4 ">New Arrival</li>
      <li className="text-[#151875]">Best Seller</li>
      <li className="text-[#151875] ">Featured</li>
      <li className="text-[#151875]">Special Offer</li>
    </ul>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 lg:gap-y-24 lg:gap-x-12
  xl:w-[65vw] 2xl:w-[70vw] ">
    {/* Card 1 */}
    <div className="border rounded-lg shadow-md overflow-hidden w-[40vw] lg:w-[25vw]
    xl:w-[20vw] 2xl:w-[16.5vw]"> 
      <div className="relative w-full h-48 bg-gray-100 ">
        <Image src="/images/image 1166.svg" alt="Product 1" layout="fill" />
      </div>
      <div className="flex justify-between text-[#151875]">
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">Comfort Handy Craft</p>
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]" >$42.00</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48 bg-white">
        <Image src="/images/image 15.svg" alt="Product 2" layout="fill" />
      </div>
      <div className="flex justify-between text-[#151875]">
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">Comfort Handy Craft</p>
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]" >$42.00</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48 bg-gray-100">
        <Image src="/images/image 1168.svg" alt="Product 3" layout="fill" />
      </div>
      <div className="flex justify-between text-[#151875]">
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw] xl:text-[16px] ">Comfort Handy Craft</p>
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]" >$42.00</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48 bg-gray-100">
        <Image src="/images/image 23.svg" alt="Product 4" layout="fill" />
      </div>
      <div className="flex justify-between text-[#151875]">
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">Comfort Handy Craft</p>
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]" >$42.00</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48 bg-gray-100">
        <Image src="/images/image-chair.svg" alt="Product 5" layout="fill" />
      </div>
      <div className="flex justify-between text-[#151875]">
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]">Comfort Handy Craft</p>
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw]  xl:text-[16px]" >$42.00</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48 bg-gray-100">
        <Image src="/images/image-white.svg" alt="Product 6" layout="fill" />
      </div>
      <div className="flex justify-between text-[#151875] ">
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw] xl:text-[16px] ">Comfort Handy Craft</p>
      <p className="p-2 font-normal text-[2vw] lg:text-[1.5vw] xl:text-[16px]  " >$42.00</p>
      </div>
    </div>
  </div>

  


</section>


{/*Shopex offer section*/}

<section className="py-8  sm:mx-16 lg:mx-24 xl:mx-56 mb-[10vw]"> 
  {/* Section Heading */}
  <div className=  {`text-center py-4 font-bold text-3xl text-[#151875] ${joseFin}`}>
    <h1>What Shopex Offer!</h1>
  </div>

  {/* Boxes Grid */}
  <div className="grid grid-cols-2  lg:grid-cols-4 gap-8 w-[80vw] mx-auto xl:w-[65vw] 2xl:w-[70vw]">
    {/* Box 1 */}
    <div className="flex flex-col items-center text-center   p-6 shadow-md">
      <div className=" mb-4">
        <DeliveryIcon/> {/* Replace with the actual icon */}
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">24/7 Support</h3>
      <p className="text-gray-600 xl:text-[1vw]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida..
      </p>
    </div>

    {/* Box 2 */}
    <div className="flex flex-col items-center text-center   p-6 shadow-md">
      <div className=" mb-4">
        <CashBack /> {/* Replace with the actual icon */}
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">24/7 Support</h3>
      <p className="text-gray-600 xl:text-[1vw]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>

    {/* Box 3 */}
    <div className="flex flex-col items-center text-center  p-6 shadow-md">
      <div className=" mb-4">
        <Quality /> {/* Replace with the actual icon */}
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">24/7 Support</h3>
      <p className="text-gray-600 xl:text-[1vw]  ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>

    {/* Box 4 */}
    <div className="flex flex-col items-center text-center  p-6 shadow-md">
      <div className="  mb-4">
        <Support /> {/* Replace with the actual icon */}
      </div>
      <h3 className="text-lg font-bold mb-2 xl:text-[1.2vw] text-[#151875]">24/7 Support</h3>
      <p className="text-gray-600 xl:text-[1vw] ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
  </div>
 
</section>

{/*Image section*/}


<section className="w-screen  h-auto bg-[#F1F0FF] pb-10 lg:pt-12">
  

  <div className=" flex flex-col justify-center mx-16 lg:flex lg:flex-row lg:w-[60%] lg:mx-52">

   
    <div className=" flex justify-center lg:w-[50%] ">
      <Image src={"/images/Group 153.svg"}
      alt="sofa"
      height={400}
      width={400}/>
    </div>

    <div className="lg:w-[50%] ">
     <div className="text-center py-8 font-bold text-3xl text-[#151875] md:text-[4vw] md:leading-normal
    lg:text-[2.3vw] lg:leading-none lg:text-start
    xl:text-[1.7vw] xl:leading-snug xl:text-start">
      <h1>Unique Features Of leatest &
      Trending Poducts</h1>
    </div>
    <div className=" flex flex-col gap-y-4 text-[3vw] text-[#ACABC3] mt-8 lg:text-[1.5vw] lg:gap-y-0 lg:mt-0
    xl:text-[1vw]">
   
      <p>All frames constructed with hardwood solids and laminates</p>
      <p>Reinforced with double wood dowels, glue, screw - nails corner 
      blocks and machine nails</p>
      <p>Arms, backs and seats are structurally reinforced</p>
    </div>

<div className="lg:flex lg:flex-row-reverse lg:mt-5 lg:w-[30vw] lg:justify-end lg:gap-x-4">
    <div className="flex flex-col items-center mt-8 text-[#151875] lg:mt-0">
      <p className="font-bold text-[3vw] lg:text-[1.5vw]
      xl:text-xs">B&B Italian Sofa</p>
      <p className="text-[3vw] lg:text-[1.5vw]  xl:text-xs">$32.00</p>
    </div>

    <div className="flex justify-center mt-8 bg-[#FB4997] w-[30vw] h-[8vw] mx-auto py-2 text-white font-normal text-[3vw]
    lg:text-[1.5vw] lg:w-[15vw] lg:h-[4vw]  lg:mt-0 lg:mx-0
    xl:text-[1vw] xl:w-[9vw] xl:h-[2.5vw] ">
      <button>Add To Cart</button>
    </div>
    </div>

    </div>

  </div>
</section>

{/*trending product section*/}


<section className="bg-gray-100 py-8">
  <div className="container ">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-200 h-40 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Image 1"
            className="object-contain h-32 w-32"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">Card Title 1</h3>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-200 h-40 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Image 2"
            className="object-contain h-32 w-32"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">Card Title 2</h3>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-200 h-40 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Image 3"
            className="object-contain h-32 w-32"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">Card Title 3</h3>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-200 h-40 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Image 4"
            className="object-contain h-32 w-32"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">Card Title 4</h3>
        </div>
      </div>
    </div>
  </div>
</section>



   
     </>
  );
}






    


