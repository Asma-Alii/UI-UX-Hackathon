import React from "react";
import PagesHeader from "../components/PagesHeader/PagesHeader";

export default function myAccount() {
  return (
    <>
      <div>
        <PagesHeader heading="My Account" paragraph="My Account" />
      </div>

      <div>
        <div
          className="shadow-lg rounded-lg w-[75vw] m-auto h-auto pb-[6vw] mt-[5vw] mb-[15vw]
        lg:w-[55vw] lg:mt-[10vw] xl:w-[35vw] "
        >
          <div className="flex flex-col items-center pt-5">
            <h1 className="text-[5vw] font-bold md:text-[5.5vw] lg:text-[5vw] xl:text-[2.5vw]">
              Login
            </h1>
            <p
              className="text-[3vw] text-[#9096B2] font-sans  md:text-[2.5vw]
                 lg:text-[2vw] xl:text-[1.2vw]"
            >
              Please login using account detail bellow.
            </p>
          </div>

          <div
            className="flex flex-col  gap-y-[4vw] w-[60vw]  m-auto pt-5
           lg:w-[40vw] lg:pt-[5vw] lg:gap-y-[2.5vw]
           xl:w-[30vw] xl:pt-[2vw] xl:gap-y-[2vw]"
          >
            <input
              className="font-sans text-[3vw] sm:text-[2.5vw] h-[7vw] pl-2 border border-[#C2C5E1] outline-[#FB2E86] rounded-sm
            lg:h-[5vw] lg:text-[1.8vw] lg:pl-[1.2vw]
            xl:h-[3vw] xl:text-[1.2vw] xl:pl-[1vw]"
              type="Email"
              placeholder="Email Address"
            />
            <input
              className="font-sans text-[3vw] sm:text-[2.5vw] h-[7vw] pl-2 border border-[#C2C5E1] outline-[#FB2E86] rounded-sm
            lg:h-[5vw]  lg:text-[1.8vw] lg:pl-[1.2vw]
            xl:h-[3vw] xl:text-[1.2vw] xl:pl-[1vw]"
              type="password"
              placeholder="Password"
            />
            <p
              className="text-[#9096B2] text-[3vw] font-sans  md:text-[2.5vw]
            lg:text-[2vw] xl:text-[1.2vw]"
            >
              Forgot your password?
            </p>
          </div>

          <div
            className="h-[7vw] w-[60vw] rounded-sm bg-[#FB2E86] m-auto flex justify-center mt-[3vw] text-white text-[3vw]
           lg:w-[40vw] lg:h-[5vw] lg:text-[2vw] xl:text-[1.2vw] xl:w-[30vw] xl:h-[3vw] xl:mt-[2vw] "
          >
            <button>Sign In</button>
          </div>
          <div className="w-[60vw]  pt-[3vw] mx-[11vw] lg:pt-[2vw] xl:mx-[7.2vw]  xl:pt-[1.5vw]">
            <p
              className="text-[#9096B2] text-[3vw] font-sans  md:text-[2.5vw]
             lg:text-[2vw] xl:text-[1.2vw] "
            >
              Don’t have an Account?Create account
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
