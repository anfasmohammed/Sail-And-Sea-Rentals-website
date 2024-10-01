import React from 'react'


const About = () => {
  return (
    <div>
      <div className='flex flex-col items-center h-[70vh] bg-red-50'>
        <div>
        <img className='w-fix h-[70vh]' src="https://images.pexels.com/photos/13856740/pexels-photo-13856740.jpeg" alt="" srcset="" />
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
      
      </div>
  )
}

export default About