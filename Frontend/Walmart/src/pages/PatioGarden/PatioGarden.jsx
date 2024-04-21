import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import Card from "../../components/Card";
import Deals from "../../components/Deals";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";



export default function PatioGarden() {
    const features = [
        {
            title: "Appliances",
            listItems: [
                "Shop All Appliances",
                "Air Conditioners",
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
            ],
        },
        {
            title: "Bath",
            listItems: [
                "Shop all Paht",
                "Bathroom Accessories",
                "Bathroom Furniture",
                "Bath Towels",
                "Bathroom Rugs & Bath Mats",
                "Bathroom Storage",
                "Beach Towels",
                "Shower Curtain & Accessories",
            ],
        },
        {
            title: "Bedding",
            listItems: [
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
            ],
        },
        {
            title: "Décor",
            listItems: [
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
        {
            title: "Furniture",
            listItems: [
                "Shop All Furniture",
                "Bathroom Furniture",
                "Bedroom Furniture",
                "Entryway Furniture",
                "Kitchen & Dining Furniture",
                "Living Room Furniture",
                "Office Furniture",
                "Patio Furniture",
            ],
        },

        {
            title: "Kitchen & Dining",
            listItems: [
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
            ],
        },
    ];

    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("Patio&Garden"));
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

        <div className=" container h-[] w-[80%] relative mx-auto my-8">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ade1/k2-_ae69e3a6-6399-4567-a98b-629f88cbb731.v1.jpg" width={"1500vh"} />
                        <div className="absolute w-full md:bottom-4 bottom-0 text-sm md:text-3xl" style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                            <h1 className=""> Pickup or delivery </h1>
                            <p className="">
                            Easy ways to create your outdoor oasis.
                            </p>
                            <p
                                style={{
                                    textDecoration: "underline",
                                }}
                            >
                                Shop Now
                            </p>
                        </div>
                    </div>

        <div className=" container h-[] w-[80%] relative mx-auto my-8">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-c871/k2-_ac0cf1ef-28ef-4156-966c-7a586fa2897c.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70" width={"1500vh"} />
                        <div className="absolute w-full md:bottom-32 bottom-4 text-sm md:text-3xl" style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                            <h1 className="text-xl md:text-3xl"> Mainstays </h1>
                            <p className="">
                            Stylish finds made to<br /> be lived in, for less.
                            </p>
                            <p
                                style={{
                                    textDecoration: "underline",
                                }}
                            >
                                Shop Now
                            </p>
                        </div>
                    </div>


            <div className="flex ">
                <div className="mx-auto lg:w-3/4 ">

                    <div className="">
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
                    <div className="mt-10">
                        <div>

            <div className=" container h-[] w-[80%] relative mx-auto my-8">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-bfde/k2-_d045c7dc-4349-493c-a14f-045a5df8be4f.v1.jpg" width={"1500vh"} />
                        <div className="absolute w-full md:bottom-4 bottom-0 text-sm md:text-3xl" style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                            <h1 className=""> Spring savings </h1>
                            <p className="">
                            Get lots to love at low, low prices
                            </p>
                            <p
                                style={{
                                    textDecoration: "underline",
                                }}
                            >
                                Shop Now
                            </p>
                        </div>
                    </div>

                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
