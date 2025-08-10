import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const AdminLayout = () => {
  const [navbar,setnavbar]=useState(false)
  
    return (
      <div className=" flex min-h-96 ">
        <nav className={`lg:static flex flex-col justify-start text-2xl h-auto w-36  bg-gray-700 p-2 font-semibold text-white border-y border-emerald-400 relative duration-1000 ${navbar?"":"right-[141px]"}`}>
        <h1 className="py-2 border-b border-green-900 hover:text-green-300"><NavLink to={"."} className={({isActive})=>isActive?" text-emerald-400":""}>Dashboard</NavLink></h1>
        <h1 className="py-2 border-b border-green-900 hover:text-green-300"><NavLink to={"income"} className={({isActive})=>isActive?"text-teal-200":""}>Income</NavLink></h1>
        <h1 className="py-2 border-b border-green-900 hover:text-green-300"><NavLink to={"reviews"} className={({isActive})=>isActive?"text-teal-200":""}>Reviews</NavLink></h1>
        <h1 className="py-2 hover:text-green-300"><NavLink to={"boat"} className={({isActive})=>isActive?"text-teal-200":""}>Boats</NavLink></h1>
        <span onClick={()=>setnavbar(open=>!open)} className="lg:hidden bg-lime-800 p-1 text-white flex items-center rounded-full absolute left-[89%] top-[30%]"><CloseIcon/></span>
    </nav>
        
        
          
          <Outlet/>
      </div>
    )
  }

export default AdminLayout