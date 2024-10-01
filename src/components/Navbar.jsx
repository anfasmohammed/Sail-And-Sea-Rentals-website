import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center h-20 bg-lime-600'>
            <div className='text-3xl ml-3 font-semibold'>
            <NavLink to={"/"}>Sail & Sea </NavLink>
            </div>
            <div className='flex justify-between items-center gap-3 mr-3 text-2xl font-bold '>
            <h1><NavLink to={"/admin"} className={({isActive})=>isActive?"text-blue-600 underline":""}>Admin</NavLink></h1>
                <h1><NavLink to={"/about"} className={({isActive})=>isActive?"text-blue-600 underline":""}>About</NavLink></h1>
                <h1><NavLink to={"/boats"} className={({isActive})=>isActive?"text-blue-600 underline":""}>Boats</NavLink></h1>
                <h1><NavLink to={"/plans"} className={({isActive})=>isActive?"text-blue-600 underline":""}>Plans</NavLink></h1>
                <h1><NavLink to={"/explore"} className={({isActive})=>isActive?"text-blue-600 underline":""}>Explore</NavLink></h1>
            </div>
        </nav>
    </div>
  )
}

export default Navbar