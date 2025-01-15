
import Icons from "@/public/icons/Vector.svg"
import Email from "@/public/icons/Vector (1).svg"
import Heart from "@/public/icons/Vector (2).svg"
import Login from "@/public/icons/carbon_user.svg"
import Cart from "@/public/icons/fluent_cart-24-regular.svg"
import Link from "next/link"



export default function Navbar() {
  return (
    <nav className={" w-full px-4 py-4 bg-[#7E33E0] h-[44px] text-[16px] "}>
      <div className="flex justify-around items-center h-full ">
        {/* Left Section - Email & Phone */}
        <div className="text-white  space-x-4 flex  ">
          <span className='flex items-center gap-3 '> <Email/>  mhhasanul@gmail.com </span>
          <span  className='flex items-center gap-3'> <Icons /> (12345)67890 </span>
        </div>

        {/* Right Section - Wishlist, Cart, and Login */}
        <div className="flex items-center space-x-6 text-white">
          <div className="hidden lg:block">
            <span>English</span>
          </div>

          <div className="hidden lg:block">
            <span>USD</span>
          </div>


         
          {/* Login Icon */}
          <div className="flex items-center space-x-1">
            <Link href={"/myaccount"}><span className="flex items-center gap-1"> <Login/> Login</span></Link>
          </div>

          {/* Wishlist Icon */}
          <div className="flex items-center space-x-1">
           
            <span className=" flex items-center gap-1"> <Heart/>  Wishlist</span>
          </div>


            {/* Cart Icon */}
          <div className="flex items-center space-x-1">
            <Cart/>
          </div>


        </div>

      </div>
    </nav>
  );
}
