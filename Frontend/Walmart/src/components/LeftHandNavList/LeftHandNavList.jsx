import React from "react";
import Accordion from "./Accordion";

export default function LeftHandNavList({ section, items }) {
  return (
    <>
      <div className="container mx-auto flex flex-col  mb-8">
        <h2 className="titleCat p-3 text-xl font-bold ">{section}</h2>
        <ul className="w-full pl-0 mt-0 list-unstyled ml-4 mr-3 ">
          {items.map((item, index) => (
            <li key={index} className="border-b-2 font-bold mb-3">
              <Accordion feature={item} idx={index} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
