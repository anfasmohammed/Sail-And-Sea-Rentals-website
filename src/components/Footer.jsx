import React from 'react'

const Footer = () => {
  return (
    <footer className="px-2 py-2 bg-secondary text-white">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 ">
				<li className='cursor-pointer hover:text-green-300'>
					Terms of Use
				</li>
				<li className='cursor-pointer hover:text-green-300'>
					Privacy
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li className='cursor-pointer hover:text-green-300'>
				Instagram
			</li>
			<li className='cursor-pointer hover:text-green-300'>
				Facebook
			</li>
			<li className='cursor-pointer hover:text-green-300'>
				Twitter
			</li>
		</ul>
	</div>
</footer>
  )
}

export default Footer