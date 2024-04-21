import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    if (data.password !== data.confirmpassword) {
      alert("Password mismatch");
      return;
    }
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
    console.log(data);
  };
  useEffect(() => {
    if (success) {
      navigate("/login"); // Redirect to the success route
    }
  }, [success, navigate]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="MainLogin container mx-auto">
        <div className="contentLog container mx-auto flex flex-col justify-center items-center py-6 w-full md:w-[472px]">
          <Link to={"/"}>
            <div className="mb-5">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
                alt="Walmart Logo"
              />
            </div>
          </Link>
          <div className="flex flex-col mb-5 items-start  w-full md:w-[472px]">
            <h1 className="font-medium text-[20px] mb-5 flex ">
              Create your Walmart account
            </h1>
            <span className="flex text-[#74767c]">Email address</span>
            <span className="flex text-[#74767c]">
              example@example.com{" "}
              <a href="#" className="underline ml-2 text-black">
                Change
              </a>
            </span>
          </div>
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col w-full md:w-[472px]"
          >
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "472px" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
                {...register("name", { required: true })}
                error={!!errors.name}
              />
              {errors.name && (
                <p className="text-red-500 ps-4">First name is required</p>
              )}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                error={!!errors.email}
              />
              {errors.email && (
                <p className="text-red-500 ps-4">Please enter a valid email</p>
              )}
              <FormControl sx={{ m: 1, width: "472px" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  onChange={(e) => setPassword(e.target.value)}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
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
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  error={!!errors.password}
                />
                {errors.password && (
                  <p className="text-red-500 ps-4">Password is required</p>
                )}
              </FormControl>
              <FormControl sx={{ m: 1, width: "472px" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  onChange={(e) => setConfPassword(e.target.value)}
                >
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
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
                  label="confirmPassword"
                  {...register("confirmpassword", { required: true })}
                  error={!!errors.confirmpassword}
                />
                {errors.confirmpassword && (
                  <p className="text-red-500 ps-4">
                    Please confirm your password
                  </p>
                )}
              </FormControl>
            </Box>
            <div className="flex flex-col mt-4 items-start md:w-[472px]">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Keep me signed in
                  </span>
                }
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <span style={{ fontSize: "14px", color: "#74767c" }}>
                    Send me emails about new arrivals, hot items, daily savings,
                    & more.
                  </span>
                }
              />
              <h5 className="text-[#74767c] text-[14px]">
                By clicking Create Account, you acknowledge you have read and
                agreed to our{" "}
                <span className="underline cursor-pointer text-black">
                  {" "}
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer text-black">
                  Privacy Policy
                </span>
              </h5>
            </div>
            <button
              type="submit"
              className="border border-gray-500 text-white bg-[#0071DC] font-medium py-2 px-4 rounded-full mt-4 hover:bg-[#2c3287]"
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="footer flex flex-col md:flex-row justify-around w-full  text-center items-center border-t-2 py-5 mt-28 text-[14px]">
          <div className="copyright">
            <span>© 2024 Walmart. All Rights Reserved.</span>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row justify-center items-center text-center">
              <li className="mr-5">
                <a href="#">Give feedback</a>
              </li>
              <li className="mr-5">
                <a href="#">CA Privacy Rights</a>
              </li>
              <li className="mr-5">
                <a href="#">Your Privacy Choices</a>
              </li>
              <li className="mr-5">
                <a href="#">Notice at Collection</a>
              </li>
              <li className="mr-5">
                <a href="#">Request My Personal Information</a>
              </li>
              <li>
                <a href="#">California Supply Chains Act</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
