import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";

export default function MultiCarousal({ title, desc }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },

      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const cards = [
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
    { photo: jacket3, title: "Costume", price: "$17" },
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
    { photo: jacket3, title: "Costume", price: "$17" },
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
    { photo: jacket3, title: "Costume", price: "$17" },
    { photo: costume, title: "Costume", price: "$17" },
    { photo: jacket, title: "Costume", price: "$17" },
    { photo: jacket2, title: "Costume", price: "$17" },
  ];

  return (
    <>
      <div className="flex flex-col justify-between ms-4">
        <h1 className="algin-start mb-4 font-bold text-xl">{title}</h1>
        <h3 className="color-[#6b7280]">{desc}</h3>
      </div>

      <Carousel
        responsive={responsive}
        className="md:w-max xl:w-full mt-4 mx-auto"
      >
        {cards.map((card, index) => (
          <div key={index} className="my-4">
            <Card photo={card.photo} title={card.title} price={card.price} />
          </div>
        ))}
      </Carousel>
    </>
  );
}
