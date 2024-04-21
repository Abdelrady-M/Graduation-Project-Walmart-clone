import React, { useEffect, useState } from "react";
import CustomSlider from "./CustomSlider ";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../store/slices/productCategor";


const tittle = "Deals"


const Deals = () => {

    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("electronics"));
        };
        fetchData();
    }, [dispatch]);

    const cards = products.map((product) => ({
        photo: product.thumbnail,
        title: product.title,
        price: `$${product.price}`,
        id: product._id,
    }));

    return (
        <>

            <div>
                <CustomSlider cards={cards} mainTitle={tittle} />
            </div>
        </>
    );
}
export default Deals