import React from "react";
import { Link } from "react-router-dom";
import wallpaper from "../assets/wallpaper.jpg";
import laptop from "../assets/laptop.png";
const Hero = () => {
    return (
        <section className="container mx-auto my-28 max-sm:my-12 sm:my-12 xl:my-10">
            <div className="grid grid-flow-row lg:gap-4 max-sm:gap-0 max-sm:space-y-3 sm:gap-2 md:gap-2 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 ">
                <figure className="relative col-span-1 sm:w-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 ">
                    <img
                        src={laptop}
                        className=" h-80 w-full lg:h-full rounded-xl object-cover"
                    />
                    <div className="group">
                        <button
                            className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/3 left-1/2 rounded-full w-[30px] h-[30px]"
                        >
                            <i className="fa-solid fa-circle text-white scale-75"></i>
                        </button>
                        <Link to="/">
                            <div className="absolute hidden bg-white bottom-[8%] left-28 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle ">
                                <div className="flex justify-between ">
                                    <p className=" text-orange-800  font-bold text-xs py-1">
                                        New
                                    </p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>

                                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                                    Frink 71'' Upholstered Sofa
                                </p>

                                <p className=" text-slate-700  font-poppins text-xs">
                                    This mid-century modern sofa is...
                                </p>
                                <p className=" font-poppins font-semibold text-sm py-1">
                                    28999 LE
                                </p>
                            </div>
                        </Link>
                    </div>
                </figure>
                <figure className="relative col-span-1 max-sm:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
                    <img
                        src={
                            "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp"
                        }
                        className=" h-80 w-full lg:h-full rounded-xl object-cover"

                    />
                    <div className="group">
                        <button

                            className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/4  left-1/2 rounded-full w-[30px] h-[30px]"
                        >
                            <i className="fa-solid fa-circle text-white scale-75"></i>
                        </button>
                        <Link >
                            <div className="absolute hidden bg-white bottom-1/4  left-1/2 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
                                <div className="flex justify-between ">
                                    <p className=" text-orange-800  font-bold text-xs py-1">
                                        New
                                    </p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>

                                <p className=" text-primary font-poppins font-medium  text-sm py-1 capitalize">
                                    yellow chair
                                </p>

                                <p className=" text-slate-700  font-poppins text-xs">
                                    Arriving as a piece...
                                </p>
                                <p className=" font-poppins font-semibold text-sm py-1">
                                    $ 8000 LE
                                </p>
                            </div>
                        </Link>
                    </div>
                </figure>
                <figure className="relative col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 xl:col-span-1 xl:row-span-2 2xl:col-span-1 2xl:row-span-2">
                    <img
                        src={
                            "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584211/productsImageCover/glvoaiprkrhqksftdonu.webp"
                        }
                        className=" h-80 w-full lg:h-full rounded-xl object-cover"

                    />
                    <div className="group">
                        <button
                            className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 top-[55%] left-1/2 rounded-full w-[30px] h-[30px]"

                        >
                            <i className="fa-solid fa-circle text-white scale-75"></i>
                        </button>

                        <Link >
                            <div className="absolute hidden bg-white top-1/2 left-1/3  cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
                                <div className="flex justify-between ">
                                    <p className=" text-orange-800  font-bold text-xs py-1">
                                        New
                                    </p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>

                                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                                    Karling dinning table
                                </p>

                                <p className=" text-slate-700  font-poppins text-xs">
                                    Calling back to the stylis...
                                </p>
                                <p className=" font-poppins font-semibold text-sm py-1">
                                    $ 12000 LE{" "}
                                </p>
                            </div>
                        </Link>
                    </div>
                </figure>
                <figure className="relative col-span-2 row-span-2 sm:col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 2xl:col-span-2 2xl:row-span-2">
                    <img
                        src={
                            "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689583106/productsImageCover/efwmnemew6pfyrkbdf0b.webp"
                        }
                        className=" h-80 w-full lg:h-full rounded-xl object-cover"

                    />
                    <div className="group">
                        <button
                            className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 right-1/4 bottom-[30%] rounded-full w-[30px] h-[30px]"

                        >
                            <i className="fa-solid fa-circle text-white scale-75"></i>
                        </button>
                        {/* <Link to={}>
            </Link> */}
                        <Link >
                            <div
                                className="absolute hidden bg-white bottom-36 right-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"

                            >
                                <div className="flex justify-between ">
                                    <p className=" text-orange-800  font-bold text-xs py-1">
                                        New
                                    </p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>

                                <p className=" text-primary font-poppins font-medium  text-sm py-1 capitalize">
                                    gray chair
                                </p>
                                <p className=" text-slate-700  font-poppins text-xs">
                                    Boots in the entryway, flats...
                                </p>
                                <p className=" font-poppins font-semibold text-sm py-1">
                                    5000 LE
                                </p>
                            </div>
                        </Link>
                    </div>
                </figure>
                <figure className="relative col-span-1 2xl:col-span-1">
                    <img
                        src={
                            "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp"
                        }
                        className="  h-80 w-full lg:h-full rounded-xl object-cover"

                    />
                    <div className="group">
                        <button
                            className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/2 right-1/2 rounded-full w-[30px] h-[30px]"

                        >
                            <i className="fa-solid fa-circle text-white scale-75"></i>
                        </button>
                        <Link >
                            <div
                                className="absolute hidden bg-white bottom-24 right-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"

                            >
                                <div className="flex justify-between ">
                                    <p className=" text-orange-800  font-bold text-xs py-1">
                                        New
                                    </p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>

                                <p className=" text-primary font-poppins font-medium  text-sm py-1">
                                    Storage unit...{" "}
                                </p>

                                <p className=" text-slate-700  font-poppins text-xs">
                                    Calling back to the stylish...
                                </p>
                                <p className=" font-poppins font-semibold text-sm py-1">
                                    3000 LE
                                </p>
                            </div>
                        </Link>
                    </div>
                </figure>
            </div>

        </section>
    );
};

export default Hero;


// <div className="container mx-auto flex justify-center items-center">
//     <div className="flex item-center md:w-max xl:w-[80vw] mx-auto gap-5">
//         {/* Fist Deal */}
//         <div className="  relative  h-[35rem] flex items-end justify-center rounded-[1rem] md:w-[60vw]   overflow-hidden  mt-4 w-screen mx-4 md:mx-0  ">
//             <img
//                 src={wallpaper}
//                 alt=""
//                 className="absolute object-cover w-full h-full  rounded-[1rem] "
//             />
//             <div className="grad absolute w-full  md:w-[70vw]    h-[35rem] p-4"></div>
//             <div className="pb-12 text-[50px] lg:text-[62px] font-bold  text-white  ">
//                 <h1 className="relative z-20">Christmas Deals</h1>
//             </div>
//         </div>
//         {/* Second Deal */}
//         <div className="hidden w-full   h-[35rem]   md:flex   md:w-[30vw]  relative  rounded-[1rem] mt-4  ">
//             <img
//                 src={laptop}
//                 alt=""
//                 className="absolute object-cover top-32    rounded-[1.8rem] "
//             />
//             <div className="   p-4 flex flex-col justify-between w-full bg-gray-100 rounded-[1rem] ">
//                 <div className=" flex items-center justify-between pt-2">
//                     <p className="font-bold text-[20px] text-[]">Special Deals</p>
//                     <p className=" text-[#0071dc]">More info</p>
//                 </div>
//                 <div className="  gap-4 pb-2 relative z-30">
//                     <div className="flex items-center justify-between">
//                         <div className="bg-[#ffc220] w-[7.5rem] flex items-center justify-center h-[2.5rem] rounded-full">
//                             <p className="font-bold text-[16px]   ">BUY NOW</p>
//                         </div>
//                         <div className="h-full flex items-center ">
//                             <p className="font-bold text-[26px] ">$34.99</p>
//                         </div>
//                     </div>

//                     <div className="pt-4">
//                         <p className="font-semibold ">Best sold laptop in 2022</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// import wallpaper from "../assets/wallpaper.jpg";
// import laptop from "../assets/laptop.png";
// const Hero = () => {
//     return (
//         <section className="my-28 max-sm:my-12 sm:my-12 xl:my-28">
//             <h2 className="text-primary capitalize max-sm:mb-5 sm:mb-5 md:mb-5 lg:mb-10 font-bold max-sm:text-2xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-2xl">
//                 modern home ideas
//             </h2>
//             <div className="grid grid-flow-row lg:gap-4 max-sm:gap-0 max-sm:space-y-3 sm:gap-2 md:gap-2 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 ">
//                 <figure className="relative col-span-1 sm:w-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 ">
//                     <img
//                         src={wallpaper}
//                         className=" h-80 w-full lg:h-full rounded-xl object-cover"
//                     />
//                     <div className="group">
//                         <button
//                             className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/3 left-1/2 "

//                         >
//                             <i className="fa-solid fa-circle text-white scale-75"></i>
//                         </button>

//                         <Link >
//                             <div className="absolute hidden bg-white bottom-[8%] left-28 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
//                                 <div className="flex justify-between ">
//                                     <p className=" text-orange-800  font-bold text-xs py-1">
//                                         New
//                                     </p>
//                                     <i className="fa-solid fa-angle-right"></i>
//                                 </div>

//                                 <p className=" text-primary font-poppins font-medium  text-sm py-1">
//                                     Frink 71'' Upholstered Sofa
//                                 </p>

//                                 <p className=" text-slate-700  font-poppins text-xs">
//                                     This mid-century modern sofa is...
//                                 </p>
//                                 <p className=" font-poppins font-semibold text-sm py-1">
//                                     28999 LE
//                                 </p>
//                             </div>
//                         </Link>
//                     </div>
//                 </figure>
//                 <figure className="relative col-span-1 max-sm:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
//                     <img
//                         src={
//                             "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp"
//                         }
//                         className=" h-80 w-full lg:h-full rounded-xl object-cover"

//                     />
//                     <div className="group">
//                         <button

//                             className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/4  left-1/2 "
//                         >
//                             <i className="fa-solid fa-circle text-white scale-75"></i>
//                         </button>
//                         <Link >
//                             <div className="absolute hidden bg-white bottom-1/4  left-1/2 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
//                                 <div className="flex justify-between ">
//                                     <p className=" text-orange-800  font-bold text-xs py-1">
//                                         New
//                                     </p>
//                                     <i className="fa-solid fa-angle-right"></i>
//                                 </div>

//                                 <p className=" text-primary font-poppins font-medium  text-sm py-1 capitalize">
//                                     yellow chair
//                                 </p>

//                                 <p className=" text-slate-700  font-poppins text-xs">
//                                     Arriving as a piece...
//                                 </p>
//                                 <p className=" font-poppins font-semibold text-sm py-1">
//                                     $ 8000 LE
//                                 </p>
//                             </div>
//                         </Link>
//                     </div>
//                 </figure>
//                 <figure className="relative col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 xl:col-span-1 xl:row-span-2 2xl:col-span-1 2xl:row-span-2">
//                     <img
//                         src={
//                             "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584211/productsImageCover/glvoaiprkrhqksftdonu.webp"
//                         }
//                         className=" h-80 w-full lg:h-full rounded-xl object-cover"

//                     />
//                     <div className="group">
//                         <button
//                             className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 top-[55%] left-1/2 "

//                         >
//                             <i className="fa-solid fa-circle text-white scale-75"></i>
//                         </button>

//                         <Link >
//                             <div className="absolute hidden bg-white top-1/2 left-1/3  cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle">
//                                 <div className="flex justify-between ">
//                                     <p className=" text-orange-800  font-bold text-xs py-1">
//                                         New
//                                     </p>
//                                     <i className="fa-solid fa-angle-right"></i>
//                                 </div>

//                                 <p className=" text-primary font-poppins font-medium  text-sm py-1">
//                                     Karling dinning table
//                                 </p>

//                                 <p className=" text-slate-700  font-poppins text-xs">
//                                     Calling back to the stylis...
//                                 </p>
//                                 <p className=" font-poppins font-semibold text-sm py-1">
//                                     $ 12000 LE{" "}
//                                 </p>
//                             </div>
//                         </Link>
//                     </div>
//                 </figure>
//                 <figure className="relative col-span-2 row-span-2 sm:col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 2xl:col-span-2 2xl:row-span-2">
//                     <img
//                         src={
//                             "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689583106/productsImageCover/efwmnemew6pfyrkbdf0b.webp"
//                         }
//                         className=" h-80 w-full lg:h-full rounded-xl object-cover"

//                     />
//                     <div className="group">
//                         <button
//                             className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 right-1/4 bottom-[30%] "

//                         >
//                             <i className="fa-solid fa-circle text-white scale-75"></i>
//                         </button>
//                         {/* <Link to={}>
//             </Link> */}
//                         <Link >
//                             <div
//                                 className="absolute hidden bg-white bottom-36 right-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"

//                             >
//                                 <div className="flex justify-between ">
//                                     <p className=" text-orange-800  font-bold text-xs py-1">
//                                         New
//                                     </p>
//                                     <i className="fa-solid fa-angle-right"></i>
//                                 </div>

//                                 <p className=" text-primary font-poppins font-medium  text-sm py-1 capitalize">
//                                     gray chair
//                                 </p>
//                                 <p className=" text-slate-700  font-poppins text-xs">
//                                     Boots in the entryway, flats...
//                                 </p>
//                                 <p className=" font-poppins font-semibold text-sm py-1">
//                                     5000 LE
//                                 </p>
//                             </div>
//                         </Link>
//                     </div>
//                 </figure>
//                 <figure className="relative col-span-1 2xl:col-span-1">
//                     <img
//                         src={
//                             "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp"
//                         }
//                         className="  h-80 w-full lg:h-full rounded-xl object-cover"

//                     />
//                     <div className="group">
//                         <button
//                             className="absolute btn-circle bg-slate-800 bg-opacity-50 btn-sm  scale-100 transition-transform ease-linear 0.5s group-hover:scale-90 bottom-1/2 right-1/2 "

//                         >
//                             <i className="fa-solid fa-circle text-white scale-75"></i>
//                         </button>
//                         <Link >
//                             <div
//                                 className="absolute hidden bg-white bottom-24 right-36 cursor-pointer p-3 group-hover:block motion-safe:animate-wiggle"

//                             >
//                                 <div className="flex justify-between ">
//                                     <p className=" text-orange-800  font-bold text-xs py-1">
//                                         New
//                                     </p>
//                                     <i className="fa-solid fa-angle-right"></i>
//                                 </div>

//                                 <p className=" text-primary font-poppins font-medium  text-sm py-1">
//                                     Storage unit...{" "}
//                                 </p>

//                                 <p className=" text-slate-700  font-poppins text-xs">
//                                     Calling back to the stylish...
//                                 </p>
//                                 <p className=" font-poppins font-semibold text-sm py-1">
//                                     3000 LE
//                                 </p>
//                             </div>
//                         </Link>
//                     </div>
//                 </figure>
//             </div>

//         </section>
//     );
// };

// export default Hero;


// <div className="container mx-auto flex justify-center items-center">
//     <div className="flex item-center md:w-max xl:w-[80vw] mx-auto gap-5">
//         {/* Fist Deal */}
//         <div className="  relative  h-[35rem] flex items-end justify-center rounded-[1rem] md:w-[60vw]   overflow-hidden  mt-4 w-screen mx-4 md:mx-0  ">
//             <img
//                 src={wallpaper}
//                 alt=""
//                 className="absolute object-cover w-full h-full  rounded-[1rem] "
//             />
//             <div className="grad absolute w-full  md:w-[70vw]    h-[35rem] p-4"></div>
//             <div className="pb-12 text-[50px] lg:text-[62px] font-bold  text-white  ">
//                 <h1 className="relative z-20">Christmas Deals</h1>
//             </div>
//         </div>
//         {/* Second Deal */}
//         <div className="hidden w-full   h-[35rem]   md:flex   md:w-[30vw]  relative  rounded-[1rem] mt-4  ">
//             <img
//                 src={laptop}
//                 alt=""
//                 className="absolute object-cover top-32    rounded-[1.8rem] "
//             />
//             <div className="   p-4 flex flex-col justify-between w-full bg-gray-100 rounded-[1rem] ">
//                 <div className=" flex items-center justify-between pt-2">
//                     <p className="font-bold text-[20px] text-[]">Special Deals</p>
//                     <p className=" text-[#0071dc]">More info</p>
//                 </div>
//                 <div className="  gap-4 pb-2 relative z-30">
//                     <div className="flex items-center justify-between">
//                         <div className="bg-[#ffc220] w-[7.5rem] flex items-center justify-center h-[2.5rem] rounded-full">
//                             <p className="font-bold text-[16px]   ">BUY NOW</p>
//                         </div>
//                         <div className="h-full flex items-center ">
//                             <p className="font-bold text-[26px] ">$34.99</p>
//                         </div>
//                     </div>

//                     <div className="pt-4">
//                         <p className="font-semibold ">Best sold laptop in 2022</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>