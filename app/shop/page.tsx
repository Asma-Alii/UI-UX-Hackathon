import EcommerceHeader from "../components/EcommerceHeader/EcommerceHeader";
import ShoppingCard from "../components/Cards/ShopGrid/ShopCard";
import PagesHeader from "../components/PagesHeader/PagesHeader";

export default function shop() {
  const cardsData = [
    { imageScr: "/images/image 9.svg", title: "Vel elit euismod" },
    { imageScr: "/images/image 1165.svg", title: "Ultricies imperdiet" },
    { imageScr: "/images/image 1173.svg", title: "Vitae suspendisse" },
    { imageScr: "/images/bag.svg", title: "Sed at fermentum" },
    { imageScr: "/images/digital-watch.svg", title: "Fusce pellentesque at" },
    { imageScr: "/images/watch.svg", title: "Vestibulum magna laoreet" },
    { imageScr: "/images/headphones.svg", title: "Sollicitudin amet orci" },
    { imageScr: "/images/pink-sofaa.svg", title: "Ultrices mauris sit" },
    { imageScr: "/images/watch2.svg", title: "Pellentesque condimentum ac" },
    { imageScr: "/images/cam 2.svg", title: "Cras scelerisque velit" },
    { imageScr: "/images/headphones2.svg", title: "Lectus vulputate faucibus" },
    { imageScr: "/images/bag.svg", title: "Purus risus, ut" },
  ];
  return (
    <>
      <div>
        <PagesHeader
          heading="Shop Grid Default"
          paragraph="Shop Grid Default"
        />
      </div>

      <div className="">
        <EcommerceHeader />
      </div>

      <section>
        <div className="xl:w-[80vw] xl:m-auto xl:mb-20   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4     overflow-hidden">
          {cardsData.map((card, index) => (
            <ShoppingCard
              key={index}
              imageSrc={card.imageScr}
              title={card.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
