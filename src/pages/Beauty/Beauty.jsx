import frizz from "../../assets/fizz.webp";
import HeroCard from "../../components/HeroCard";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import Deals from "../../components/Deals";


export default function Beauty() {


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

      <main className="flex justify-between mx-8">
        <article className="h-100 relative flex flex-col mx-auto">
        <Deals />
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
