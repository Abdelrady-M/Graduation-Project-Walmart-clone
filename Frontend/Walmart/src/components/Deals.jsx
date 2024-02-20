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


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            NEXT
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            BACK
        </div>
    );
}
const Deals = () => {
    const slider = React.useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
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

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="container mb-10 mx-auto">
            <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
                DEALS
            </h1>

            <div style={{ margin: 20 }}>
                <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
                <button
                    style={{ marginLeft: 20 }}
                    onClick={() => slider?.current?.slickNext()}
                >
                    Next
                </button>
            </div>

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