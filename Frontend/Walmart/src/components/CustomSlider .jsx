import React from "react";
import Slider from "react-slick";
import Card from "./Card";


const CustomSlider = ({ cards, mainTitle }) => {
    const slider = React.useRef(null);

    const settings = {

        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,

                },
            },

            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 1,
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
            <div className="flex justify-between">
                <div>
                    <h1 className="algin-start mb-4 font-bold text-xl">
                        {mainTitle}
                    </h1>
                </div>
                <div>
                    <a href="#" className="hover:underline">View all</a>
                </div>
            </div>
            <Slider ref={slider} {...settings}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <Card photo={card.photo} title={card.title} price={card.price} _id={card._id} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;
