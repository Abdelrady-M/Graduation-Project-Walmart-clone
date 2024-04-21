import { Breadcrumbs } from "@mui/material";
// import Link from '@mui/material/Link';
import React, { useEffect } from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import PaymentIcon from "@mui/icons-material/Payment";
import PetsIcon from "@mui/icons-material/Pets";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { CiHeart } from "react-icons/ci";
import { TbReorder } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { IoGiftSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaUserLock } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { PiSignOutLight } from "react-icons/pi";
import AccountSideBar from "../../components/AccountSideBar";
import { IoReceiptOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/slices/user";
import { Link } from "react-router-dom";

const sections = [

    {
        items: [
            { icon: IoReceiptOutline, label: 'Past Orders' },
            { icon: SavingsIcon, label: 'Upcoming orders' },
            { icon: PaymentIcon, label: 'Wallet' },
        ],
    },
   

];

const Account = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      dispatch(userAction(userId));
    }
  }, [dispatch]);

    return (
        <>
            <div className='container mx-auto flex px-10 lg:flex-row' >
                <div>
                    <AccountSideBar sections={sections} />
                </div>
                <div className='rightAccount py-16 pl-5 w-[90%] '>
                    <div className='grid md:grid-cols-2 items-center justify-between w-[100%]'>
                        <div>
                            <h1 className='flex items-center text-[32px] font-semibold text-[#2e2f32]'>Welcome to your Account</h1>
                        </div>
                    </div>
                
                    <div className='rounded bg-[#f2f8fd] shadowAcc mt-10  py-5 px-5 w-[100%]'>
                        <div className='flex justify-between '>
                            <div>
                                <h1 className='flex items-center text-[20px] font-semibold'><PaymentIcon className='mr-5 text-[20px]' />Wallet <span className='text-[20px] ml-3'>| Payment methods </span></h1>
                            </div>
                            <div className='flex items-center'>
                                <FaChevronRight />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h4 className='text-[14px]'>Learn more about <span className='underline text-[12px] cursor-pointer'>payment methods</span>  we accept.</h4>
                        </div>
                        <div className='flex flex-wrap mt-5 '>
                            <div className='flex flex-col items-center justify-center py-5 px-10 shadowBtn bg-white rounded-md mr-5 w-[192px] mb-5'>
                                <img src='https://i5.walmartimages.com/dfw/63fd9f59-a0df/abc19199-c5c4-40ad-9d4e-8d13356fe6eb/v1/CC-bunch-logo-dark.svg' className='mb-3' />
                                <span className='text-[#2e2f32] text-[14px] font-semibold'>Credit/debit card</span>
                            </div>
                            <div className='flex flex-col items-center justify-center py-5 px-10 shadowBtn bg-white rounded-md mr-5 w-[190px] mb-5'>
                                <img src='https://i5.walmartimages.com/dfw/63fd9f59-154b/e8c1d0bf-a4ad-4b20-8eac-939ab7f93063/v1/Gift-Card-Logo.png' className='mb-3 w-[70px]' />
                                <span className='text-[#2e2f32] text-[14px] font-semibold'>Gift card</span>
                            </div>
                            <div className='flex flex-col items-center justify-center py-5 px-10 shadowBtn bg-white rounded-md mr-5 w-[190px] mb-5'>
                                <img src='https://i5.walmartimages.com/dfw/63fd9f59-2845/2044d79e-92d5-4c08-90a2-0480444a877f/v1/EBT-Logo.svg' className='mb-3 w-[70px]' />
                                <span className=' flex text-center text-[#2e2f32] text-[14px] font-semibold'>Electronic Benefits Transfer</span>
                            </div>
                            <div className='flex flex-col items-center justify-center py-5 px-10 shadowBtn bg-white rounded-md w-[192px] h-[140px]'>
                                <img src='https://i5.walmartimages.com/dfw/63fd9f59-154b/e8c1d0bf-a4ad-4b20-8eac-939ab7f93063/v1/DS-OTHER-Logo.png' className='mb-3 w-[70px]' />
                                <span className='text-[#2e2f32] text-[14px] font-semibold'>Benefit card</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 rounded shadowAcc'>
                        <div className='flex justify-between items-center py-5 px-5 bg-[#f2f8fd]'>
                            <div className='flex items-center'>
                                <PaymentIcon className='mr-5 text-[20px] flex items-end' />
                                <div>
                                    <h1 className='flex items-center text-[20px] font-semibold'>Account info </h1>
                                    <h3 className='flex items-center text-[16px]'>Addresses, contact information</h3>
                                </div>
                            </div>
                            <div className='flex items-start '>
                                <FaChevronRight />
                            </div>
                        </div>
                      <div>

                     
                      <div className='flex flex-wrap '>
                        <div className='flex flex-col p-5 border-r border-gray w-[400px]'>
                            <h1 className='text-[18px] font-semibold'>Email Address</h1>
                            <h3 className='text-[16px]'>{user.email}</h3>
                        </div>
                           

                  </div>
                      </div>
                    </div>
                    <div className='mt-10 rounded shadowAcc'>
                     
                   
                    </div>
                  
                </div>
            </div >
        </>
    )
}

export default Account

