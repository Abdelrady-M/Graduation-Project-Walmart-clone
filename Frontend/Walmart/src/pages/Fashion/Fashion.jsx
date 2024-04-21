import HeroCard from "../../components/HeroCard";
import fashion from "../../assets/HeroFashion.jpg";
import girls from "../../assets/kidsFashion.webp";
import boys from "../../assets/boysFashion.webp";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import Deals from "../../components/Deals";


export default function Fashion() {

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
      const fetchData = async () => {
          await dispatch(fetchProductsCat("Fashion"));
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
      <main className="h-100 relative flex flex-col p-8 mx-16">
        <HeroCard
          Title="Spring fashion refresh"
          desc="When getting dressed is the best & every invite's a yes."
          img={fashion}
          style="flex"
        />
        <section className="flex flex-col my-8">
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
          <div className="flex justify-between">
            <div>
              <h1 className="algin-start mb-4 font-bold text-xl">
                New spring arrivals
              </h1>
            </div>
            <div>
              <a href="#" className="hover:underline">
                View all
              </a>
            </div>
          </div>
          <div className="flex">
            <HeroCard
              img={girls}
              Title="every look's a new fave"
              desc="She can do every thing in the latest."
              style="flex"
            />
            <HeroCard
              img={boys}
              Title="He's ready for it all"
              desc="Gear up for fun in looks that are just his style."
              style="flex"
            />
          </div>
        </section>
        <Deals />
              </main>
    </>
  );
}
