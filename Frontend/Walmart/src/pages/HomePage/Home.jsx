import React, { useEffect } from 'react'
import Hero from '../../components/Hero'
import Deals from '../../components/Deals'
import PatioFurniture from '../../components/PatioFurniture'
import Departments from '../../components/Departments'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { userAction } from '../../store/slices/user'

const Home = () => {
    // const token = localStorage.getItem("token");
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (token) {
    //         const decodedToken = jwtDecode(token);
    //         const userId = decodedToken.id;
    //         dispatch(userAction(userId));
    //     }
    // }, [dispatch]);

    return (
        <>
            <div>
                <Hero />
                <Deals />
                <PatioFurniture />
                <Hero />
                <Departments />
            </div>
        </>
    )
}

export default Home