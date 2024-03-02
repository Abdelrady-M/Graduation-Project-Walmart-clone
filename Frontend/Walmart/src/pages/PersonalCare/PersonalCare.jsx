import React from "react";
import ShopByCategory from "../../components/ShopByCategory";
import CustomSlider from "../../components/CustomSlider ";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import HeroCard from "../../components/HeroCard";

import bathBody from "../../assets/bath&body.webp";
import equate from "../../assets/equate.webp";
import feminine from "../../assets/femininecare.webp";
import mens from "../../assets/menGrooming.webp";
import oral from "../../assets/oralCare.webp";
import welness from "../../assets/wellness.webp";

export default function PersonalCare() {
  const category = [
    { Img: { bathBody }, title: "Bath & body", category: "bathBody" },
    { Img: { equate }, title: "Equate", category: "equate" },
    { Img: { feminine }, title: "Feminine care", category: "feminine" },
    { Img: { mens }, title: "Men's grooming", category: "mens" },
    { Img: { oral }, title: "Oral care", category: "oral" },
    { Img: { welness }, title: "Skin care", category: "welness" },
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
    { photo: feminine, title: "Monday Shampoo", price: "$7" },
    { photo: feminine, title: "Monday Shampoo", price: "$7" },
    { photo: feminine, title: "Monday Shampoo", price: "$7" },
    { photo: feminine, title: "Monday Shampoo", price: "$7" },
  ];
  return (
    <>
      <div className="mx-8 my-4">
        <ShopByCategory categories={category} />
      </div>
      <main className="flex justify-between">
        <aside className="h-100 relative w-1/4 flex flex-col px-8">
          <LeftHandNavList items={categoriess} section="Categories" />
        </aside>
        <article className="h-100 w-3/4 relative flex flex-col px-8">
          <CustomSlider mainTitle="New arrivals" cards={card} />
          <HeroCard
            img={oral}
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
