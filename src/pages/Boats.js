import React from 'react'
import Layout from '../components/Layout'
import { data } from '../Data/data'

const Boats = () => {
  return (
    <Layout >
        <div className='flex flex-col items-center bg-red-50 gap-3'>
            <div>
            <h1 className='text-slate-600 text-5xl font-bold py-10'>EXPLORE OUR BOATS</h1>
            </div>
            <div className='flex gap-10 pb-12'>
                {
                    data.map((item)=>{
                        return(
                            <div className="max-w-xs rounded-md  shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col items-center justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{item.title}</h2>
			<p className="dark:text-gray-800">{item.discription}</p>
            <p>{item.price}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="34138e">Read more</button>
	</div>
</div>
                        )
                    })
                }
            </div>
        </div>
    </Layout>
  )
}

export default Boats