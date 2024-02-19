import React, { useState } from "react";
import { FaLayerGroup } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { MdLogin, MdLogout } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdOutlineLocationCity } from "react-icons/md";

const Navbar = () => {
    const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleDepartmentsDropdown = () => {
        setShowOverlay(!showOverlay);
        setShowDepartmentsDropdown(!showDepartmentsDropdown);
        setShowServicesDropdown(false);
    };

    const toggleServicesDropdown = () => {
        setShowOverlay(!showOverlay);
        setShowServicesDropdown(!showServicesDropdown);
        setShowDepartmentsDropdown(false);
    };

    return (
        <div className="">
            <div className="bg-[#0071dc] px-3 py-5 lg:px-8 text-white flex justify-between items-center">
                <div className="flex items-center gap-x-3 shrink-0">
                    <div className="hover:bg-[#06529a] p-2 rounded-full">
                        <img src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" alt="" className=" h-8" />
                    </div>
                    <div
                        className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full cursor-pointer relative z-50"
                        onClick={toggleDepartmentsDropdown}
                    >
                        <FaLayerGroup className="text-[17px]" />
                        <p className="text-[16px] font-semibold">Departments</p>
                        {showDepartmentsDropdown && (
                            <div className="absolute top-full left-0 bg-[#FFFFFF] text-black max-h-[761px] overflow-auto rounded shadow-md z-50 w-[246px] flex flex-col">
                                <a className="p-3 font-semibold text-2xs rounded">All Department</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Deals</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Easter</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Home, Furniture & Appliances</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Closing, Shoes & Accessories</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Electronics</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Patio & Garden</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Baby</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Kids</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Toys & Videos Games</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Pharmacy, Health & Wellness</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Beauty</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Personal Care</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Auto & Tires</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Sports & Outdoors</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Pets</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Home Improvement</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Household Essentials</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Seasonal Decor & Party Supplies</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">School, Office & Art Supplies</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Movies, Music & Books</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Gift Cards</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Shop With Purpose</a>
                            </div>
                        )}
                    </div>
                    <div
                        className="md:flex  items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full cursor-pointer relative z-50" onClick={toggleServicesDropdown}
                    >
                        <HiUserGroup className="text-[20px]" />
                        <p className="text-[16px] font-semibold">Services</p>
                        {showServicesDropdown && (
                            <div className="absolute top-full left-0 bg-[#FFFFFF] text-black max-h-[761px] overflow-auto rounded shadow-md z-50 w-[246px] flex flex-col">
                                <a className="p-3 font-semibold text-2xs rounded">All Services</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Auto Care Center Services</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Pharmacy</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Health & Wellness</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Registry, Lists & Gifts</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Custom Cakes</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Photo Services</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Money Services</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Production, Home & Tech</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Subscriptions</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Community & Giving</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Ordering Online</a>
                                <a className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc]  hover:border-l-4 border-indigo-500">Get Inspired</a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden relative lg:flex items-center flex-1 mx-6 ">
                    <input
                        type="search"
                        className="text-black rounded-full py-2 px-5 outline-0 flex-1"
                        placeholder="Search Everything at Walmart online and in store"
                    />
                    <div className="absolute bg-[#ffc220] p-2 rounded-full right-1.5">
                        <GoSearch className="text-black " />
                    </div>
                </div>
                <div className="flex  items-center gap-x-2">
                    <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full cursor-pointer">
                        <MdLogin className="text-[17px] rotate-90" />
                        <p className="text-[16px] font-semibold">Register</p>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap cursor-pointer">
                        <MdLogout className="text-[20px] -rotate-90" />
                        <p className="text-[16px] font-semibold">Sign in</p>
                    </div>
                    <div className="hover:bg-[#06529a] p-3 rounded-full relative cursor-pointer">
                        <AiOutlineShoppingCart className="w-7 h-7" />
                        <div
                            className="absolute top-1 right-1 w-[16px] h-[16px] rounded-full flex justify-center text-center 
                                bg-[#ffc220] text-black border text-[12px] border-black ">
                            <span className="">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden bg-[#0071dc] mt-[1px] text-white px-3 py-2 lg:px-8 lg:flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <div className="flex items-center gap-2 hover:underline">
                        <BsPhone />
                        <p className="text-[14px] font-bold gap-1">Place an order on the App</p>
                    </div>
                    <div>
                        <p className="flex items-center gap-1 text-[14px] hover:underline">
                            <BiWorld />
                            TX Adress 87358</p>
                    </div>
                    <div>
                        <p className="hidden md:flex text-[14px]  items-center gap-1 hover:underline">
                            <MdOutlineLocationCity />
                            Sacramento Supercenter
                        </p>
                    </div>
                </div>
                <div className="text-white py-2  lg:px-8 flex items-center gap-4 ">
                    <a href="#" className="hover:underline font-bold text-[14px]">Deals</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Grocery & Essentials</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Easter</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Walmart Style</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Baby Days</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Black & Unlimited</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Fashion</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Home</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Spring Outdoor Refresh</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Registry</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">ONE Debit</a>
                    <a href="#" className="hover:underline font-bold text-[14px]">Walmart+</a>
                </div>
            </div>
            {showOverlay && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => {
                        setShowDepartmentsDropdown(false);
                        setShowServicesDropdown(false);
                        setShowOverlay(false);
                    }}
                ></div>
            )}
        </div>
    );
};

export default Navbar;


