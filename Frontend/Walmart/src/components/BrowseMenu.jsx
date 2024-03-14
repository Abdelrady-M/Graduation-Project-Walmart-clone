import React from "react";

export default function BrowseMenu({ title, image, menu }) {
  console.log(menu);
  return (
    <div className="flex justify-between relative overflow-hidden shadow-lg w-1/3 h-100 p-6">
      <div className="flex flex-col w-2/3">
        <h2 className="text-xl font-bold">{title}</h2>
        <ul className="w-100 text-left pt-2">
          {menu.map((item, index) => (
            <li key={index} className="text-slate-400">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3">
        <img src={image} alt="" />
      </div>
    </div>
  );
}