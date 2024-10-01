import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
      <div className="min-h-96">
          <nav className='flex justify-between text-2xl items-center h-20 bg-amber-100'>
              <div className='flex justify-between items-center gap-3 mr-3 px-3 font-bold'>
              <h1><NavLink to={"/admin"} className={({isActive})=>isActive?" text-orange-600":""}>Dashboard</NavLink></h1>
                  <h1><NavLink to={"/admin/income"} className={({isActive})=>isActive?"text-white underline":""}>Income</NavLink></h1>
                  <h1><NavLink to={"/admin/reviews"} className={({isActive})=>isActive?"text-white underline":""}>Reviews</NavLink></h1>
                  <h1><NavLink to={"/admin/boat"} className={({isActive})=>isActive?"text-white underline":""}>Boats</NavLink></h1>
                  
              </div>
          </nav>
          <Outlet/>
      </div>
    )
  }

export default AdminLayout