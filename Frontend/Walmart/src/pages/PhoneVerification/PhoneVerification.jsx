import React from 'react'
import { TextField } from '@mui/material'

const PhoneVerification = () => {
    return (
        <>
            <div className='MainLogin'>
                <div className='contentLog container mx-auto flex flex-col justify-center items-center py-6 '>
                    <div className='mb-5'>
                        <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png' />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <h1 className='font-bold text-[24px] mb-5 flex text-center items-center justify-center' >Welcome Abdelrady!</h1>
                        <img className='flex text-center items-center justify-center mx-auto' src='https://i5.walmartimages.com/dfw/63fd9f59-7d8b/f36f4f89-5684-4c50-8780-e1ee1bef1870/v1/hand-holding-phone-blue-bubble.svg' />
                        <span className='flex text-center items-center justify-center font-semibold text-[24px]'>Make it easier to sign in</span>
                        <span className='flex text-center items-center justify-center text-[#74767c]'>Next time, you can get a one-time code sent to your <br /> phone instead of entering a password.</span>
                    </div>
                    <div className='flex flex-col w-full md:w-[472px]'>
                        <TextField id="outlined-basic" label="Phone number (10 digits)" variant="outlined" />
                        <div className='flex flex-col mt-4 items-start md:w-[472px] pl-3'>
                            <span className='text-[#2e2f32] text-[14px]'>Message and data rates may apply.</span>
                            <span className='text-[#2e2f32] text-[14px]'>View our <span className='underline cursor-pointer'>mobile alert terms</span></span>
                        </div>
                        <button className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full mt-4 hover:bg-[#2c3287]">
                            Send Code
                        </button>
                        <span className='underline mt-5 mx-auto cursor-pointer' >Not Now</span>
                    </div>

                </div>
                <div className='footer flex flex-col md:flex-row justify-around w-full  text-center items-center border-t-2 py-5 mt-28 text-[14px]'>
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

export default PhoneVerification