import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const[extendNavbar,setExtentNavbar]=useState(false)
  return (
    <div>
        <nav className='flex justify-between items-center h-20 bg-gradient-to-r from-red-600 to-cyan-800 px-6'>
            <div className='text-3xl ml-3 font-bold text-white'>
            <NavLink to={"/"}>Voyage Vessels</NavLink>
            </div>
            <div className={`lg:static flex flex-col lg:flex-row lg:justify-between items-center gap-9 mr-3 text-2xl font-semibold text-white ${extendNavbar?"left-0 top-20 bg bg-gradient-to-br from-red-600 to-inherit w-[30%] h-full py-3":"left-[-100px]"} absolute `}>
            <h1><NavLink to={"admin"} className={({isActive})=>isActive?"text-blue-600 ":""}>Admin</NavLink></h1>
                <h1><NavLink to={"about"} className={({isActive})=>isActive?"text-blue-600 ":""}>About</NavLink></h1>
                <h1><NavLink to={"boats"} className={({isActive})=>isActive?"text-blue-600 ":""}>Boats</NavLink></h1>
                <h1><NavLink to={"plans"} className={({isActive})=>isActive?"text-blue-600 ":""}>Plans</NavLink></h1>
                <h1><NavLink to={"explore"} className={({isActive})=>isActive?"text-blue-600 ":""}>Explore</NavLink></h1>
                </div>
                
                <div className='lg:hidden text-white' onClick={()=>{setExtentNavbar (open=>!open)}}>{extendNavbar?<CloseIcon/>:<MenuIcon/>} </div>
            
        </nav>
    </div>
  )
}

export default Navbar