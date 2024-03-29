import React from "react";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList.jsx";

import CustomSlider from "../../components/CustomSlider .jsx";

export default function HomeImprovement() {
    const category = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-bd38/k2-_0707fe02-a7c7-4e86-813c-c078abd30ca6.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Paint",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-5e13/k2-_2b627911-53e6-44f1-b7df-2e195e5e9c27.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Wallpaper",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-a9d9/k2-_9ace6af5-0c61-460d-a348-398eb270443b.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Humidifiers",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-cded/k2-_1c1d9687-68e5-4bff-99f4-d0ff6ba31cfd.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Tools",
        },
    ];

    const category1 = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-681a/k2-_90eca1de-a889-4f7b-ba8c-ca8f6c04a0a3.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Glidden",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-1518/k2-_8721657f-32a3-4ada-a1a3-c4bc8e2671fe.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Hart",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b8f5/k2-_60b35ff6-db96-42fa-bf71-6aca015d262d.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Hyper Tough",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-99ed/k2-_701db7af-2c97-48c0-b5c4-c8f18d39f6c2.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Better Homes",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-da90/k2-_46c75666-22fe-4e80-9ad4-1cce5c3c05c6.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Brinks",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-2d39/k2-_8707b8bd-79a8-4d2d-bd52-913a800f7a9f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Rust-Oleum",
        },
    ];

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

    const cards = [
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mainstays-1500W-Ceramic-Fan-Forced-Electric-Space-Heater-WSH10C2AWW-White_736efaf6-6b14-4eb4-b99d-c4bbaf81d7aa.7057bf884d1c9ea48c573b891329cf38.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",
            title:
                "Mainstays 1500W Ceramic Fan-Forced Electric Space Heater, WSH10C2AWW, White",
            price: "$17",
        },
    ];
    const tittle = "Home Improvement deals";
    return (
        <>
            <div className=" container h-[] w-[100%] relative mx-auto my-8">
                <img
                    className="mx-auto rounded-lg shadow-lg "
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-36ef/k2-_f2a04374-5396-4ec2-8276-cd314d82984d.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70"
                    alt=""
                />
                <div className="absolute w-full px-8 py-3 bottom-16 md:bottom-16">
                    <h1 className="mt-20 text-xl md:text-3xl">Lots to love for less</h1>
                    <p className="">
                        Refresh? No stress! <br /> All you need is here.
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

            <div className="p-8">
                <CustomSlider cards={cards} mainTitle={tittle} />
            </div>

            <div className="flex">
                <div className="hidden w-1/6 lg:grid lg:grid-cols-1">
                    <LeftHandNavList items={features} section="Categories" />
                    <LeftHandNavList items={features} section="Savings" />
                </div>
                <div className="px-4 mx-auto lg:w-3/4">
                    <div>
                        <h2 className="mb-2 text-xl font-bold">
                            Make things clean & tidy
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-71f5/k2-_2f0100cd-dda7-412a-9edd-d71d5a893918.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF 1x,
                                    https://i5.walmartimages.com/dfw/4ff9c6c9-71f5/k2-_2f0100cd-dda7-412a-9edd-d71d5a893918.v1.jpg?odnHeight=1024&odnWidth=576&odnBg=FFFFFF 2x"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Garage storage</div>
                                <p className="text-base text-gray-700">
                                    Shelving units & more to streamline your stuff.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-b28e/k2-_a30f24ae-443d-41c3-958c-5e54fad5025f.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF 1x,
                                    https://i5.walmartimages.com/dfw/4ff9c6c9-b28e/k2-_a30f24ae-443d-41c3-958c-5e54fad5025f.v1.jpg?odnHeight=1024&odnWidth=576&odnBg=FFFFFF 2x"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Home storage</div>
                                <p className="text-base text-gray-700">
                                    Declutter with decorative bins, baskets & beyond.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-faf8/k2-_58e00fdd-1058-44dd-b2a3-24391bcf27d9.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF 1x,
                                    https://i5.walmartimages.com/dfw/4ff9c6c9-faf8/k2-_58e00fdd-1058-44dd-b2a3-24391bcf27d9.v1.jpg?odnHeight=1024&odnWidth=576&odnBg=FFFFFF 2x"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Air purifiers</div>
                                <p className="text-base text-gray-700">
                                    Clear the air with the right setup for your space.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-ddc5/k2-_f0ee8a04-197d-4099-9e41-4d4cde2a39ca.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF 1x,
                                    https://i5.walmartimages.com/dfw/4ff9c6c9-ddc5/k2-_f0ee8a04-197d-4099-9e41-4d4cde2a39ca.v1.jpg?odnHeight=1024&odnWidth=576&odnBg=FFFFFF 2x"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">
                                    Water purification
                                </div>
                                <p className="text-base text-gray-700">
                                    Stay hydrated with dispensers, filters & more.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                    <hr className="mt-5"/>

                        <header className="flex items-baseline justify-between mt-5">
                            <h2 className="font-bold">Shop home improvement</h2>
                            <button>See less</button>
                        </header>
                        <div className="flex flex-wrap w-full mb-4">
                            {category.map((ctg, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-between w-1/4 px-2 mt-2 grow-0"
                                >
                                    <img src={ctg.Img} alt="" />
                                    <a href="">{ctg.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=" container h-[] w-[100%] relative mx-auto my-8">
                        <img
                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-59b3/k2-_9cb26a87-e068-4f82-a73c-95bbb6fc7031.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-59b3/k2-_9cb26a87-e068-4f82-a73c-95bbb6fc7031.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70%202x"
                            alt=""
                        />
                        <div className="absolute w-full px-4 py-3 bottom-8">
                            <h1 className="mt-20 text-xl md:text-3xl">
                                Best bets for a<br /> bathroom reno
                            </h1>
                            <p className="">Best bets for a bathroom reno</p>
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

                    <div className="grid justify-between grid-cols-1 ml-8 md:space-x-4 md:grid-cols-2 ">
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-a5b6/k2-_917beeff-7335-45d9-9a80-8673e431b2a5.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Garage storage</div>
                                <p className="text-base text-gray-700">
                                    Shelving units & more to streamline your stuff.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-8461/k2-_3e7c67b8-f934-43a8-bb00-73bfdb9dbc6b.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Home storage</div>
                                <p className="text-base text-gray-700">
                                    Declutter with decorative bins, baskets & beyond.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" container h-[] w-[100%] relative mx-auto my-8">
                        <img
                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-4afa/k2-_a5ce58da-0b01-4153-908c-df464596dfa8.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-4afa/k2-_a5ce58da-0b01-4153-908c-df464596dfa8.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70%202x"
                            alt=""
                        />
                        <div className="absolute w-full px-4 py-3 bottom-8">
                            <h1 className="mt-20 text-xl md:text-3xl">
                                Now here:
                                <br /> color of the year
                            </h1>
                            <p className="">
                                Looking for a versatile,
                                <br /> happy hue? Meet Limitless.
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
                            <header className="flex items-baseline justify-between">
                                <h2 className="font-bold">Brands we love</h2>
                                <button>See less</button>
                            </header>
                            <div className="flex flex-wrap w-full mb-4">
                                {category1.map((ctg, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-between w-1/3 px-2 mt-2 md:w-1/6"
                                    >
                                        <img src={ctg.Img} alt="" />
                                        <a href="">{ctg.title}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}
