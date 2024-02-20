import React from "react";
import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";
import Card from "./Card";
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";


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



const Deals = () => {
    const slider = React.useRef(null);

    const settings = {

        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 6,

        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                },
            },

            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],

    };

    return (
        <div className="container mb-10 mx-auto mt-5">
            <h1 className="algin-start mb-4 font-bold">
                DEALS
            </h1>
            <Slider ref={slider} {...settings}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <Card photo={card.photo} title={card.title} price={card.price} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Deals