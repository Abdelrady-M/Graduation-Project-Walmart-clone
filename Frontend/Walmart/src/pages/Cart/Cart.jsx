import React, { useEffect, useState } from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TbRestore } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import CustomSlider from '../../components/CustomSlider ';
import costume from "../../assets/costume.jpg";
import jacket from "../../assets/jacket.jpg";
import jacket2 from "../../assets/2.jpg";
import jacket3 from "../../assets/3.jpg";
import Loader from "../../components/Loader/loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cartRequestAction, modifyBothProductAction, removeFromCartAction, } from "./../../store/slices/cart";
import toast from "react-hot-toast";
import { oneOrderAction } from '../../store/slices/order';
import { FaArrowRight } from 'react-icons/fa';
import { deleteCart } from '../../store/slices/cart';
import Deals from '../../components/Deals';


const Cart = ({ product, quantity }) => {

    const cards = [
        {
            photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17"
        },
        { photo: jacket, title: "Lenovo Legion Pro 5 16IRX8 - 16.0 165 Hz IPS - Intel Core i7 13th Gen 13700HX(2.10GHz) - NVIDIA GeForce RTX 4060 Laptop GPU - 16 GB DDR5 - 1 TB PCIe SSD - Windows 11 Home 64 - bit - Gaming Laptop(82W)", price: "$17" },
        { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket3, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket3, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket3, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
        { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },

    ];

    const tittle = "Recommended with your order"
    const dispatch = useDispatch();
    const [quantityCart, setQuantityCart] = useState(1);
    const { id } = useParams();
    const isLoading = useSelector((state) => state.cart.loading);
    const cartList = useSelector((state) => state.cart.cartProducts);
    const token = localStorage.getItem("token");
    const [subTotal, setSubTotal] = useState(0);
    const [inputField, setInput] = useState(false);
    const [inputValue, setInputValue] = useState();
    const showToast = () => {
        toast.error("Please login first!", {
            position: "top",
            autoClose: 3000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const MyComponent = ({ token }) => {
        const showToast = () => {
            toast.error("Please login first!");
        };
    }
    // const handleCheckout = () => {
    //     if (token) {
    //         // Dispatch the createOrder action with the cart items
    //         dispatch(createOrder(cartList)).then(() => {
    //             // Redirect to the checkout page or handle success action

    //             navigate('/checkout');
    //         });
    //     } else {
    //         // Show toast message for login required
    //         showToast();
    //     }
    // };

    function modifyProduct(newQuantity) {
        if (newQuantity > 0) {
            dispatch(
                modifyBothProductAction({
                    productId: product._id._id,
                    quantity: newQuantity,
                })
            );
        } else {
            toast.error('Select a real number');
        }
    }


    function removeFromCart(productId) {
        dispatch(removeFromCartAction(productId));
        dispatch(changeSubTotal(-(product._id.price * quantity)));
    }


    useEffect(() => {
        console.log(cartList);
        if (cartList && cartList.length > 0) {
            let total = 0;
            cartList.forEach((item) => {
                total += item._id.price * item.quantity;
            });
            setSubTotal(total);
        } else {
            setSubTotal(0);
        }
    }, [cartList]);


    useEffect(() => {
        setQuantityCart(quantity);
    }, [quantity]);

    function inc() {
        const newQuantity = quantityCart + 1;
        setQuantityCart(newQuantity);
        modifyProduct(newQuantity);
    }

    function dec() {
        const newQuantity = quantityCart - 1;
        if (newQuantity > 0) {
            setQuantityCart(newQuantity);
            modifyProduct(newQuantity);
        } else {
            toast.error('Quantity cannot be less than 1');
        }
    }



    // useEffect(() => {
    //     dispatch(oneOrderAction(id));
    // }, []);
    // const handleCheckout = () => {
    //     if (token) {
    //         // Dispatch the oneOrderAction to get the order details
    //         dispatch(oneOrderAction(id)).then(() => {
    //             // Redirect to the checkout page
    //             navigate('/checkout');
    //         });
    //     } else {
    //         // Show toast message for login required
    //         showToast();
    //     }
    // };

    // order && console.log(" this is the order from order ", order);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section className='h-[200vh] relative'>
                    <div className='container mx-auto CountItems my-5'>
                        <div className='flex items-center'>
                            <h1 className='mr-1 text-[18px] font-bold'>Cart</h1>
                            <span className='text-[18px]'>(3 items)</span>
                        </div>
                    </div>
                    <div className='mainSection container mx-auto xl:flex  items-center justify-between '>
                        <div className='leftSide'>
                            <div className='container w-full'>
                                <div style={{ width: '100%' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={{
                                                backgroundColor: "#f2f8fd"
                                            }}
                                        >
                                            <div className='flex items-center text-center'>
                                                <img src='https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg ' className='mr-5' />
                                                <h1 className='font-bold text-[24px] '>Pickup and delivery options</h1>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='flex items-center justify-center'>
                                                <div className='xl:w-[263px] flex flex-col items-center justify-center text-center border-2 border-gray-500 rounded p-5 mt-3 mr-3'>
                                                    <img src='https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png' className='w-[30px] h-[30px]' />
                                                    <span className='text-[14px] mt-1'>Shipping Arrives<br />Feb 28 Free</span>
                                                </div>
                                                <div className='xl:w-[263px] flex flex-col items-center justify-center text-center border-2 border-gray-500 rounded p-5 mt-3 mr-3'>
                                                    <img src='https://i5.walmartimages.com/dfwrs/76316474-8720/k2-_d747b89f-5900-404d-a101-1a3452480882.v1.png' className='w-[30px] h-[30px]' />
                                                    <span className='text-[14px] mt-1'>Pickup<br />Not available</span>
                                                </div>
                                                <div className='xl:w-[263px] flex flex-col items-center justify-center text-center border-2 border-gray-500 rounded p-5 mt-3'>
                                                    <img src='https://i5.walmartimages.com/dfwrs/76316474-39c2/k2-_8deea800-0d44-4984-b1ce-5a3f12b192b7.v1.png' className='w-[30px] h-[30px]' />
                                                    <span className='text-[14px] mt-1'>Delivery<br />Not available</span>
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                            <div className='container w-full my-5'>
                                <div style={{ width: '100%' }}>
                                    {cartList && cartList.length > 0 ? (
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                sx={{
                                                    backgroundColor: "#f2f8fd"
                                                }}
                                            >
                                                <div className='flex items-center'>
                                                    <div className='mr-5'>
                                                        <img src='https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg' />
                                                    </div>
                                                    <div className='flex flex-col  '>
                                                        <h1 className='font-bold text-[24px] '>Free shipping arrives between Wed, Feb 28 – Mon, Mar 4</h1>
                                                        <span className='underline'>95829</span>
                                                    </div>
                                                </div>
                                            </AccordionSummary>

                                            {cartList.map((prod, index) => (

                                                <AccordionDetails key={index}>
                                                    <div className='flex flex-col justify-center'>
                                                        <div>
                                                            <div className='flex items-center justify-between my-5'>
                                                                <h1 className='font-bold'>Arrives by Wed, Feb 28</h1>
                                                                <span className='text-[14px]'>{prod.quantity} items</span>
                                                            </div>
                                                            <hr></hr>
                                                            <div className='my-3'>
                                                                <h3 className='text-[14px]'>Sold and shipped by <span className='underline cursor-pointer'> Certified 2 Day Express</span> </h3>
                                                            </div>
                                                            <div className='my-3'>
                                                                <span class="py-1 px-2.5 mr-3 border-none rounded bg-indigo-100 text-[14px] text-indigo-800 font-medium">Best seller</span>
                                                            </div>
                                                            <div className='flex items-start justify-between'>
                                                                <div>
                                                                    <div className='flex items-center '>
                                                                        <img className="mr-4 h-[50px] w-[50px]" src={prod._id.thumbnail} />
                                                                        <div className='flex flex-col'>
                                                                            <div >
                                                                                <h1 className='w-[417px]'>{prod._id.title}</h1>
                                                                            </div>
                                                                            <div className='flex flex-col'>
                                                                                <h3 className='my-1 flex'><img className='mr-2' src='https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg' />Free 90-day returns</h3>
                                                                                <h3 className='flex items-center'><TbRestore className='mr-2' />Restored</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='flex items-start'>
                                                                    <span className='font-bold text-[18px]'>${prod.priceWhenAdded}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-end items-center'>
                                                            <div>
                                                                <a className='underline mr-5 cursor-pointer'
                                                                    onClick={() => {
                                                                        removeFromCart(prod._id._id);
                                                                    }}
                                                                >Remove</a>
                                                            </div>

                                                            <div>
                                                                <span className='flex items-center justify-between border border-black w-[120px] h-[34px] rounded-full p-5'>
                                                                    <button
                                                                        onClick={dec}
                                                                    ><GoPlus className='w-[25px] h-[25px] rounded-full z-50 hover:bg-stone-500' /></button>
                                                                    <span className='px-3 text-[14px] font-bold'>{prod.quantity}</span>
                                                                    <a
                                                                        onClick={inc}
                                                                    ><HiMinus className='w-[25px] h-[25px] rounded-full z-50 hover:bg-stone-500' /></a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </AccordionDetails>
                                            ))}

                                        </Accordion>
                                    ) : (
                                        <h3 className='text-center font-bold text-[25px]'>Your cart is empty!</h3>
                                    )}
                                </div>
                            </div>
                            <div className='shadow-1 container w-[850px] h-[400px] p-8 rounded'>
                                <CustomSlider cards={cards} mainTitle={tittle} />
                            </div>
                        </div>
                        <div className='rightSideCheckout shadow-1 sm:relative xl:fixed xl:top-1/4 xl:right-[28rem] flex flex-col rounded p-5'>
                            <div>
                                <Link to={token ? "/checkout" : ""}>
                                    <button
                                        className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full xl:w-[346px] hover:bg-[#2c3287] mb-5"
                                        onClick={() => !token && showToast()}
                                    >
                                        Continue to checkout
                                    </button>
                                </Link>
                                <hr></hr>
                                <div className='flex flex-col py-2'>
                                    <div className='flex justify-between py-3'>
                                        <h1 className='font-bold'>Subtotal</h1>
                                        <span className='line-through text-[18px] text-[#46474a] font-normal'>{subTotal} EGP</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='font-bold text-[#46474a]'>Savings</h1>
                                        <span className="py-1 px-2.5 border-none rounded text-[#2A8703] bg-[#eaf3e6] text-[16px] font-semibold">-$324.53</span>
                                    </div>
                                    <span className='flex justify-end mt-3 font-semibold text-[#2A8703] items-center text-center text-[16px] '>{subTotal} EGP</span>
                                </div>
                                <hr></hr>
                                <div className='flex flex-col py-2'>
                                    <div className='flex justify-between py-3'>
                                        <h1 className='text-[14px]'>Shipping </h1>
                                        <span className='text-[14px] text-[#2A8703] font-normal'>Free</span>
                                    </div>
                                    <div className='flex justify-between mb-3'>
                                        <h1 className='font-bold'>Taxes</h1>
                                        <span className="py-1 px-2.5 border-none rounded  bg-[#eaf3e6] text-[14px] ">Calculated at checkout
                                        </span>
                                    </div>
                                    <hr></hr>
                                    <div className='flex justify-between py-3'>
                                        <h1 className='font-semibold '>Estimated total</h1>
                                        <span className='flex justify-end font-semibold text-[#2A8703] items-center text-center text-[16px] '>{subTotal} EGP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Cart;
