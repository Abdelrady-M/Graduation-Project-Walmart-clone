import React from "react";
import HeroCard from "../../components/HeroCard";
import ShopByCategory from "../../components/ShopByCategory";
import fashion from "../../assets/HeroFashion.jpg";
import girls from "../../assets/kidsFashion.webp";
import boys from "../../assets/boysFashion.webp";
import baby from "../../assets/baby.webp";
import men from "../../assets/men.webp";
import sheos from "../../assets/shoes.webp";
import women from "../../assets/women's.webp";
import womenPlus from "../../assets/womenPlus.webp";
import young from "../../assets/young.webp";
// import womenPlus from "../assets/womenPlus.webp";

export default function Fashion() {
  const category = [
    { Img: { baby }, title: "Baby's", category: "baby" },
    { Img: { women }, title: "Women's", category: "women" },
    { Img: { womenPlus }, title: "Women's plus", category: "womenPlus" },
    { Img: { men }, title: "Men's", category: "men" },
    { Img: { sheos }, title: "Shoes", category: "sheos" },
    { Img: { young }, title: "Young Adult", category: "young" },
  ];
  return (
    <>
      <main className="h-100 relative flex flex-col p-8 mx-16">
        <HeroCard
          Title="Spring fashion refresh"
          desc="When getting dressed is the best & every invite's a yes."
          img={fashion}
          style="flex"
        />
        <section className="flex flex-col my-8">
          <div className="flex justify-between">
            <div>
              <h1 className="algin-start mb-4 font-bold text-xl">
                New spring arrivals
              </h1>
            </div>
            <div>
              <a href="#" className="hover:underline">
                View all
              </a>
            </div>
          </div>
          <div className="flex">
            <HeroCard
              img={girls}
              Title="every look's a new fave"
              desc="She can do every thing in the latest."
              style="flex"
            />
            <HeroCard
              img={boys}
              Title="He's ready for it all"
              desc="Gear up for fun in looks that are just his style."
              style="flex"
            />
          </div>
        </section>
        <ShopByCategory categories={category} />
      </main>
    </>
  );
}
