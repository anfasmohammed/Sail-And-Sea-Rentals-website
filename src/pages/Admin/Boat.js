import React from 'react'
import { data } from '../../Data/data'
import { Link } from 'react-router-dom'

const Boat = () => {
  return (
        <div className='flex flex-col gap-3 bg-red-100 '>
            <h1 className='flex justify-center text-slate-600 text-5xl font-bold py-10'>RENTAL DETAILS</h1>
        {
            data.map((item)=>{
                return (
                    <Link to={`/admin/boat/${item.id}`}>
                <div className='flex ml-3 mt-3 mb-3 gap-3 bg-orange-50 text-2xl'>
                    <div>
                        <img src={item.image} alt="" className='h-40 w-40' /></div>
                        <div className='flex justify-center gap-3 flex-col  '>
                            <h1>{item.title}</h1>
                            <h1>{item.rental}</h1>
                        </div>
                </div>
                </Link>

             ) }
        )}
    </div>
  )
}

export default Boat