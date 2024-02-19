import React from "react";

const Card = ({ photo, title, price }) => {
    return (
        <div className="relative flex flex-col w-100 h-100">
            <img src={photo} alt="" className="w-52 h-56 rounded-[1rem]" />
            <div className="flex flex-col w-[13rem]">
                <p className="font-bold">{price}</p>
                <p className="font-bold text-[13px] ">
                    {title + "Rapid Charger & Stylus Pen"}
                </p>
            </div>
        </div>
    );
};

export default Card;
