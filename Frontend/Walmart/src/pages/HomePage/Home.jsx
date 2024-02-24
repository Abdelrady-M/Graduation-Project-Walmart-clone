import React from 'react'
import Hero from '../../components/Hero'
import Deals from '../../components/Deals'
import PatioFurniture from '../../components/PatioFurniture'
import Departments from '../../components/Departments'

const Home = () => {
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