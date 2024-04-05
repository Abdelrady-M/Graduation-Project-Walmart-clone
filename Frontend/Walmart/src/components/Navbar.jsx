import React, { useEffect, useState } from "react";
import { FaLayerGroup } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { MdLogin, MdLogout } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdOutlineLocationCity } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../store/slices/authLogin';
import { userLogout } from '../store/slices/authLogin';
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import i18next from "i18next";
import { cartRequestAction } from "../store/slices/cart";
import { useTranslation } from 'react-i18next';
import cookie from "js-cookie";
import { GrLanguage } from "react-icons/gr";
import { categoryAction } from "../store/slices/categories";
import { wishListRequestAction } from "../store/slices/wishList";

const Navbar = () => {
    const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [decodedToken, setDecodedToken] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const categories = useSelector((state) => state.categories.categories);
    var subCategoies = useSelector((state) => state.subCategories.subCategories);

    var cartList = useSelector((state) => state.cart.cartProducts);

    const { t } = useTranslation();
    const languages = [
        {
            code: "en",
            name: "English",
            country_code: "gb",
        },
        {
            code: "ar",
            name: "العربيه",
            country_code: "sa",
            dir: "rtl",
        },
    ];
    // catch lang code from cookie  => get the languge from the array
    const currentLanguageCode = cookie.get("i18next") || "en";
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    const [searchValue, setSearchValue] = useState("");

    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryAction());
        // dispatch(subCategoryAction());
    }, []);

    useEffect(() => {

        // dispatch(cartAction())
        dispatch(cartRequestAction());
        dispatch(wishListRequestAction());

        // localization
        document.body.dir = currentLanguage.dir || "ltr";
    }, [currentLanguageCode]);

    useEffect(() => { }, [currentLanguage]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            console.log(decoded);
            setDecodedToken(decoded);
        }
    }, []);

    //handel search
    const handleSearch = () => {
        if (searchValue.trim() !== '') {
            navigate(`search?q=${searchValue}`);
        }
    };
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
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleLogout = () => {
        dispatch(userLogout());
        localStorage.clear('token');
        toast.success("Successfully logged out!", {
            position: "top",
        });
        setTimeout(() => {
            navigate("login");
        }, 2000);
    };
    return (
        <div className="">
            <div className="bg-[#0071dc] px-3 py-5 lg:px-8 text-white flex justify-between items-center">
                <div className="flex items-center gap-x-3 shrink-0">
                    <div className="hover:bg-[#06529a] p-2 rounded-full">
                        <Link to="/" className="text-[16px] font-semibold"><img src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" alt="" className=" h-8" /></Link>


                    </div>
                    <div
                        className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full cursor-pointer relative z-50"
                        onClick={toggleDepartmentsDropdown}
                    >
                        <FaLayerGroup className="text-[17px]" />
                        <p className="text-[16px] font-normal">{t("Categories")}</p>

                        {showDepartmentsDropdown && (
                            <div className="absolute top-full left-0 bg-[#FFFFFF] text-black max-h-[761px] overflow-auto rounded shadow-md z-50 w-[246px] flex flex-col">
                                <a className="p-3 font-semibold text-2xs rounded">All Department</a>
                                {categories.map((category) => (
                                    <Link key={category.id} to={`/${category.name}`} className="p-3 text-[14px] text-[#46474a] hover:bg-[#e6f1fc] hover:border-l-4 border-indigo-500">
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div
                        className="md:flex  items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full cursor-pointer relative z-50" onClick={toggleServicesDropdown}
                    >
                        <HiUserGroup className="text-[20px]" />
                        <p className="text-[16px] font-normal">Services</p>
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
                    <div className="relative">
                        <button
                            id="dropdownDefaultButton"
                            onClick={toggleDropdown}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            <GrLanguage></GrLanguage>
                        </button>
                        {isDropdownOpen && (
                            <div
                                id="dropdown"
                                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton"
                                >

                                    {languages.map(({ code, name, country_code }) => (
                                        <li key={country_code}>
                                            <button
                                                onClick={() => i18next.changeLanguage(code)}>
                                                <span className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white fi fi-${country_code}`} >
                                                    {name}
                                                </span>
                                            </button>

                                        </li>
                                    ))}

                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative lg:flex items-center flex-1 mx-6">
                    <input
                        type="search"
                        className="text-black rounded-full py-2 px-5 outline-0 flex-1"
                        placeholder="Search Everything at Walmart online and in store"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className="absolute bg-[#ffc220] p-2 rounded-full lg:right-1.5 top-1 cursor-pointer" onClick={handleSearch}>
                        <GoSearch className="text-black" />
                    </div>
                </div>
                {decodedToken ? (
                    <>
                        <div className="flex items-center justify-center gap-x-3 hover:bg-[#004f9a] cursor-pointer rounded-full w-[100px] h-[50px]">
                            <div className="gap-x-3 flex-col mr-5 flex items-center justify-center p-2">
                                <Link to={`/account/${decodedToken.id}`}>
                                    <div className="flex items-center justify-center">
                                        Hi, {decodedToken.name}
                                    </div>
                                    <div className="flex items-center justify-center"><span>Account</span></div>
                                </Link>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="flex items-center justify-center gap-x-3 hover:bg-[#004f9a] cursor-pointer rounded-full w-[100px] h-[50px]">Logout</button>
                    </>
                ) : (

                    <div className="flex  items-center gap-x-2">
                        <div className="lg:flex hidden items-center gap-2 hover:bg-[#06529a] p-3 rounded-full cursor-pointer">
                            <MdLogin className="text-[17px] rotate-90" />
                            <Link to="register" className="text-[16px] font-semibold">Register</Link>
                        </div>
                        <div className="lg:flex hidden items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap cursor-pointer">
                            <MdLogout className="text-[20px] -rotate-90" />
                            <Link to="login" className="text-[16px] font-semibold">Sign in</Link>
                        </div>

                    </div>
                )
                }
                <Link to="/Cart" className="hover:bg-[#06529a] p-3 rounded-full relative cursor-pointer">
                    <AiOutlineShoppingCart className="w-7 h-7" />

                    <div
                        className="absolute top-1 right-1 w-[16px] h-[16px] rounded-full flex justify-center text-center 
                                bg-[#ffc220] text-black border text-[12px] border-black items-center">
                        {cartList ? cartList.length > 0 && (
                            <span className=""> {cartList.length}</span>
                        ) : ""}
                    </div>
                </Link>
            </div >
            <div className="hidden bg-[#0071dc] mt-[1px] text-white py-0 lg:px-10 lg:flex items-center justify-between ">
                <div className="flex flex-col md:flex-row items-center gap-2 ">
                    <div className="flex items-center gap-2 hover:underline">
                        <BsPhone />
                        <p className="text-[14px] font-semibold gap-1">Place an order on the App</p>
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
                <div className="text-white xl:py-2 xl:flex items-center gap-4 lg:text-[10px] ">
                    {categories.map((category) => (
                                    <Link key={category.id} to={`/${category.name}`} className="hover:underline font-semibold text-[14px]">
                                        {category.name}
                                    </Link>
                                ))}
                </div>
            </div>
            {
                showOverlay && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={() => {
                            setShowDepartmentsDropdown(false);
                            setShowServicesDropdown(false);
                            setShowOverlay(false);
                        }}
                    ></div>
                )
            }
            <Toaster />

        </div >
    );
};

export default Navbar;


