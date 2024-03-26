import React from "react";
import laptops from "../assets/under500.webp";
import tvs from "../assets/under300.webp";
import speakers from "../assets/under25.webp";
import headphones from "../assets/under35.webp";
import tablets from "../assets/under400.webp";
import printers from "../assets/under100.webp";

export default function ShopByPrice() {
  return (
    <div className="my-8 ">
      <header className="flex justify-between items-baseline">
        <h2 className="font-bold">Shop by price</h2>
        <button>See less</button>
      </header>
      <div className="flex flex-wrap w-full mb-4 h-auto ">
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-start">
          <img src={laptops} alt="" />
          <a href="">Laptops under $500</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-start">
          <img src={tvs} alt="" />
          <a href="">TVs under $300</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-start">
          <img src={speakers} alt="" />
          <a href="">Speakers under $25</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-start text-center">
          <img src={tablets} alt="" />
          <a href="">Tablets under $300</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-start">
          <img src={headphones} alt="" />
          <a href="">Cell phones under $25</a>
        </div>
        <div className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-start text-center">
          <img src={printers} alt="" />
          <a href="">Printers under $100</a>
        </div>
      </div>
    </div>
  );
}
