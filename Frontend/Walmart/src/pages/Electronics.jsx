import React from "react";
import MultiCarousal from "../components/MultiCarousal";
import LeftHandNavList from "../components/LeftHandNavList/LeftHandNavList";
import HeroCard from "../components/HeroCard";
import CustomSlider from "../components/CustomSlider ";
import ShopByCategory from "../components/ShopByCategory";
import ShopByPrice from "../components/ShopByPrice";

import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";
import trending from "../assets/trending.jpg";
import laptop1 from "../assets/laptop.png";
import gift from "../assets/gift.webp";
import gamers from "../assets/gamer.webp";

export default function Electronics() {
  const features = [
    { title: "Deals", listItems: ["Tech Deals", "Tech Value Deals"] },
    { title: "Tax Prep", listItems: ["Tax Prep"] },
    {
      title: "New & Trending",
      listItems: [
        "Travel Tech",
        "New & Trending Tech",
        "New PC Gaming",
        "New Desktop Computers",
        "New Laptops",
      ],
    },

    {
      title: "Walmart Restored",
      listItems: [
        "Explore Walmart Restored",
        "Restored TVs",
        "Restored Computers & Mac",
        "Tech Value Deals",
      ],
    },

    { title: "Premium Tech", listItems: ["Premium Tech"] },
  ];

  const categories = [
    {
      //has Image
      title: "TV & Video",
      listItems: ["All TV & Video", "Smart TVs", "Roku TVs"],
    },
    {
      title: "Computers & Tablets",
      listItems: ["All Computers", "Laptops", "Chromebook"],
    },
    {
      title: "Video Games",
      listItems: ["All Video Games", "Xbox", "PlayStation"],
    },
    {
      title: "PC Gaming",
      listItems: ["PC Gaming", "Gaming Laptops", "Gaming Desktops"],
    },
    { title: "Audio", listItems: ["AirPods", "Sound Bars"] },
  ];
  const images = [
    {
      imgUrl:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-b035/k2-_9c76b273-177b-485f-a2c4-7be90ce92515.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
  ];
  const brands = [
    {
      title: "Shop Brands",
      listItems: ["Apple", "Beats", "Bose", "Chromebook"],
    },
  ];

  const cards = [
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
    { photo: jacket3, title: "Costume", price: "$17" },
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
    { photo: jacket3, title: "Costume", price: "$17" },
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
    { photo: jacket3, title: "Costume", price: "$17" },
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
  ];

  return (
    <>
      <main className="container mx-auto">
        <section className="my-5">
          <MultiCarousal
            title="Apple Deals"
            desc="Save on the gadgets you love, for less."
          />
        </section>
        <section className="flex justify-between">
          <aside className="h-100 relative w-1/4 flex flex-col px-8">
            <LeftHandNavList items={features} section="Features Shop" />
            <LeftHandNavList items={categories} section="Categories" />
            <LeftHandNavList items={brands} section="Featured Brands" />
          </aside>

          <article className="h-100 w-3/4 relative flex flex-col px-8">
            <HeroCard
              img={laptop1}
              Title="Apple on save"
              desc="Now's the time to score devices you want, for less."
              style="flex"
            />
            <CustomSlider mainTitle="Apple deals" cards={cards} />
            <ShopByCategory />
            <section className="relative overflow-hidden shadow-lg w-full h-100 flex flex-col my-8">
              <div>
                <img src={trending} alt="" />
              </div>
              <div className="flex justify-between items-baseline px-8 py-4">
                <CustomSlider mainTitle="New & trending tech" cards={cards} />
              </div>
            </section>
            <section className="flex flex-col">
              <div className="flex justify-between">
                <div>
                  <h1 className="algin-start mb-4 font-bold text-xl">
                    Busket-building finds
                  </h1>
                </div>
                <div>
                  <a href="#" className="hover:underline">
                    View all
                  </a>
                </div>
              </div>
              <HeroCard
                img={gift}
                Title="Entertaining gift"
                desc="Surprise them with tech goodies"
                style="flex"
              />
              <HeroCard
                img={gamers}
                Title="Just for gamers"
                desc="Level up with Easter with trending video games & gears"
                style="flex"
              />
            </section>
            <ShopByPrice />
          </article>
        </section>
      </main>
    </>
  );
}
