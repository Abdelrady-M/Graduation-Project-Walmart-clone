import React from "react";
import Accordion from "./Accordion";

export default function LeftHandNavList({ section, items }) {
  return (
    <>
      <div className="flex flex-col items-center mb-8">
        <h2 className="pb-3 text-xl text-bold">{section}</h2>
        <ul className="pl-0 mt-0 list-unstyled ml-4 mr-3">
          {items.map((item, index) => (
            <li key={index} className="border-b-2">
              <Accordion feature={item} idx={index} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
