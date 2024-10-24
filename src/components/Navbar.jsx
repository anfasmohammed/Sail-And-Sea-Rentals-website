import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SailingIcon from '@mui/icons-material/Sailing';

const Navbar = () => {
  const[extendNavbar,setExtentNavbar]=useState(false)
  return (
    <div>
        <nav className='flex justify-between items-center h-20 bg-gradient-to-r from-gray-700 to-lime-800 px-6 '>
            <div className='flex gap-1 items-center text-3xl ml-3 font-bold text-white hover:text-green-300'>
              <SailingIcon />
            <NavLink to={"/"}>Voyage Vessels</NavLink>
            </div>
            <ul onClick={()=>{setExtentNavbar(false)}} className={`lg:static flex flex-col lg:flex-row lg:justify-between text-2xl md:gap-7 font-semibold text-white ${extendNavbar?"left-0 top-20 bg bg-gradient-to-r from-gray-700 to-lime-800 w-[100%] py-3 border-t-2":"left-[-100%]"} absolute `}>
            <li className={`hover:text-green-300 ${extendNavbar?"p-1 border-b border-green-900 px-10 ":""}`}><NavLink to={"admin"} className={({isActive})=>isActive?"text-blue-600 ":""}>Admin</NavLink></li>
            <li className={`hover:text-green-300 ${extendNavbar?"p-1 border-b px-10 border-green-900 ":""}`}><NavLink to={"plans"} className={({isActive})=>isActive?"text-blue-600":""}>Plans</NavLink></li>
            <li className={`hover:text-green-300 ${extendNavbar?"p-1 border-b px-10 border-green-900 ":""}`}><NavLink to={"about"} className={({isActive})=>isActive?"text-blue-600":""}>About</NavLink></li>
            <li className={`hover:text-green-300 ${extendNavbar?"p-1 border-b px-10 border-green-900 ":""}`}><NavLink to={"boats"} className={({isActive})=>isActive?"text-blue-600":""}>Boats</NavLink></li>
            <li className={`hover:text-green-300 ${extendNavbar?'pt-1 px-10 ':""}`}><NavLink to={"explore"} className={({isActive})=>isActive?"text-blue-600 ":""}>Explore</NavLink></li>
                </ul>
                
                <div className='lg:hidden text-white' onClick={()=>{setExtentNavbar (open=>!open)}}>{extendNavbar?<CloseIcon/>:<MenuIcon/>} </div>
            
        </nav>
    </div>
  )
}

export default Navbar