import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Item from "./Item";

export default function Accordion({ feature, idx }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleHandler = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <button
        className="w-full py-4 flex justify-between items-center cursor-pointer "
        onClick={() => {
          toggleHandler(idx);
        }}
      >
        {feature.Img && <img src={feature.Img} />}
        <span className="flex-auto text-base text-left">{feature.title}</span>
        <IoIosArrowDown />
      </button>
      {expandedIndex === idx && <Item content={feature.listItems} />}
    </>
  );
}
