import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const Card = ({ photo, title, price }) => {
    return (
        <div className="relative flex flex-col w-100 h-100">
            <img src={photo} alt="" className="w-[175px] h-[175px] rounded-[1rem]" />
            <div className="flex flex-col w-[13rem] mb-2">
                <p className="font-bold">Now{price}</p>
                <p className="text-[13px] ">
                    {title + "Rapid Charger & Stylus Pen"}
                </p>
            </div>
            <div className="absolute top-0 right-9 z-40 w-[24px] h-[24px] text-[24px] ">
                <FaRegHeart />
            </div>
            <div className="flex text-center items-center ">
                <button
                    className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black mt-2">
                    <AiOutlinePlus />
                    Add</button>
            </div>
        </div>
    );
};

export default Card;
