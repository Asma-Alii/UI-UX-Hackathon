// components/RelatedProducts.js

import Image from "next/image";
export default function RelatedProducts() {
    const products = [
      {
        id: 1,
        name: "Men's Fashion Wear",
        price: "$50.00",
        image: "/images/relatedproducts1.svg",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Women's Fashion",
        price: "$40.00",
        image: "/images/relatedproduct2.svg",
        rating: 4.0,
      },
      {
        id: 3,
        name: "White Summer Fashion",
        price: "$30.00",
        image: "/images/relatedproduct3.svg",
        rating: 4.8,
      },
      {
        id: 4,
        name: "Top Wall Digital Clock",
        price: "$60.00",
        image: "/images/relatedproducts4.svg",
        rating: 4.7,
      },
    ];
  
  return(
      <div className="max-w-7xl mx-auto py-8 px-4 lg:w-[80vw] lg:m-auto xl:w-[70vw] ">
        <h2 className="text-[4vw] font-bold mb-6 text-[#101750] lg:text-[3.5vw] xl:text-[2vw]">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className=" overflow-hidden"
            >
                <div className="relative w-full h-[110vw] sm:h-[60vw] lg:h-[30vw] lg:w-[20vw] xl:h-[20vw] overflow-hidden ">
               <Image
                src={product.image}
                alt={product.name}
                layout="fill" 
                objectFit="cover"
                objectPosition="center" 
                 
              /></div>
              <div className="p-4">
                <h3 className="text-[4vw] sm:text-[3.5vw] font-semibold text-[#151875] lg:text-[2vw] xl:text-[1vw]">
                  {product.name}
                </h3>
                <p className="text-[#151875] text-[3vw] lg:text-[1.5vw] xl:text-[1vw]">{product.price}</p>
                <div className="flex items-center mt-2">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={`text-yellow-400 text-[3vw] lg:text-[2vw] xl:text-[1vw] ${
                          index < Math.round(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  