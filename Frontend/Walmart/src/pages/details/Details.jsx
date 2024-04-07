// import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { CiHeart } from "react-icons/ci";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Deals from '../../components/Deals';
import Card from '../../components/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { addToWishListAction } from '../../store/slices/wishList';
import { addToBothCartsAction } from '../../store/slices/cart';
import { useDispatch } from 'react-redux';
import starRating from '../../utils/starRating';
import instance from '../../axios/instance';
const Details = ( ) => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [mainImage, setMainImage] = useState('');
    const [imagesShow, setImagesShow] = useState(false);

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance(`product/${id}`);
                // console.log("response.data.data", response.data.data);
                setProduct(response.data.data);
            } catch (error) {
                console.error("Error fetching product", error);
            }
        };
        fetchData();
    }, [id]);

    const useMainImage = (image) => {
        setMainImage(image);
        setImagesShow(true);
    };


    function addToCart(id, quantity) {
        dispatch(addToBothCartsAction(id, quantity));
    }

    function addToWishlist(id) {
        dispatch(addToWishListAction(id));
    }

    // const stars = product ? starRating(product.rating) : [];
    // const prdDescription = product ? product.description : "";
    // console.log("product.description from parent ", product.description);

    return (

        <>
            <nav className='container mx-auto xl:mb-36 xl:mt-7'>
                <ol className='flex font-[14px] text-[#000000]'>
                    <li>
                        <a href='#' className='mr-2 hover:underline'><span>Home</span></a>
                    </li>
                    <a href='#' className='mr-2 hover:underline'><span>/</span></a>
                    <li>
                        <a href='#' className='mr-2 hover:underline'><span>electronic</span></a>
                    </li>
                </ol>
            </nav>
            <section>
                <div className='container relative items-start justify-between mx-auto mainDetails xl:flex '>
                    <div className='rightSide w-[60%]'>
                        <div className='items-center justify-between hidden imagesShow md:flex'>
                            <div className='rightBar flex flex-col items-center justify-center mr-20'>
                                {product.images && product.images.length > 0 && (
                                    product.images.map((image, index) => (
                                        <div key={index} className='mb-5 border-blue-500 rounded hover:border-4' onClick={() => useMainImage(image)}>
                                            <img src={image} className='w-[120px] h-[80px] flex'  />
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className='middleBar '>
                                <div className='w-[80%] h-[640px]'>
                                    <InnerImageZoom src={mainImage||product.thumbnail} />
                                </div>
                            </div>
                        </div>

                        {/* <div className='mt-20 mb-5'>
                            <h1 className='font-bold text-[20px]'>At a glance</h1>
                        </div>
                        <div className='glance bg-[#f8f8f8] rounded p-5 flex flex-col md:flex-row'>
                            <div className='w-[445px] border-r-2'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <h1 className='text-[#515357] font-bold text-[14px]' >Screen size</h1>
                                    <span className='text-[14px]'>16 in</span>
                                </div>
                                <div className='flex items-center gap-3 mb-2'>
                                    <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
                                    <span className='text-[14px]'>16 in</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
                                    <span className='text-[14px]'>16 in</span>
                                </div>

                            </div>
                            <div className='ml-5 '>
                                <div className='flex items-center gap-3 mb-3'>
                                    <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
                                    <span className='text-[14px]'>16 in</span>
                                </div>
                                <div className='flex items-center gap-3 mb-2'>
                                    <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
                                    <span className='text-[14px]'>16 in</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
                                    <span className='text-[14px]'>16 in</span>
                                </div>
                            </div>
                        </div> */}
                        <div className='ProductInfo'>
                            <div className='py-5 mt-20'>
                                <h1 className='font-bold text-[20px]'>About this item</h1>
                            </div>
                            <hr></hr>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Product details:
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Title: {product.title}
                                    </AccordionDetails>
                                    <AccordionDetails>
                                        Price: ${product.price}
                                    </AccordionDetails>
                                    <AccordionDetails>
                                    Category: {product.category}
                                    </AccordionDetails>
                                    <AccordionDetails>
                                    Quantity: {product.quantity} pices
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        About the brand:
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    {product.description}
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion defaultExpanded>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                    >
                                        Specifications
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    {product.description}
                                    </AccordionDetails>

                                </Accordion>
                            </div>

                            {/* <div className='rightBar flex flex-col items-center justify-center mr-20'>
                                {product.images && product.images.length > 0 && (
                                    product.images.map((image, index) => (
                                        <div key={index} className='m-8' onClick={() => useMainImage(image)}>
                                            <img src={image} className='w-[300px] h-[300px] flex'  />
                                        </div>
                                    ))
                                )}
                            </div> */}
                            
                            <div className='lg:w-[900px] mt-20'>
                                <Deals />
                            </div>
                        </div>
                    </div>
                    <div className='leftSide fixed top-0 right-36 md:relative md:right-auto container mx-auto hidden md:flex flex-col justify-center lg:w-[35%] border border-[#b7b7b7] rounded p-5'>
                        <div>
                            <span class="py-1 px-2.5 mr-3 border-none rounded bg-indigo-100 text-[14px] text-indigo-800 font-medium">Best seller</span>
                            <span class="border border-gray-300  px-4 text-sm text-gray-700 py-0.5">
                                Reduced price
                            </span>
                        </div>
                        <div className='mt-3'>
                            <a href='#' className='text-[16px] underline'>{product.title}</a>
                        </div>
                        <div>
                            <div className='productTitle text-[20px] font-medium mt-3'>
                                <h1>{product.description}</h1>
                                <div className="flex w-auto mt-2 space-x-1 lg:space-x-1">
                                    <button>
                                        <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                                        </svg>
                                    </button>
                                    <button className="mr-2">
                                        <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                                        </svg>
                                    </button>
                                    <span className="text-black text-[12px]">
                                        (3.3) 5176 reviews
                                    </span>
                                </div>
                            </div>
                            <div className='mt-3 ProductPrice'>
                                <div className='flex items-center'>
                                    {/* <h1 className='text-[28px] text-[#2A8703] font-medium'>Now $37.99</h1> */}
                                    <h1 className='text-[28px] text-[#2A8703] font-medium'>Now {product.priceAfterDescount}</h1>
                                    <span className='line-through ml-2 text-[14px]'>${product.price}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span class="py-1 px-2.5 border-none rounded text-[#2A8703] bg-[#eaf3e6] text-[12px] font-bold">You Saved</span>
                                    <h1 className='text-[14px] text-[#2A8703] font-bold ml-2'>%{product.discountPercentage}</h1>
                                </div>
                                <div>
                                    <span className='text-[12px]'>Price when purchased online</span>
                                </div>
                            </div>
                            <div className='flex mt-4 mb-5 buttons'>
                                <button className="border border-gray-500 text-black font-medium py-2 px-4 rounded-full xl:w-[239px] hover:border-black mr-3">
                                    Buy Now
                                </button>
                                <button className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full xl:w-[239px] hover:bg-[#2c3287]"
                                    onClick={() => {
                                        addToCart(product._id, quantity);
                                    }}
                                >
                                    Add to card
                                </button>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <div className='mt-3'>
                                <h1 className='font-bold'>How do you want your item?</h1>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='xl:w-[157px] flex flex-col items-center justify-center text-center border border-gray-500 rounded p-5 mt-3 mr-3'>
                                    <img src='https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png' className='w-[30px] h-[30px]' />
                                    <span className='text-[14px] mt-1'>Shipping Arrives<br />Feb 28 Free</span>
                                </div>
                                <div className='xl:w-[157px] flex flex-col items-center justify-center text-center border border-gray-500 rounded p-5 mt-3 mr-3'>
                                    <img src='https://i5.walmartimages.com/dfwrs/76316474-8720/k2-_d747b89f-5900-404d-a101-1a3452480882.v1.png' className='w-[30px] h-[30px]' />
                                    <span className='text-[14px] mt-1'>Pickup<br />Not available</span>
                                </div>
                                <div className='xl:w-[157px] flex flex-col items-center justify-center text-center border border-gray-500 rounded p-5 mt-3'>
                                    <img src='https://i5.walmartimages.com/dfwrs/76316474-39c2/k2-_8deea800-0d44-4984-b1ce-5a3f12b192b7.v1.png' className='w-[30px] h-[30px]' />
                                    <span className='text-[14px] mt-1'>Delivery<br />Not available</span>
                                </div>
                            </div>
                            <div className='mt-2 mb-3'>
                                <h1 className='text-[14px]'> Delivery to <span className='text-[#2e2f32] text-[12px] font-bold underline '>Sacramento, 95829</span></h1>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='mt-3'>
                            <div className='flex items-center'>
                                <CiHeart />
                                <a className='underline ml-4 text-[14px] hover:no-underline cursor-pointer'
                                    onClick={() => addToWishlist(product._id)}
                                >Add to list</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;



// <>
//     <nav className='container mx-auto xl:mb-36 xl:mt-7'>
//         <ol className='flex font-[14px] text-[#000000]'>
//             <li>
//                 <a href='#' className='mr-2 hover:underline'><span>Home</span></a>
//             </li>
//             <a href='#' className='mr-2 hover:underline'><span>/</span></a>
//             <li>
//                 <a href='#' className='mr-2 hover:underline'><span>electronic</span></a>
//             </li>
//         </ol>
//     </nav>
//     <section>
//         <div className='container relative items-start justify-between mx-auto mainDetails xl:flex '>
//             <div className='rightSide w-[60%]'>
//                 <div className='items-center justify-between hidden imagesShow md:flex'>
//                     <div className='rightBar flex flex-col items-center justify-center w-[117px] h-[117px] mr-20'>
//                         {/*<div className='p-2 mb-5 border-blue-800 rounded hover:border'>
//                                     <img src='https://i5.walmartimages.com/seo/ALROCKET-Air-Purifier-with-H13-True-HEPA-Filter-Remove-99-9-Smoke-Dust-Allergies-for-300-SQ-ft_60eb9e3f-5d5d-4306-bdc1-91ab7729a09d.8b95fc2d3f2ee96ea70df58ae9ae9178.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF' />
//     </div>*/}
//                         <div className='mb-5 border-blue-800 rounded hover:border'>
//                             <img src={product.images[3]} />
//                         </div>
//                         <div className='mb-5 border-blue-800 rounded hover:border'>
//                             <img src={product.images[2]} />
//                         </div>
//                         <div className='mb-5 border-blue-800 rounded hover:border'>
//                             <img src={product.images[1]} />
//                         </div>

//                     </div>
//                     <div className='middleBar'>
//                         <div className='w-[80%] h-[640px]'>
//                             <InnerImageZoom src={product.images[0]} />

//                         </div>
//                     </div>
//                 </div>
//                 <div className='mt-20 mb-5'>
//                     <h1 className='font-bold text-[20px]'>At a glance</h1>
//                 </div>
//                 <div className='glance bg-[#f8f8f8] rounded p-5 flex flex-col md:flex-row'>
//                     <div className='w-[445px] border-r-2'>
//                         <div className='flex items-center gap-3 mb-3'>
//                             <h1 className='text-[#515357] font-bold text-[14px]' >Screen size</h1>
//                             <span className='text-[14px]'>16 in</span>
//                         </div>
//                         <div className='flex items-center gap-3 mb-2'>
//                             <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
//                             <span className='text-[14px]'>16 in</span>
//                         </div>
//                         <div className='flex items-center gap-3'>
//                             <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
//                             <span className='text-[14px]'>16 in</span>
//                         </div>

//                     </div>
//                     <div className='ml-5 '>
//                         <div className='flex items-center gap-3 mb-3'>
//                             <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
//                             <span className='text-[14px]'>16 in</span>
//                         </div>
//                         <div className='flex items-center gap-3 mb-2'>
//                             <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
//                             <span className='text-[14px]'>16 in</span>
//                         </div>
//                         <div className='flex items-center gap-3'>
//                             <h1 className='text-[#515357] font-bold text-[14px]'>Screen size</h1>
//                             <span className='text-[14px]'>16 in</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='ProductInfo'>
//                     <div className='py-5 mt-20'>
//                         <h1 className='font-bold text-[20px]'>About this item</h1>
//                     </div>
//                     <hr></hr>
//                     <div>
//                         <Accordion>
//                             <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1-content"
//                                 id="panel1-header"
//                             >
//                                 Product details
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 product des
//                             </AccordionDetails>
//                         </Accordion>
//                         <Accordion>
//                             <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel2-content"
//                                 id="panel2-header"
//                             >
//                                 About the brand
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                                 malesuada lacus ex, sit amet blandit leo lobortis eget.
//                             </AccordionDetails>
//                         </Accordion>
//                         <Accordion defaultExpanded>
//                             <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel3-content"
//                                 id="panel3-header"
//                             >
//                                 Specifications
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                                 malesuada lacus ex, sit amet blandit leo lobortis eget.
//                             </AccordionDetails>

//                         </Accordion>
//                     </div>
//                     <div className='lg:w-[900px] mt-20'>
//                         <Deals />
//                     </div>
//                 </div>
//             </div>
//             <div className='leftSide fixed top-0 right-36 md:relative md:right-auto container mx-auto hidden md:flex flex-col justify-center lg:w-[35%] border border-[#b7b7b7] rounded p-5'>
//                 <div>
//                     <span class="py-1 px-2.5 mr-3 border-none rounded bg-indigo-100 text-[14px] text-indigo-800 font-medium">Best seller</span>
//                     <span class="border border-gray-300  px-4 text-sm text-gray-700 py-0.5">
//                         Reduced price
//                     </span>
//                 </div>
//                 <div className='mt-3'>
//                     <a href='#' className='text-[16px] underline'>{product.title}</a>
//                 </div>
//                 <div>
//                     <div className='productTitle text-[20px] font-medium mt-3'>
//                         <h1>{product.description}</h1>
//                         <div className="flex w-auto mt-2 space-x-1 lg:space-x-1">
//                             <button>
//                                 <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                     <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
//                                 </svg>
//                             </button>
//                             <button>
//                                 <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                     <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
//                                 </svg>
//                             </button>
//                             <button>
//                                 <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                     <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
//                                 </svg>
//                             </button>
//                             <button>
//                                 <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                     <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
//                                 </svg>
//                             </button>
//                             <button className="mr-2">
//                                 <svg className="w-3 h-auto fill-current text-black-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                     <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
//                                 </svg>
//                             </button>
//                             <span className="text-black text-[12px]">
//                                 (3.3) 5176 reviews
//                             </span>
//                         </div>
//                     </div>
//                     <div className='mt-3 ProductPrice'>
//                         <div className='flex items-center'>
//                             {/* <h1 className='text-[28px] text-[#2A8703] font-medium'>Now $37.99</h1> */}
//                             <h1 className='text-[28px] text-[#2A8703] font-medium'>Now {product.priceAfterDescount}</h1>
//                             <span className='line-through ml-2 text-[14px]'>${product.price}</span>
//                         </div>
//                         <div className='flex items-center'>
//                             <span class="py-1 px-2.5 border-none rounded text-[#2A8703] bg-[#eaf3e6] text-[12px] font-bold">You Saved</span>
//                             <h1 className='text-[14px] text-[#2A8703] font-bold ml-2'>%{product.discountPercentage}</h1>
//                         </div>
//                         <div>
//                             <span className='text-[12px]'>Price when purchased online</span>
//                         </div>
//                     </div>
//                     <div className='flex mt-4 mb-5 buttons'>
//                         <button className="border border-gray-500 text-black font-medium py-2 px-4 rounded-full xl:w-[239px] hover:border-black mr-3">
//                             Buy Now
//                         </button>
//                         <button className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full xl:w-[239px] hover:bg-[#2c3287]">
//                             Add to card
//                         </button>
//                     </div>
//                 </div>
//                 <hr></hr>
//                 <div>
//                     <div className='mt-3'>
//                         <h1 className='font-bold'>How do you want your item?</h1>
//                     </div>
//                     <div className='flex items-center justify-center'>
//                         <div className='xl:w-[157px] flex flex-col items-center justify-center text-center border border-gray-500 rounded p-5 mt-3 mr-3'>
//                             <img src='https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png' className='w-[30px] h-[30px]' />
//                             <span className='text-[14px] mt-1'>Shipping Arrives<br />Feb 28 Free</span>
//                         </div>
//                         <div className='xl:w-[157px] flex flex-col items-center justify-center text-center border border-gray-500 rounded p-5 mt-3 mr-3'>
//                             <img src='https://i5.walmartimages.com/dfwrs/76316474-8720/k2-_d747b89f-5900-404d-a101-1a3452480882.v1.png' className='w-[30px] h-[30px]' />
//                             <span className='text-[14px] mt-1'>Pickup<br />Not available</span>
//                         </div>
//                         <div className='xl:w-[157px] flex flex-col items-center justify-center text-center border border-gray-500 rounded p-5 mt-3'>
//                             <img src='https://i5.walmartimages.com/dfwrs/76316474-39c2/k2-_8deea800-0d44-4984-b1ce-5a3f12b192b7.v1.png' className='w-[30px] h-[30px]' />
//                             <span className='text-[14px] mt-1'>Delivery<br />Not available</span>
//                         </div>
//                     </div>
//                     <div className='mt-2 mb-3'>
//                         <h1 className='text-[14px]'> Delivery to <span className='text-[#2e2f32] text-[12px] font-bold underline '>Sacramento, 95829</span></h1>
//                     </div>
//                 </div>
//                 <hr></hr>
//                 <div className='mt-3'>
//                     <div className='flex items-center'>
//                         <CiHeart />
//                         <span className='underline ml-4 text-[14px] hover:no-underline cursor-pointer'>Add to list</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// </>