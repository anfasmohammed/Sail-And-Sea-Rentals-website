import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <div className='flex items-center flex-col gap-6 justify-center w-full h-[90vh] bg-no-repeat bg-center bg-cover bg-[url(https://images.pexels.com/photos/13856740/pexels-photo-13856740.jpeg)] '> 
    <div className='flex flex-col w-full gap-3 justify-center items-center text-red-200 '>
    <h1 className='text-4xl px-2 text-center lg:text-6xl font-bold text-gray-950'>Your Journey Awaits on the Water!</h1>
    <h2 className='text-2xl px-2 text-center lg:text-4xl font-bold text-stone-100'>Explore the water like never before, rent a boat and make waves.</h2>
    </div>

    <button className='rounded-xl bg-gradient-to-r from-gray-700 to-lime-800 text-gray-950 hover:text-stone-100 font-mono px-5 lg:px-7 py-2 text-2xl font-semibold'><Link to={"/plans"}>Find your plan...</Link></button>
    

    </div>
    </div>
  )
}

export default Home