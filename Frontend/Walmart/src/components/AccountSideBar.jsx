import React from 'react';
import { Link } from '@mui/material';
import { Breadcrumbs } from '@mui/material';

const AccountSideBar = ({ sections }) => {
    return (
        <section className='container mx-auto py-5 px-5  lg:pl-[22rem]'>
            <div role="presentation" className='lg:flex hidden'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        My account
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                        Home
                    </Link>
                </Breadcrumbs>
            </div>
            <div className='flex mt-5 flex-col'>
                <div className='sideBarAccount border-r-2 w-full md:w-[335px] hidden lg:block'>
                    <div className='pb-2'>
                        <h1 className='font-bold text-[24px]'>Hi, Abdelrady</h1>
                        <span className='text-[#2e2f32] text-[12px]'>Thanks for being a Walmart customer</span>
                    </div>
                    <hr />
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h1 className='font-semibold text-[18px] mt-5 mb-5'>{section.title}</h1>
                            {section.items && section.items.length > 0 && (
                                <ul>
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className='text-[14px] flex mb-5 text-[#46474a] hover:underline cursor-pointer'>
                                            {item.icon && <item.icon style={{ fontSize: '18px', marginRight: '5px' }} />}
                                            <a>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AccountSideBar
