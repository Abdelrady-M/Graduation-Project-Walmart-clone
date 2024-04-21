import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../store/slices/productCategor";
import React, { useEffect, useState } from "react";
// import Card from "../../components/Card";

import CustomSlider from "./CustomSlider ";
import Video from "../assets/Walmart.mp4";

const tittle = "Renew your everything"

const PatioFurniture = () => {
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
        <div className='container mx-auto flex items-center justify-between w-[100vw] gap-10'>
            <div className=' w-[40vw] flex items-center justify-center'>
                <CustomSlider cards={cards} mainTitle={tittle} />
            </div>
            <div className='hidden xl:flex w-[50vw] h-[50vh] items-center justify-center'>
                <video controls autoPlay src={Video} type="video/mp4" />
            </div>
        </div>
    )
}

export default PatioFurniture

