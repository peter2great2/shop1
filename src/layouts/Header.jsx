import React from 'react'
import laptop from'../assets/images/laptop.jpg'
import './Header.css'

const Header = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-12">
	<div className="container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-8 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-2  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://plus.unsplash.com/premium_photo-1664201889922-66bc3c778c1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-shadow-drop-top text-5xl  font-bold text-center leading-none sm:text-6xl"><span className='text-shadow-drop-top'>Web 3</span> Shopping Experience <br />
			</h1>
			<p className="mt-6 mb-3 text-lg text-center sm:mb-12">Shop the difference, Love the experience.
				<br  className="hidden md:inline lg:hidden" /> From essentials to luxury, we have it all
			</p>
			<div className="flex flex-col space-y-2 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-center">
				<a rel="noopener noreferrer" href="#" className="px-8 w-full py-3 text-lg font-semibold rounded bg-[#c2807a] hover:bg-brown-700 text-center dark:text-gray-50">Get started</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 w-full text-lg font-semibold border rounded text-center dark:border-gray-800">Learn more</a>
			</div>
		</div>
	</div>
</section>
  )
}

export default Header