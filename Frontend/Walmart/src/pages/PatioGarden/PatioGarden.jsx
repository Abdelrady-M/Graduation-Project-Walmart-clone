import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import Card from "../../components/Card";
import Deals from "../../components/Deals";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/product";
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
                <div className="hidden mx-8 w-1/8 lg:flex-row">
                    <LeftHandNavList items={features} section="Categories" />
                </div>
                <div className="mx-auto lg:w-3/4 ">
                        <div>
                            <h2 className="mb-2 text-xl font-bold">Patio for less</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
                            <div
                                className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                style={{ minHeight: "55vh" }}
                            >
                                <img
                                    className=" "
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-13e1/k2-_43421eda-9f9f-4e3d-9032-1e384713a25a.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-xl font-bold">
                                        Patio sets from $398
                                    </div>
                                    <p className="text-base text-gray-700">
                                        Styles that fit your taste & budget.
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                        Shop
                                    </button>
                                </div>
                            </div>
                            <div
                                className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                style={{ minHeight: "55vh" }}
                            >
                                <img
                                    className=" "
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-bd0a/k2-_6d2dce92-ddd4-4482-b5a6-eafaa40b25de.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-xl font-bold">
                                        Outdoor pillows from $5
                                    </div>
                                    <p className="text-base text-gray-700">
                                        Designs so good, you’ll want to kick back all day.
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                        Shop
                                    </button>
                                </div>
                            </div>
                            <div
                                className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                style={{ minHeight: "55vh" }}
                            >
                                <img
                                    className=""
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-96ca/k2-_99091afe-aea3-4130-86a6-6bed94bbd2ac.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-xl font-bold">
                                        Outdoor rugs from $35
                                    </div>
                                    <p className="text-base text-gray-700">
                                        Spruce up your outdoor space from the ground up.
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
                            <div>
                                <h2 className="mb-2 text-xl font-bold">Patio for less</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <div
                                    className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                    // style={{ minHeight: "55vh"  }}
                                >
                                    <img
                                        className=" "
                                        src="https://i5.walmartimages.com/dfw/4ff9c6c9-ca49/k2-_ae20ef0e-4a5b-4724-94c6-7ee72e3cd70d.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                        alt="Sunset in the mountains"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="mb-2 text-xl font-bold">
                                            Conversation sets
                                        </div>
                                        <p className="text-base text-gray-700">
                                            The perfect setup for chatting & hanging out.
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                            Shop
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                    // style={{ minHeight: "55vh" }}
                                >
                                    <img
                                        className=" "
                                        src="https://i5.walmartimages.com/dfw/4ff9c6c9-3360/k2-_4d044082-dae4-4871-a336-26f764f0c06f.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                        alt="Sunset in the mountains"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="mb-2 text-xl font-bold">
                                            Dining sets
                                        </div>
                                        <p className="text-base text-gray-700">
                                            Gather ’round for good times & great food.
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                            Shop
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                    // style={{ minHeight: "55vh" }}
                                >
                                    <img
                                        className=" "
                                        src="https://i5.walmartimages.com/dfw/4ff9c6c9-dfe7/k2-_af69c2ae-5c7e-49ce-a45e-abf4bec15dff.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF"
                                        alt="Sunset in the mountains"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="mb-2 text-xl font-bold">
                                            Bistro sets
                                        </div>
                                        <p className="text-base text-gray-700">
                                            Create your own little oasis.
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                            Shop
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="  h-[] w-[85%] relative  my-8 mx-auto">
            <img className="rounded-lg shadow-lg mx-auto" src="https://i5.walmartimages.com/dfw/4ff9c6c9-b6e4/k2-_b4bc9a86-5b49-4f55-8815-0c5b2eade04e.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70" alt="" />
            <div className="absolute w-full px-4 py-3 md:bottom-10 bottom-0 text-sm md:text-3xl">
                <h1 className="mt-20 "> Garden center</h1>
                <p className="">
                Welcome spring with <br /> a yard that’s ready <br/> for sunshine.
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

            <div>
            <div className="">
                        <div>
                            <h2 className="mb-2 text-xl font-bold">Mulch & Soil</h2>
                        </div>
                        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-2">
                            <div
                                className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                >
                                <img
                                    className=""
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-1d3e/k2-_36972e7f-ba7d-49cb-a9b6-089ca867ab8d.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-xl font-bold">
                                    Mulch
                                    </div>
                                    <p className="text-base text-gray-700">
                                    Retains moisture & beautifies your garden.
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                        Shop
                                    </button>
                                </div>
                            </div>
                            <div
                                className="max-w-sm overflow-hidden rounded shadow-lg mx-auto"
                                
                            >
                                <img
                                    className=""
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-10c3/k2-_47e8b5b2-9fb8-475d-93d2-69345fa2335d.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-xl font-bold">
                                    Soil
                                    </div>
                                    <p className="text-base text-gray-700">
                                    Up your garden game with nutrient-rich bases.
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
