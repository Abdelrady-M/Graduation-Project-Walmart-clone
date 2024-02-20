import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

import React from "react";

import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";

export default function MultiCarousal() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1200, min: 993 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 992, min: 769 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 577 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
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
    { photo: costume, title: "Costume", price: "$17" },
  ];
  return (
    <Carousel
      responsive={responsive}
      className="md:w-max xl:w-[90vw] gap-4 mt-4 mx-auto "
    >
      {cards.map((card, index) => (
        <div key={index} className="my-4">
          <Card photo={card.photo} title={card.title} price={card.price} />
        </div>
      ))}
    </Carousel>
  );
}
