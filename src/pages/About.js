import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center h-[70vh] bg-red-50'>
        <div>
        <img className='w-fix' src="https://images.pexels.com/photos/27864458/pexels-photo-27864458/free-photo-of-a-group-of-boats-are-docked-in-a-harbor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" srcset="" />
        </div>
        <div className='flex flex-col items-center'>
          <h1>RENT YOUR DREAM BOAT</h1>
          <h1>B'Rental provides you with a vast options of boats.Pick your fevorite with cheap rental </h1>
        </div>
        <div className='bg-red-200 flex flex-col items-center h-32 w-32'>
          <h1>Explore you rental planns</h1>
          <button className='bg-red-700'>Find your plan</button>
        </div>
      </div>
      
      </Layout>
  )
}

export default About