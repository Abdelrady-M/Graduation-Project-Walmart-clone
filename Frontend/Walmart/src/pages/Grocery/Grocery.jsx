import Deals from "../../components/Deals";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/product";
import React, { useEffect, useState } from "react";



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
export default function Grocery() {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProducts());
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
                <div className=" container h-[] w-[90%] relative mx-auto my-8">
                        <img className="rounded-md shadow-md" src="https://i5.walmartimages.com/dfw/4ff9c6c9-49b2/k2-_90314a02-b0c6-4a2d-98be-1394b83bc8b9.v1.png" width={"1500vh"} />
                        <div className="absolute w-full bottom-4" style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                            <h1 className="text-xl md:text-3xl"> Your full stock-up is here </h1>
                            <p className="">
                            Find food & other daily go-tos..
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


            <div className="p-8 mx-auto">
                <div>
                    <h2 className="mb-2 text-xl font-bold">For your shopping list</h2>
                </div>
                <div className="grid mx-auto mt-4 space-y-8 md:space-x-8 sm:grid-cols-1 md:grid-cols-3 md:space-y-0">
                        <div className="max-w-sm overflow-hidden rounded shadow-lg">
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-7cde/k2-_4dd6073d-de23-4958-94d1-9742c332232a.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Easter candy</div>
                                <p className="text-base text-gray-700">
                                    Fill their baskets with chocolate, jelly beans & more.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div className="max-w-sm overflow-hidden rounded shadow-lg">
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-a57c/k2-_5b52a8f2-1c4e-476a-abd2-1aaa2b2843ac.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">
                                    Family-size comfort meals
                                </div>
                                <p className="text-base text-gray-700">
                                    Warm up with filling pastas, soups & more.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                    </div>
                        <div className="max-w-sm overflow-hidden rounded shadow-lg">
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-f192/k2-_e9ba341d-7736-46ea-9614-d84cabead0c2.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Easy kids picks</div>
                                <p className="text-base text-gray-700">
                                    Stay stocked up on the food they're sure to finish.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                </div>
            </div>

                {/* <div className="hidden  grid-cols-1 lg:grid">
                <LeftHandNavList items={features} section="Categories" />
            </div> */}

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


                        
                        <div className=" container h-[] w-[100%] relative mx-auto my-8">
                        <img className="rounded-md shadow-md" src="https://i5.walmartimages.com/dfw/4ff9c6c9-2788/k2-_10e61826-2453-4aff-8afe-c40cafaf38a9.v1.png" width={"1500vh"} />
                        <div className="absolute bottom-0 w-full" style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                            <h1 className="text-xl md:text-3xl"> Alcohol delivery from select stores </h1>
                            <p className="">
                            Spring sips are (almost) at your door.
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
                        <div className="p-8">
                                <h2 className="mb-2 text-xl font-bold">For your shopping list</h2>
                            <div className="grid grid-cols-1 space-x-4 space-y-3 md:space-y-0 md:grid-cols-3">
                                <div className="">
                                    <div className="max-w-sm overflow-hidden rounded shadow-lg">
                                        <img
                                            className="w-full"
                                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-6e36/k2-_be13dc15-25e8-4fdd-a4fd-dbd8e716ef7a.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-xl font-bold">Peak-season produce
                                            </div>
                                            <p className="text-base text-gray-700">
                                                Save on our freshest fruits & vegetables.
                                            </p>
                                        </div>
                                        <div className="px-6 py-4">
                                            <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                                Shop
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm overflow-hidden rounded shadow-lg">
                                        <img
                                            className="w-full"
                                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-a57c/k2-_5b52a8f2-1c4e-476a-abd2-1aaa2b2843ac.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-xl font-bold">
                                                Gut-friendly favorites
                                            </div>
                                            <p className="text-base text-gray-700">
                                                Treat your tummy to probiotic foods & drinks for less.
                                            </p>
                                        </div>
                                        <div className="px-6 py-4">
                                            <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                                Shop
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="max-w-sm overflow-hidden rounded shadow-lg">
                                        <img
                                            className="w-full"
                                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-736b/k2-_814b2a53-db01-4618-a287-98ce05ab646e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-xl font-bold">Easy kids picks</div>
                                            <p className="text-base text-gray-700">
                                                Stay stocked up on the food they're sure to finish.
                                            </p>
                                        </div>
                                        <div className="px-6 py-4">
                                            <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                                Shop
                                            </button>
                                        </div>
                                    </div>
                                </div>
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

                        <div className=" container h-[] w-[85%] relative mx-auto my-8">
                        <img className="rounded-md shadow-md" src="https://i5.walmartimages.com/dfw/4ff9c6c9-89ab/k2-_54948667-12e4-4f0a-bf0b-8bbb37e8ab76.v1.jpg" width={"1500vh"} />
                        <div className="absolute bottom-0 w-full" style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                            <h1 className="text-xl md:text-3xl"> Try Walmart+ InHome for free! </h1>
                            <p className="">
                            Get delivery into your kitchen & more
                            </p>
                            <p
                                style={{
                                    textDecoration: "underline",
                                }}
                            >
                                Free 30-day trial
                            </p>
                        </div>
                    </div>
            
        </>
    );
}
