import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { categoryAction } from '../store/slices/categories';

const Departments = () => {
    const slider = React.useRef(null);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(categoryAction());
    }, [dispatch]);

    const settings = {
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <section className='container mx-auto xl:mb-10 md:mb-5'>
            <div className='mb-7'>
                <h1 className=' font-bold'>Get it all right here</h1>
            </div>
            <Slider {...settings}>
                {categories.map((category) => (
                    <div key={category._id} className='departSlide flex-col text-center justify-center items-center w-[128px] h-[145px]'>
                        <img src={category.image} alt={category.name} className='flex items-center text-center justify-center rounded w-[80px] h-[80px]' />
                        <span>{category.name}</span>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Departments;
