import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <>
            <div className='MainLogin'>
                <div className='contentLog container mx-auto flex flex-col justify-center items-center py-6 '>
                    <div className='mb-5'>
                        <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png' />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <h1 className='font-medium text-[20px] mb-5 flex text-center items-center justify-center' >Sign in or create your account</h1>
                        <span className='flex text-center items-center justify-center'>Not sure if you have an account?</span>
                        <span className='flex'>Enter your email and we’ll check for you.</span>
                    </div>
                    <div className='flex flex-col w-full md:w-[472px]'>
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                        <button className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full mt-4 hover:bg-[#2c3287]">
                            Continue
                        </button>
                    </div>
                    <div className='flex flex-col mt-4 items-start md:w-[472px] pl-3'>
                        <span>Securing your personal information is our priority.</span>
                        <span className='underline cursor-pointer'>See our privacy measures.</span>
                    </div>
                </div>
                <div className='footer flex flex-col md:flex-row justify-around w-full  text-center items-center border-t-2 py-5 mt-40 text-[14px]'>
                    <div className='copyright'>
                        <span>© 2024 Walmart. All Rights Reserved.</span>
                    </div>
                    <div>
                        <ul className='flex flex-col md:flex-row justify-center items-center text-center'>
                            <li className='mr-5'><a href='#'>Give feedback</a></li>
                            <li className='mr-5'><a href='#'>CA Privacy Rights</a></li>
                            <li className='mr-5'><a href='#'>Your Privacy Choices</a></li>
                            <li className='mr-5'><a href='#'>Notice at Collection</a></li>
                            <li className='mr-5'><a href='#'>Request My Personal Information</a></li>
                            <li><a href='#'>California Supply Chains Act</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login