import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <Layout>
    <div className='flex items-center flex-col gap-6 justify-center w-full h-[70vh] bg-no-repeat bg-center bg-cover bg-[url(https://images.pexels.com/photos/27774130/pexels-photo-27774130/free-photo-of-float.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/)] '> 
    <div className='flex flex-col w-full gap-3 justify-center items-center text-red-200 bg-black bg-opacity-20 pb-3'>
    <h1 className='text-2xl lg:text-6xl fond-bold'>HELLO RIDERS </h1>
    <h2 className='text-base lg:text-3xl font-semibold'>Welcome to the world of boating,feast your eyes up on the vast sea.</h2>
    </div>

    <button className='rounded-xl bg-red-200 hover:bg-red-400 text-slate-600 px-5 lg:px-7 py-2 text-2xl'><Link to={"/plans"}>Find your plan</Link></button>
    

    </div>
    </Layout>
  )
}

export default Home