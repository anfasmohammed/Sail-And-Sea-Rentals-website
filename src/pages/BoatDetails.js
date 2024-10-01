import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../Data/data'

const BoatDetails = () => {
  const {id}=useParams()
  const boat=data.find((item)=>Number(item.id)===Number(id))
  
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={boat.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-red-200">{boat.title}</a>
				<p className="text-xs dark:text-gray-600">Rent:
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{boat.price}</a>
				</p>
			</div>
			<div className="dark:text-gray-800">
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla necessitatibus temporibus cumque consequatur vel suscipit officia, qui molestiae ut eius perferendis ex optio aperiam atque non inventore! Architecto, excepturi.</p>
			</div>
		</div>
    <div className='flex justify-between'><button className='rounded-xl bg-red-200 hover:bg-red-400 text-slate-600 px-5 lg:px-7 py-2 text-2xl'>Rent now </button>
	<button className='rounded-xl bg-red-200 hover:bg-red-400 text-slate-600 px-5 lg:px-7 py-2 text-2xl'><Link to=".." relative="path">Back to all</Link> </button>
	</div>
	</div>
</div>
    </div>
  )
}

export default BoatDetails