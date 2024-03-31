import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBothCartsAction } from "../store/slices/cart";
import { addToWishListAction, removeFromWishAction } from "../store/slices/wishList";
import { Toaster } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../store/slices/product";

const Card = (props) => {
    var dispatch = useDispatch();
    var x = useNavigate();
    var cart = useSelector((state) => state.cart.cart);
    var addToCart = (id) => {
        console.log(id);
        dispatch(addToBothCartsAction(id));
    };
    const addFavorites = (id) => {
        dispatch(addToWishListAction(id));
    };
    const removeFavorites = (id) => {
        dispatch(removeFromWishAction(id));
    };
    return (

        <div className="relative flex flex-col w-full h-auto" >
            <div className="flex flex-col w-[13rem] mb-2 "
                onClick={() => x(`/details/${props.id}`)}
            >
                <img src={props.photo} alt="" className="w-[160px] h-[160px] " />
                <p className="font-bold text-[#2A8703] text-[18px]">Now {props.price}</p>
                <p className="text-[16px] text-[#46474a] overflow-hidden w-auto whitespace-normal line-clamp-2"
                >
                    {props.title}

                </p>
            </div>
            <div className="absolute top-1 left-[8rem] z-40 w-[28px] h-[28px]  flex items-center justify-center bg-white rounded-full">
                {props.isFavorite ? (
                    <CiHeart className="text-[24px]"
                        onClick={() => {
                            removeFavorites(props.id);
                        }}
                    />
                ) : <AiOutlineHeart className="text-[24px]"
                    onClick={() => {
                        addFavorites(props.id);
                    }}
                />
                }

            </div>
            <button
                className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black"
                onClick={() => addToCart(props.id)}
            >
                <AiOutlinePlus />
                Add
            </button>
            <div className="flex text-center items-center"></div>
            <Toaster />
        </div>
    );
};

export default Card;


