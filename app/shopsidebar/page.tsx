import React from "react";
import EcommerceHeader from "../components/EcommerceHeader/EcommerceHeader";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import ShopListCard from "../components/Cards/ShopListCard";

export default function sidebarPage() {
  const SidebarCardData = [
    {
      id: "sidebarcard1",
      imageSrc: "/images/sidebarcard1.svg",
      title: "Dictum morbi",
    },
    {
      id: "sidebarcard2",
      imageSrc: "/images/sidebarcard2.svg",
      title: "Sodales sit",
    },
    {
      id: "sidebarcard3",
      imageSrc: "/images/sidebarcard3.svg",
      title: "Nibh varius",
    },
    {
      id: "sidebarcard4",
      imageSrc: "/images/sidebarcard4.svg",
      title: "Mauris quis",
    },
    {
      id: "sidebarcard5",
      imageSrc: "/images/sidebarcard5.svg",
      title: "Morbi sagittis",
    },
    {
      id: "sidebarcard6",
      imageSrc: "/images/sidebarcard6.svg",
      title: "Ultricies venenatis",
    },
    {
      id: "sidebarcard7",
      imageSrc: "/images/sidebarcard7.svg",
      title: "Scelerisque dignissim",
    },
  ];
  return (
    <>
      <div>
        <PagesHeader
          heading="Shop Left Sidebar"
          paragraph="Shop Left Sidebar"
        />
      </div>

      <div>
        <EcommerceHeader />
      </div>

      <div className=" lg:w-[80vw] lg:m-auto flex xl:w-[80vw] xl:pl-[3vw] pb-44 ">
        <div className="">
          <div className="p-4 md:pl-10 lg:pl-0 ">
            <h2 className="text-lg font-bold text-[#151875] underline underline-offset-4 pb-2 mb-4 md:text-[2vw] xl:text-[1.4vw]">
              Product Brand
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Coaster Furniture
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw]  lg:text-[1.8vw] xl:text-[1.2vw]">
                  Fusion Dot High Fashion
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2]  md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw]">
                  Unique Furniture Restor
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw]">
                  Dream Furniture Flipping
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw]">
                  Young Repurposed
                </label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw ] xl:text-[1.2vw] ">
                  Green DIY furniture
                </label>
              </li>
            </ul>
          </div>

          <div className="p-4 md:pl-10 lg:pl-0">
            <h2 className="text-lg font-bold text-[#151875] underline underline-offset-4 pb-2 mb-4 md:text-[2vw] xl:text-[1.4vw]">
              Discount Offer
            </h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  20% Cashback
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  5% Cashback Offer
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  25% Discount Offer
                </label>
              </li>
            </ul>
          </div>

          <div className="p-4 lg:p-0">
            <h2 className="text-lg font-bold text-blue-900 underline underline-offset-4 pb-2 mb-4">
              Rating Item
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <div className="ml-3 flex items-center">
                  <span className="text-yellow-500 text-xl">★★★★★</span>
                  <span className="text-gray-600 ml-2">(2341)</span>
                </div>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <div className="ml-3 flex items-center">
                  <span className="text-yellow-500 text-xl">★★★★☆</span>
                  <span className="text-gray-600 ml-2">(1726)</span>
                </div>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <div className="ml-3 flex items-center">
                  <span className="text-yellow-500 text-xl">★★★☆☆</span>
                  <span className="text-gray-600 ml-2">(258)</span>
                </div>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <div className="ml-3 flex items-center">
                  <span className="text-yellow-500 text-xl">★★☆☆☆</span>
                  <span className="text-gray-600 ml-2">(25)</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4 md:pl-10 lg:pl-0">
            <h2 className="text-lg font-bold text-[#151875] underline underline-offset-4 pb-2 mb-4 md:text-[2vw] xl:text-[1.4vw]">
              Categories
            </h2>
            <ul className="space-y-2">
              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Prestashop
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Magento
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Bigcommerce
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  osCommerce
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  3dcart
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Bags
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Jewellery
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Watches
                </label>
              </li>
            </ul>
          </div>

          <div className="p-4 md:pl-10 lg:pl-0">
            <h2 className="text-lg font-bold text-[#151875] underline underline-offset-4 pb-2 mb-4 md:text-[2vw] xl:text-[1.4vw]">
              Price Filter
            </h2>
            <ul className="space-y-2">
              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  $0.00 - $150.00
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  $150.00 - $350.00
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  $150.00 - $504.00
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#7E81A2] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-3 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  $450.00 +
                </label>
              </li>
            </ul>
          </div>

          <div className="p-4 md:pl-10 lg:pl-0 ">
            <h2 className="text-lg font-bold text-[#151875] underline underline-offset-4 pb-2 mb-4 md:text-[2vw] xl:text-[1.4vw]">
              Filter By Color
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
                <span className="ml-2 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Blue
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#FF9437] rounded-full"></span>
                <span className="ml-2 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Orange
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#FFBF95] rounded-full"></span>
                <span className="ml-2 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Brown
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#33D221] rounded-full"></span>
                <span className="ml-2 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Green
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#E248FF] rounded-full"></span>
                <span className="ml-2 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Purple
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#26CBFF] rounded-full"></span>
                <span className="ml-2 text-[#7E81A2] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.2vw] ">
                  Sky
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[60vw] lg:space-y-14  ">
          {SidebarCardData.map((items) => (
            <ShopListCard
              key={items.id}
              imageSrc={items.imageSrc}
              title={items.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
