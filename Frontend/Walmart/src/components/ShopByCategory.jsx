import React from "react";
import savings from "../assets/savings.webp";
import tvs from "../assets/TV.webp";
import laptop from "../assets/laptoop.webp";
import phones from "../assets/phones.webp";
import tablets from "../assets/tablets.webp";
import games from "../assets/games.webp";

export default function ShopByCategory() {
  return (
    <>
      <header className="flex justify-between items-baseline">
        <h2 className="font-bold">Shop by category</h2>
        <button>See less</button>
      </header>
      <div className="flex flex-wrap w-full mb-4">
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-between">
          <img src={savings} alt="" />
          <a href="">Tech savings</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-between">
          <img src={tvs} alt="" />
          <a href="">smart TVs</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-between">
          <img src={laptop} alt="" />
          <a href="">Computers</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-between">
          <img src={tablets} alt="" />
          <a href="">Tablets</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-between">
          <img src={phones} alt="" />
          <a href="">Cell phones</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-between">
          <img src={games} alt="" />
          <a href="">Video games</a>
        </div>
      </div>
    </>
  );
}
