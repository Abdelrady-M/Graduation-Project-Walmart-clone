import React from "react";
import Accordion from "./Accordion";

export default function LeftHandNavList() {
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
    { title: "Premium Tech", listItems: ["Premium Tech"] },
  ]
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="pb-3 text-xl text-bold">Featured Shops</h2>
        <ul className="pl-0 mt-0 list-unstyled ml-4 mr-3">
          {features.map((feature, index) => (
            <li key={index} className="border-b-2">
              <Accordion feature={feature} idx={index} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
