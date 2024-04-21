import Deals from "../../components/Deals";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import CustomSlider from "../../components/CustomSlider .jsx";
import Card from "../../components/Card";

export default function BabyProducts() {
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

    const category1 = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b3f0/k2-_751d7a8c-b44f-4157-ad11-9ad63c166e18.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "$10 & under",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-a2e8/k2-_4277ad0a-e506-48b4-be08-16022099e05d.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "$25 & under",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-4504/k2-_184b87d8-67bf-4954-839f-a5b8519094a7.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "$50 & under",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-e922/k2-_bdc3a0e8-bedd-4d3e-93a9-4cb381249899.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "$100 & under",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-51e7/k2-_fb509a58-a3fc-4819-a51f-d5aa13a4b109.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "$150 & under",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-64c6/k2-_ec8e8270-162b-4f89-886d-e3ac834f2183.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "$200 & under",
        },
    ];

    const category2 = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-30e7/k2-_f40c5a4a-a8d4-4fbf-9151-36e6978526cf.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Car seats",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-bcda/k2-_3cef912c-2cd7-40e0-841e-f6a5e6a5b43f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Strollers",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-c488/k2-_03b7b9e6-cfa2-4768-86c6-4db280e748fd.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Baby gear",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-ea7a/k2-_2a1992be-0c06-485c-9e5d-67946f404423.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Infant activity",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-77da/k2-_912df48a-6acf-44d7-bf38-dc637a9ba3ef.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Nursery & decor",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-62b9/k2-_059bedd2-983f-4f1b-b14d-d04e0d51d053.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Toddler furniture",
        }
    ];

    const category3 = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-4ff0/k2-_08b2a636-cb42-4b79-a437-3605c40e2a07.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Pampers",
        },

        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-e918/k2-_3003ceee-74aa-4506-890d-00b01fa90cb2.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Carter",
        },

        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-9b23/k2-_9965a81e-47e4-46cc-8815-abe98576d499.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Graco",
        },

        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-96e4/k2-_cfd58664-7439-4d10-b5e5-50fd237d32fb.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Enfamil",
        },

        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-254a/k2-_4f2b2daf-9e58-495c-bffa-dee84faf03de.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Evenflo",
        },

        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-aab1/k2-_e5b50ebe-3206-4d43-83ff-885c1b580a74.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Baby Dove",
        }

    ];

    const category = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-af4d/k2-_95d376fd-8388-4e5f-a268-346be5c7eccc.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "0-3 monthes",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-9947/k2-_142a4992-4b85-4bc3-912e-5f0029d04075.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "3-6 monthes",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-2663/k2-_6bf886b5-d4f0-4f73-a8cf-1f788123bd5d.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "6-12 monthes",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b4f2/k2-_3beb12bc-73d9-49f1-b4ca-7ca8bd233d13.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Toddler",
        },
    ];

    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("Baby"));
        };
        fetchData();
    }, [dispatch]);

    const cards = products.map((product) => ({
        photo: product.thumbnail,
        title: product.title,
        price: `$${product.price}`,
        _id: product._id,
    }));
    return <div className="h-[200vh]">
        <div className=" container h-[] w-[80%] relative  mx-auto my-8">
            <img className="rounded-md shadow-md mx-auto" src="https://i5.walmartimages.com/dfw/4ff9c6c9-d51d/k2-_d866af0e-bb1c-4bc3-b4d5-876764fbf45d.v1.png" width={"1500vh"} />
            <div className="absolute w-full bottom-2 md:bottom-6" style={{
                textAlign: "center",
                justifyContent: "center",
                width: "100%",
            }}>
                <h1 className="text-sm md:text-3xl"> Up to 20% off activity & gear </h1>
                <p className="text-sm md:text-3xl">
                    Save big on top brands.

                </p>
                <p
                    className="text-sm md:text-3xl"
                    style={{
                        textDecoration: "underline",
                    }}
                >
                    Shop Now
                </p>
            </div>
        </div>


        <div className=" container h-[] w-[80%] relative mx-auto my-8">
            <img className="rounded-md shadow-md mx-auto" src="https://i5.walmartimages.com/dfw/4ff9c6c9-1d8f/k2-_0713c3bc-5c88-4e05-8455-0731eed435f9.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70 1x, https://i5.walmartimages.com/dfw/4ff9c6c9-1d8f/k2-_0713c3bc-5c88-4e05-8455-0731eed435f9.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70 2x" width={"1500vh"} alt="" />
            <div className="absolute w-full px-4 py-3 md:bottom-20 bottom-5">

                <h1 className="mt-20 text-sm md:text-3xl"> Stay on top<br /> 4moms baby gear </h1>
                <p className="text-sm md:text-3xl">
                    High-tech designs that make it <br /> easier to navigate parenthood.
                </p>
                <p  
                    className="text-sm md:text-3xl"
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

        <div className="flex ">
            <div className="w-3/4 mx-auto ">
                <Deals />
                <hr />
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
}