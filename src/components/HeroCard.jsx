import React from "react";

export default function HeroCard({ img, Title, desc, style }) {
  return (
    <div
      className="relative overflow-hidden shadow-lg w-full h-100 my-6"
      style={{ display: style }}
    >
      <div className="w-1/2 flex flex-col justify-center mx-8">
        <h2 className="text-lg font-bold leading-5 ">{Title}</h2>
        <span className="mt-4">{desc}</span>
        <button className="border border-gray-950 rounded-3xl p-2 w-24 mt-4">
          Shop now
        </button>
      </div>
      <div className="w-1/2">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
