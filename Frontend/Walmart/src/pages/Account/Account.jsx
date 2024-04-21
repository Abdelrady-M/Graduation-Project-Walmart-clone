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
      { icon: IoReceiptOutline, label: "Purchase history" },
      { icon: SavingsIcon, label: "My savings" },
      { icon: PaymentIcon, label: "Wallet" },
    ],
  },
  {
    title: "My profile",
    items: [
      { icon: PetsIcon, label: "Pets" },
      { icon: DirectionsCarIcon, label: "Vehicles" },
    ],
  },
  {
    title: "Manage Account",
    items: [
      { icon: PersonOutlineIcon, label: "Personal info" },
      { icon: DirectionsCarIcon, label: "Addresses" },
      { icon: MailOutlineIcon, label: "Communications & privacy" },
      { icon: VolunteerActivismIcon, label: "Giving & impact" },
    ],
  },
  {
    title: "My items",
    items: [
      { icon: BsCashCoin, label: "Walmart Cash" },
      { icon: TbReorder, label: "Reorder" },
      { icon: CiHeart, label: "Lists" },
      { icon: IoGiftSharp, label: "Registries" },
    ],
  },
  {
    title: "Subscriptions & plans",
    items: [
      { icon: MdOutlineSecurity, label: "Protection plans" },
      { icon: FaRetweet, label: "My subscriptions" },
    ],
  },
  {
    title: "Other Accounts",
    items: [
      { icon: MdOutlineLocalPharmacy, label: "Pharmacy" },
      { icon: HiOutlinePhoto, label: "Photo" },
      { icon: MdOutlineLibraryBooks, label: "Ebooks" },
    ],
  },
  {
    title: "Privacy",
    items: [
      { icon: CiLock, label: "Privacy Policy" },
      { icon: FaUserLock, label: "Your Privacy Choices" },
      { icon: CiViewList, label: "Request My Personal Information" },
    ],
  },
  {
    title: "Customer Service",
    items: [
      { icon: IoIosHelpCircleOutline, label: "Help" },
      { icon: CiCircleInfo, label: "Terms of Use" },
    ],
  },
  {
    items: [{ icon: PiSignOutLight, label: "Sign Out" }],
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
                        <div>
                            <h1 className='flex items-center text-[24px] text-[#002d58] font-semibold'><img src='https://i5.walmartimages.com/dfw/63fd9f59-b2d5/5c15110b-7c74-4282-8e87-43515087b5c9/v1/rewards-brand-yellow-logo.svg' className='w-[40px] mr-3 ' />$0 Walmart Cash <span className='underline text-[16px] ml-3 text-black'>How to get more</span></h1>
                        </div>
                    </div>
                    <div className='flex justify-between py-5 px-5 rounded bg-[#f2f8fd] shadowAcc mt-10 cursor-pointer w-[100%]'>
                        <div>
                            <h1 className='flex items-center text-[20px] font-medium'><IoReceiptOutline className='mr-5 text-[20px]' />Purchase history</h1>
                        </div>
                        <dv className='flex items-center'>
                            <FaChevronRight />
                        </dv>
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
                                    <h3 className='flex items-center text-[16px]'>Addresses, contact information and password</h3>
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
                          <h3 className='text-[14px]'>{user.email} <span className='underline cursor-pointer'>Needs verification</span></h3>
                      </div>
                      <div className='flex flex-col p-5 border-b w-[460px] border-gray'>
                          <h1 className='text-[18px] font-semibold '>Phone number</h1>
                          <span className='underline text-[14px] cursor-pointer'></span>
                      </div>
                      <div className='flex items-center justify-between w-full p-5 border-t border-gray'>
                          <div>
                              <h1 className='text-[18px] font-semibold'>Add an Address</h1>
                              <h3 className='text-[14px]'>Adding an address allows for quicker checkout and approximation of delivery times</h3>
                          </div>
                          <div>
                              <button
                                  className="bg-inherit text-[12px] font-bold p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[127px] h-[32px] hover:border-2 border-black "
                              >
                                  Add an address
                              </button>
                          </div>
                      </div>
                  </div>
                      </div>
                    </div>
                    <div className='mt-10 rounded shadowAcc'>
                        <div className='flex justify-between py-5 px-5 rounded bg-[#f2f8fd]  mt-10 cursor-pointer'>
                            <div>
                                <h1 className='flex items-center text-[20px] font-medium'><CiHeart className='mr-5 text-[28px]' />Lists (2)</h1>
                            </div>
                            <div className='flex items-center'>
                                <FaChevronRight />
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center px-10'>
                                <div>
                                    <img src='https://i5.walmartimages.com/seo/Lenovo-Legion-Pro-5-16IRX8-16-0-165-Hz-IPS-Intel-Core-i7-13th-Gen-13700HX-2-10GHz-GeForce-RTX-4060-Laptop-GPU-16-GB-DDR5-1-TB-PCIe-SSD-Windows-11-Hom_3d446919-be1c-474c-b3c5-7d92ce704505.51b2e610aa84142bd421437e8a1af438.jpeg' className='w-[48px]' />
                                </div>

                                <div className='flex flex-col p-5 '>
                                    <h1 className='text-[18px] font-semibold'>{user.name} List</h1>
                                    <span className='cursor-pointer'>3 items - Primary</span>
                                </div>

                            </div>
                            <div className='flex p-5'>
                                <Link to={"/wishlist"}>
                                    <button
                                        className="bg-inherit text-[12px] font-bold p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[80px] h-[32px] hover:border-2 border-black "
                                    >
                                        View list
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mt-10 md:space-x-5 space-y-14 md:space-y-0 md:grid-cols-2'>
                        <div className='shadowAcc w-[100%] rounded-md mr-5'>
                            <div className='flex py-5 px-5 rounded bg-[#f2f8fd] cursor-pointer'>
                                <div>
                                    <h1 className='flex items-center text-[20px] font-medium'><MdOutlineLocalConvenienceStore className='mr-5 text-[28px]' />Your selected Walmart store</h1>
                                </div>
                            </div>
                            <div className='flex justify-between p-5 w-[100%]'>
                                <div className='flex flex-col items-center justify-between'>
                                    <div>
                                        <h1 className='text-[14px] font-semibold'>Sacramento Supercenter</h1>
                                        <span className='text-[14px]'>8915 Gerber Road, CA 95829</span>
                                    </div>
                                    <button
                                        className="bg-inherit text-[12px] font-bold p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[150px] h-[32px] hover:border-2 border-black "
                                    >
                                        Update store
                                    </button>
                                </div>
                                <div>
                                    <img src='https://i5.walmartimages.com/dfw/63fd9f59-53e5/41e513cb-7ea3-4cc9-b56e-1f647a22fb75/v1/store-default-image.png' className='w-[160px]' />
                                </div>
                            </div>
                        </div>
                        <div className='shadowAcc'>
                            <div className=' w-[100%] rounded-md flex flex-col'>
                                <div className='flex py-5 px-5 rounded bg-[#f2f8fd] cursor-pointer'>
                                    <div>
                                        <h1 className='flex items-center text-[20px] font-medium'><GrServices className='mr-5 text-[28px]' />Discover popular services</h1>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center p-8 '>
                                    <div className='flex flex-col items-center mr-5'>
                                        <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-15ce/k2-_ad628e1a-53e3-4f61-9359-a2660f4792af.v1.png?odnHeight=96&odnWidth=96&odnBg=FFFFFF' />
                                        <span className='mt-5'>Pharmacy</span>
                                    </div>
                                    <div className='flex flex-col items-center justify-center mr-5'>
                                        <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-64d0/k2-_f0d316e7-25a9-4436-a60d-2efd62702aa3.v1.png?odnHeight=96&odnWidth=96&odnBg=FFFFFF' />
                                        <span className='mt-5'>Auto Care Center</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-7115/k2-_72d8477e-8b41-404f-b891-c6ee5b6e68ff.v1.png?odnHeight=96&odnWidth=96&odnBg=FFFFFF' />
                                        <span className='mt-5'>Custom cake</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Account

