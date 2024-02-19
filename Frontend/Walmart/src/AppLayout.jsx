import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

const AppLayout = () => {



    return (
        <>
            <div >
                <Navbar />
                <Outlet />

            </div>

        </>
    );
}

export default AppLayout;
