import React from 'react'
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
const navigate=useNavigate()

//For handling logout by clearing local storage
const handleLogout=()=>{
localStorage.clear();
navigate("/login")
toast.success("Logged Out Successfully")
}

    return (
        <div>
        <nav className="bg-[#BF3131] border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./logo.png" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold text-[#F3EDC8] whitespace-nowrap dark:text-white">PDF-Manager</span>
                </a>
                <MdOutlineLogout size={40} title='Log Out' className="text-[#F3EDC8] cursor-pointer" 
                onClick={()=>{handleLogout()}}
                />
            </div>
    
            <div className="flex justify-start items-center bg-white w-[100px]">
                
            </div>
        </nav>
    </div>
    
    )
}

export default Navbar