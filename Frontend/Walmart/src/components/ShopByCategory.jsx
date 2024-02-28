import React from "react";

export default function ShopByCategory({ categories }) {
  console.log(categories[1].Img);
  return (
    <>
      <header className="flex justify-between items-baseline">
        <h2 className="font-bold">Shop by category</h2>
        <button>See less</button>
      </header>
      <div className="flex flex-wrap w-full mb-4">
        {categories.map((ctg, index) => (
          <div
            key={index}
            className="w-1/6 px-2 flex flex-col items-center mt-2 grow-0 justify-between"
          >
            <img src={ctg.Img[ctg.category]} alt="" />
            <a href="">{ctg.title}</a>
          </div>
        ))}
      </div>
    </>
  );
}