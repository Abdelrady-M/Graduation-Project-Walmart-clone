import React from "react";
import dolls from "../../assets/dolls.webp";
import figure from "../../assets/figure.webp";
import sets from "../../assets/sets.webp";
import bikes from "../../assets/bikes.webp";
import vehicles from "../../assets/vehicles.webp";
import plush from "../../assets/plush.webp";
import barbie from "../../assets/barbie.jpg";

import ShopByCategory from "../../components/ShopByCategory";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import CustomSlider from "../../components/CustomSlider ";
import HeroCard from "../../components/HeroCard";

export default function Toys() {
  const category = [
    { Img: { dolls }, title: "Dolls & dollhouses", category: "dolls" },
    { Img: { figure }, title: "Action figure", category: "figure" },
    { Img: { sets }, title: "Building sets & blocks", category: "sets" },
    { Img: { bikes }, title: "Bikes", category: "bikes" },
    { Img: { vehicles }, title: "vehicles", category: "vehicles" },
    { Img: { plush }, title: "plush", category: "plush" },
  ];

  const categoriess = [
    {
      title: "dollhouses",
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
      title: "Action figure",
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
      title: "Building sets & blocks",
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
      title: "Bikes",
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
      title: "plush",
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
      title: "vehicles",
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
    { photo: plush, title: "Monday Shampoo", price: "$7" },
    { photo: plush, title: "Monday Shampoo", price: "$7" },
    { photo: plush, title: "Monday Shampoo", price: "$7" },
    { photo: plush, title: "Monday Shampoo", price: "$7" },
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
            img={barbie}
            Title="Celebrate Barbie"
            desc="Bring your best curls into sharp focus"
            style="flex"
          />
          <CustomSlider mainTitle="Trending Now" cards={card} />
        </article>
      </main>
    </>
  );
}
