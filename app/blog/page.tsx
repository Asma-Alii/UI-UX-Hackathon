import React from 'react'
import PagesHeader from '../components/PagesHeader/PagesHeader'
import Image from 'next/image'

export default function Blog() {

  const items = [
    { id: 1, image: "/images/recent-post-1.svg", text: "It is a long established fact", date: "Aug 09 2020" },
    { id: 2, image: "/images/recent-post-2.svg", text: "It is a long established fact", date: "Aug 09 2020" },
    { id: 3, image: "/images/recent-post-3.svg", text: "It is a long established fact", date: "Aug 09 2020" },
    { id: 4, image: "/images/recent-post-4.svg", text: "It is a long established fact", date: "Aug 09 2020" },
  ];
  const sale = [
    { id: 1, image: "/images/sale-post-1.svg", text: "Elit ornare in enim mauris.", date: "Aug 09 2020" },
    { id: 2, image: "/images/sale-post-2.svg", text: "Viverra pulvinar et enim.", date: "Aug 09 2020" },
    { id: 3, image: "/images/sale-post-3.svg", text: "Mattis varius donec fdsfd", date: "Aug 09 2020" },
  ];
  const products = [
    {
      id: 1,
      image: "/images/offer-product-1.svg",
      title: "Duis lectus est.",
      price: "$12.00 - $15.00",
    },
    {
      id: 2,
      image: "/images/offer-product-2.svg",
      title: "Sed placerat.",
      price: "$12.00 - $15.00",
    },
    {
      id: 3,
      image: "/images/offer-product-3.svg",
      title: "Netus proin.",
      price: "$12.00 - $15.00",
    },
    {
      id: 4,
      image: "/images/offer-product-4.svg",
      title: "Platea in.",
      price: "$12.00 - $15.00",
    },
  ];

  return (
    <>
    <div>
      <PagesHeader heading='Blog Page' paragraph='Blog Page'/>
    </div>
    <div className="bg-white min-h-screen">
      {/* Main Container */}
      <div className=" px-[6vw] md:px-[7vw] lg:px-[10vw] xl:px-[10vw] 2xl:px-[5vw]">
        {/* Blog Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 pt-[6vw] xl:pt-[9.15vw]">
          {/* Blog Posts */}
          <div className="lg:col-span-3 space-y-8 xl:space-y-[3.15vw]">
            {[
              { title: 'Mauris at orci non vulputate diam tincidunt nec.', date: 'Aug 09 2020', author: 'Surf Auxion', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.', image:'/images/blog-1.svg' },
              { title: 'Aenean vitae in aliquam ultrices lectus. Etiam.', date: 'Aug 09 2020', author: 'Surf Auxion', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.', image:'/images/blog-2.svg' },
              { title: 'Sit nam congue feugiat nisl, mauris amet nisi. ', date: 'Aug 09 2020', author: 'Surf Auxion', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.', image:'/images/blog-post-3.svg' },
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-md overflow-hidden">
                <div className="relative w-full h-[46vw] md:h-[45vw] lg:h-[42vw] xl:h-[33vw]">
                  <Image
                    src={post.image} 
                    alt={`Image for ${post.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="pt-[4vw] md:pt-[3vw] lg:pt-[2vw] xl:pt-[1.97vw]">
                <div className="flex items-center mb-[4vw] md:mb-[2.8vw] lg:mb-[2vw]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-[2.5vw] md:h-[2.5vw] lg:w-[2.1vw ] lg:h-[2.1vw] xl:w-[1.2vw] xl:h-[1.2vw]
                    // '>
                        <path d="M8.36065 0.333008L11.6673 3.64634L10.714 4.58634L7.41398 1.28634L8.36065 0.333008ZM0.333984 11.1863L4.66732 6.87301C4.60065 6.66634 4.64732 6.40634 4.82065 6.23301C5.08065 5.97301 5.50732 5.97301 5.76732 6.23301C6.02732 6.49967 6.02732 6.91967 5.76732 7.17968C5.59398 7.35301 5.33398 7.39967 5.12732 7.33301L0.813984 11.6663L7.88732 9.29967L10.2407 5.05967L6.94732 1.75967L2.70065 4.11301L0.333984 11.1863Z" fill="#FB2E86"/>
                    </svg>
                    <span className="text-[#151875] flex items-center py-1 bg-[#FFE7F9] font-medium rounded
                    ml-[1.5vw] md:ml-[1vw] md:px-[3vw] px-[4vw] mr-[1.5vw] text-[2.7vw] md:text-[2.3vw]
                    lg:text-[1.9vw] lg:ml-[0.6vw]
                    xl:px-[3.15vw] xl:py-[0.2vw] xl:text-[1.02vw] xl:ml-[0.73vw] xl:mr-[2.05vw]">
                     {post.author}
                    </span>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-[2.5vw] md:h-[2.5vw] lg:w-[2.1vw] lg:h-[2.1vw] xl:w-[1.2vw] xl:h-[1.2vw]'>
                        <path d="M7.00065 12.6667C7.13251 12.6667 7.2614 12.6276 7.37103 12.5543C7.48066 12.4811 7.56611 12.377 7.61657 12.2551C7.66703 12.1333 7.68023 11.9993 7.65451 11.87C7.62878 11.7406 7.56529 11.6219 7.47206 11.5286C7.37882 11.4354 7.26003 11.3719 7.13071 11.3462C7.00139 11.3204 6.86735 11.3336 6.74553 11.3841C6.62371 11.4346 6.51959 11.52 6.44634 11.6296C6.37308 11.7393 6.33398 11.8682 6.33398 12C6.33398 12.1768 6.40422 12.3464 6.52925 12.4714C6.65427 12.5964 6.82384 12.6667 7.00065 12.6667ZM10.334 12.6667C10.4658 12.6667 10.5947 12.6276 10.7044 12.5543C10.814 12.4811 10.8994 12.377 10.9499 12.2551C11.0004 12.1333 11.0136 11.9993 10.9878 11.87C10.9621 11.7406 10.8986 11.6219 10.8054 11.5286C10.7122 11.4354 10.5934 11.3719 10.464 11.3462C10.3347 11.3204 10.2007 11.3336 10.0789 11.3841C9.95705 11.4346 9.85293 11.52 9.77967 11.6296C9.70642 11.7393 9.66732 11.8682 9.66732 12C9.66732 12.1768 9.73756 12.3464 9.86258 12.4714C9.9876 12.5964 10.1572 12.6667 10.334 12.6667ZM10.334 10C10.4658 10 10.5947 9.96092 10.7044 9.88767C10.814 9.81441 10.8994 9.71029 10.9499 9.58848C11.0004 9.46666 11.0136 9.33261 10.9878 9.20329C10.9621 9.07397 10.8986 8.95518 10.8054 8.86195C10.7122 8.76871 10.5934 8.70522 10.464 8.6795C10.3347 8.65377 10.2007 8.66698 10.0789 8.71743C9.95705 8.76789 9.85293 8.85334 9.77967 8.96297C9.70642 9.07261 9.66732 9.2015 9.66732 9.33335C9.66732 9.51016 9.73756 9.67973 9.86258 9.80476C9.9876 9.92978 10.1572 10 10.334 10ZM7.00065 10C7.13251 10 7.2614 9.96092 7.37103 9.88767C7.48066 9.81441 7.56611 9.71029 7.61657 9.58848C7.66703 9.46666 7.68023 9.33261 7.65451 9.20329C7.62878 9.07397 7.56529 8.95518 7.47206 8.86195C7.37882 8.76871 7.26003 8.70522 7.13071 8.6795C7.00139 8.65377 6.86735 8.66698 6.74553 8.71743C6.62371 8.76789 6.51959 8.85334 6.44634 8.96297C6.37308 9.07261 6.33398 9.2015 6.33398 9.33335C6.33398 9.51016 6.40422 9.67973 6.52925 9.80476C6.65427 9.92978 6.82384 10 7.00065 10ZM11.6673 2.00002H11.0007V1.33335C11.0007 1.15654 10.9304 0.986973 10.8054 0.861949C10.6804 0.736925 10.5108 0.666687 10.334 0.666687C10.1572 0.666687 9.9876 0.736925 9.86258 0.861949C9.73756 0.986973 9.66732 1.15654 9.66732 1.33335V2.00002H4.33398V1.33335C4.33398 1.15654 4.26375 0.986973 4.13872 0.861949C4.0137 0.736925 3.84413 0.666687 3.66732 0.666687C3.49051 0.666687 3.32094 0.736925 3.19591 0.861949C3.07089 0.986973 3.00065 1.15654 3.00065 1.33335V2.00002H2.33398C1.80355 2.00002 1.29484 2.21073 0.919771 2.58581C0.544698 2.96088 0.333984 3.46959 0.333984 4.00002V13.3334C0.333984 13.8638 0.544698 14.3725 0.919771 14.7476C1.29484 15.1226 1.80355 15.3334 2.33398 15.3334H11.6673C12.1978 15.3334 12.7065 15.1226 13.0815 14.7476C13.4566 14.3725 13.6673 13.8638 13.6673 13.3334V4.00002C13.6673 3.46959 13.4566 2.96088 13.0815 2.58581C12.7065 2.21073 12.1978 2.00002 11.6673 2.00002ZM12.334 13.3334C12.334 13.5102 12.2637 13.6797 12.1387 13.8048C12.0137 13.9298 11.8441 14 11.6673 14H2.33398C2.15717 14 1.9876 13.9298 1.86258 13.8048C1.73756 13.6797 1.66732 13.5102 1.66732 13.3334V7.33335H12.334V13.3334ZM12.334 6.00002H1.66732V4.00002C1.66732 3.82321 1.73756 3.65364 1.86258 3.52862C1.9876 3.40359 2.15717 3.33335 2.33398 3.33335H3.00065V4.00002C3.00065 4.17683 3.07089 4.3464 3.19591 4.47142C3.32094 4.59645 3.49051 4.66669 3.66732 4.66669C3.84413 4.66669 4.0137 4.59645 4.13872 4.47142C4.26375 4.3464 4.33398 4.17683 4.33398 4.00002V3.33335H9.66732V4.00002C9.66732 4.17683 9.73756 4.3464 9.86258 4.47142C9.9876 4.59645 10.1572 4.66669 10.334 4.66669C10.5108 4.66669 10.6804 4.59645 10.8054 4.47142C10.9304 4.3464 11.0007 4.17683 11.0007 4.00002V3.33335H11.6673C11.8441 3.33335 12.0137 3.40359 12.1387 3.52862C12.2637 3.65364 12.334 3.82321 12.334 4.00002V6.00002ZM3.66732 10C3.79917 10 3.92807 9.96092 4.0377 9.88767C4.14733 9.81441 4.23278 9.71029 4.28324 9.58848C4.3337 9.46666 4.3469 9.33261 4.32117 9.20329C4.29545 9.07397 4.23196 8.95518 4.13872 8.86195C4.04549 8.76871 3.9267 8.70522 3.79738 8.6795C3.66806 8.65377 3.53401 8.66698 3.4122 8.71743C3.29038 8.76789 3.18626 8.85334 3.113 8.96297C3.03975 9.07261 3.00065 9.2015 3.00065 9.33335C3.00065 9.51016 3.07089 9.67973 3.19591 9.80476C3.32094 9.92978 3.49051 10 3.66732 10ZM3.66732 12.6667C3.79917 12.6667 3.92807 12.6276 4.0377 12.5543C4.14733 12.4811 4.23278 12.377 4.28324 12.2551C4.3337 12.1333 4.3469 11.9993 4.32117 11.87C4.29545 11.7406 4.23196 11.6219 4.13872 11.5286C4.04549 11.4354 3.9267 11.3719 3.79738 11.3462C3.66806 11.3204 3.53401 11.3336 3.4122 11.3841C3.29038 11.4346 3.18626 11.52 3.113 11.6296C3.03975 11.7393 3.00065 11.8682 3.00065 12C3.00065 12.1768 3.07089 12.3464 3.19591 12.4714C3.32094 12.5964 3.49051 12.6667 3.66732 12.6667Z" fill="#FFA454"/>
                    </svg>
                    <span className="text-[#151875] flex items-center px-[4vw] py-1 bg-orange-100 text-[2.5vw] font-medium rounded
                    ml-[1.5vw] md:text-[2.3vw] md:ml-[1vw] md:px-[3vw]
                     lg:text-[1.9vw] lg:ml-[0.6vw]
                    xl:px-[1.68vw] xl:text-[1.02vw] xl:py-[0.2vw] xl:ml-[0.44vw]">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-[5vw] md:text-[4vw] text-[#151875] font-bold 
                  lg:text-[3.4vw]
                  xl:text-[2.10vw] xl:mt-[2vw]">
                    {post.title}
                  </h2>
                  <p className="text-[#8A8FB9] mt-[2.5vw] text-[3.5vw] md:mt-[1.5vw] md:text-[2.8vw]
                  lg:text-[2.4vw] lg:mt-[1vw]
                  xl:text-[1.17vw] xl:mt-[1.68vw]">
                    {post.description}
                  </p>
                  <div className='flex items-center mt-[3vw] space-x-[1vw] lg:mt-[2vw] lg:space-x-[0.5vw] xl:mt-[2.27vw] xl:space-x-[0.3vw]'>
                  <h4 className='text-[#151875] font-semibold text-[3.5vw] md:text-[2.8vw] lg:text-[2.5vw] 
                   xl:text-[1.32vw]'>
                  Read More 
                  </h4>
                  <div className='rounded-full w-[1.7vw] h-[1.7vw] md:w-[1.3vw] md:h-[1.3vw] lg:w-[1vw] lg:h-[1vw] xl:w-[0.5vw] xl:h-[0.5vw]
                   bg-[#FB2E86]'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

 

          {/* Sidebar */}
          <aside className="xl:col-span-1 mt-[10vw] md:mt-[8vw] lg:mt-[7vw] xl:mt-0 xl:ml-[2vw]">
            {/* Search Bar */}
            <div className="bg-white xl:mb-[3.80vw]">
                <h4 className='text-[#151875] font-semibold text-[5vw] mb-[2vw]
                md:text-[4vw] md:mb-[2.5vw] lg:text-[3.5vw] lg:mb-[1.5vw]
                xl:text-[1.61vw] xl:mb-[1.10vw]'>
                    Search
                </h4>
              <input
                type="text"
                placeholder="Search For Posts"
                className="w-full p-[2vw] border rounded placeholder-[#CBCBE0] border-[#BDBDD8] focus:outline-none focus:ring focus:ring-purple-200
                md:text-[2vw] lg:py-[1.3vw] lg:w-[60vw]
                xl:py-[0.75vw] xl:w-[19.77vw] xl:text-[1.02vw]"
              />

            </div>

            {/* Categories */}
            <div className="bg-whit rounded-lg mt-[5vw] lg:mt-[4vw]">
              <h3 className="mb-[3vw] text-[#151875] font-semibold text-[5vw]
              md:text-[4vw] lg:text-[3.5vw]
              xl:text-[1.61vw] xl:mb-[1.10vw]">
                Categories
              </h3>
             <div className='space-y-[2vw] lg:space-y-[1vw] xl:mt-[1.5vw] xl:space-y-[1.2vw]'>
                <div className='space-x-[2.5vw] xl:space-x-[2.5vw]'>
                    <span className='text-[#3F509E] text-[3.5vw] md:text-[2.8vw] lg:text-[2.4vw] xl:text-[1.02vw]
                  '>
                        Hobbies (14)
                    </span>
                    <span className='text-[#3F509E] text-[3.5vw] md:text-[2.8vw] lg:text-[2.4vw] xl:text-[1.02vw] 
                    '>
                      Women (21)
                    </span>
                </div>
                <div className='space-x-[2.5vw] xl:space-x-[2.5vw]'>
                    <span className='text-[#3F509E] text-[3.5vw] md:text-[2.8vw] lg:text-[2.4vw] xl:text-[1.02vw]
                  '>
                         Women (21)
                    </span>
                    <span className='text-[#3F509E] text-[3.5vw] md:text-[2.8vw] lg:text-[2.4vw] xl:text-[1.02vw] 
                    '>
                      Women (21)
                    </span>
                </div>
                <div className='space-x-[2.5vw] xl:space-x-[2.5vw]'>
                    <span className='text-[#3F509E] text-[3.5vw] md:text-[2.8vw] lg:text-[2.4vw] xl:text-[1.02vw]
                  '>
                        Women (21)
                    </span>
                    <span className='text-[#3F509E] text-[3.5vw] md:text-[2.8vw] lg:text-[2.4vw] xl:text-[1.02vw] 
                    '>
                      Women (21)
                    </span>
                </div>
             </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg mt-[5vw] lg:mt-[4vw] xl:mt-[2.71vw]">
              <h3 className="text-[5vw] mb-[4vw] text-[#151875] font-semibold
                md:text-[4vw] lg:text-[3.5vw] lg:mb-[3vw]
              xl:text-[1.61vw] xl:mb-[2.2vw]">Recent Posts</h3>
           <div className="xl:space-y-[1.61vw]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center xl:space-x-[0.38vw] w-full"
                >
                  <div className='w-[45vw] h-[25vw] md:w-[35vw] md:h-[20vw] lg:w-[29vw] lg:h-[16vw] xl:w-[10vw] xl:h-[3.70vw]'>
                  <Image
                    src={item.image}
                    alt={`Thumbnail ${item.id}`}
                    width={20}
                    height={20}
                    layout="responsive"
                    className="w-full rounded object-cover"
                  />
                  </div>
                  <div className="flex flex-col justify-center w-full ml-[3vw] ">
                    <p className="text-[#3F509E] text-[4vw] md:text-[3.3vw] lg:text-[2.9vw] xl:text-[1.02vw] font-normal">
                      {item.text}
                    </p>
                    <p className="text-[#8A8FB9] text-[3vw] md:text-[2.6vw] lg:text-[2.4vw] xl:text-[0.80vw]">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div> 
 
            {/* Sale Products */}
            <div className="bg-white rounded-lg mt-[5vw] xl:mt-[2.71vw]">
              <h3 className="text-[5vw] mb-[4vw] text-[#151875] font-semibold
                md:text-[4vw] lg:text-[3.5vw] lg:mb-[3vw]
              xl:text-[1.61vw] xl:mb-[2.2vw]">Sale Product</h3>
                    <div className="xl:space-y-[1.10vw]">
                      {sale.map((saleitems) => (
                        <div key={saleitems.id} className="flex items-center w-full xl:w-[19vw] xl:space-x-[0.38vw]">
                          <div className='w-[30vw] h-[28vw] md:w-[24vw] md:h-[23vw] lg:w-[19vw] lg:h-[18vw] xl:h-[5vw]' >
                          <Image
                            src={saleitems.image}
                            alt={`Thumbnail ${saleitems.id}`}
                            width={20}
                            height={20}
                            layout='responsive'
                            className="w-full rounded object-cover"
                          />
                          </div>
                          <div className='ml-[3vw]'>
                            <p className="text-[#3F509E] text-[4.2vw] md:text-[3.4vw] lg:text-[2.9vw] xl:text-[1.02vw] font-normal xl:w-[13vw]">{saleitems.text}</p>
                            <p className="text-[#8A8FB9] text-[3vw] md:text-[2.6vw] lg:text-[2.4vw] xl:text-[0.80vw]">{saleitems.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>

            </div>




             {/* offer Products */}

             <div className="bg-white rounded mt-[5vw] xl:mt-[2.71vw]">
              <h3 className="text-[5vw] mb-[4vw] text-[#151875] font-semibold
                md:text-[4vw] lg:text-[3.5vw]
              xl:text-[1.61vw] xl:mb-[2.2vw]">Offer Product</h3>
                    <div className="grid grid-cols-2 gap-[5vw]">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded xl:w-[9.23vw] xl:h-[6vw] ">
            <Image
              src={product.image}
              alt={product.title}
              width={20}
              height={20}
              layout='responsive'
              className="w-full object-cover"
            />
            <div className='flex flex-col items-center mt-[2vw] xl:mt-[0.66vw] '>
              <h3 className="text-[3.6vw] font-medium text-[#151875] md:text-[3.2vw] lg:text-[3vw] xl:text-[1.02vw]">{product.title}</h3>
              <p className="text-gray-500 text-[2.7vw] md:text-[2.4vw] lg:text-[2.1vw] xl:text-[0.88vw]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
            </div>

        {/* follow */}
        <div className='mt-[10vw] xl:mt-[7vw] '>
        <h3 className="text-[5vw] mb-[4vw] text-[#151875] font-semibold
          md:text-[4vw] lg:text-[3.5vw] lg:mb-[3vw]
              xl:text-[1.61vw] xl:mb-[1vw]">Follow</h3>
              <div className='w-[25vw] md:w-[23vw] lg:w-[20vw] xl:w-[7.5vw]'>
                <Image
                src="/images/social-icons.svg"
                alt='social icons'
                width={10}
                height={10}
                layout='responsive'
                className='w-full'
                />
              </div>
        </div>

        {/* tags  */}

        <div className='mt-[6vw] xl:mt-[2.61vw]'>
          <h3 className="text-[5vw] mb-[4vw] text-[#151875] font-semibold
            md:text-[4vw] lg:text-[3.5vw] lg:mb-[3vw]
              xl:text-[1.61vw] xl:mb-[1vw]">Tags</h3>
              <div className='text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[1.17vw] xl:mb-[1vw] text-[#151875] inline'>
                <span className='mr-[5.5vw] xl:mr-[2vw] underline hover:text-[#FB2E86] cursor-pointer'>General</span>
                <span className='mr-[5.5vw] xl:mr-[2vw] underline hover:text-[#FB2E86] cursor-pointer'>Atsanil</span>
                <span className='mr-[5.5vw] underline hover:text-[#FB2E86] cursor-pointer'>Insas.</span>
              </div>
                <div className='text-[#151875] text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[1.17vw] inline xl:block'>
                  <span className='mr-[5.5vw] xl:mr-[2vw] underline hover:text-[#FB2E86] cursor-pointer'>Bibsaas</span>
                  <span className='underline hover:text-[#FB2E86] cursor-pointer'>Nulla.</span>
                </div>
        </div>

          </aside>

        </div>
                   
        {/* pagination  */}

        <div className="flex space-x-[3.5vw] justify-center mt-[18vw] mb-[15vw] lg:mb-[10vw] xl:mt-[5.27vw] xl:mb-[5vw]">
          <div className="w-[7vw] h-[7vw] flex items-center justify-center bg-pink-500 text-white font-bold rounded cursor-pointer
          lg:w-[5vw] lg:h-[5vw] xl:w-[3vw] xl:h-[3vw]">
            1
          </div>
          <div className="w-[7vw] h-[7vw] flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded cursor-pointer
          lg:w-[5vw] lg:h-[5vw] xl:w-[3vw] xl:h-[3vw]">
            2
          </div>
          <div className="w-[7vw] h-[7vw] flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded cursor-pointer
          lg:w-[5vw] lg:h-[5vw] xl:w-[3vw] xl:h-[3vw]">
            3
          </div>
          <div className="w-[7vw] h-[7vw] flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded cursor-pointer
          lg:w-[5vw] lg:h-[5vw] xl:w-[3vw] xl:h-[3vw]">
            4
          </div>
        </div>

        {/* logos  */}
        <div className='mb-[9vw] xl:px-[5vw] xl:mb-[8.20vw]'>
        <div className='w-[90vw] xl:w-[66.20vw] xl:h-[6.81vw]'>
          <Image
          src="/images/logos.svg"
          alt='logos'
          width={10}
          height={10}
          layout='responsive'
          className='w-full'
          />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
