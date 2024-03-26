import React from "react";
import ShopByCategory from "../../components/ShopByCategory";
import hairTools from "../../assets/hairTools.webp";
import hairCare from "../../assets/hairCare.webp";
import makeup from "../../assets/makeup.webp";
import nails from "../../assets/nails.webp";
import suncare from "../../assets/suncare.webp";
import skincare from "../../assets/skincare.webp";
import shampoo from "../../assets/mondayShampoo.webp";
import frizz from "../../assets/fizz.webp";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import CustomSlider from "../../components/CustomSlider ";
import HeroCard from "../../components/HeroCard";

export default function Beauty() {
  const category = [
    { Img: { hairTools }, title: "Hair Tools", category: "hairTools" },
    { Img: { hairCare }, title: "Hair care", category: "hairCare" },
    { Img: { makeup }, title: "Makeup", category: "makeup" },
    { Img: { nails }, title: "Nails tools", category: "nails" },
    { Img: { suncare }, title: "Suncare", category: "suncare" },
    { Img: { skincare }, title: "Skin care", category: "skincare" },
  ];

  const categoriess = [
    {
      title: "Hair Care",
      listItems: [
        "Shampoo",
        "Conditioner",
        "Hair styling products",
        "Hair styling tools",
        "Hair treatments",
        "Hair accessories",
        "Hair supplements",
      ],
    },
    {
      title: "Makeup",
      listItems: [
        "Face makeup",
        "Eye makeup",
        " Lip makeup",
        "Makeup palettes",
        "Makeup Removers",
        "Makeup tools & Brushes",
      ],
    },
    {
      title: "Hair Care",
      listItems: [
        "Shampoo",
        "Conditioner",
        "Hair styling products",
        "Hair styling tools",
        "Hair treatments",
        "Hair accessories",
        "Hair supplements",
      ],
    },
    {
      title: "Makeup",
      listItems: [
        "Face makeup",
        "Eye makeup",
        " Lip makeup",
        "Makeup palettes",
        "Makeup Removers",
        "Makeup tools & Brushes",
      ],
    },
    {
      title: "Hair Care",
      listItems: [
        "Shampoo",
        "Conditioner",
        "Hair styling products",
        "Hair styling tools",
        "Hair treatments",
        "Hair accessories",
        "Hair supplements",
      ],
    },
    {
      title: "Makeup",
      listItems: [
        "Face makeup",
        "Eye makeup",
        " Lip makeup",
        "Makeup palettes",
        "Makeup Removers",
        "Makeup tools & Brushes",
      ],
    },
  ];

  const card = [
    { photo: shampoo, title: "Monday Shampoo", price: "$7" },
    { photo: shampoo, title: "Monday Shampoo", price: "$7" },
    { photo: shampoo, title: "Monday Shampoo", price: "$7" },
    { photo: shampoo, title: "Monday Shampoo", price: "$7" },
  ];

  return (
    <>
      <div className="mx-8 my-8">
        <ShopByCategory categories={category} />
      </div>
      <main className="flex justify-between px-8">
        <aside className="h-100 relative w-1/4 flex flex-col px-8">
          <LeftHandNavList items={categoriess} section="Categories" />
        </aside>
        <article className="h-100 w-3/4 relative flex flex-col px-8">
          <CustomSlider mainTitle="New arrivals" cards={card} />
          <HeroCard
            img={frizz}
            Title="More texture less frizz"
            desc="Bring your best curls into sharp focus"
            style="flex"
          />
          <CustomSlider mainTitle="Trending Now" cards={card} />
        </article>
      </main>
    </>
  );
}
