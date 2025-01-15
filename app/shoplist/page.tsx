import PagesHeader from "../components/PagesHeader/PagesHeader";
import EcommerceHeader from "../components/EcommerceHeader/EcommerceHeader";
import ShopListCard from "../components/Cards/ShopListCard";

export default function shopList() {
  const listCardData = [
    {
      id: "shopList1",
      imageSrc: "/images/shoplist-img1.svg",
      title: "Accumsan tincidun",
    },
    {
      id: "shopList2",
      imageSrc: "/images/shoplist-img2.svg",
      title: "In nulla",
    },
    {
      id: "shopList3",
      imageSrc: "/images/shoplist-img3.svg",
      title: "Vel sem",
    },
    {
      id: "shopList4",
      imageSrc: "/images/shoplist-img4.svg",
      title: "Porttitor cum",
    },
    {
      id: "shopList5",
      imageSrc: "/images/shoplist-img5.svg",
      title: "Nunc in",
    },
    {
      id: "shopList6",
      imageSrc: "/images/shoplist-img6.svg",
      title: "Vitae facilisis",
    },
    {
      id: "shopList7",
      imageSrc: "/images/shoplist-img7.svg",
      title: "Curabitur lectus",
    },
  ];
  return (
    <>
      <div>
        <PagesHeader heading="Shop List" paragraph="Shop List" />
      </div>

      <div>
        <EcommerceHeader />
      </div>

      <div className="space-y-12 pb-10">
        {listCardData.map((item) => (
          <ShopListCard
            key={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
          /> // ShopListCard component is imported and used here with props
        ))}
      </div>
    </>
  );
}
