import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../store/slices/authLogin';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const { error } = useSelector((state) => state.user)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [loginError, setLoginError] = useState('');
  
    const dispatch = useDispatch()
    const navigate = useNavigate();
   



//    const submitForm = async (data) => {
//         try {
//             const result = await dispatch(userLogin(data));
//             if (result.payload) {
//                 toast.success(result.payload.message);
//                 localStorage.removeItem("token2");
//                 localStorage.setItem("token", result.data.token);
//                 navigate('/');
//             }
//         } catch (error) {
//             if (error.response) {
//                 const errorMessage = error.response.data.message;
//                 toast.error(errorMessage, { position: "top-center" });
//             } else {
//                 toast.error('An error occurred. Please try again later.', { position: "top-center" });
//             }
//         }
//     };

    const submitForm = async (data) => {
        try {
            const response = await dispatch(userLogin(data));
            if (response.payload) {
                navigate('/');
            }else{
                setLoginError('Invalid username or password.');
                toast.error('Invalid username or password.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setLoginError(error.response.data.message);
                toast.error(error.response.data.message);
            } else {
                setLoginError('An error occurred. Please try again later.');
                toast.error('An error occurred. Please try again later.');
            }
        }
    };




    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <>
            <div className='MainLogin'>
                <div className='contentLog container mx-auto flex flex-col justify-center items-center py-6 '>
                    <Link to={"/"}>
                        <div className='mb-5'>
                            <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png' />
                        </div>
                    </Link>
                    <div className='flex flex-col mb-5'>
                        <h1 className='font-medium text-[20px] mb-5 flex text-center items-center justify-center' >Sign in or create your account</h1>
                        <span className='flex text-center items-center justify-center'>Not sure if you have an account?</span>
                        <span className='flex'>Enter your email and we’ll check for you.</span>
                    </div>
                    <form onSubmit={handleSubmit(submitForm)} className='flex flex-col w-full md:w-[472px]'>
                    <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                            {...register('email', { required: "Email is required", pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                         />
                            {errors.email && <div className="text-red-500">{errors.email.message}</div>}

                        <FormControl sx={{ marginTop: "10px", width: '472px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end" >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                           
                                        >
                                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                {...register('password', { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
                            />
                        </FormControl>
                        {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                        <button type="submit" disabled={isSubmitting} className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full mt-4 hover:bg-[#2c3287]">
                        {isSubmitting ? 'Logging in...' : 'Continue'}
                    </button>
                    </form>
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
            </div >
        </>
    )
}

export default Login