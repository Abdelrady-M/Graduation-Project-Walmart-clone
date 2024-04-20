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
import axios from 'axios';
import { userAction, userAddressPostAction} from '../../store/slices/user';
import { getAddress, userAddressGetAction } from '../../store/slices/userAddress';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const userCart = useSelector((state) => state.cart.cartProducts);
    const userAddresses = useSelector((state) => state.address.address);
    const userCheckoutPrice = useSelector((state) => state.checkOut);
    const addressValue = userAddresses?.length;
    const [newAddress, setAddress] = useState({
        country: "",
        fullName: "",
        phoneNumber: "",
        city: "",
        area: "",
        zipCode: "",
        street: "",
        building: "",
        floor: "",
        apartment: "",
        extraDetails: "",
      });
      const [sentAddress, setShippingAddress] = useState({
        id: "",
      });
    const [order, setOrder] = useState({});
    const [pricing, setPricing] = useState({
        subTotal: 0,
        discount: 0,
        delivery: 0,
        total: 0,
    });

    // ===========< decode token to take user._id >===========
    useEffect(() => {
        dispatch(userAddressGetAction(user._id));
    }, [dispatch, userCart]);
    console.log('User Addresses:', userAddresses);
    
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
        userCart && userCart.length > 0 && console.log("userCart", userCart);
        let subtotal = 0;
        let items = [];
        console.log("this is the user cart =====> ", userCart);
        for (let i = 0; i < userCart.length; i++) {
          let prdPrice = userCart[i].priceWhenAdded;
          let prdQun = userCart[i].quantity;
          subtotal = subtotal + prdPrice * prdQun;
    
          let prd = {
            _id: userCart[i]._id._id,
            title: userCart[i]._id.title,
            thumbnail: userCart[i]._id.thumbnail,
            description: userCart[i]._id.description,
            quantity: userCart[i].quantity,
            price: userCart[i].priceWhenAdded,
          };
    
          console.log("this is the product before i push to the items");
          items.push(prd);
        }
    
        setPricing({ ...pricing, subTotal: subtotal });
        dispatch(setSubTotal(subtotal));
        dispatch(changeTotal());
    
        setOrder({
          ...order,
          userId: user._id,
          amount: userCheckoutPrice.total,
          items: items,
          status: "Waiting for Supplier",
        });
      };

      const inputChange = (e) => {
        setAddress({ ...newAddress, [e.target.name]: e.target.value });
        console.log("input change order", order);
      };
      const orderInputChange = (e) => {
        setOrder({ ...order, shippingAddress: userAddresses[e.target.value] });
      };
    
  // ===========< handle adding new address >===========

  const addressFormSubmit = (e) => {
    e.preventDefault();

    const sentAddress = [
      { id: user._id },
      [...userAddresses, { ...newAddress }],
    ];

    dispatch(getAddress(sentAddress, user._id));
    handleClose();
  };
  
 
  // ===========< handle submit order  >===========

    const orderFormSubmit = (e) => {
        e.preventDefault();
        console.log("place an order action", order);
        console.log("this is order ", order);
    
        if (order) {
          axios
            .post(`http://localhost:3000/stripe/create-checkout-session`, {
              order,
              userId: user._id,
            })
            .then((res) => {
              if (res.data.url) {
                window.location.href = res.data.url;
              }
            })
            .catch((err) => {
              console.log("err.message", err.message);
            });
        } else {
          console.log(" making an order ");
          setTimeout(() => {
            dispatch(postOneOrder(order));
            dispatch(deleteCart(user._id));
            navigate(`/checkoutSuccess`);
          }, 2000);
        }
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
      }
    
    console.log("this is the order =>>>>>>>>>>>>>>>>>>>>>>>", order);
    // const date = new Date(order.createdAt);

    return (
        <section className='h-[200vh] relative'>
            <form onSubmit={(e) => {
                orderFormSubmit(e);
              }}>
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
                                      <div className='flex justify-between'>
                                        <div>
                                                <span className='flex mb-8 text-[14px]'>
                                                * Required fields
                                                </span>
                                                <h1 className='font-bold mb-2'>
                                                Shipping address
                                                </h1>
                                                <span className='flex mb-5 text-[14px]'>
                                                Where should we deliver your order?
                                            </span>
                                        </div>
                                        <div>
                                                    <div >
                                                    <Button onClick={handleOpen} className='cursor-pointer'>add New</Button>
                                                    <form>
                                                    <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                    >
                                                    <Box sx={style}>
                                                    <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            id="newAddressFullName"
                                                            name="fullName"
                                                            label="fullName"
                                                            fullWidth
                                                            autoComplete="fullName"
                                                            variant="standard"
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            id="newAddressRegion"
                                                            name="country"
                                                            label="country"
                                                            fullWidth
                                                            autoComplete="country"
                                                            variant="standard"
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            required
                                                            id="newAddressFloor"
                                                            name="floor"
                                                            label="Floor"
                                                            fullWidth
                                                            autoComplete="floor"
                                                            variant="standard"
                                                            value={newAddress.floor}
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        id="newAddressApartment"
                                                        name="apartment"
                                                        label="Apartment"
                                                        fullWidth
                                                        autoComplete="apartment"
                                                        variant="standard"
                                                        value={newAddress.apartment}
                                                        onChange={(e) => {
                                                          inputChange(e);
                                                        }}
                                                    />
                                                </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            id="newAddressBuilding"
                                                            name="building"
                                                            label="Building"
                                                            fullWidth
                                                            autoComplete="Building"
                                                            variant="standard"
                                                            value={newAddress.building}
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            id="newAddressStreet"
                                                            name="street"
                                                            label="Street"
                                                            fullWidth
                                                            autoComplete="shipping address-level2"
                                                            variant="standard"
                                                            value={newAddress.street}
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            id="newAddressArea"
                                                            name="area"
                                                            label="State/Province/Region"
                                                            fullWidth
                                                            variant="standard"
                                                            value={newAddress.area}
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            id="newAddressZipCode"
                                                            name="zipCode"
                                                            label="Zip / Postal code"
                                                            fullWidth
                                                            autoComplete="shipping postal-code"
                                                            variant="standard"
                                                            value={newAddress.zipCode}
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            id="newAddressCity"
                                                            name="city"
                                                            label="city"
                                                            fullWidth
                                                            autoComplete="city"
                                                            variant="standard"
                                                            value={newAddress.city}
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            id="phoneNumber"
                                                            name="phoneNumber"
                                                            label="Phone number"
                                                            fullWidth
                                                            autoComplete="phoneNumber"
                                                            variant="standard"
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
        
                                                            id="notes"
                                                            name="newAddressDetails"
                                                            label="Extra Details"
                                                            multiline
                                                            rows={4}
                                                            fullWidth
                                                            autoComplete="Delivery notes"
                                                            value={newAddress.extraDetails}
                                                            onChange={(e) => {
                                                              inputChange(e);
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <FormControlLabel
                                                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                                            label="Use this address for payment details"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                      <Button
                                                          variant="primary"
                                                          type="button"
                                                          onClick={(e) => {
                                                            addressFormSubmit(e);
                                                          }}
                                                        >
                                                          Save Changes
                                                    </Button>
                                                    </Box>
                                                    
                                                    </Modal>
                                                
                                                    </form>
                                                </div>
                                        </div>
                                      </div>
                                       
                                      {addressValue ? (
                                        <>
                                          {userAddresses.map((address, index) => (
                                            <div className="col-span-12" key={address._id}>
                                              <div className="card p-2">
                                                <div className="grid grid-cols-12 gap-4 items-top">
                                                  <div className="col-span-5">
                                                    <p className="text-sm my-0 leading-6">
                                                      Name: {address.fullName}
                                                    </p>
                                                    <p className="text-sm my-0 leading-6">
                                                      Phone: {address.phoneNumber}
                                                    </p>
                                                    {/* Additional fields */}
                                                  </div>
                                                  <div className="col-span-5">
                                                    <p className="text-sm my-0 leading-6">
                                                      {address.city}, {address.country}
                                                    </p>
                                                    <p className="text-sm my-0 leading-6">
                                                      {address.area}, {address.street}
                                                    </p>
                                                    <p className="text-sm my-0 leading-6">
                                                      Building {address.building}, Floor {address.floor}
                                                    </p>
                                                  </div>
                                                  <div className="col-span-2 flex items-center justify-center">
                                                    <input
                                                      type="radio"
                                                      name="shippingAddress"
                                                      id={`address-${index}`}
                                                      value={index}
                                                      required
                                                      onChange={(e) => {
                                                        orderInputChange(e);
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </>
                                      ) : (
                                        <div className="col-span-12 p-0 text-center">
                                          <div className="card p-2">
                                            <div className="grid justify-items-center items-center" style={{ height: "100px" }}>
                                              <div className="col-span-12">
                                                <button
                                                  className="btn btn-outline-primary"
                                                  type="button"
                                                 
                                                >
                                                  Add an address now 
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      
                                    </div>
                                </AccordionDetails>
                            </Accordion>
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
            </form>
        </section>
    )
}

export default Checkout