import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Deals from "../../components/Deals.jsx";

export default function HomeImprovement() {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("Home-Improvement"));
        };
        fetchData();
    }, [dispatch]);

    const cards = products.map((product) => ({
        photo: product.thumbnail,
        title: product.title,
        price: `$${product.price}`,
        _id: product._id,
    }));
    const tittle = "Home Improvement deals";
    return (
        <>
            <div className=" container h-[] w-[90%] relative mx-auto my-8">
                <img
                    className="mx-auto rounded-lg shadow-lg "
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-36ef/k2-_f2a04374-5396-4ec2-8276-cd314d82984d.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70"
                    alt=""
                />
                <div className="absolute w-full px-4 py-3 md:px-48 md:bottom-16 bottom-8 text-sm md:text-3xl">
                    <h1 className="">Lots to love for less</h1>
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
                <Deals />
            </div>

            <div className="flex">
                <div className="px-4 mx-auto lg:w-3/4">
                    
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
        </>
    );
}
