import React, { useState } from 'react'
import { data } from '../Data/data'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'


const Boats = () => {
    const [searchTerm,setSearchTerm]=useState("")
  return (
    <div >
        <div className='flex flex-col items-center gap-3 h-full'>
       <div className='mt-2'> <SearchBar 
        setSearchTerm={setSearchTerm} 
        /></div>
            <div>
            <h1 className='text-slate-600 text-5xl font-bold py-10'>EXPLORE OUR BOATS</h1>
            </div>
            <div className='flex gap-10 pb-12 mx-auto'>
                {
                    data && data.filter((item)=>{
                        return searchTerm.toLowerCase()===""?item:item.title.toLowerCase().includes(searchTerm)
                    })
                    .map((item)=>{
                        return(
                            <div className="max-w-xs w-72 h-[500px] rounded-md  shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <Link to={`/boats/${item.id}`}>
                                <img src={item.image} alt="" className="object-cover object-center w-full rounded-md mx-2 h-72 dark:bg-gray-500" />
	<div className="flex flex-col items-center justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{item.title}</h2>
			<p className="dark:text-gray-800">{item.discription}</p>
            <p>{item.price}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="34138e">Read more</button>
	</div>
                                </Link>
	
</div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Boats