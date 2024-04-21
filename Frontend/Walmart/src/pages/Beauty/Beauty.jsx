import ShopByCategory from "../../components/ShopByCategory";
import hairTools from "../../assets/hairTools.webp";
import hairCare from "../../assets/hairCare.webp";
import makeup from "../../assets/makeup.webp";
import nails from "../../assets/nails.webp";
import suncare from "../../assets/suncare.webp";
import skincare from "../../assets/skincare.webp";
import shampoo from "../../assets/mondayShampoo.webp";
import frizz from "../../assets/fizz.webp";
import CustomSlider from "../../components/CustomSlider ";
import HeroCard from "../../components/HeroCard";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";


export default function Beauty() {
  const category = [
    { Img: { hairTools }, title: "Tech savings", category: "hairTools" },
    { Img: { hairCare }, title: "Cell phones", category: "hairCare" },
    { Img: { makeup }, title: "Video games", category: "makeup" },
    { Img: { nails }, title: "Smart TVs", category: "nails" },
    { Img: { suncare }, title: "Tablets", category: "suncare" },
    { Img: { skincare }, title: "Computers", category: "skincare" },
  ];

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
      const fetchData = async () => {
          await dispatch(fetchProductsCat("Beauty"));
      };
      fetchData();
  }, [dispatch]);

  const cards = products.map((product) => ({
      photo: product.thumbnail,
      title: product.title,
      price: `$${product.price}`,
      _id: product._id,
  }));
  return (
    <>
      {/* <div className="mx-auto my-4">
        <ShopByCategory categories={category} />
      </div> */}
      <main className="flex justify-between mx-8">
        <article className="h-100 relative flex flex-col mx-auto">
          <CustomSlider mainTitle="New arrivals" cards={cards} />
          <HeroCard
            img={frizz}
            Title="More texture less frizz"
            desc="Bring your best curls into sharp focus"
            style="flex"
          />
                  <div className="container mx-auto my-10">
                        <div className="mx-auto my-8 text-xl font-bold">Refresh your outdoors</div>
                        <div className="grid grid-cols-2 gap-16 md:grid-cols-3">
                            {cards.map((card, index) => (
                                <div key={index}>
                                    <Card
                                        photo={card.photo}
                                        title={card.title}
                                        price={card.price}
                                        id={card._id}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
        </article>
      </main>
    </>
  );
}
