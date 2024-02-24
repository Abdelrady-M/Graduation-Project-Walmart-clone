import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MultiCarousal from "../components/MultiCarousal";
import LeftHandNavList from "../components/LeftHandNavList/LeftHandNavList";

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

  const brands = [
    {
      title: "Shop Brands",
      listItems: ["Apple", "Beats", "Bose", "Chromebook"],
    },
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
            <MultiCarousal
              title="Apple Deals"
              desc="Save on the gadgets you love, for less."
        
            />
          </article>
        </section>
      </main>

    </>
  );
}
