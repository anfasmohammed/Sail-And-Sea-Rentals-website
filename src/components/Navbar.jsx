import { useState } from "react"
import { Close, Label, Menu, Sailing } from "@mui/icons-material"
import { NavLink } from "react-router-dom"



const Navbar = () => {
  const[extendNavbar,setExtentNavbar]=useState(false)

  const handleToggle =()=>setExtentNavbar(prev => !prev);
  const handleClose =()=>setExtentNavbar(false)

  return (
       <>
       {/* Desktop Navbar */}
       <nav className="hidden md:flex">
                <div className=" flex w-full  justify-between items-center mx-auto z-50 py-3 bg-secondary px-2">
               <div className='flex text-xl gap-1 items-center md:text-2xl font-mono ml-3 font-bold text-white '>
                  <Sailing />
                <NavLink className={"hover:scale-110 translate-x-1 transform transition duration-300"} to={"/"}>Voyage Vessels</NavLink>
                </div>
                <ul className='hidden md:flex font-semibold text-white  text-'>
                  <li className='px-2'>Plans</li>
                  <li className='px-2'>About</li>
                  <li className='px-2'>Admin</li>
                  <li className='px-2'><NavLink to={"/Boats"}>Boats</NavLink></li>
                  <li className='px-2'>Explore</li>
                </ul>
               </div>    
              
       </nav>

       {/* Mobile Navbar */}
       <div className="md:hidden bg-secondary">
        <button onClick={handleToggle}>
          {extendNavbar?<Close/>:<Menu/>}
        </button>
        {extendNavbar && (
          <div className="mobile-menu bg-secondary px-3 py-5">
            <div className="flex justify-between">
              <Sailing/>
              <Close onClick={handleClose}/>
            </div>
            <ul className="flex flex-col gap-2 mt-2">
              {['About','Plans','Admin','Boats','Explore'].map(label=>(
                <li kay={label}
                    className="btn btn-circle btn-outline"
                    onClick={handleClose}>
                      <NavLink to={`/${label.toLowerCase()}`}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
       </div>
      </>
  )
}

export default Navbar


 
              {/* <div className=' block md:hidden h-full px-3 py-5 w-full bg-secondary duration-300'>
                  <div className='flex text-white justify-between items-center px-5 pb-2 mx-auto border-b-2'>
                    < Sailing/>
                    <Close className='font-bold hover:scale-125 duration-100 ' onClick={()=>{setExtentNavbar(false)}}/>
                  </div>
                  <div >
                  <ul className='flex flex-col gap-2 mt-2  '>
                    <li className='btn btn-circle btn-outline px-5 bg-secondary border-none w-full text-2xl font-bold text-base-100 justify-start'>About</li>
                    <li className='btn btn-circle btn-outline px-5 bg-secondary border-none w-full text-2xl font-bold text-base-100 justify-start'>plans</li>
                    <li className='btn btn-circle btn-outline px-5 bg-secondary border-none w-full text-2xl font-bold text-base-100 justify-start'>Admin</li>
                    <li className='btn btn-circle btn-outline px-5 bg-secondary border-none w-full text-2xl font-bold text-base-100 justify-start'>Boats</li>
                    <li className='btn btn-circle btn-outline px-5 bg-secondary border-none w-full text-2xl font-bold text-base-100 justify-start'>Explore</li>
                  </ul>
                  </div>
                  </div> */}
                  
                  
                
              
              