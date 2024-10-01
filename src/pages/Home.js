import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <div className='flex items-center flex-col gap-6 justify-center w-full h-[90vh] bg-no-repeat bg-center bg-cover bg-[url(https://images.pexels.com/photos/13856740/pexels-photo-13856740.jpeg)] '> 
    <div className='flex flex-col w-full gap-3 justify-center items-center text-red-200 bg-black bg-opacity-30 pb-3'>
    <h1 className='text-2xl lg:text-6xl fond-bold'>Your Journey Awaits on the Water!</h1>
    <h2 className='text-base lg:text-3xl font-semibold'>Explore the water like never before—rent a boat and make waves.</h2>
    </div>

    <button className='rounded-xl bg-red-200 hover:bg-red-400 text-slate-600 px-5 lg:px-7 py-2 text-2xl'><Link to={"/plans"}>Find your plan</Link></button>
    

    </div>
    </div>
  )
}

export default Home