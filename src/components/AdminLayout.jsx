import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
      <div className=" flex min-h-96 ">
          <nav className='flex flex-col justify-start text-2xl h-auto w-36  bg-gray-700 p-2 font-semibold text-white'>
              <h1><NavLink to={"."} className={({isActive})=>isActive?" text-orange-600":""}>Dashboard</NavLink></h1>
              <h1><NavLink to={"income"} className={({isActive})=>isActive?"text-white underline":""}>Income</NavLink></h1>
              <h1><NavLink to={"reviews"} className={({isActive})=>isActive?"text-white underline":""}>Reviews</NavLink></h1>
              <h1><NavLink to={"boat"} className={({isActive})=>isActive?"text-white underline":""}>Boats</NavLink></h1>
          </nav>
          <Outlet/>
      </div>
    )
  }

export default AdminLayout