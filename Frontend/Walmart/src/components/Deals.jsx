import React from "react";
import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";
import Card from "./Card";
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const Deals = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "5px",
        slidesToShow: 6,
        speed: 200,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
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
        <div className="container mx-auto mt-10 flex flex-col w-full relative">
            <div className="mb-5 font-bold"><h1>Flash Deals</h1></div>
            <div className="md:w-max xl:w-[80vw] mt-4 mx-auto ">
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <Card photo={card.photo} title={card.title} price={card.price} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow custom-prev-arrow absolute top-0 left-0 z-40 w-[40px] h-[40px] rounded-full border-black bg-inherit" onClick={onClick}>
            <MdOutlineArrowBackIos />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow custom-next-arrow absolute top-0 right-0 z-40" onClick={onClick}>
            <MdOutlineArrowForwardIos />
        </div>
    );
};

export default Deals;
