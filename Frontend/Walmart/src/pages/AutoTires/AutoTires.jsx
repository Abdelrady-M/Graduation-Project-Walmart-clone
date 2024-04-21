import CustomSlider from "../../components/CustomSlider ";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function AutoTires() {
    const tittle = "Home Improvement deals";
    const category2 = [
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
        }

        ,
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-e93d/k2-_411b2807-1141-498a-82c4-9c6dd405b3e9.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Super Tech",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-f747/k2-_f52e9030-e380-4cfb-8588-e507ec696172.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Chemical Guys",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-ba75/k2-_f9507778-608f-4c24-9d27-c9962671b0d5.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Rain-X",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-9eb3/k2-_2193a83e-17e2-4431-9fec-9e9e5bcb91f4.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Mobil 1",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-ffd9/k2-_8f290958-96f1-4d54-b0a6-5575307eb591.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Valvoline",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b0fa/k2-_ac32c65c-226e-4600-a46c-283ee6f04c91.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Castrol",
        },
    ];
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("Auto&tires"));
        };
        fetchData();
    }, [dispatch]);

    const cards = products.map((product) => ({
        photo: product.thumbnail,
        title: product.title,
        price: `$${product.price}`,
        _id: product._id,
    }));
    return <>
<div className="container mx-auto">
        <div className=" container h-[] w-[80%] relative mx-auto my-8">
            <img className="rounded-md shadow-md" src="https://i5.walmartimages.com/dfw/4ff9c6c9-cde1/k2-_241c007d-b3ac-41ca-923f-3ee55f3fa634.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-cde1/k2-_241c007d-b3ac-41ca-923f-3ee55f3fa634.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70%202x" width={"1500vh"} alt="" />
            <div className="absolute w-full px-4 py-3 bottom-2 md:bottom-28">
                <h1 className="mt-20 text-xl md:text-3xl"> Stay on top<br /> of your  auto care </h1>
                <p className="">
                    Fix up & tune up your ride <br />for spring.
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

        <div className="px-12">
            <CustomSlider cards={cards} mainTitle={tittle} />
            </div>
            <div className="container mx-auto my-8">
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
    </>
}