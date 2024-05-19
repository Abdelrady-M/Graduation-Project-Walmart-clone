import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Deals from "../../components/Deals";

export default function AutoTires() {
    const tittle = "Home Improvement deals";

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
        <Deals />
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