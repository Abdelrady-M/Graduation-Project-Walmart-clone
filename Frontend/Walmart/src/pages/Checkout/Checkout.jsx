import React, { useEffect, useState } from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MdPayments } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from '../../store/slices/cart';
import instance from '../../axios/instance';
import { cartRequestAction, modifyBothProductAction, removeFromCartAction, } from "./../../store/slices/cart";
import { userAction } from '../../store/slices/user';
import {
    changeTotal,
    setDiscount,
    setSubTotal,
} from "../../store/slices/checkOut";
import { postOneOrder } from '../../store/slices/order';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { PayPalButtons } from '@paypal/react-paypal-js';
import Payment from '../../components/Payment';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const userCart = useSelector((state) => state.cart.cartProducts);
    const userCheckoutPrice = useSelector((state) => state.checkOut);
    const [order, setOrder] = useState({});
    const [pricing, setPricing] = useState({
        subTotal: 0,
        discount: 0,
        delivery: 0,
        total: 0,
    });

    // ===========< decode token to take user._id >===========

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.id;
            dispatch(userAction(userId));
        }
    }, [dispatch]);
    // ===========< show order>===========

    useEffect(() => {
        handlingPrice();
        console.log("this is the order", order);
    }, [userCart, userCheckoutPrice]);

    // ===========< checkout price >===========
    const handlingPrice = () => {
        if (!user || !user._id) {
            console.log('User or user._id is undefined');
            return;
        }

        if (!userCart || userCart.length === 0) {
            console.log('User cart is empty');
            return;
        }

        let subtotal = 0;
        let items = [];
        for (let i = 0; i < userCart.length; i++) {
            let prdPrice = userCart[i].priceWhenAdded;
            let prdQun = userCart[i].quantity;
            subtotal += prdPrice * prdQun;
            items.push(userCart[i]); // Push the entire cart item
        }

        setPricing({ ...pricing, subTotal: subtotal });
        dispatch(setSubTotal(subtotal));
        dispatch(changeTotal());

        setOrder({
            userId: user._id,
            amount: userCheckoutPrice.total,
            items: items,
            status: 'Waiting for Supplier',
            createdAt: new Date().toISOString(), // Set the creation date
        });
    };




    // const handlingPrice = () => {
    //     if (!user || !user._id) {
    //         // Check if user or user._id is undefined
    //         console.log('User or user._id is undefined');
    //         return;
    //     }

    //     userCart && userCart.length > 0 && console.log("userCart", userCart);
    //     let subtotal = 0;
    //     let items = [];
    //     console.log("this is the user cart =====> ", userCart);
    //     for (let i = 0; i < userCart.length; i++) {
    //         let prdPrice = userCart[i].priceWhenAdded;
    //         let prdQun = userCart[i].quantity;
    //         subtotal = subtotal + prdPrice * prdQun;

    //         console.log('this is the product before i push to the items');
    //         items.push(prd);
    //     }

    //     setPricing({ ...pricing, subTotal: subtotal });
    //     dispatch(setSubTotal(subtotal));
    //     dispatch(changeTotal());

    //     setOrder({
    //         ...order,
    //         userId: user._id,
    //         amount: userCheckoutPrice.total,
    //         items: items,
    //         status: 'Waiting for Supplier',
    //     });
    // };




    // const orderFormSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('place an order action', order);
    //     console.log('this is order ', order);

    //     if (order.paymentStatus == 'Paid Online') {
    //         axios
    //             .post(`http://localhost:4000/stripe/create-checkout-session`, {
    //                 order,
    //                 userId: user._id,
    //             })
    //             .then((res) => {
    //                 if (res.data.url) {
    //                     window.location.href = res.data.url;
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log('err.message', err.message);
    //             });
    //     } else {
    //         console.log(' making an order ');
    //         setTimeout(() => {
    //             dispatch(postOneOrder(order));
    //             if (user && user._id) {
    //                 dispatch(deleteCart(user._id));
    //             }
    //             navigate(`/`);
    //         }, 2000);
    //     }
    // };
    const orderFormSubmit = (e) => {
        e.preventDefault();
        console.log('Placing an order', order);

        // Handle payment processing if needed

        setTimeout(() => {
            dispatch(postOneOrder(order));
            if (user && user._id) {
                dispatch(deleteCart(user._id));
            }
            navigate(`/`);
        }, 2000);
    };

    console.log("this is the order =>>>>>>>>>>>>>>>>>>>>>>>", order);
    // const date = new Date(order.createdAt);

    return (
        <section className='h-[200vh] relative'>

            <div className='mainSection container mx-auto xl:flex  items-center justify-between '>
                <div className='leftSide'>

                    <div className='container w-full my-10 '>
                        <div  >
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{
                                        backgroundColor: "#f2f8fd"
                                    }}
                                >
                                    <div className='flex items-center '>
                                        <div className='mr-5'>
                                            <img src='https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg' />
                                        </div>
                                        <div className='flex flex-col  '>
                                            <h1 className='font-bold text-[24px] '>1. Free shipping, arrives between Wed, Feb 28—Mon, Mar 4</h1>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails className='checkOutForm'>
                                    <div className='p-5'>
                                        <span className='flex mb-8 text-[14px]'>
                                            * Required fields
                                        </span>
                                        <h1 className='font-bold mb-2'>
                                            Shipping address
                                        </h1>
                                        <span className='flex mb-5 text-[14px]'>
                                            Where should we deliver your order?
                                        </span>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="firstName"
                                                    name="firstName"
                                                    label="First name"
                                                    fullWidth
                                                    autoComplete="given-name"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="lastName"
                                                    name="lastName"
                                                    label="Last name"
                                                    fullWidth
                                                    autoComplete="family-name"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    id="address1"
                                                    name="address1"
                                                    label="Address line 1"
                                                    fullWidth
                                                    autoComplete="shipping address-line1"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="address2"
                                                    name="address2"
                                                    label="Address line 2"
                                                    fullWidth
                                                    autoComplete="shipping address-line2"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="city"
                                                    name="city"
                                                    label="City"
                                                    fullWidth
                                                    autoComplete="shipping address-level2"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="state"
                                                    name="state"
                                                    label="State/Province/Region"
                                                    fullWidth
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="zip"
                                                    name="zip"
                                                    label="Zip / Postal code"
                                                    fullWidth
                                                    autoComplete="shipping postal-code"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="country"
                                                    name="country"
                                                    label="Country"
                                                    fullWidth
                                                    autoComplete="shipping country"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="PhoneNumber"
                                                    name="PhoneNumber"
                                                    label="Phone number"
                                                    fullWidth
                                                    autoComplete="shipping postal-code"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField

                                                    id="notes"
                                                    name="notes"
                                                    label="Delivery notes"
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    autoComplete="shipping address-line1"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                                    label="Use this address for payment details"
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='container w-full'>
                            <div >
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
                                            <MdPayments className='mr-5' />
                                            <h1 className='font-bold text-[24px] '>2. Payment method</h1>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails className='paymentForm'>
                                        <Typography variant="h6" gutterBottom>
                                            Payment method
                                        </Typography>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    required
                                                    id="cardName"
                                                    label="Name on card"
                                                    fullWidth
                                                    autoComplete="cc-name"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    required
                                                    id="cardNumber"
                                                    label="Card number"
                                                    fullWidth
                                                    autoComplete="cc-number"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    required
                                                    id="expDate"
                                                    label="Expiry date"
                                                    fullWidth
                                                    autoComplete="cc-exp"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    required
                                                    id="cvv"
                                                    label="CVV"
                                                    helperText="Last three digits on signature strip"
                                                    fullWidth
                                                    autoComplete="cc-csc"
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                                                    label="Remember credit card details for next time"
                                                />
                                            </Grid>
                                        </Grid>

                                        <Payment lassName='mt-5' />
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='rightSideCheckout xl:w-[394px] shadow-1 sm:relative xl:fixed xl:top-1/4 xl:right-[25rem] flex flex-col rounded p-5'>
                    <div>

                        <div className='flex flex-col py-2'>
                            <div className='flex justify-between py-3'>
                                <h1 className='font-bold'> Subtotal <span> ({userCart.length} items)</span></h1>
                                <span className='line-through text-[18px] text-[#46474a] font-normal'>${pricing.subTotal.toFixed(2)}</span>
                            </div>
                            <div className='flex justify-between'>
                                <h1 className='font-bold text-[#46474a]'>Savings</h1>
                                <span className="py-1 px-2.5 border-none rounded text-[#2A8703] bg-[#eaf3e6] text-[16px] font-semibold">-$324.53</span>
                            </div>
                            <span className='flex justify-end mt-3 font-semibold text-[#2A8703] items-center text-center text-[16px] '> ${userCheckoutPrice.total.toFixed(2)}</span>
                        </div>
                        <hr></hr>
                        <div className='flex flex-col py-2'>
                            <div className='flex justify-between py-3'>
                                <h1 className='text-[14px]'>Shipping </h1>
                                <span className='text-[14px] text-[#2A8703] font-normal'>Free</span>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <h1 className='font-bold'>Taxes</h1>
                                <span className="py-1 px-2.5 border-none rounded  bg-[#eaf3e6] text-[14px] ">Pending
                                </span>
                            </div>
                            <hr></hr>
                            <div className='flex justify-between py-3'>
                                <h1 className='font-semibold '>Estimated total</h1>
                                <span className='flex justify-end font-semibold text-[#2A8703] items-center text-center text-[16px] '>${userCheckoutPrice.total.toFixed(2)}</span>
                            </div>
                            <Link to='/'>
                                <button
                                    className='border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full xl:w-[346px] hover:bg-[#2c3287] mb-5'
                                    onClick={orderFormSubmit}
                                >
                                    Place Order
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout