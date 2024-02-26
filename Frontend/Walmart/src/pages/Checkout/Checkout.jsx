import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Checkout = () => {
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
                                            <img src='https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg ' className='mr-5' />
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
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                </div>
                <div class='rightSideCheckout xl:w-[394px] shadow-1 sm:relative xl:fixed xl:top-1/4 xl:right-[25rem] flex flex-col rounded p-5'>
                    <div>

                        <div className='flex flex-col py-2'>
                            <div className='flex justify-between py-3'>
                                <h1 className='font-bold'>Subtotal <span> (2 items)</span></h1>
                                <span className='line-through text-[18px] text-[#46474a] font-normal'>$2,044.00</span>
                            </div>
                            <div className='flex justify-between'>
                                <h1 className='font-bold text-[#46474a]'>Savings</h1>
                                <span class="py-1 px-2.5 border-none rounded text-[#2A8703] bg-[#eaf3e6] text-[16px] font-semibold">-$324.53</span>
                            </div>
                            <span className='flex justify-end mt-3 font-semibold text-[#2A8703] items-center text-center text-[16px] '>$1,719.47</span>
                        </div>
                        <hr></hr>
                        <div className='flex flex-col py-2'>
                            <div className='flex justify-between py-3'>
                                <h1 className='text-[14px]'>Shipping </h1>
                                <span className='text-[14px] text-[#2A8703] font-normal'>Free</span>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <h1 className='font-bold'>Taxes</h1>
                                <span class="py-1 px-2.5 border-none rounded  bg-[#eaf3e6] text-[14px] ">Pending
                                </span>
                            </div>
                            <hr></hr>
                            <div className='flex justify-between py-3'>
                                <h1 className='font-semibold '>Estimated total</h1>
                                <span className='flex justify-end font-semibold text-[#2A8703] items-center text-center text-[16px] '>$1,719.47</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout