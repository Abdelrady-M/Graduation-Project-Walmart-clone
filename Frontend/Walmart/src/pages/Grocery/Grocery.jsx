import Deals from "../../components/Deals";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";

export default function Grocery() {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("Grocery"));
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


            
        </>
    );
}
