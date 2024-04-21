import CustomSlider from "../../components/CustomSlider ";
import Deals from "../../components/Deals";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";

const features = [
    { title: "Appliances", listItems: [
    "Shop All Appliances", "Air Conditioners",
    "Dishwashers",
    "Fans",
    "Freezers",
    "Irons, Steamers & Accessories",
    "Kitchen Appliances",
    "Ovens & Ranges",
    "Refrigerators",
    "Space Heaters & Fireplaces",
    "Vacuums, Steamers & Floor Care",
    "Vacuums, Steamers & Floor Care",
    "Washers & Dryers",
] },
    { title: "Bath", listItems: [
"Shop all Paht",
"Bathroom Accessories",
"Bathroom Furniture",
"Bath Towels",
"Bathroom Rugs & Bath Mats",
"Bathroom Storage",
"Beach Towels",
"Shower Curtain & Accessories",
] },
    {
    title: "Bedding",listItems: [
            "Shop All Bedding",
            "Air Mattresses",
            "Bed In A Bag",
            "Bedding Sets",
            "Blankets & Throws",
            "Comforters",
            "Duvet Covers",
            "Heated Blankets",
            "Mattress Toppers",
            "Pillows",
            "Quilts",
            "Sheets",
] },
    {
        title: "Décor",listItems: [
            "Shop All",
            "Candles & Home Fragrance",
            "Clocks",
            "Curtains & Window Treatments",
            "Decorative Accents",
            "Frames",
            "Lighting & Light Fixtures",
            "Mirrors",
            "Rugs",
            "Throw Pillows",
            "Wall Art",
            "Wall Decor",
        ],
    },
    { title: "Furniture", listItems: [
        "Shop All Furniture",
        "Bathroom Furniture",
        "Bedroom Furniture",
        "Entryway Furniture",
        "Kitchen & Dining Furniture",
        "Living Room Furniture",
        "Office Furniture",
        "Patio Furniture",
    ] },



    { title: "Kitchen & Dining", listItems: [
        "Kitchen & Dining",
        "Bakeware",
        "Bowls",
        "Cookware",
        "Cutlery",
        "Dinnerware Sets",
        "Drinking Glasses",
        "Flatware",
        "Kitchen Appliances",
        "Mugs",
        "KiPlatestchen",
        "Serveware",
        "Tools & Gadgets",
    ] },
];



export default function Home2() {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("Home"));
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

        <div className="container mx-auto">
        <div className=" container h-[] w-[80%] relative mx-auto m-8">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-e2ad/k2-_4de43013-971a-444c-b405-4a3d339f0252.v1.jpg?" alt="" />

        </div>


            <div className="flex">
                <div className="hidden mx-4 w-1/8 lg:grid lg:grid-cols-1 ">
                    <LeftHandNavList items={features} section="Categories" />
                </div>
                <div className="w-3/4 mx-auto">
                    <div className="shadow-md border-1 rounded-2xl">
                        <img
                            className=" mx-auto"
                            style={{ width: "80%" }}
                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-603e/k2-_710168df-eb48-46ac-b6fe-7c98ba7db9b6.v1.jpg?odnHeight=680&odnWidth=1208&odnBg=FFFFFF"
                            alt=""
                        />
                        <div className="ml-8 md:text-2xl text-sm">
                            <h1 className="text-lg">Perk up your bedroom</h1>
                            <p>A few new pieces will have you primed to seize the day.</p>
                        </div>
                        <div className="container p-4">
                <Deals />
                </div>
                    </div>

                        <div className=" container h-[] w-[100%] relative mx-auto my-8">
            <img className="rounded-md shadow-md" src="https://i5.walmartimages.com/dfw/4ff9c6c9-8e3a/k2-_417f2184-f7fb-4ce0-91b8-89b101436455.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-8e3a/k2-_417f2184-f7fb-4ce0-91b8-89b101436455.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70" alt="" />
            <div className="absolute w-full px-4 py-3 md:bottom-20 bottom-0 mt-20 text-sm md:text-3xl">
                <h1 className=""> Your style<br /> at Walmart </h1>
                <p className="">
                Spring forward with fashion <br /> home & beauty inspired <br /> by real life.
                </p>
                <p
                    style={{
                        position: "relative",
                        textAlign: "start",
                        justifyContent: "center",
                        textDecoration: "underline",
                    }}
                >
                    Shop Now
                </p>
            </div>
        </div>
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


                </div>
            </div>
            </div>
        </>
        
    );
}
