"use client"
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { applyButtonClass } from '../../lib/Classes';
const Navbar = () => {
    const [loggedIN, setloggedIN] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        let storageData = JSON.parse(localStorage.getItem("loggedInUser"))
        if (storageData !== null) {
            setloggedIN(true)
        }

    }, [navigate])
    const signOut = () => {
        localStorage.removeItem("loggedInUser")
        navigate("/login")
    }
    const signIN = () => {
        navigate("/login")
    }
    console.log(loggedIN);
    return (
        <>
            <div className='flex items-center justify-between bg-transparent py-3 px-8 fixed top-0 w-full z-50 h-[80px]shadow-lg'>
                <div className='md:w-[10rem] w-[40px] flex gap-4 justify-center items-center'>
                    <img src='images/logo1.jpg' className='w-[50px] h-[50px] object-cover rounded-[16px]' alt='logo' />
                    <p className='font-bold text-white'>Movie Box</p>
                </div>
                {/* <div className='relative group'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className='absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4'>
                        <circle cx="8.03713" cy="8.11061" r="6.76271" stroke="#004B95" strokeWidth="2" />
                        <path d="M14.7998 14.8735L20.2744 20.0261" stroke="#004B95" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input type='text' className='bg-transparent lg:w-[525px] sm:w-[325px] border outline-white rounded-lg text-sm text-black px-4 py-2  ' placeholder='What do you want to watch?  ' />
                </div> */}
                <div className='flex items-center gap-8 relative'>
                    <div className='flex items-center gap-1 relative cursor-pointer'>
                        <div className='flex items-center gap-4 '  >

                            {loggedIN === true ? <p className={`${applyButtonClass} bg-red-600 rounded-[10px] w-[200px] `} onClick={() => signOut()}>Logout</p> : <p className={`${applyButtonClass} bg-blue-800 rounded-[10px] w-[200px] `} onClick={() => signIN()}>Sign In</p>}
                            <FaShoppingCart onClick={() => navigate("/cart")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar