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

    const slides = [
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6406/k2-_987b6e28-ac24-4c30-a150-afe57033daf2.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Grocery'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-48f6/k2-_7aed4b13-f076-4785-8b0c-2a8343c2b70c.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Fashion'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-9674/k2-_cd6b8be4-8bfb-47bc-9843-49e8ed571106.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Electronics'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-8370/k2-_15a0a4d2-1619-4914-94cd-774567d41404.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Home'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-16a3/k2-_f9b2f53c-a2c0-40bf-8e25-692c544b3baf.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Patio & Garden'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-a077/k2-_02b361d9-ab7b-45e9-95fb-3060dd6be190.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Home Improvement'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-648f/k2-_c76e7139-cecb-4d48-893d-686d9bbbbfbe.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Baby'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Toys'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-db33/k2-_76752a43-1765-455e-85d2-16a450d8ff5a.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Health & wellness'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-5ae9/k2-_d40ab856-ee32-437c-9a44-c9b93df4aff0.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Beauty'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-2281/k2-_240ae09f-fd48-4b80-aa8d-7bbed28ae7ea.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Personal Care'
        },
        {
            imageUrl: 'https://i5.walmartimages.com/dfw/4ff9c6c9-e091/k2-_5abd632e-14d1-44b2-8361-fd23d6198365.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF',
            label: 'Auto & tires'
        }
    ];

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
