import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center h-20 bg-red-200'>
            <div className='text-3xl ml-3 font-semibold'>
            <Link to={"/"}>Sail & Sea Rentals </Link>
            </div>
            <div className='flex justify-between items-center gap-3 mr-3'>
                <h1><Link to={"/about"}>About</Link></h1>
                <h1><Link to={"/boats"}>Boats</Link></h1>
                <h1><Link to={"/plans"}>Plans</Link></h1>
                <h1><Link to={"/explore"}>Explore</Link></h1>
            </div>
        </nav>
    </div>
  )
}

export default Navbar