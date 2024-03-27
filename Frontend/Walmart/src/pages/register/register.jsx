import { Box, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Register = () => {
    const [firstName, setFirstname] = React.useState();
    const [lastName, setLastname] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [ConfPassword, setConfPassword] = React.useState();

    const [showPassword, setShowPassword] = React.useState(false);

    const handelSubmit = (e)=>{
        e.preventDefault()
        axios.post('https://openmarket.onrender.com/users/login',{firstName,lastName,email,password,ConfPassword})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    } 

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <div className='MainLogin container mx-auto'>
                <div className='contentLog container mx-auto flex flex-col justify-center items-center py-6 w-full md:w-[472px]'>
                    <div className='mb-5'>
                        <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png' />
                    </div>
                    <div className='flex flex-col mb-5 items-start  w-full md:w-[472px]'>
                        <h1 className='font-medium text-[20px] mb-5 flex ' >Create your Walmart account</h1>
                        <span className='flex text-[#74767c]'>Email address</span>
                        <span className='flex text-[#74767c]'>example@example.com <a href='#' className='underline ml-2 text-black'>Change</a></span>
                    </div>
                    <form onSubmit={handelSubmit} className='flex flex-col w-full md:w-[472px]'>
                        <Box sx={{
                            '& .MuiTextField-root': { m: 1, width: '472px' },
                        }}>
                            <TextField error id="outlined-basic" label="First name" variant="outlined" onChange={(e)=> setFirstname(e.target.value)} />
                            <TextField error id="outlined-basic" label="Last name" variant="outlined" onChange={(e)=> setLastname(e.target.value)}/>
                            <TextField error id="outlined-basic" label="Email" variant="outlined" onChange={(e)=> setEmail(e.target.value)}/>
                            <FormControl error sx={{ m: 1, width: '472px' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" onChange={(e)=> setPassword(e.target.value)}>Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
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
                                />
                            </FormControl>
                            <FormControl error sx={{ m: 1, width: '472px' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" onChange={(e)=> setConfPassword(e.target.value)}>Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
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
                                />
                            </FormControl>
                        </Box>
                        <div className='flex flex-col mt-4 items-start md:w-[472px]'>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label={<span style={{ fontSize: '14px', fontWeight: 'bold' }}>Keep me signed in</span>}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label={<span style={{ fontSize: '14px', color: '#74767c' }}>Send me emails about new arrivals, hot items, daily savings, & more.</span>}
                            />
                            <h5 className='text-[#74767c] text-[14px]'>By clicking Create Account, you acknowledge you have read and agreed to our <span className='underline cursor-pointer text-black'> Terms of Use</span> and <span className='underline cursor-pointer text-black'>Privacy Policy</span></h5>
                        </div>
                        <button type='submit' className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full mt-4 hover:bg-[#2c3287]">
                            Create Account
                        </button>
                    </form>

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

export default Register