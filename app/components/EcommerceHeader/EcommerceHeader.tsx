
export default function EcommerceHeader() {
    return (
       <div className=" m-auto py-12  flex flex-col sm:flex-col items-center justify-between space-y-4 sm:space-y-4
       md:flex-col lg:flex-row lg:w-[80vw] lg:py-[7vw] xl:justify-around xl:pr-[6vw] xl:space-x-[10vw] ">
         {/* Title Section */}
         <div>
           <h1 className={" text-[3.5vw] lg:text-[2vw] xl:text-[1.4vw] font-bold text-[#151875]"}>
             Ecommerce Accesories & Fashion item
           </h1>
           <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
         </div>
  
        {/* Filter Section */}
         <div className="flex items-center space-x-4">
          {/* Per Page */}
           <div className="flex items-center space-x-2">
            <label htmlFor="perPage" className="text-[2.5vw] md:text-[1.7vw] lg:text-[1.2vw] xl:text-[1vw] text-[#3F509E]">
              Per Page:
            </label>
            <input
              id="perPage"
              type="text"
              placeholder="10"
              className="w-12 border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-[#FB2E86] focus:outline-none xl:text-[0.8vw]"
            />
          </div>  
  
          {/* Sort By */}
           <div className="flex items-center space-x-2">
            <label htmlFor="sortBy" className="text-[2.5vw] md:text-[1.7vw] lg:text-[1.2vw] xl:text-[1vw] text-[#3F509E]">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="border border-gray-300 px-2 py-1 text-sm focus:ring-2 focus:ring-[#FB2E86] focus:outline-none text-gray-500 lg:w-[8vw]
              xl:text-[0.8vw]
              "
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
   
          {/* View */}
           <div className="flex items-center space-x-2">
            <label htmlFor="view" className="text-[2.5] md:text-[1.7vw] lg:text-[1.2vw] xl:text-[1vw] text-[#3F509E]">
              View:
            </label>
            <div className="flex space-x-2">
              <button className="p-1 border border-gray-300  focus:ring-2 focus:ring-[#FB2E86] focus:outline-none text-gray-500 ]">
                <span className="material-icons text-sm xl:text-[0.8vw]">grid_view</span>
              </button>
              {/* <button className="p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <span className="material-icons text-sm">list</span>
              </button> */}
            </div> 
           </div>
        </div>
      </div>













   
        
          
    );
  }
  