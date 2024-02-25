import React from "react";
import laptop1 from "../assets/laptop.png";

export default function HeroCard() {
  return (
    <div className="relative overflow-hidden shadow-lg w-full h-100 flex ">
      <div className="w-2/3 flex flex-col justify-center mx-8">
        <h2 className="text-lg font-bold leading-5 ">Save on Apple</h2>
        <span className="mt-4">
          Now's the time to score devices you want, for less.
        </span>
        <button className="border border-gray-950 rounded-3xl p-2 w-24 mt-4">
          Shop now
        </button>
      </div>
      <div className="w-1/3">
        <img src={laptop1} alt="" />
      </div>
    </div>
  );
}
