import React, { useEffect, useState } from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TbRestore } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { cartRequestAction, removeFromCartAction, } from "./../../store/slices/cart";

export default function Wishlist() {

    // const dispatch = useDispatch();
    // const [quantityCart, setQuantityCart] = useState(1);
    // const user = useSelector((state) => state.user);
    // const cartList = useSelector((state) => state.cart.cartProducts);
    // const token = localStorage.getItem("token");
    // const [subTotal, setSubTotal] = useState(0);

    // function modifyProduct(newQuantity) {
    //     if (newQuantity > 0) {
    //         dispatch(
    //             modifyBothProductAction({
    //                 productId: product._id._id,
    //                 quantity: newQuantity,
    //             })
    //         );
    //     } else {
    //         toast.error('Select a real number');
    //     }
    // }

    // function removeFromCart(productId) {
    //     dispatch(removeFromCartAction(productId));
    //     dispatch(changeSubTotal(-(product._id.price * quantity)));
    // }

    // useEffect(() => {
    //     console.log(cartList);
    //     if (cartList && cartList.length > 0) {
    //         let total = 0;
    //         cartList.forEach((item) => {
    //             total += item._id.price * item.quantity;
    //         });
    //         setSubTotal(total);
    //     } else {
    //         setSubTotal(0);
    //     }
    // }, [cartList]);

    // useEffect(() => {
    //     dispatch(cartRequestAction());
    // }, [dispatch, quantity]);

    // useEffect(() => {
    //     setQuantityCart(quantity);
    // }, [quantity]);



    return <>

        <div className='container w-full my-5 mx-auto'>
            <div style={{ width: '100%' }}>
                {/* {cartList && cartList.length > 0 ? ( */}
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
                                <div className='flex flex-col  '>
                                    <h1 className='font-bold text-[24px] '>Wish List </h1>
                                </div>
                            </div>
                        </AccordionSummary>

                        {/* {cartList.map((prod, index) => ( 

                            // <AccordionDetails key={index}>*/}
                            <AccordionDetails >
                                <div className='flex flex-col justify-center'>
                                    <div>
                                        <div className='flex items-center justify-between my-5'>
                                            {/* <span className='text-[14px]'>{prod.quantity} items</span> */}
                                            <span className='text-[14px]'>5 items</span>
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
                                                    {/* <img className="mr-4 h-[50px] w-[50px]" src={prod._id.thumbnail} /> */}
                                                    <div className='flex flex-col'>
                                                        <div >
                                                            {/* <h1 className='w-[417px]'>{prod._id.title}</h1> */}
                                                            <h1 className='w-[417px]'>hhhhhhhh</h1>
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <h3 className='my-1 flex'><img className='mr-2' src='https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg' />Free 90-day returns</h3>
                                                            <h3 className='flex items-center'><TbRestore className='mr-2' />Restored</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-start'>
                                                {/* <span className='font-bold text-[18px]'>${prod.priceWhenAdded}</span> */}
                                                <span className='font-bold text-[18px]'>$200</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-center'>
                                        <div>
                                            <a className='underline mr-5 cursor-pointer'
                                                // onClick={() => {
                                                //     removeFromCart(prod._id._id);
                                                // }}
                                            >Remove</a>
                                        </div>

                                    </div>
                                </div>
                            </AccordionDetails>
                        {/* ))} */}

                    </Accordion>
                {/* ) : ( */}
                    <h3 className='text-center font-bold text-[25px]'>Your Wish list is empty!</h3>
                {/* )} */}
            </div>
        </div>
    </>
}