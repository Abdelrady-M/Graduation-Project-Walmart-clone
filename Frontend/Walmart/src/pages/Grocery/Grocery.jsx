import React from "react";
import Deals from "../../components/Deals";
import Card from "../../components/Card";

const cards = [
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },

];
const cards1 = [
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },

];
const cards2 = [
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },

];
const cards3 = [
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/seo/Great-Value-White-Round-Top-Bread-Loaf-20-oz_8e69fca6-dda1-47b1-959c-7ec4d84b0a58.8cae75bc1ffe9c3d1ece768c0e5447a2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF", title: "Costume", price: "$17" },

];
export default function Grocery() {

    return (
        <>
            <div
                className="container mx-auto my-8"
                style={{
                    backgroundImage: `url("https://i5.walmartimages.com/dfw/4ff9c6c9-49b2/k2-_90314a02-b0c6-4a2d-98be-1394b83bc8b9.v1.png")`,
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundPosition: "center",
                    backgroundSize: "150vh",
                }}
            >
                <div className="">
                    <h2
                        className="mt-8 text-3xl"
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        Your full stock-up is here
                    </h2>
                    <p
                        style={{
                            position: "relative",
                            textAlign: "center",
                            justifyContent: "center",
                        }}
                    >
                        Find food & other daily go-tos.
                    </p>
                    <p
                        style={{
                            position: "relative",
                            textAlign: "center",
                            justifyContent: "center",
                            textDecoration: "underline",
                        }}
                    >
                        Shop Now
                    </p>
                </div>
            </div>

            <div className="ml-10">
                <div>
                    <h2 className="font-bold text-xl mb-2">For your shopping list</h2>
                </div>
                <div className="flex">
                    <div className="flex w-1/3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-7cde/k2-_4dd6073d-de23-4958-94d1-9742c332232a.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Easter candy</div>
                                <p className="text-gray-700 text-base">
                                    Fill their baskets with chocolate, jelly beans & more.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-a57c/k2-_5b52a8f2-1c4e-476a-abd2-1aaa2b2843ac.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    Family-size comfort meals
                                </div>
                                <p className="text-gray-700 text-base">
                                    Warm up with filling pastas, soups & more.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-f192/k2-_e9ba341d-7736-46ea-9614-d84cabead0c2.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Easy kids picks</div>
                                <p className="text-gray-700 text-base">
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


            <div className="flex mt-6 ml-8">
                <div className="w-1/8">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="pb-3 text-xl">Now Trending</h2>
                        <ul className="w-full pl-0 mt-0 list-unstyled ml-4 mr-3">
                            <li className="border-b-2 grid justify-center mt-4">Easter Meal</li>
                            <li className="border-b-2 grid justify-center mt-4">Everyday Meals</li>
                            <li className="border-b-2 grid justify-center mt-4">Recipes</li>
                            <li className="border-b-2 grid justify-center mt-4">Only at Walmart</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="pb-3 text-xl text-bold">Categories</h2>
                        <ul className="w-full pl-0 mt-0 list-unstyled ml-4 mr-3">
                            <li className="border-b-2 grid justify-center mt-4">Fresh Produce</li>
                            <li className="border-b-2 grid justify-center mt-4">Meat & Seafood</li>
                            <li className="border-b-2 grid justify-center mt-4">Snacks</li>
                            <li className="border-b-2 grid justify-center mt-4">Pantry</li>
                            <li className="border-b-2 grid justify-center mt-4">Beverages</li>
                            <li className="border-b-2 grid justify-center mt-4">Breakfast & Cereal</li>
                            <li className="border-b-2 grid justify-center mt-4">Dairy & Eggs</li>
                            <li className="border-b-2 grid justify-center mt-4">Baking</li>
                            <li className="border-b-2 grid justify-center mt-4">Frozen</li>
                            <li className="border-b-2 grid justify-center mt-4">Alcohol</li>
                            <li className="border-b-2 grid justify-center mt-4">Coffee</li>
                            <li className="border-b-2 grid justify-center mt-4">Tea</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="pb-3 text-xl text-bold">Featured Shops</h2>
                        <ul className="w-full pl-0 mt-0 list-unstyled ml-4 mr-3">
                            <li className="border-b-2 grid justify-center mt-4">EBT/SNAP eligible</li>
                            <li className="border-b-2 grid justify-center mt-4">Exclusively online</li>
                            <li className="border-b-2 grid justify-center mt-4">Grab n Go</li>
                            <li className="border-b-2 grid justify-center mt-4">As seen on TV</li>
                            <li className="border-b-2 grid justify-center mt-4">New & Trending</li>
                            <li className="border-b-2 grid justify-center mt-4">Organic Shop</li>
                            <li className="border-b-2 grid justify-center mt-4">International Foods</li>
                            <li className="border-b-2 grid justify-center mt-4">Flowers & Food Gifts</li>
                            <li className="border-b-2 grid justify-center mt-4">Family Movie Night</li>
                            <li className="border-b-2 grid justify-center mt-4">Taco Shop</li>
                        </ul>
                    </div>
                </div>
                <div className="w-9/2">
                    <div className="font-bold text-xl mb-2 ml-8">Featured items</div>
                    <div className="ml-20">
                        <div className="flex container mb-10 mx-auto mt-5">
                            {cards.map((card, index) => (
                                <div key={index} className="w-1/3"><Card photo={card.photo} title={card.title} price={card.price} /></div>
                            ))}
                        </div>

                        <div className="flex container mb-10 mx-auto mt-5">
                            {cards1.map((card, index) => (
                                <div key={index} className="w-1/3"><Card photo={card.photo} title={card.title} price={card.price} /></div>
                            ))}
                        </div>

                        <div
                            className="container mx-auto my-8"
                            style={{
                                backgroundImage: `url("https://i5.walmartimages.com/dfw/4ff9c6c9-2788/k2-_10e61826-2453-4aff-8afe-c40cafaf38a9.v1.png")`,
                                backgroundRepeat: "no-repeat",
                                overflow: "hidden",
                                backgroundPosition: "center",
                                backgroundSize: "150vh",
                            }}
                        >
                            <div className="">
                                <h2
                                    className="mt-8 text-3xl"
                                    style={{
                                        textAlign: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                    }}
                                >
                                    Alcohol delivery from select stores
                                </h2>
                                <p
                                    style={{
                                        position: "relative",
                                        textAlign: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    Spring sips are (almost) at your door.
                                </p>
                                <p
                                    style={{
                                        position: "relative",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Shop Now
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <div>
                                <h2 className="font-bold text-xl mb-2">For your shopping list</h2>
                            </div>
                            <div className="flex space-x-20">
                                <div className="flex w-1/4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <img
                                            className="w-full"
                                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-6e36/k2-_be13dc15-25e8-4fdd-a4fd-dbd8e716ef7a.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">Peak-season produce
                                            </div>
                                            <p className="text-gray-700 text-base">
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
                                <div className="flex w-1/4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <img
                                            className="w-full"
                                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-a57c/k2-_5b52a8f2-1c4e-476a-abd2-1aaa2b2843ac.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">
                                                Gut-friendly favorites
                                            </div>
                                            <p className="text-gray-700 text-base">
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
                                <div className="flex w-1/4">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <img
                                            className="w-full"
                                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-736b/k2-_814b2a53-db01-4618-a287-98ce05ab646e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                            alt="Sunset in the mountains"
                                        />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">Easy kids picks</div>
                                            <p className="text-gray-700 text-base">
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
                        <div className="font-bold text-xl my-8"><h1>Save with Great Value</h1>
                        <div className="flex container mb-10 mx-auto mt-5">
                            {cards2.map((card, index) => (
                                <div key={index} className="w-1/3"><Card photo={card.photo} title={card.title} price={card.price} /></div>
                            ))}
                        </div>
                        <div className="flex container mb-10 mx-auto mt-5">
                            {cards3.map((card, index) => (
                                <div key={index} className="w-1/3"><Card photo={card.photo} title={card.title} price={card.price} /></div>
                            ))}
                        </div>
                        </div>

                    </div>
                </div>

            </div>

            <div
                className="container mx-auto my-8"
                style={{
                    backgroundImage: `url("https://i5.walmartimages.com/dfw/4ff9c6c9-89ab/k2-_54948667-12e4-4f0a-bf0b-8bbb37e8ab76.v1.jpg")`,
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundPosition: "center",
                    backgroundSize: "150vh",
                }}
            >
                <div className="">
                    <h2
                        className="mt-8 text-3xl"
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        Try Walmart+ InHome for free!
                    </h2>
                    <p
                        style={{
                            position: "relative",
                            textAlign: "center",
                            justifyContent: "center",
                        }}
                    >
                        Get delivery into your kitchen & more.
                    </p>
                    <p
                        style={{
                            position: "relative",
                            textAlign: "center",
                            justifyContent: "center",
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
