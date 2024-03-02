import React from "react";
import CustomSlider from "../../components/CustomSlider ";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import HeroCard from "../../components/HeroCard";

import tires from "../../assets/tires.webp";

export default function AutoTires() {
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
    { photo: tires, title: "Monday Shampoo", price: "$7" },
    { photo: tires, title: "Monday Shampoo", price: "$7" },
    { photo: tires, title: "Monday Shampoo", price: "$7" },
    { photo: tires, title: "Monday Shampoo", price: "$7" },
  ];
  return (
    <>
      <main className="flex justify-between">
        <aside className="h-100 relative w-1/4 flex flex-col px-8">
          <LeftHandNavList items={categoriess} section="Categories" />
        </aside>
        <article className="h-100 w-3/4 relative flex flex-col px-8">
          <CustomSlider mainTitle="New arrivals" cards={card} />
          <HeroCard
            img={tires}
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
