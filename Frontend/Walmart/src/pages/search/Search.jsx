import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import instance from '../../axios/instance';
import { addToBothCartsAction } from '../../store/slices/cart';
import { useLocation, useParams } from 'react-router';
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('q')
    // console.log(searchParams.get('q')); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(`product/search?q=${searchParam}`);
                console.log("response.data.data", response.data.data);
                setProducts(response.data.data);
            } catch (error) {
                console.error("Error fetching product", error);
            }
        };
        fetchData();
    }, [searchParam]);

    function addToCart(searchParam) {
        dispatch(addToBothCartsAction(searchParam));
    }

    return (
        <>
            <div className='container mx-auto'>
                <div className='container mx-auto p-20'>
                    <h1 className='font-semibold text-[20px]'>Results for "{searchParam}"</h1>
                </div>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className='Cards flex items-center'>
                            <div className='img mr-10 mb-5'>
                                <img src={product.thumbnail} alt={product.title} className='w-[350px] h-[250px]' />
                            </div>
                            <div className='info flex flex-col'>
                                <div>
                                    <h1 className='font-semibold text-[20px]'>${product.price}</h1>
                                </div>
                                <div className='mt-3'>
                                    <h2>{product.title}</h2>
                                </div>
                                <div className='mt-3'>
                                    <span>Free shipping, arrives</span>
                                </div>
                                <div className='mt-3'>
                                    <button className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full xl:w-[239px] hover:bg-[#2c3287]"
                                        onClick={() => addToCart(product._id)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='container mx-auto p-20 text-center'>
                        <h2 className='text-[20px] font-semibold'>No products found for "{searchParam}"</h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default Search