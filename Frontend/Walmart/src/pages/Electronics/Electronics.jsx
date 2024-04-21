import HeroCard from "../../components/HeroCard";
import CustomSlider from "../../components/CustomSlider ";
import ShopByCategory from "../../components/ShopByCategory";
import ShopByPrice from "../../components/ShopByPrice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import trending from "../../assets/trending.jpg";
import laptop1 from "../../assets/laptop.png";
import gift from "../../assets/gift.webp";
import gamers from "../../assets/gamer.webp";
import phones from "../../assets/phones.webp";
import savings from "../../assets/savings.webp";
import games from "../../assets/games.webp";
import tvs from "../../assets/TV.webp";
import tablets from "../../assets/tablets.webp";
import laptopp from "../../assets/laptoop.webp";

export default function Electronics() {
  const category = [
    { Img: { savings }, title: "Tech savings", category: "savings" },
    { Img: { phones }, title: "Cell phones", category: "phones" },
    { Img: { games }, title: "Video games", category: "games" },
    { Img: { tvs }, title: "Smart TVs", category: "tvs" },
    { Img: { tablets }, title: "Tablets", category: "tablets" },
    { Img: { laptopp }, title: "Computers", category: "laptopp" },
  ];

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
      const fetchData = async () => {
          await dispatch(fetchProductsCat("electronics"));
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
      <main className="container mx-auto my-8 h-[300vh]">
        <section className="">
          <article className="h-100 relative flex flex-col px-8">
            <HeroCard
              img={laptop1}
              Title="Apple on save"
              desc="Now's the time to score devices you want, for less."
              style="flex"
            />
            <CustomSlider mainTitle="Apple deals" cards={cards} />
            <ShopByCategory categories={category} />
                        <div className="container mx-auto">
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
        </section>
      </main>
    </>
  );
}
