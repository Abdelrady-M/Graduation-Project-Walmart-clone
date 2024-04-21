import Deals from "../../components/Deals";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function BabyProducts() {

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