import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center h-20 bg-gradient-to-r from-red-600 to-cyan-800 px-3'>
            <div className='text-3xl ml-3 font-bold text-white'>
            <NavLink to={"/"}>Voyage Vessels</NavLink>
            </div>
            <div className='flex justify-between items-center gap-9 mr-3 text-2xl font-semibold text-white'>
            <h1><NavLink to={"admin"} className={({isActive})=>isActive?"text-blue-600 ":""}>Admin</NavLink></h1>
                <h1><NavLink to={"about"} className={({isActive})=>isActive?"text-blue-600 ":""}>About</NavLink></h1>
                <h1><NavLink to={"boats"} className={({isActive})=>isActive?"text-blue-600 ":""}>Boats</NavLink></h1>
                <h1><NavLink to={"plans"} className={({isActive})=>isActive?"text-blue-600 ":""}>Plans</NavLink></h1>
                <h1><NavLink to={"explore"} className={({isActive})=>isActive?"text-blue-600 ":""}>Explore</NavLink></h1>
            </div>
        </nav>
    </div>
  )
}

export default Navbar