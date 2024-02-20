import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Deals from './components/Deals';
import PatioFurniture from './components/PatioFurniture';




const AppLayout = () => {



    return (
        <>
            <div >
                <Navbar />
                <Hero />
                <Deals />
                <PatioFurniture />
                <Hero />
                <Footer />
                <Outlet />
            </div>

        </>
    );
}

export default AppLayout;
