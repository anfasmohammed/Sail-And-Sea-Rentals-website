import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../../Data/data'

const AdminBoatDetails = () => {
  const {id}=useParams()
  const boat=data.find((item)=>Number(item.id)=== Number(id))
  return (
    <div className='flex flex-col bg-orange-50 px-6 py-3'>
      <div className='flex gap-6  text-2xl'>
                    <div >
                        <img src={boat.image} alt="" className='h-96 w-96' /></div>
                        <div className='flex justify-center gap-3 flex-col  '>
                            <h1>{boat.title}</h1>
                            <h1>{boat.rental}</h1>
                        </div>
                </div>
                <div >
                  <h1 className='text-2xl font-bold'>{boat.title}</h1>
                  <h1 className='mt-1'>{boat.price}</h1>
                  <h1>{boat.discription}</h1>
                  <h1 className='w-[600px] py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis modi id totam nesciunt? Obcaecati quibusdam iusto voluptates? Perferendis possimus iste obcaecati, sapiente libero quo ratione rem molestiae dolorum fugit?</h1>
                  <button className=' mt-3 rounded-xl bg-red-200 hover:bg-red-400 text-slate-600 px-5 lg:px-5 py-2 text-2xl'><Link to=".." relative='path'>Back to all Boats</Link></button>
                </div>
    </div>
  )
}

export default AdminBoatDetails