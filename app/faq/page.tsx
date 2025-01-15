import PagesHeader from "../components/PagesHeader/PagesHeader";

export default function GeneralInfo() {
  return (
    <>
      <div>
        <PagesHeader heading="FAQ" paragraph="Faq" />
      </div>

      <div className="px-[5vw] py-[5vh] max-w-[90vw] mx-auto lg:w-[85vw] xl:w-[82vw] xl:mb-[7vw] xl:mt-[5vw]">
        {/* Two Columns Layout */}
        <div className="flex flex-wrap lg:flex-nowrap gap-[2vw]">
          {/* Left Column: General Information */}
          <div className="w-full lg:w-[65%]">
            <h2 className="text-[3vw] font-bold text-[#1D3178] mb-[3vh] lg:text-[2.5vw] xl:text-[2vw]">
              General Information
            </h2>
            <div className="space-y-[3vh]">
              {/* Repeated Questions */}
              <div>
                <h3 className="text-[2vw] font-semibold text-[#1D3178] lg:text-[1.8vw] xl:text-[1.5vw]">
                  Eu dictumst cum et sed ullamcorper condimentum?
                </h3>
                <p className="text-[1.8vw] text-[#A1ABCC] mt-[1vh] lg:text-[1.4vw] xl:text-[1.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-[2vw] font-semibold text-[#1D3178] lg:text-[1.8vw] xl:text-[1.5vw]">
                  Magna bibendum est fermentum eros.
                </h3>
                <p className="text-[1.8vw] text-[#A1ABCC] mt-[1vh] lg:text-[1.4vw] xl:text-[1.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-[2vw] font-semibold text-[#1D3178] lg:text-[1.8vw] xl:text-[1.5vw]">
                  Odio muskana hak eris consectetun sceleton?
                </h3>
                <p className="text-[1.8vw] text-[#A1ABCC] mt-[1vh] lg:text-[1.4vw] xl:text-[1.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-[2vw] font-semibold text-[#1D3178] lg:text-[1.8vw] xl:text-[1.5vw]">
                  Elit id blandit sabora bai velit qua mora?
                </h3>
                <p className="text-[1.8vw] text-[#A1ABCC] mt-[1vh] lg:text-[1.4vw] xl:text-[1.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Ask a Question Form */}
          <div className="w-full  bg-[#F6F5FF] p-[3vw] rounded-sm shadow min-h-[50vh] lg:w-[40vw]">
            <h2 className="text-[2vw] font-bold text-[#1D3178] mb-[3vh] lg:text-[1.7vw] xl:text-[1.5vw]">
              Ask a Question
            </h2>
            <div className="space-y-[2vh]">
              <input
                type="text"
                placeholder="Your Name*"
                className="text-[#8990B1] text-[2vw] w-full p-[1vw] border border-gray-300 rounded focus:outline-none
              lg:text-[1.2vw] xl:text-[1vw]"
              />
              <input
                type="text"
                placeholder="Subject*"
                className=" text-[#8990B1] text-[2vw] w-full p-[1vw] border border-gray-300 rounded focus:outline-none
              lg:text-[1.2vw] xl:text-[1vw]"
              />
              <textarea
                placeholder="Type Your Message*"
                rows={5}
                className=" text-[#8990B1] text-[2vw] w-full p-[1vw] border border-gray-300 rounded focus:outline-none
              lg:text-[1.2vw] xl:text-[1vw]"
              />
              <div
                className=" w-[15vw] h-[6vw] text-[2vw] bg-[#FB2E86] text-white rounded-sm font-semibold hover:bg-pink-600
              lg:text-[1.2vw] lg:h-[4vw] lg:w-[10vw] xl:text-[1vw] xl:h-[3vw] xl:w-[8vw] flex justify-center "
              >
                <button type="button">Send Mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
