import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
                <img src='https://www.walmart.com/vpwaitingroom/pglass/walmart-glass-spa_files/images/error-page-not-found-tv.svg' alt="Page not found" className="w-64 mb-28" />
                <h1 className="text-3xl font-bold mb-2">Uh-oh...</h1>
                <p className="text-lg mb-4">This page could not be found.</p>
                <button className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full hover:bg-[#2c3287]">
                    Retuen to Home
                </button>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
