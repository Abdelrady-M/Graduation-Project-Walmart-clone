import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Deals from './components/Deals';
import PatioFurniture from './components/PatioFurniture';
import Departments from './components/Departments';




const AppLayout = () => {



    return (
        <>
            <div>
                <Navbar />
                <Outlet></Outlet>
                <Footer />
            </div>
        </>
    );
}

export default AppLayout;



